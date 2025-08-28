import { useState, useEffect, useCallback } from 'react';
import { useAnalytics, UserAnalytics } from './useAnalytics';
import { UserRole } from '@/contexts/UserContext';

export interface Suggestion {
  id: string;
  type: 'skill_gap' | 'consistency' | 'cross_department' | 'advanced' | 'streak';
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  department: string;
  toolId?: string;
  actionUrl?: string;
}

export const useIntelligentSuggestions = (userRole: UserRole) => {
  const { analytics } = useAnalytics();
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const generateSuggestions = useCallback(() => {
    const newSuggestions: Suggestion[] = [];

    // 1. Skill Gap Analysis
    const departments = ['hr', 'accounting', 'sales', 'marketing', 'operations', 'management'];
    departments.forEach(dept => {
      const deptProgress = analytics.departmentProgress[dept];
      if (!deptProgress || deptProgress.skillLevel < 30) {
        newSuggestions.push({
          id: `skill_gap_${dept}`,
          type: 'skill_gap',
          title: `Improve ${dept.charAt(0).toUpperCase() + dept.slice(1)} Skills`,
          description: `Your ${dept} skills are below average. Focus on basic tools to build foundation.`,
          priority: dept === userRole ? 'high' : 'medium',
          department: dept,
          actionUrl: `/dashboard#${dept}`
        });
      }
    });

    // 2. Consistency Issues
    Object.values(analytics.toolsProgress).forEach(tool => {
      const daysSinceLastUse = (Date.now() - tool.lastAccessed) / (1000 * 60 * 60 * 24);
      if (daysSinceLastUse > 7 && tool.skillLevel > 50) {
        newSuggestions.push({
          id: `consistency_${tool.toolId}`,
          type: 'consistency',
          title: `Resume ${tool.toolName}`,
          description: `You haven't used ${tool.toolName} for ${Math.floor(daysSinceLastUse)} days. Regular practice maintains expertise.`,
          priority: 'medium',
          department: tool.department,
          toolId: tool.toolId
        });
      }
    });

    // 3. Cross-Department Opportunities
    const userDeptProgress = analytics.departmentProgress[userRole];
    if (userDeptProgress && userDeptProgress.skillLevel > 70) {
      const otherDepts = departments.filter(d => d !== userRole);
      otherDepts.forEach(dept => {
        const deptProgress = analytics.departmentProgress[dept];
        if (!deptProgress || deptProgress.skillLevel < 40) {
          newSuggestions.push({
            id: `cross_dept_${dept}`,
            type: 'cross_department',
            title: `Expand to ${dept.charAt(0).toUpperCase() + dept.slice(1)}`,
            description: `Strong in ${userRole}! Try ${dept} tools to become a multi-skilled professional.`,
            priority: 'low',
            department: dept,
            actionUrl: `/dashboard#${dept}`
          });
        }
      });
    }

    // 4. Advanced Learning Opportunities
    Object.entries(analytics.toolsProgress).forEach(([toolId, tool]) => {
      if (tool.skillLevel > 80 && tool.totalInteractions > 10) {
        newSuggestions.push({
          id: `advanced_${toolId}`,
          type: 'advanced',
          title: `Master ${tool.toolName} Advanced Features`,
          description: `You're proficient in ${tool.toolName}! Explore advanced features to become an expert.`,
          priority: 'low',
          department: tool.department,
          toolId: toolId
        });
      }
    });

    // 5. Streak Building
    const lowStreakTools = Object.values(analytics.toolsProgress).filter(
      tool => tool.streak === 0 && tool.skillLevel > 30
    );
    if (lowStreakTools.length > 0) {
      const randomTool = lowStreakTools[Math.floor(Math.random() * lowStreakTools.length)];
      newSuggestions.push({
        id: `streak_${randomTool.toolId}`,
        type: 'streak',
        title: `Build Streak with ${randomTool.toolName}`,
        description: `Start a daily practice streak with ${randomTool.toolName} to accelerate your learning.`,
        priority: 'medium',
        department: randomTool.department,
        toolId: randomTool.toolId
      });
    }

    // Sort by priority and limit to top 5
    const priorityOrder = { high: 3, medium: 2, low: 1 };
    const sortedSuggestions = newSuggestions
      .sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority])
      .slice(0, 5);

    setSuggestions(sortedSuggestions);
  }, [analytics, userRole]);

  useEffect(() => {
    generateSuggestions();
  }, [generateSuggestions]);

  const dismissSuggestion = useCallback((suggestionId: string) => {
    setSuggestions(prev => prev.filter(s => s.id !== suggestionId));
  }, []);

  return {
    suggestions,
    dismissSuggestion,
    refreshSuggestions: generateSuggestions
  };
};