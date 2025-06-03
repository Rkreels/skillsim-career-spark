
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Headphones, MessageSquare, FileText, Keyboard, FolderOpen } from 'lucide-react';

const CustomerServiceSimulation = () => {
  const { t } = useLanguage();

  const customerServiceTools = [
    {
      id: 'support-system',
      title: 'Customer Support System',
      titleBn: 'কাস্টমার সাপোর্ট সিস্টেম',
      icon: Headphones,
      color: 'text-blue-600',
      description: 'Handle customer queries and support tickets',
      descriptionBn: 'গ্রাহক জিজ্ঞাসা এবং সাপোর্ট টিকিট পরিচালনা করুন'
    },
    {
      id: 'chat-support',
      title: 'Live Chat Support',
      titleBn: 'লাইভ চ্যাট সাপোর্ট',
      icon: MessageSquare,
      color: 'text-green-600',
      description: 'Provide real-time customer assistance',
      descriptionBn: 'রিয়েল-টাইম গ্রাহক সহায়তা প্রদান করুন'
    },
    {
      id: 'document-management',
      title: 'Document Management',
      titleBn: 'ডকুমেন্ট ম্যানেজমেন্ট',
      icon: FolderOpen,
      color: 'text-purple-600',
      description: 'Organize customer documents and records',
      descriptionBn: 'গ্রাহক নথি এবং রেকর্ড সংগঠিত করুন'
    },
    {
      id: 'excel',
      title: 'Excel',
      titleBn: 'এক্সেল',
      icon: FileText,
      color: 'text-orange-600',
      description: 'Customer data analysis and reporting',
      descriptionBn: 'গ্রাহক ডেটা বিশ্লেষণ এবং রিপোর্টিং'
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
              {t("Customer Service Simulations", "কাস্টমার সার্ভিস সিমুলেশন")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                "Practice with customer service tools and support systems.",
                "কাস্টমার সার্ভিস সরঞ্জাম এবং সাপোর্ট সিস্টেম অনুশীলন করুন।"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerServiceTools.map((tool) => {
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

export default CustomerServiceSimulation;
