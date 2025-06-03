
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useUser } from '@/contexts/UserContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Onboarding from '@/components/Onboarding';

// Icons
import { Users, Calculator, CreditCard, Megaphone, Truck, BarChart3, Target, GraduationCap, Headphones, User } from 'lucide-react';

const Dashboard = () => {
  const { t } = useLanguage();
  const { user, isLoading } = useUser();

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

  const departments = [
    {
      id: 'hr',
      title: 'Human Resources',
      titleBn: 'মানব সম্পদ',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30',
      url: '/simulation/hr',
      description: 'Manage recruitment, employee records, and HR processes',
      descriptionBn: 'নিয়োগ, কর্মচারী রেকর্ড এবং এইচআর প্রক্রিয়া পরিচালনা করুন'
    },
    {
      id: 'accounting',
      title: 'Accounting & Finance',
      titleBn: 'অ্যাকাউন্টিং ও ফিন্যান্স',
      icon: Calculator,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      hoverColor: 'hover:bg-green-100 dark:hover:bg-green-900/30',
      url: '/simulation/accounting',
      description: 'Handle financial transactions and accounting systems',
      descriptionBn: 'আর্থিক লেনদেন এবং অ্যাকাউন্টিং সিস্টেম পরিচালনা করুন'
    },
    {
      id: 'sales',
      title: 'Sales',
      titleBn: 'বিক্রয়',
      icon: CreditCard,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-900/30',
      url: '/simulation/sales',
      description: 'Practice sales transactions and customer management',
      descriptionBn: 'বিক্রয় লেনদেন এবং গ্রাহক ব্যবস্থাপনা অনুশীলন করুন'
    },
    {
      id: 'marketing',
      title: 'Marketing',
      titleBn: 'মার্কেটিং',
      icon: Megaphone,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      hoverColor: 'hover:bg-orange-100 dark:hover:bg-orange-900/30',
      url: '/simulation/marketing',
      description: 'Manage campaigns and marketing analytics',
      descriptionBn: 'ক্যাম্পেইন এবং মার্কেটিং অ্যানালিটিক্স পরিচালনা করুন'
    },
    {
      id: 'operations',
      title: 'Operations',
      titleBn: 'অপারেশনস',
      icon: Truck,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
      hoverColor: 'hover:bg-indigo-100 dark:hover:bg-indigo-900/30',
      url: '/simulation/operations',
      description: 'Streamline business processes and operations',
      descriptionBn: 'ব্যবসায়িক প্রক্রিয়া এবং অপারেশনস সুগমীকরণ করুন'
    },
    {
      id: 'management',
      title: 'Management',
      titleBn: 'ম্যানেজমেন্ট',
      icon: BarChart3,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      hoverColor: 'hover:bg-red-100 dark:hover:bg-red-900/30',
      url: '/simulation/management',
      description: 'Strategic planning and business management',
      descriptionBn: 'কৌশলগত পরিকল্পনা এবং ব্যবসা ব্যবস্থাপনা'
    },
    {
      id: 'product',
      title: 'Product & Innovation',
      titleBn: 'প্রোডাক্ট এবং ইনোভেশন',
      icon: Target,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20',
      hoverColor: 'hover:bg-teal-100 dark:hover:bg-teal-900/30',
      url: '/simulation/product',
      description: 'Product development and innovation management',
      descriptionBn: 'প্রোডাক্ট ডেভেলপমেন্ট এবং ইনোভেশন ব্যবস্থাপনা'
    },
    {
      id: 'education',
      title: 'Education',
      titleBn: 'শিক্ষা',
      icon: GraduationCap,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
      hoverColor: 'hover:bg-cyan-100 dark:hover:bg-cyan-900/30',
      url: '/simulation/education',
      description: 'Student management and educational tools',
      descriptionBn: 'শিক্ষার্থী ব্যবস্থাপনা এবং শিক্ষামূলক সরঞ্জাম'
    },
    {
      id: 'customer',
      title: 'Customer Service',
      titleBn: 'কাস্টমার সার্ভিস',
      icon: Headphones,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 dark:bg-pink-900/20',
      hoverColor: 'hover:bg-pink-100 dark:hover:bg-pink-900/30',
      url: '/simulation/customer',
      description: 'Customer support and service management',
      descriptionBn: 'গ্রাহক সাপোর্ট এবং সেবা ব্যবস্থাপনা'
    }
  ];

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
                <p className="text-xs text-gray-500 dark:text-gray-400">Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="flex justify-between items-center h-16 px-4">
            <div className="flex items-center md:hidden">
              <Link to="/" className="ml-3 text-xl font-bold text-skill-blue">SkillSim</Link>
            </div>
            
            <div className="flex items-center space-x-4 ml-auto">
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {t("Welcome to SkillSim", "SkillSim এ স্বাগতম")}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {t("Choose a department to start your simulation experience", "আপনার সিমুলেশন অভিজ্ঞতা শুরু করতে একটি বিভাগ নির্বাচন করুন")}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((department) => {
              const Icon = department.icon;
              return (
                <Link key={department.id} to={department.url}>
                  <Card className={`${department.bgColor} ${department.hoverColor} transition-all duration-200 cursor-pointer border-2 hover:border-gray-300 dark:hover:border-gray-600`}>
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3">
                        <Icon className={`h-8 w-8 ${department.color}`} />
                        <span className="text-xl font-semibold">
                          {t(department.title, department.titleBn)}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400">
                        {t(department.description, department.descriptionBn)}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
