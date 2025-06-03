
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, GraduationCap, FileText, Keyboard, FolderOpen } from 'lucide-react';

const EducationSimulation = () => {
  const { t } = useLanguage();

  const educationTools = [
    {
      id: 'student-consulting-crm',
      title: 'Student Consulting CRM',
      titleBn: 'স্টুডেন্ট কনসালটিং CRM',
      icon: Users,
      color: 'text-blue-600',
      description: 'Manage student consultations and admissions',
      descriptionBn: 'শিক্ষার্থী পরামর্শ এবং ভর্তি পরিচালনা করুন'
    },
    {
      id: 'admission-management',
      title: 'Admission Management',
      titleBn: 'ভর্তি ব্যবস্থাপনা',
      icon: GraduationCap,
      color: 'text-green-600',
      description: 'Handle student admissions and enrollment',
      descriptionBn: 'শিক্ষার্থী ভর্তি এবং নিবন্ধন পরিচালনা করুন'
    },
    {
      id: 'document-management',
      title: 'Document Management',
      titleBn: 'ডকুমেন্ট ম্যানেজমেন্ট',
      icon: FolderOpen,
      color: 'text-purple-600',
      description: 'Organize and manage educational documents',
      descriptionBn: 'শিক্ষামূলক নথি সংগঠিত এবং পরিচালনা করুন'
    },
    {
      id: 'excel',
      title: 'Excel',
      titleBn: 'এক্সেল',
      icon: FileText,
      color: 'text-orange-600',
      description: 'Educational data analysis and reporting',
      descriptionBn: 'শিক্ষামূলক ডেটা বিশ্লেষণ এবং রিপোর্টিং'
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
              {t("Education Simulations", "শিক্ষা সিমুলেশন")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                "Practice with educational tools and student management systems.",
                "শিক্ষামূলক সরঞ্জাম এবং শিক্ষার্থী ব্যবস্থাপনা সিস্টেম অনুশীলন করুন।"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationTools.map((tool) => {
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

export default EducationSimulation;
