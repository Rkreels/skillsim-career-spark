import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EarlyAccessBanner } from '@/components/EarlyAccessBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';

// Icons
import { Briefcase, GraduationCap, Handshake, Users, ChartBar, ChartLine } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  const careers = [
    {
      icon: <Briefcase className="h-8 w-8 text-skill-blue" />,
      titleEn: "Finance Professionals: From ledger to leadership",
      titleBn: "ফাইন্যান্স পেশাদার: লেজার থেকে নেতৃত্বে",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-skill-green" />,
      titleEn: "Project Leads: Nail your next rollout with confidence",
      titleBn: "প্রজেক্ট লিড: আত্মবিশ্বাসের সাথে আপনার পরবর্তী রোলআউট সম্পন্ন করুন",
    },
    {
      icon: <Users className="h-8 w-8 text-skill-blue-dark" />,
      titleEn: "HR & Talent Teams: Streamline processes & boost engagement",
      titleBn: "এইচআর ও ট্যালেন্ট টিম: প্রক্রিয়া সহজ করুন এবং এনগেজমেন্ট বাড়ান",
    },
    {
      icon: <ChartLine className="h-8 w-8 text-skill-green-dark" />,
      titleEn: "Supply Chain Experts: Optimize flows like an industry pro",
      titleBn: "সাপ্লাই চেইন এক্সপার্ট: একজন ইন্ডাস্ট্রি প্রফেশনালের মতো ফ্ল�� অপটিমাইজ করুন",
    },
    {
      icon: <Handshake className="h-8 w-8 text-purple-500" />,
      titleEn: "Sales & BizDev Pros: Turn data into deals",
      titleBn: "সেলস ও বিজনেস ডেভেলপমেন্ট প্রো: ডেটা থেকে ডিল তৈরি করুন",
    },
    {
      icon: <ChartBar className="h-8 w-8 text-orange-500" />,
      titleEn: "Aspiring Analysts & Developers: Power data-driven decisions",
      titleBn: "উচ্চাকাঙ্ক্ষী বিশ্লেষক ও ডেভেলপার: ডেটা-চালিত সিদ্ধান্ত নিন",
    },
  ];

  const steps = [
    {
      icon: <Briefcase className="h-8 w-8 text-skill-blue" />,
      titleEn: "Choose Your Career Path",
      titleBn: "আপনার ক্যারিয়ার পথ বেছে নিন",
      descriptionEn: "Select a learning track tailored to your professional goals",
      descriptionBn: "আপনার পেশাদার লক্ষ্যের জন্য নির্ধারিত একটি লার্নিং ট্র্যাক নির্বাচন করুন",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-skill-green" />,
      titleEn: "Master Role-Specific Scenarios",
      titleBn: "ভূমিকা-নির্দিষ্ট পরিস্থিতি মাস্টার করুন",
      descriptionEn: "Practice with real-world situations you'll face in your role",
      descriptionBn: "আপনার ভূমিকায় যে বাস্তব পরিস্থিতির মুখোমুখি হবেন তা নিয়ে অনুশীলন করুন",
    },
    {
      icon: <ChartLine className="h-8 w-8 text-purple-500" />,
      titleEn: "Earn Career-Boosting Credentials",
      titleBn: "ক্যারিয়ার-বৃদ্ধিকারী ক্রেডেনশিয়াল অর্জন করুন",
      descriptionEn: "Get recognized certifications that validate your expertise",
      descriptionBn: "আপনার দক্ষতা যাচাই করে এমন স্বীকৃত সার্টিফিকেশন পান",
    },
  ];

  const benefits = [
    {
      titleEn: "Become a go-to expert in your field—aligned to industry best practices",
      titleBn: "আপনার ক্ষেত্রে একজন বিশেষজ্ঞ হয়ে উঠুন—ইন্ডাস্ট্রি সেরা অনুশীলনের সাথে সামঞ্জস্যপূর্ণ",
    },
    {
      titleEn: "Bridge the gap between theory and on-the-job execution",
      titleBn: "তত্ত্ব এবং কাজের-ক্ষেত্রে বাস্তবায়নের মধ্যের ব্যবধান দূর করুন",
    },
    {
      titleEn: "Earn credentials employers recognize, customized to your role",
      titleBn: "নিয়োগকর্তারা স্বীকৃত, আপনার ভূমিকার জন্য কাস্টমাইজড ক্রেডেনশিয়াল অর্জন করুন",
    },
  ];

  const whyNow = [
    {
      titleEn: "Stay Competitive in Bangladesh's Fast-Growing Economy",
      titleBn: "বাংলাদেশের দ্রুত বর্ধনশীল অর্থনীতিতে প্রতিযোগী থাকুন",
      descriptionEn: "Get the digital skills that local and global employers are looking for.",
      descriptionBn: "স্থানীয় এবং বৈশ্বিক নিয়োগকর্তারা যে ডিজিটাল দক্ষতা খুঁজছেন তা অর্জন করুন।",
    },
    {
      titleEn: "Bridge the Tech Skill Gap in Your Industry",
      titleBn: "আপনার শিল্পের প্রযুক্তিগত দক্ষতার ফাঁক দূর করুন",
      descriptionEn: "Learn exactly what you need to advance your career.",
      descriptionBn: "আপনার ক্যারিয়ার এগিয়ে নিতে ঠিক যা প্রয়োজন তা শিখুন।",
    },
    {
      titleEn: "Earn Certifications That Employers Trust",
      titleBn: "নিয়োগকর্তারা যেসব সার্টিফিকেট বিশ্বাস করে, সেগুলো অর্জন করুন",
      descriptionEn: "Showcase verifiable skills on your resume and LinkedIn.",
      descriptionBn: "আপনার রেজুমে এবং লিংকডইনে যাচাইযোগ্য দক্ষতা প্রদর্শন করুন।",
    },
  ];

  const pricing = [
    {
      titleEn: "Free",
      titleBn: "ফ্রি",
      priceEn: "$0",
      priceBn: "৳0",
      featuresEn: [
        "Access to 3 basic simulations",
        "Community support",
        "Limited progress tracking",
      ],
      featuresBn: [
        "৩টি মৌলিক সিমুলেশনে অ্যাক্সেস",
        "কমিউনিটি সাপোর্ট",
        "সীমিত অগ্রগতি ট্র্যাকিং",
      ],
      ctaEn: "Get Started",
      ctaBn: "শুরু করুন",
      highlight: false,
    },
    {
      titleEn: "Pro",
      titleBn: "প্রো",
      priceEn: "$29/month",
      priceBn: "৳999/মাস",
      featuresEn: [
        "Full access to all simulations",
        "Personalized learning path",
        "Certificate upon completion",
        "Priority support",
      ],
      featuresBn: [
        "সব সিমুলেশনে সম্পূর্ণ অ্যাক্সেস",
        "ব্যক্তিগতকৃত শেখার পথ",
        "সমাপ্তির পর সার্টিফিকেট",
        "অগ্রাধিকার সহায়তা",
      ],
      ctaEn: "Go Pro",
      ctaBn: "প্রো নিন",
      highlight: true,
      badge: {
        en: "Bangladesh Special Rate",
        bn: "বাংলাদেশ স্পেশাল রেট",
      },
    },
    {
      titleEn: "Institutional",
      titleBn: "প্রাতিষ্ঠানিক",
      priceEn: "Custom",
      priceBn: "কাস্টম",
      featuresEn: [
        "Everything in Pro",
        "Team management",
        "Progress analytics",
        "Custom simulations",
        "Dedicated account manager",
      ],
      featuresBn: [
        "প্রো-তে থাকা সবকিছু",
        "টিম ম্যানেজমেন্ট",
        "অগ্রগতি বিশ্লেষণ",
        "কাস্টম সিমুলেশন",
        "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার",
      ],
      ctaEn: "Contact Sales",
      ctaBn: "সেলস এর সাথে যোগাযোগ করুন",
      highlight: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <EarlyAccessBanner />
      <Navbar />
      
      <main className="flex-grow relative">
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-skill-blue to-skill-green bg-clip-text text-transparent">
              {t(
                "Accelerate Your Career with Industry-Standard Skills",
                "ইন্ডাস্ট্রি-স্ট্যান্ডার্ড দক্ষতার মাধ্যমে আপনার ক্যারিয়ার ত্বরান্বিত করুন"
              )}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              {t(
                "From classroom to corner office—build the real-world expertise top employers demand.",
                "ক্লাসরুম থেকে কর্নার অফিস—শীর্ষ নিয়োগকর্তারা যে বাস্তব দক্ষতা চান তা গড়ে তুলুন।"
              )}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
              {t(
                "Tailored learning paths for every role: finance, HR, product, operations, sales & more.",
                "প্রতিটি ভূমিকার জন্য নির্ধারিত শেখার পথ: ফাইন্যান্স, এইচআর, প্রোডাক্ট, অপারেশনস, সেলস এবং আরও অনেক কিছু।"
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link to="/signup">
                <Button size="lg" className="skill-button-primary">
                  {t("Start Your Career Journey", "আপনার ক্যারিয়ার যাত্রা শুরু করুন")}
                </Button>
              </Link>
              <Link to="/early-access">
                <Button size="lg" variant="outline" className="skill-button-secondary">
                  {t("Get Early Access", "আর্লি অ্যাক্সেস পান")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Why SkillSim Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("Why SkillSim Is Different", "কেন SkillSim আলাদা")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 mt-1">
                    <Check className="h-6 w-6 text-skill-green" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t(benefit.titleEn, benefit.titleBn)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Who Should Enroll Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("Who Should Enroll?", "কাদের ভর্তি হওয়া উচিত?")}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {careers.map((career, index) => (
                <Card key={index} className="skill-card">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      {career.icon}
                    </div>
                    <h3 className="font-medium">
                      {t(career.titleEn, career.titleBn)}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("How It Works", "কিভাবে কাজ করে")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t(step.titleEn, step.titleBn)}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {t(step.descriptionEn, step.descriptionBn)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Now Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("Why Now?", "কেন এখন?")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {whyNow.map((item, index) => (
                <Card key={index} className="skill-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      {t(item.titleEn, item.titleBn)}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      {t(item.descriptionEn, item.descriptionBn)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {t("Pricing", "মূল্য")}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, index) => (
                <Card key={index} className={`skill-card ${plan.highlight ? 'border-2 border-skill-blue ring-4 ring-skill-blue/20' : ''}`}>
                  <CardContent className="p-6">
                    {plan.badge && (
                      <div className="mb-4">
                        <span className="skill-badge bg-skill-green/20 text-skill-green">
                          {t(plan.badge.en, plan.badge.bn)}
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">
                      {t(plan.titleEn, plan.titleBn)}
                    </h3>
                    <p className="text-3xl font-bold mb-6">
                      {t(plan.priceEn, plan.priceBn)}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {plan.featuresEn.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-skill-green mr-2 shrink-0 mt-0.5" />
                          <span>{t(feature, plan.featuresBn[featureIndex])}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={plan.highlight ? 'w-full skill-button-primary' : 'w-full'}>
                      {t(plan.ctaEn, plan.ctaBn)}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
