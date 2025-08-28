import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useUser } from '@/contexts/UserContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useIntelligentSuggestions } from '@/hooks/useIntelligentSuggestions';
import { useLanguage } from '@/contexts/LanguageContext';
import AnalyticsReports from './AnalyticsReports';
import {
  User, TrendingUp, Award, Target, Clock, BarChart3, 
  Trophy, Flame, Calendar, Activity, Lightbulb, X, Users
} from 'lucide-react';

const UserProfilePanel: React.FC = () => {
  const { user } = useUser();
  const { analytics, getToolMastery, getDepartmentRanking, getImprovementSuggestions } = useAnalytics();
  const { suggestions, dismissSuggestion } = useIntelligentSuggestions(user?.role || 'hr');
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  if (!user) return null;

  const departmentRanking = getDepartmentRanking();
  const oldSuggestions = getImprovementSuggestions();
  const topTools = Object.values(analytics.toolsProgress)
    .sort((a, b) => b.skillLevel - a.skillLevel)
    .slice(0, 5);

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);
    return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
  };

  const getSkillBadgeColor = (level: number) => {
    if (level >= 80) return 'bg-purple-500 text-white';
    if (level >= 60) return 'bg-blue-500 text-white';
    if (level >= 30) return 'bg-green-500 text-white';
    return 'bg-gray-500 text-white';
  };

  const getMasteryColor = (mastery: string) => {
    switch (mastery) {
      case 'Expert': return 'text-purple-600';
      case 'Advanced': return 'text-blue-600';
      case 'Intermediate': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 space-y-6">
      {/* Profile Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1">
              <CardTitle className="text-2xl text-gray-900 dark:text-white">{user.name}</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="outline" className="capitalize">{user.role}</Badge>
                <Badge variant="secondary">Multi-Department Learner</Badge>
                <Badge className={getSkillBadgeColor(analytics.overallSkillLevel)}>
                  Level {Math.floor(analytics.overallSkillLevel)}
                </Badge>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 dark:text-gray-400">Overall Progress</div>
              <div className="text-3xl font-bold text-blue-600">{Math.round(analytics.overallSkillLevel)}%</div>
              <div className={`text-sm flex items-center gap-1 ${
                analytics.improvementTrend >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                <TrendingUp className="w-4 h-4" />
                {analytics.improvementTrend >= 0 ? '+' : ''}{Math.round(analytics.improvementTrend)}%
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Activity className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{analytics.totalInteractions}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t('Total Sessions', 'মোট সেশন')}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{formatDuration(analytics.totalDuration)}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t('Time Spent', 'ব্যয়িত সময়')}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{Object.keys(analytics.toolsProgress).length}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t('Tools Mastered', 'আয়ত্ত করা টুলস')}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">{Math.round(analytics.crossDepartmentScore)}%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {t('Cross-Dept Score', 'ক্রস-বিভাগীয় স্কোর')}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Analytics Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">{t('Overview', 'সংক্ষিপ্ত')}</TabsTrigger>
          <TabsTrigger value="departments">{t('Departments', 'বিভাগসমূহ')}</TabsTrigger>
          <TabsTrigger value="tools">{t('Tools', 'টুলস')}</TabsTrigger>
          <TabsTrigger value="suggestions">{t('AI Suggestions', 'এআই পরামর্শ')}</TabsTrigger>
          <TabsTrigger value="insights">{t('Insights', 'অন্তর্দৃষ্টি')}</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  {t('Weekly Progress', 'সাপ্তাহিক অগ্রগতি')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {analytics.weeklyProgress.slice(-7).map((day, index) => (
                    <div key={day.date} className="flex items-center gap-2">
                      <div className="w-20 text-sm">{new Date(day.date).toLocaleDateString()}</div>
                      <Progress value={(day.interactions / 10) * 100} className="flex-1" />
                      <div className="text-sm text-gray-600">{day.interactions}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  {t('Legacy Suggestions', 'পুরনো পরামর্শ')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {oldSuggestions.length > 0 ? (
                    oldSuggestions.map((suggestion, index) => (
                      <div key={index} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
                        {suggestion}
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500 text-sm">
                      {t('Great job! Keep up the excellent work.', 'দুর্দান্ত! চমৎকার কাজ চালিয়ে যান।')}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {departmentRanking.map((dept, index) => (
              <Card key={dept.department}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">#{index + 1}</Badge>
                      <h3 className="font-semibold capitalize">{dept.department}</h3>
                    </div>
                    <Badge className={getSkillBadgeColor(dept.skillLevel)}>
                      {Math.round(dept.skillLevel)}% Mastery
                    </Badge>
                  </div>
                  <Progress value={dept.skillLevel} className="mb-2" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{dept.interactions} sessions</span>
                    <span>Last used: {new Date(dept.lastAccessed).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {topTools.map((tool) => (
              <Card key={tool.toolId}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold">{tool.toolName}</h3>
                      <Badge variant="secondary" className="text-xs">{tool.department}</Badge>
                    </div>
                    <div className="text-right">
                      <Badge className={`${getMasteryColor(getToolMastery(tool.toolId))} text-white bg-current`}>
                        {getToolMastery(tool.toolId)}
                      </Badge>
                      <div className="text-sm text-gray-600 mt-1">
                        Level {Math.round(tool.skillLevel)}
                      </div>
                    </div>
                  </div>
                  <Progress value={tool.skillLevel} className="mb-2" />
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-medium">{tool.totalInteractions}</div>
                      <div className="text-gray-600">Sessions</div>
                    </div>
                    <div>
                      <div className="font-medium">{formatDuration(tool.totalDuration)}</div>
                      <div className="text-gray-600">Time Spent</div>
                    </div>
                    <div>
                      <div className="font-medium">{tool.tasksCompleted}</div>
                      <div className="text-gray-600">Tasks Done</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                {t('AI-Powered Suggestions', 'এআই-চালিত পরামর্শ')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suggestions.map((suggestion) => (
                  <div key={suggestion.id} className={`p-4 rounded-lg border-l-4 ${
                    suggestion.priority === 'high' ? 'border-l-red-500 bg-red-50 dark:bg-red-900/20' :
                    suggestion.priority === 'medium' ? 'border-l-yellow-500 bg-yellow-50 dark:bg-yellow-900/20' :
                    'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-medium">{suggestion.title}</h4>
                          <Badge variant={suggestion.priority === 'high' ? 'destructive' : 'secondary'} className="text-xs">
                            {suggestion.priority}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{suggestion.description}</p>
                        <p className="text-xs text-gray-500 mt-1 capitalize">
                          Department: {suggestion.department}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => dismissSuggestion(suggestion.id)}
                        className="ml-2"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                {suggestions.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Lightbulb className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>{t('Great job! Keep practicing to unlock new suggestions.', 'দুর্দান্ত! নতুন পরামর্শ আনলক করতে অনুশীলন চালিয়ে যান।')}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <AnalyticsReports />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserProfilePanel;