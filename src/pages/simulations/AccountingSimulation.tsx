
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, FileText, Calculator, Keyboard, Settings, Receipt } from 'lucide-react';

const AccountingSimulation = () => {
  const { t } = useLanguage();

  const accountingTools = [
    {
      id: 'accounting',
      title: 'Accounting Software',
      titleBn: 'অ্যাকাউন্টিং সফটওয়্যার',
      icon: Calculator,
      color: 'text-green-600',
      description: 'Complete accounting and bookkeeping system',
      descriptionBn: 'সম্পূর্ণ অ্যাকাউন্টিং এবং বুককিপিং সিস্টেম'
    },
    {
      id: 'tax-filing-saas',
      title: 'Tax Filing SaaS',
      titleBn: 'ট্যাক্স ফাইলিং সাস',
      icon: Receipt,
      color: 'text-red-600',
      description: 'Tax preparation and filing system for users and professionals',
      descriptionBn: 'ব্যবহারকারী এবং পেশাদারদের জন্য ট্যাক্স প্রস্তুতি এবং ফাইলিং সিস্টেম'
    },
    {
      id: 'sap-erp',
      title: 'SAP ERP',
      titleBn: 'এসএপি ইআরপি',
      icon: Settings,
      color: 'text-blue-600',
      description: 'Enterprise resource planning for finance',
      descriptionBn: 'ফিন্যান্সের জন্য এন্টারপ্রাইজ রিসোর্স প্ল্যানিং'
    },
    {
      id: 'odoo',
      title: 'Odoo ERP',
      titleBn: 'ওডু ইআরপি',
      icon: DollarSign,
      color: 'text-purple-600',
      description: 'Integrated business management for accounting',
      descriptionBn: 'অ্যাকাউন্টিংয়ের জন্য সমন্বিত ব্যবসা ব্যবস্থাপনা'
    },
    {
      id: 'excel',
      title: 'Excel',
      titleBn: 'এক্সেল',
      icon: FileText,
      color: 'text-orange-600',
      description: 'Financial modeling and data analysis',
      descriptionBn: 'আর্থিক মডেলিং এবং ডেটা বিশ্লেষণ'
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
              {t("Accounting & Finance Simulations", "অ্যাকাউন্টিং ও ফিন্যান্স সিমুলেশন")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                "Master financial tools and accounting systems to excel in finance and accounting roles.",
                "ফিন্যান্স এবং অ্যাকাউন্টিং ভূমিকায় উৎকর্ষতার জন্য আর্থিক সরঞ্জাম এবং অ্যাকাউন্টিং সিস্টেমে দক্ষতা অর্জন করুন।"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accountingTools.map((tool) => {
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

export default AccountingSimulation;
