
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, CreditCard } from 'lucide-react';

const Simulation = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {t("Try Our Simulations", "আমাদের সিমুলেশন চেষ্টা করুন")}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t(
                "Experience our interactive tools with these simple simulations. Get a taste of what SkillSim offers.",
                "এই সহজ সিমুলেশনগুলির সাথে আমাদের ইন্টারঅ্যাক্টিভ টুলস অভিজ্ঞতা করুন। SkillSim কী অফার করে তার স্বাদ পান।"
              )}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                  <span className="text-xl">
                    {t("Point of Sales", "পয়েন্ট অফ সেলস")}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t(
                    "Experience a complete POS system simulation. Learn to process transactions, manage inventory, and handle customer interactions.",
                    "একটি সম্পূর্ণ POS সিস্টেম সিমুলেশন অভিজ্ঞতা করুন। লেনদেন প্রক্রিয়া করা, ইনভেন্টরি পরিচালনা এবং গ্রাহক ইন্টারঅ্যাকশন পরিচালনা করতে শিখুন।"
                  )}
                </p>
                <Button className="w-full">
                  {t("Launch POS Simulation", "POS সিমুলেশন চালু করুন")}
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <ShoppingCart className="h-8 w-8 text-green-600" />
                  <span className="text-xl">
                    {t("E-commerce", "ই-কমার্স")}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {t(
                    "Explore e-commerce management tools. Learn about product listing, order management, and customer service workflows.",
                    "ই-কমার্স ম্যানেজমেন্ট টুলস এক্সপ্লোর করুন। প্রোডাক্ট তালিকা, অর্ডার ম্যানেজমেন্ট এবং কাস্টমার সার্ভিস ওয়ার্কফ্লো সম্পর্কে জানুন।"
                  )}
                </p>
                <Button className="w-full">
                  {t("Launch E-commerce Simulation", "ই-কমার্স সিমুলেশন চালু করুন")}
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {t(
                "Want access to the full platform with role-specific tools and certifications?",
                "ভূমিকা-নির্দিষ্ট টুলস এবং সার্টিফিকেশন সহ সম্পূর্ণ প্ল্যাটফর্মে অ্যাক্সেস চান?"
              )}
            </p>
            <Link to="/select-role">
              <Button size="lg" className="skill-button-primary">
                {t("Join SkillSim", "SkillSim এ যোগ দিন")}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Simulation;
