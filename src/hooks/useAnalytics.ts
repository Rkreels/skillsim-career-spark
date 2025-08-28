import { useState, useEffect, useCallback } from 'react';

export interface UserInteraction {
  toolId: string;
  toolName: string;
  department: string;
  timestamp: number;
  duration?: number;
  actionsCount?: number;
  completionRate?: number;
}

export interface ToolProgress {
  toolId: string;
  toolName: string;
  department: string;
  totalInteractions: number;
  totalDuration: number;
  averageSession: number;
  lastAccessed: number;
  skillLevel: number; // 0-100
  improvementScore: number;
  tasksCompleted: number;
  streak: number;
}

export interface UserAnalytics {
  totalInteractions: number;
  totalDuration: number;
  departmentProgress: Record<string, {
    interactions: number;
    skillLevel: number;
    improvementScore: number;
    lastAccessed: number;
  }>;
  toolsProgress: Record<string, ToolProgress>;
  overallSkillLevel: number;
  improvementTrend: number; // -100 to 100 (percentage change)
  weeklyProgress: Array<{
    date: string;
    interactions: number;
    duration: number;
    skillGain: number;
  }>;
}

const STORAGE_KEY = 'skillsim-analytics';

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<UserAnalytics>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    
    return {
      totalInteractions: 0,
      totalDuration: 0,
      departmentProgress: {},
      toolsProgress: {},
      overallSkillLevel: 0,
      improvementTrend: 0,
      weeklyProgress: []
    };
  });

  // Save analytics to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(analytics));
  }, [analytics]);

  // Track tool interaction
  const trackToolInteraction = useCallback((interaction: UserInteraction) => {
    setAnalytics(prev => {
      const newAnalytics = { ...prev };
      
      // Update total stats
      newAnalytics.totalInteractions += 1;
      newAnalytics.totalDuration += interaction.duration || 0;

      // Update department progress
      if (!newAnalytics.departmentProgress[interaction.department]) {
        newAnalytics.departmentProgress[interaction.department] = {
          interactions: 0,
          skillLevel: 0,
          improvementScore: 0,
          lastAccessed: 0
        };
      }
      
      const deptProgress = newAnalytics.departmentProgress[interaction.department];
      deptProgress.interactions += 1;
      deptProgress.lastAccessed = interaction.timestamp;
      
      // Calculate skill improvement based on frequency and recency
      const recencyBonus = Math.max(0, 100 - (Date.now() - interaction.timestamp) / (1000 * 60 * 60 * 24)); // Days since last use
      const frequencyScore = Math.min(100, deptProgress.interactions * 2);
      deptProgress.skillLevel = Math.min(100, (frequencyScore + recencyBonus) / 2);
      
      // Update tool progress
      if (!newAnalytics.toolsProgress[interaction.toolId]) {
        newAnalytics.toolsProgress[interaction.toolId] = {
          toolId: interaction.toolId,
          toolName: interaction.toolName,
          department: interaction.department,
          totalInteractions: 0,
          totalDuration: 0,
          averageSession: 0,
          lastAccessed: 0,
          skillLevel: 0,
          improvementScore: 0,
          tasksCompleted: 0,
          streak: 0
        };
      }

      const toolProgress = newAnalytics.toolsProgress[interaction.toolId];
      toolProgress.totalInteractions += 1;
      toolProgress.totalDuration += interaction.duration || 0;
      toolProgress.averageSession = toolProgress.totalDuration / toolProgress.totalInteractions;
      toolProgress.lastAccessed = interaction.timestamp;
      toolProgress.tasksCompleted += interaction.actionsCount || 1;

      // Calculate skill level based on usage patterns
      const consistencyScore = calculateConsistencyScore(toolProgress);
      const proficiencyScore = Math.min(100, toolProgress.totalInteractions * 3);
      toolProgress.skillLevel = Math.min(100, (consistencyScore + proficiencyScore) / 2);

      // Calculate improvement score (comparing with previous sessions)
      toolProgress.improvementScore = calculateImprovementScore(toolProgress);

      // Update streak
      toolProgress.streak = calculateStreak(interaction.timestamp, toolProgress.lastAccessed);

      // Update overall analytics
      updateOverallMetrics(newAnalytics);
      updateWeeklyProgress(newAnalytics, interaction);

      return newAnalytics;
    });
  }, []);

  // Calculate tool mastery level
  const getToolMastery = useCallback((toolId: string): 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' => {
    const progress = analytics.toolsProgress[toolId];
    if (!progress) return 'Beginner';
    
    if (progress.skillLevel >= 80) return 'Expert';
    if (progress.skillLevel >= 60) return 'Advanced';
    if (progress.skillLevel >= 30) return 'Intermediate';
    return 'Beginner';
  }, [analytics.toolsProgress]);

  // Get department ranking
  const getDepartmentRanking = useCallback(() => {
    return Object.entries(analytics.departmentProgress)
      .map(([dept, progress]) => ({
        department: dept,
        ...progress
      }))
      .sort((a, b) => b.skillLevel - a.skillLevel);
  }, [analytics.departmentProgress]);

  // Get improvement suggestions
  const getImprovementSuggestions = useCallback(() => {
    const suggestions: string[] = [];
    
    // Find departments with low activity
    Object.entries(analytics.departmentProgress).forEach(([dept, progress]) => {
      if (progress.interactions < 5) {
        suggestions.push(`Explore more tools in ${dept} department to boost your skills`);
      }
      if (progress.skillLevel < 30) {
        suggestions.push(`Focus on ${dept} fundamentals - practice daily for better results`);
      }
    });

    // Find tools with declining usage
    Object.values(analytics.toolsProgress).forEach(tool => {
      const daysSinceLastUse = (Date.now() - tool.lastAccessed) / (1000 * 60 * 60 * 24);
      if (daysSinceLastUse > 7 && tool.skillLevel > 40) {
        suggestions.push(`Return to ${tool.toolName} to maintain your ${getToolMastery(tool.toolId)} level`);
      }
    });

    return suggestions.slice(0, 3); // Return top 3 suggestions
  }, [analytics, getToolMastery]);

  return {
    analytics,
    trackToolInteraction,
    getToolMastery,
    getDepartmentRanking,
    getImprovementSuggestions,
    setAnalytics
  };
};

// Helper functions
function calculateConsistencyScore(toolProgress: ToolProgress): number {
  const daysSinceFirst = (Date.now() - (toolProgress.lastAccessed - toolProgress.totalDuration)) / (1000 * 60 * 60 * 24);
  const averageUsagePerDay = toolProgress.totalInteractions / Math.max(1, daysSinceFirst);
  return Math.min(100, averageUsagePerDay * 20);
}

function calculateImprovementScore(toolProgress: ToolProgress): number {
  // Simple improvement score based on recent activity
  const recentActivity = Math.min(100, toolProgress.totalInteractions * 5);
  const recencyBonus = Math.max(0, 50 - (Date.now() - toolProgress.lastAccessed) / (1000 * 60 * 60));
  return Math.min(100, (recentActivity + recencyBonus) / 2);
}

function calculateStreak(currentTimestamp: number, lastAccessed: number): number {
  const daysDiff = Math.floor((currentTimestamp - lastAccessed) / (1000 * 60 * 60 * 24));
  return daysDiff <= 1 ? 1 : 0; // Simple streak calculation - can be enhanced
}

function updateOverallMetrics(analytics: UserAnalytics): void {
  const departments = Object.values(analytics.departmentProgress);
  const avgSkillLevel = departments.length > 0 
    ? departments.reduce((sum, dept) => sum + dept.skillLevel, 0) / departments.length 
    : 0;
  
  analytics.overallSkillLevel = avgSkillLevel;
  
  // Calculate improvement trend (simplified)
  const recentInteractions = analytics.totalInteractions;
  analytics.improvementTrend = Math.min(100, Math.max(-100, (recentInteractions - 10) * 5));
}

function updateWeeklyProgress(analytics: UserAnalytics, interaction: UserInteraction): void {
  const today = new Date().toISOString().split('T')[0];
  const existingEntry = analytics.weeklyProgress.find(entry => entry.date === today);
  
  if (existingEntry) {
    existingEntry.interactions += 1;
    existingEntry.duration += interaction.duration || 0;
    existingEntry.skillGain += 1;
  } else {
    analytics.weeklyProgress.push({
      date: today,
      interactions: 1,
      duration: interaction.duration || 0,
      skillGain: 1
    });
    
    // Keep only last 30 days
    analytics.weeklyProgress = analytics.weeklyProgress.slice(-30);
  }
}
