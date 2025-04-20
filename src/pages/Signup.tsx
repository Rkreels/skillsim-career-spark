
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Signup = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-skill-blue to-skill-green rounded-2xl p-8 text-white h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6">
                  {t("Join the Revolution in Professional Development", "পেশাদার বিকাশের বিপ্লবে যোগ দিন")}
                </h2>
                <p className="mb-6">
                  {t(
                    "SkillSim is changing how professionals master industry-standard skills with our unique blend of tutorials, interactive simulations, and real-world experience.",
                    "SkillSim টিউটোরিয়াল, ইন্টারঅ্যাকটিভ সিমুলেশন, এবং বাস্তব অভিজ্ঞতার অনন্য মিশ্রণের মাধ্যমে পেশাদাররা কিভাবে ইন্ডাস্ট্রি-স্ট্যান্ডার্ড দক্ষতা আয়ত্ত করে তা পরিবর্তন করছে।"
                  )}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold">20%</div>
                    <div className="text-sm">{t("Expert Tutorials", "বিশেষজ্ঞ টিউটোরিয়াল")}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold">40%</div>
                    <div className="text-sm">{t("Interactive Practice", "ইন্টারঅ্যাক্টিভ অনুশীলন")}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold">40%</div>
                    <div className="text-sm">{t("Real-World Tasks", "বাস্তব কাজ")}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm">{t("Career Growth", "ক্যারিয়ার বৃদ্ধি")}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <Card className="skill-card h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    {t("Create your account", "আপনার অ্যাকাউন্ট তৈরি করুন")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("Full Name", "পূর্ণ নাম")}</Label>
                        <Input
                          id="name"
                          placeholder={t("Enter your full name", "আপনার পূর্ণ নাম লিখুন")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("Email", "ইমেইল")}</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={t("Enter your email", "আপনার ইমেইল লিখুন")}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">{t("Password", "পাসওয়ার্ড")}</Label>
                        <Input
                          id="password"
                          type="password"
                          placeholder={t("Create a password", "একটি পাসওয়ার্ড তৈরি করুন")}
                        />
                      </div>
                      <Button className="w-full skill-button-primary">
                        {t("Sign Up", "সাইন আপ")}
                      </Button>
                    </div>
                  </form>
                  
                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
                          {t("Or sign up with", "অথবা সাইন আপ করুন")}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <Button variant="outline">Google</Button>
                      <Button variant="outline">LinkedIn</Button>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center text-sm">
                    <span className="text-gray-600 dark:text-gray-400">
                      {t("Already have an account?", "ইতিমধ্যে একাউন্ট আছে?")}
                    </span>
                    {' '}
                    <Link
                      to="/login"
                      className="text-skill-blue font-medium hover:underline"
                    >
                      {t("Log in", "লগ ইন করুন")}
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Signup;
