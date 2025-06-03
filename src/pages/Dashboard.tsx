import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useUser } from '@/contexts/UserContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Onboarding from '@/components/Onboarding';
import { getRoleBasedCourses, getRoleBasedRecommendations, getRoleBasedBadges } from '@/data/dashboardData';

// Icons
import { Book, Search, User } from 'lucide-react';

const Dashboard = () => {
  const { t } = useLanguage();
  const { user, isLoading } = useUser();
  const [progress] = useState(85);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-skill-blue mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">{t("Loading...", "লোড হচ্ছে...")}</p>
        </div>
      </div>
    );
  }

  // Show onboarding if user hasn't completed it
  if (!user || !user.isOnboarded) {
    return <Onboarding />;
  }

  // Get role-based data
  const courses = getRoleBasedCourses(user.role);
  const recommendedCourses = getRoleBasedRecommendations(user.role);
  const badges = getRoleBasedBadges(user.role);

  const getRoleDisplayName = () => {
    const roleNames = {
      hr: { en: "HR Professional", bn: "এইচআর পেশাদার" },
      accounting: { en: "Finance Professional", bn: "ফিন্যান্স পেশাদার" },
      sales: { en: "Sales Professional", bn: "সেলস পেশাদার" },
      marketing: { en: "Marketing Professional", bn: "মার্কেটিং পেশাদার" },
      operations: { en: "Operations Professional", bn: "অপারেশনস পেশাদার" },
      management: { en: "Management Professional", bn: "ম্যানেজমেন্ট পেশাদার" },
      finance: { en: "Finance Professional", bn: "ফিন্যান্স পেশাদার" },
      product: { en: "Product Professional", bn: "প্রোডাক্ট পেশাদার" },
      education: { en: "Education Professional", bn: "শিক্ষা পেশাদার" },
      customer: { en: "Customer Service Professional", bn: "কাস্টমার সার্ভিস পেশাদার" }
    };
    return t(roleNames[user.role]?.en || "Professional", roleNames[user.role]?.bn || "পেশাদার");
  };

  const getDepartmentSimulationUrl = () => {
    const simulationUrls = {
      hr: '/simulation/hr',
      accounting: '/simulation/accounting', 
      sales: '/simulation/sales',
      marketing: '/simulation/marketing',
      operations: '/simulation/operations',
      management: '/simulation/management',
      finance: '/simulation/accounting',
      product: '/simulation/product',
      education: '/simulation/education',
      customer: '/simulation/customer'
    };
    return simulationUrls[user.role] || '/simulation';
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-md hidden md:block">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-skill-blue">SkillSim</Link>
        </div>
        
        <div className="p-4">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-skill-blue rounded-full flex items-center justify-center text-white font-semibold mr-3">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-medium text-sm">{user.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{getRoleDisplayName()}</p>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
              {t("Profile Completion", "প্রোফাইল সম্পূর্ণতা")}
            </h3>
            <Progress value={progress} className="h-2 mb-2" />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {progress}% {t("complete", "সম্পূর্ণ")}
            </p>
          </div>
          
          <nav className="space-y-1">
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-skill-blue-dark/10 text-skill-blue dark:text-skill-blue-dark"
            >
              <Book className="mr-3 h-5 w-5" />
              {t("My Courses", "আমার কোর্স")}
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <User className="mr-3 h-5 w-5" />
              {t("My Certificates", "আমার সার্টিফিকেট")}
            </a>
            <a
              href="#"
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <User className="mr-3 h-5 w-5" />
              {t("Badges Earned", "অর্জিত ব্যাজ")}
            </a>
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="flex justify-between items-center h-16 px-4">
            <div className="flex items-center md:hidden">
              <Button variant="ghost" size="icon">
                <Book className="h-6 w-6" />
                <span className="sr-only">Open sidebar</span>
              </Button>
              <Link to="/" className="ml-3 text-xl font-bold text-skill-blue">SkillSim</Link>
            </div>
            
            <div className="flex-1 px-4 flex justify-center md:justify-end">
              <div className="max-w-lg w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-skill-blue focus:border-skill-blue sm:text-sm"
                    placeholder={t("Search courses...", "কোর্স খুঁজুন...")}
                    type="search"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <Button variant="ghost" size="icon">
                <User className="h-6 w-6" />
                <span className="sr-only">Profile</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t("Dashboard", "ড্যাশবোর্ড")}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                {t("Welcome back", "স্বাগতম")}, {user.name}! {t("Continue your", "আপনার")} {user.department} {t("learning journey", "শেখার যাত্রা চালিয়ে যান")}.
              </p>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="mb-8">
              <h2 className="text-lg font-medium mb-4">
                {t("Continue Where You Left Off", "যেখানে ছেড়েছিলেন সেখান থেকে চালিয়ে যান")}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={course.imageUrl} 
                        alt={t(course.titleEn, course.titleBn)} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-2">
                        {t(course.titleEn, course.titleBn)}
                      </h3>
                      <div className="mb-1 flex justify-between text-xs">
                        <span>{course.progressPercent}%</span>
                        <span>100%</span>
                      </div>
                      <Progress value={course.progressPercent} className="h-1" />
                      <Button className="w-full mt-4">
                        {t("Continue", "চালিয়ে যান")}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h2 className="text-lg font-medium mb-4">
                  {t("Recommended For You", "আপনার জন্য প্রস্তাবিত")}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {recommendedCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={course.imageUrl} 
                          alt={t(course.titleEn, course.titleBn)} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-1">
                          {t(course.titleEn, course.titleBn)}
                        </h3>
                        <div className="flex justify-between items-center mt-4">
                          <span className="skill-badge bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {t("Recommended", "প্রস্তাবিত")}
                          </span>
                          <Button variant="outline" size="sm">
                            {t("Start", "শুরু করুন")}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link to={getDepartmentSimulationUrl()}>
                    <Button variant="outline" className="w-full">
                      {t("Start a New Simulation", "নতুন সিমুলেশন শুরু করুন")}
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-medium mb-4">
                  {t("Your Progress", "আপনার অগ্রগতি")}
                </h2>
                <Tabs defaultValue="badges">
                  <TabsList className="w-full">
                    <TabsTrigger value="badges" className="flex-1">{t("Badges", "ব্যাজ")}</TabsTrigger>
                    <TabsTrigger value="xp" className="flex-1">{t("XP", "এক্সপি")}</TabsTrigger>
                  </TabsList>
                  <TabsContent value="badges">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">{t("Recent Badges", "সাম্প্রতিক ব্যাজ")}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {badges.map((badge) => (
                            <div key={badge.id} className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xl">
                                {badge.icon}
                              </div>
                              <div className="ml-4">
                                <h4 className="text-sm font-medium">
                                  {t(badge.titleEn, badge.titleBn)}
                                </h4>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="xp">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-base">{t("Experience Points", "অভিজ্ঞতা পয়েন্ট")}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                            <span className="text-2xl font-bold">1250</span>
                            <span className="ml-1 text-sm">XP</span>
                          </div>
                          <div className="mb-4">
                            <p className="text-sm">
                              {t("Level", "লেভেল")}: <span className="font-medium">7</span>
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              {t("Beginner → Pro", "শুরুকারী → পেশাদার")}
                            </p>
                          </div>
                          <Progress value={65} className="h-2 mb-2" />
                          <p className="text-xs text-gray-500">
                            750 XP {t("to next level", "পরবর্তী লেভেলে যাওয়ার জন্য")}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="text-base">{t("Daily Streak", "দৈনিক স্ট্রিক")}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="text-3xl font-bold mb-2">🔥 10</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t("Keep learning to maintain your streak!", "আপনার স্ট্রিক বজায় রাখতে শেখা চালিয়ে যান!")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
