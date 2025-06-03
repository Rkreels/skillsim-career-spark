
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Users, FileText, Keyboard, ShoppingCart } from 'lucide-react';

const SalesSimulation = () => {
  const { t } = useLanguage();

  const salesTools = [
    {
      id: 'pos',
      title: 'Point of Sales (POS)',
      titleBn: 'পয়েন্ট অফ সেলস (POS)',
      icon: CreditCard,
      color: 'text-blue-600',
      description: 'Practice sales transactions and payment processing',
      descriptionBn: 'বিক্রয় লেনদেন এবং পেমেন্ট প্রক্রিয়াকরণ অনুশীলন করুন'
    },
    {
      id: 'student-consulting-crm',
      title: 'Student Consulting CRM',
      titleBn: 'স্টুডেন্ট কনসালটিং CRM',
      icon: Users,
      color: 'text-green-600',
      description: 'Customer relationship management for education consulting',
      descriptionBn: 'শিক্ষা পরামর্শের জন্য গ্রাহক সম্পর্ক ব্যবস্থাপনা'
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Platform',
      titleBn: 'ই-কমার্স প্ল্যাটফর্ম',
      icon: ShoppingCart,
      color: 'text-purple-600',
      description: 'Online sales and e-commerce management',
      descriptionBn: 'অনলাইন বিক্রয় এবং ই-কমার্স ব্যবস্থাপনা'
    },
    {
      id: 'excel',
      title: 'Excel',
      titleBn: 'এক্সেল',
      icon: FileText,
      color: 'text-orange-600',
      description: 'Sales data analysis and reporting',
      descriptionBn: 'বিক্রয় ডেটা বিশ্লেষণ এবং রিপোর্টিং'
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
              {t("Sales Simulations", "বিক্রয় সিমুলেশন")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                "Practice with sales tools and CRM systems to enhance your sales performance.",
                "আপনার বিক্রয় কর্মক্ষমতা বৃদ্ধির জন্য বিক্রয় সরঞ্জাম এবং CRM সিস্টেম অনুশীলন করুন।"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salesTools.map((tool) => {
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

export default SalesSimulation;
