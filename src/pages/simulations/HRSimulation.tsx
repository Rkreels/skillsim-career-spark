
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Calendar, BookOpen, Keyboard } from 'lucide-react';

const HRSimulation = () => {
  const { t } = useLanguage();

  const hrTools = [
    {
      id: 'ats',
      title: 'ATS (Applicant Tracking System)',
      titleBn: 'এটিএস (আবেদনকারী ট্র্যাকিং সিস্টেম)',
      icon: Users,
      color: 'text-blue-600',
      description: 'Manage job applications and recruitment processes',
      descriptionBn: 'চাকরির আবেদন এবং নিয়োগ প্রক্রিয়া পরিচালনা করুন'
    },
    {
      id: 'hrms',
      title: 'HRMS (Human Resource Management System)',
      titleBn: 'এইচআরএমএস (মানব সম্পদ ব্যবস্থাপনা সিস্টেম)',
      icon: FileText,
      color: 'text-green-600',
      description: 'Complete HR management and employee records',
      descriptionBn: 'সম্পূর্ণ এইচআর ব্যবস্থাপনা এবং কর্মচারী রেকর্ড'
    },
    {
      id: 'odoo',
      title: 'Odoo ERP',
      titleBn: 'ওডু ইআরপি',
      icon: Calendar,
      color: 'text-purple-600',
      description: 'Enterprise resource planning for HR operations',
      descriptionBn: 'এইচআর অপারেশনের জন্য এন্টারপ্রাইজ রিসোর্স প্ল্যানিং'
    },
    {
      id: 'excel',
      title: 'Excel',
      titleBn: 'এক্সেল',
      icon: FileText,
      color: 'text-orange-600',
      description: 'Spreadsheet management and data analysis',
      descriptionBn: 'স্প্রেডশিট ব্যবস্থাপনা এবং ডেটা বিশ্লেষণ'
    },
    {
      id: 'typing-practice',
      title: 'Typing Practice',
      titleBn: 'টাইপিং অনুশীলন',
      icon: Keyboard,
      color: 'text-gray-600',
      description: 'Improve typing speed and accuracy',
      descriptionBn: 'টাইপিং গতি এবং নির্ভুলতা উন্নত করুন'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t("Human Resources Simulations", "মানব সম্পদ সিমুলেশন")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                "Practice with HR-specific tools and systems to enhance your human resources skills.",
                "আপনার মানব সম্পদ দক্ষতা বৃদ্ধির জন্য এইচআর-নির্দিষ্ট টুলস এবং সিস্টেম অনুশীলন করুন।"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hrTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Card key={tool.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className={`h-8 w-8 ${tool.color}`} />
                      <span className="text-xl">
                        {t(tool.title, tool.titleBn)}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {t(tool.description, tool.descriptionBn)}
                    </p>
                    <Button className="w-full">
                      {t("Launch Simulation", "সিমুলেশন চালু করুন")}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HRSimulation;
