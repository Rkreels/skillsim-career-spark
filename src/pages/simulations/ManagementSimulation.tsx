
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, FileText, Settings, Keyboard, FolderOpen, Columns } from 'lucide-react';

const ManagementSimulation = () => {
  const { t } = useLanguage();

  const managementTools = [
    {
      id: 'sap-signavio',
      title: 'SAP Signavio',
      titleBn: 'SAP সিগনাভিও',
      icon: Settings,
      color: 'text-blue-600',
      description: 'Process modeling and business transformation',
      descriptionBn: 'প্রসেস মডেলিং এবং ব্যবসায়িক রূপান্তর'
    },
    {
      id: 'trello-clone',
      title: 'Trello Clone',
      titleBn: 'ট্রেলো ক্লোন',
      icon: Columns,
      color: 'text-indigo-600',
      description: 'Project management and team collaboration',
      descriptionBn: 'প্রোজেক্ট ম্যানেজমেন্ট এবং টিম সহযোগিতা'
    },
    {
      id: 'roadmap-app',
      title: 'Roadmap Application',
      titleBn: 'রোডম্যাপ অ্যাপ্লিকেশন',
      icon: BarChart3,
      color: 'text-green-600',
      description: 'Strategic planning and roadmap development',
      descriptionBn: 'কৌশলগত পরিকল্পনা এবং রোডম্যাপ উন্নয়ন'
    },
    {
      id: 'document-management',
      title: 'Document Management',
      titleBn: 'ডকুমেন্ট ম্যানেজমেন্ট',
      icon: FolderOpen,
      color: 'text-purple-600',
      description: 'Organize and manage business documents',
      descriptionBn: 'ব্যবসায়িক নথি সংগঠিত এবং পরিচালনা করুন'
    },
    {
      id: 'excel',
      title: 'Excel',
      titleBn: 'এক্সেল',
      icon: FileText,
      color: 'text-orange-600',
      description: 'Management data analysis and reporting',
      descriptionBn: 'ম্যানেজমেন্ট ডেটা বিশ্লেষণ এবং রিপোর্টিং'
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
              {t("Management Simulations", "ম্যানেজমেন্ট সিমুলেশন")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                "Practice with management tools and strategic planning applications.",
                "ম্যানেজমেন্ট সরঞ্জাম এবং কৌশলগত পরিকল্পনা অ্যাপ্লিকেশন অনুশীলন করুন।"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTools.map((tool) => {
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

export default ManagementSimulation;
