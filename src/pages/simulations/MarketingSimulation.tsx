
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Target, Megaphone, FileText, Keyboard } from 'lucide-react';

const MarketingSimulation = () => {
  const { t } = useLanguage();

  const marketingTools = [
    {
      id: 'analytics',
      title: 'Marketing Analytics',
      titleBn: 'মার্কেটিং অ্যানালিটিক্স',
      icon: BarChart3,
      color: 'text-blue-600',
      description: 'Analyze campaign performance and ROI',
      descriptionBn: 'ক্যাম্পেইন পারফরম্যান্স এবং ROI বিশ্লেষণ করুন'
    },
    {
      id: 'campaign-management',
      title: 'Campaign Management',
      titleBn: 'ক্যাম্পেইন ম্যানেজমেন্ট',
      icon: Target,
      color: 'text-green-600',
      description: 'Plan and execute marketing campaigns',
      descriptionBn: 'মার্কেটিং ক্যাম্পেইন পরিকল্পনা ও বাস্তবায়ন করুন'
    },
    {
      id: 'social-media',
      title: 'Social Media Management',
      titleBn: 'সোশ্যাল মিডিয়া ম্যানেজমেন্ট',
      icon: Megaphone,
      color: 'text-purple-600',
      description: 'Manage social media presence and engagement',
      descriptionBn: 'সোশ্যাল মিডিয়া উপস্থিতি এবং সম্পৃক্ততা পরিচালনা করুন'
    },
    {
      id: 'excel',
      title: 'Excel',
      titleBn: 'এক্সেল',
      icon: FileText,
      color: 'text-orange-600',
      description: 'Marketing data analysis and reporting',
      descriptionBn: 'মার্কেটিং ডেটা বিশ্লেষণ এবং রিপোর্টিং'
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
              {t("Marketing Simulations", "মার্কেটিং সিমুলেশন")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                "Practice with marketing tools and analytics to enhance your marketing performance.",
                "আপনার মার্কেটিং কর্মক্ষমতা বৃদ্ধির জন্য মার্কেটিং সরঞ্জাম এবং অ্যানালিটিক্স অনুশীলন করুন।"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingTools.map((tool) => {
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

export default MarketingSimulation;
