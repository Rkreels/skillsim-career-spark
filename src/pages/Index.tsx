
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
import { Book, Check, User } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();

  const careers = [
    {
      icon: <User className="h-8 w-8 text-skill-blue" />,
      titleEn: "Accountants & Finance Analysts",
      titleBn: "হিসাবরক্ষক ও ফাইন্যান্স বিশ্লেষক",
    },
    {
      icon: <User className="h-8 w-8 text-skill-green" />,
      titleEn: "Project Managers & PMO Leads",
      titleBn: "প্রজেক্ট ম্যানেজার ও পিএমও লিড",
    },
    {
      icon: <User className="h-8 w-8 text-skill-blue-dark" />,
      titleEn: "HR Managers & Recruiters",
      titleBn: "এইচআর ম্যানেজার ও নিয়োগকারী",
    },
    {
      icon: <User className="h-8 w-8 text-skill-green-dark" />,
      titleEn: "Supply Chain & Operations Pros",
      titleBn: "সাপ্লাই চেইন ও অপারেশনস পেশাজীবী",
    },
    {
      icon: <User className="h-8 w-8 text-purple-500" />,
      titleEn: "Sales & Biz Dev Reps",
      titleBn: "সেলস ও বিজনেস ডেভেলপমেন্ট প্রতিনিধি",
    },
    {
      icon: <User className="h-8 w-8 text-orange-500" />,
      titleEn: "Aspiring Developers & Data Analysts",
      titleBn: "ভবিষ্যৎ ডেভেলপার ও ডেটা বিশ্লেষক",
    },
  ];

  const steps = [
    {
      icon: <Book className="h-8 w-8 text-skill-blue" />,
      titleEn: "Pick Your Software",
      titleBn: "সফটওয়্যার বেছে নিন",
      descriptionEn: "Browse our library of industry-standard software simulations.",
      descriptionBn: "আমাদের ইন্ডাস্ট্রি-স্ট্যান্ডার্ড সফটওয়্যার সিমুলেশন লাইব্রেরি ব্রাউজ করুন।",
    },
    {
      icon: <Book className="h-8 w-8 text-skill-green" />,
      titleEn: "Complete Real-World Tasks",
      titleBn: "বাস্তব কাজ সম্পন্ন করুন",
      descriptionEn: "Practice with guided hands-on simulations of real software.",
      descriptionBn: "আসল সফটওয়্যারের গাইডেড হাতে-কলমে সিমুলেশন দিয়ে অনুশীলন করুন।",
    },
    {
      icon: <Book className="h-8 w-8 text-purple-500" />,
      titleEn: "Earn Badges & Certificates",
      titleBn: "ব্যাজ ও সার্টিফিকেট অর্জন করুন",
      descriptionEn: "Show off your skills with recognized credentials.",
      descriptionBn: "স্বীকৃত ক্রেডেনশিয়াল দিয়ে আপনার দক্ষতা প্রদর্শন করুন।",
    },
  ];

  const benefits = [
    {
      titleEn: "20% Expert Tutorials, 40% Interactive Simulations, 40% Real-World Experience",
      titleBn: "২০% টিউটোরিয়াল, ৪০% ইন্টারঅ্যাক্টিভ সিমুলেশন, ৪০% বাস্তব অভিজ্ঞতা",
    },
    {
      titleEn: "Not just videos or bootcamps—SkillSim blends theory, practice, and real tasks for true mastery.",
      titleBn: "শুধু ভিডিও বা বুটক্যাম্প নয়—SkillSim তত্ত্ব, অনুশীলন ও বাস্তব কাজ একত্রিত করে প্রকৃত দক্ষতা দেয়।",
    },
    {
      titleEn: "Revolutionizing learning with a blended model that drives real career growth.",
      titleBn: "মিশ্র মডেলের মাধ্যমে শেখার ধারাকে নতুন দিগন্তে নিয়ে যাচ্ছে।",
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
                "Master the Tools That Power Modern Careers",
                "যেসব সফটওয়্যার চালায় আপনার ক্যারিয়ার সাফল্য"
              )}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              {t(
                "From students to CEOs—get hands-on training in QuickBooks, Jira, SAP & more.",
                "শিক্ষার্থী থেকে সিইও সবাই-এর জন্য—QuickBooks, Jira, SAP ও আরও অনেক সফটওয়্যারে হাতে-কলমে প্রশিক্ষণ।"
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link to="/signup">
                <Button size="lg" className="skill-button-primary">
                  {t("Start Learning Free", "বিনামূল্যে শিখতে শুরু করুন")}
                </Button>
              </Link>
              <Link to="/software">
                <Button size="lg" variant="outline" className="skill-button-secondary">
                  {t("Browse Software", "সফটওয়্যার ব্রাউজ করুন")}
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
