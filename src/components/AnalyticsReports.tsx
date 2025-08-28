import React, { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Download, 
  TrendingUp, 
  TrendingDown, 
  Calendar,
  Clock,
  Award,
  Target,
  BarChart3
} from 'lucide-react';

const AnalyticsReports: React.FC = () => {
  const { analytics, getToolMastery, getDepartmentRanking } = useAnalytics();
  const { t } = useLanguage();

  // Calculate performance metrics
  const performanceMetrics = useMemo(() => {
    const totalTools = Object.keys(analytics.toolsProgress).length;
    const expertTools = Object.values(analytics.toolsProgress).filter(tool => 
      getToolMastery(tool.toolId) === 'Expert'
    ).length;
    const advancedTools = Object.values(analytics.toolsProgress).filter(tool => 
      getToolMastery(tool.toolId) === 'Advanced'
    ).length;
    
    const averageSkillLevel = totalTools > 0 
      ? Object.values(analytics.toolsProgress).reduce((sum, tool) => sum + tool.skillLevel, 0) / totalTools
      : 0;

    const recentActivity = analytics.weeklyProgress.slice(-7).reduce((sum, day) => sum + day.interactions, 0);
    const previousWeekActivity = analytics.weeklyProgress.slice(-14, -7).reduce((sum, day) => sum + day.interactions, 0);
    const activityTrend = previousWeekActivity > 0 
      ? ((recentActivity - previousWeekActivity) / previousWeekActivity) * 100 
      : 0;

    return {
      totalTools,
      expertTools,
      advancedTools,
      averageSkillLevel,
      activityTrend,
      recentActivity,
      productivity: Math.min(100, (recentActivity / 7) * 10) // Normalize to percentage
    };
  }, [analytics, getToolMastery]);

  // Learning velocity calculation
  const learningVelocity = useMemo(() => {
    const recentWeeks = analytics.weeklyProgress.slice(-4);
    if (recentWeeks.length < 2) return 0;
    
    const skillGains = recentWeeks.map(week => week.skillGain);
    const averageGain = skillGains.reduce((sum, gain) => sum + gain, 0) / skillGains.length;
    
    return Math.round(averageGain * 100) / 100;
  }, [analytics.weeklyProgress]);

  // Generate improvement recommendations
  const recommendations = useMemo(() => {
    const recs: Array<{ type: 'warning' | 'success' | 'info', message: string }> = [];
    
    if (performanceMetrics.activityTrend < -20) {
      recs.push({
        type: 'warning',
        message: 'Your activity has decreased significantly. Try to maintain consistent daily practice.'
      });
    }
    
    if (performanceMetrics.expertTools === 0 && performanceMetrics.totalTools > 5) {
      recs.push({
        type: 'info',
        message: 'Focus on mastering 1-2 tools completely rather than trying many superficially.'
      });
    }
    
    if (analytics.overallSkillLevel > 70) {
      recs.push({
        type: 'success',
        message: 'Excellent progress! Consider exploring advanced features or new departments.'
      });
    }
    
    const departmentRanking = getDepartmentRanking();
    const weakestDept = departmentRanking[departmentRanking.length - 1];
    if (weakestDept && weakestDept.skillLevel < 30) {
      recs.push({
        type: 'info',
        message: `Consider spending more time in ${weakestDept.department} to balance your skills.`
      });
    }

    return recs;
  }, [performanceMetrics, analytics.overallSkillLevel, getDepartmentRanking]);

  const exportData = () => {
    const exportData = {
      user: {
        overallSkillLevel: analytics.overallSkillLevel,
        totalInteractions: analytics.totalInteractions,
        totalDuration: analytics.totalDuration,
        exportDate: new Date().toISOString()
      },
      departments: analytics.departmentProgress,
      tools: analytics.toolsProgress,
      weeklyProgress: analytics.weeklyProgress,
      metrics: performanceMetrics,
      learningVelocity,
      recommendations
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `skillsim-analytics-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'warning': return 'bg-yellow-500 text-white';
      case 'success': return 'bg-green-500 text-white';
      case 'info': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <BarChart3 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{Math.round(performanceMetrics.averageSkillLevel)}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t('Avg Skill Level', 'গড় দক্ষতার স্তর')}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{performanceMetrics.expertTools}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t('Expert Level Tools', 'বিশেষজ্ঞ স্তরের টুলস')}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{Math.round(performanceMetrics.productivity)}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t('Weekly Productivity', 'সাপ্তাহিক উৎপাদনশীলতা')}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              {performanceMetrics.activityTrend >= 0 ? (
                <TrendingUp className="w-8 h-8 text-green-500" />
              ) : (
                <TrendingDown className="w-8 h-8 text-red-500" />
              )}
            </div>
            <div className="text-2xl font-bold">
              {performanceMetrics.activityTrend >= 0 ? '+' : ''}{Math.round(performanceMetrics.activityTrend)}%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t('Activity Trend', 'কার্যকলাপের প্রবণতা')}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Learning Velocity & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              {t('Learning Velocity', 'শেখার গতি')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{learningVelocity}</div>
                <div className="text-sm text-gray-600">
                  {t('Skill points per week', 'প্রতি সপ্তাহে দক্ষতা পয়েন্ট')}
                </div>
              </div>
              <Progress value={Math.min(100, learningVelocity * 10)} className="h-3" />
              <div className="text-xs text-gray-500 text-center">
                {learningVelocity > 10 ? 'Excellent pace!' : 
                 learningVelocity > 5 ? 'Good progress' : 
                 'Room for improvement'}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5" />
              {t('Recommendations', 'সুপারিশসমূহ')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recommendations.length > 0 ? (
                recommendations.map((rec, index) => (
                  <div key={index} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                    <Badge className={`${getBadgeColor(rec.type)} mb-2`}>
                      {rec.type.charAt(0).toUpperCase() + rec.type.slice(1)}
                    </Badge>
                    <p className="text-sm">{rec.message}</p>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-4">
                  <Award className="w-12 h-12 mx-auto mb-2 text-yellow-500" />
                  <p>{t('Perfect! No recommendations needed.', 'নিখুঁত! কোনো সুপারিশের প্রয়োজন নেই।')}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Skill Progression Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {t('7-Day Progress Summary', '৭-দিনের অগ্রগতির সারসংক্ষেপ')}
            </div>
            <Button onClick={exportData} variant="outline" size="sm" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              {t('Export Data', 'ডেটা এক্সপোর্ট')}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {analytics.weeklyProgress.slice(-7).map((day, index) => (
              <div key={day.date} className="flex items-center gap-4">
                <div className="w-20 text-sm font-medium">
                  {new Date(day.date).toLocaleDateString('en-US', { 
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Progress value={(day.interactions / 10) * 100} className="flex-1 h-2" />
                    <span className="text-xs text-gray-600">{day.interactions}</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{Math.round(day.duration)}min</span>
                    <span>+{day.skillGain} skill points</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-bold">
                  {analytics.weeklyProgress.slice(-7).reduce((sum, day) => sum + day.interactions, 0)}
                </div>
                <div className="text-xs text-gray-600">Total Sessions</div>
              </div>
              <div>
                <div className="text-lg font-bold">
                  {Math.round(analytics.weeklyProgress.slice(-7).reduce((sum, day) => sum + day.duration, 0))}min
                </div>
                <div className="text-xs text-gray-600">Total Time</div>
              </div>
              <div>
                <div className="text-lg font-bold">
                  +{analytics.weeklyProgress.slice(-7).reduce((sum, day) => sum + day.skillGain, 0)}
                </div>
                <div className="text-xs text-gray-600">Skill Points</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsReports;