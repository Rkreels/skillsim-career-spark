
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, Truck, Package, FileText, Keyboard } from 'lucide-react';

const OperationsSimulation = () => {
  const { t } = useLanguage();

  const operationsTools = [
    {
      id: 'sap-erp',
      title: 'SAP ERP',
      titleBn: 'SAP ERP',
      icon: Settings,
      color: 'text-blue-600',
      description: 'Enterprise resource planning and operations management',
      descriptionBn: 'এন্টারপ্রাইজ রিসোর্স পরিকল্পনা এবং অপারেশনস ব্যবস্থাপনা'
    },
    {
      id: 'logistics',
      title: 'Logistics Management',
      titleBn: 'লজিস্টিকস ম্যানেজমেন্ট',
      icon: Truck,
      color: 'text-green-600',
      description: 'Supply chain and logistics optimization',
      descriptionBn: 'সাপ্লাই চেইন এবং লজিস্টিকস অপ্টিমাইজেশন'
    },
    {
      id: 'inventory',
      title: 'Inventory Management',
      titleBn: 'ইনভেন্টরি ম্যানেজমেন্ট',
      icon: Package,
      color: 'text-purple-600',
      description: 'Track and manage inventory levels',
      descriptionBn: 'ইনভেন্টরি স্তর ট্র্যাক এবং পরিচালনা করুন'
    },
    {
      id: 'excel',
      title: 'Excel',
      titleBn: 'এক্সেল',
      icon: FileText,
      color: 'text-orange-600',
      description: 'Operations data analysis and reporting',
      descriptionBn: 'অপারেশনস ডেটা বিশ্লেষণ এবং রিপোর্টিং'
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
              {t("Operations Simulations", "অপারেশনস সিমুলেশন")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                "Practice with operations tools and systems to streamline business processes.",
                "ব্যবসায়িক প্রক্রিয়া সুগমীকরণের জন্য অপারেশনস সরঞ্জাম এবং সিস্টেম অনুশীলন করুন।"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {operationsTools.map((tool) => {
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

export default OperationsSimulation;
