
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, BarChart3, FileText, Keyboard, FolderOpen } from 'lucide-react';

const ProductSimulation = () => {
  const { t } = useLanguage();

  const productTools = [
    {
      id: 'roadmap-app',
      title: 'Product Roadmap',
      titleBn: 'প্রোডাক্ট রোডম্যাপ',
      icon: Target,
      color: 'text-blue-600',
      description: 'Plan and track product development',
      descriptionBn: 'প্রোডাক্ট ডেভেলপমেন্ট পরিকল্পনা এবং ট্র্যাক করুন'
    },
    {
      id: 'analytics',
      title: 'Product Analytics',
      titleBn: 'প্রোডাক্ট অ্যানালিটিক্স',
      icon: BarChart3,
      color: 'text-green-600',
      description: 'Analyze product performance and metrics',
      descriptionBn: 'প্রোডাক্ট পারফরম্যান্স এবং মেট্রিক্স বিশ্লেষণ করুন'
    },
    {
      id: 'document-management',
      title: 'Document Management',
      titleBn: 'ডকুমেন্ট ম্যানেজমেন্ট',
      icon: FolderOpen,
      color: 'text-purple-600',
      description: 'Organize product documentation and specs',
      descriptionBn: 'প্রোডাক্ট ডকুমেন্টেশন এবং স্পেক সংগঠিত করুন'
    },
    {
      id: 'excel',
      title: 'Excel',
      titleBn: 'এক্সেল',
      icon: FileText,
      color: 'text-orange-600',
      description: 'Product data analysis and reporting',
      descriptionBn: 'প্রোডাক্ট ডেটা বিশ্লেষণ এবং রিপোর্টিং'
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
              {t("Product & Innovation Simulations", "প্রোডাক্ট এবং ইনোভেশন সিমুলেশন")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                "Practice with product management tools and innovation processes.",
                "প্রোডাক্ট ম্যানেজমেন্ট সরঞ্জাম এবং ইনোভেশন প্রক্রিয়া অনুশীলন করুন।"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productTools.map((tool) => {
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

export default ProductSimulation;
