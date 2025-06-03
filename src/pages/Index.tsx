
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EarlyAccessBanner } from '@/components/EarlyAccessBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import AnimatedBackground from '@/components/AnimatedBackground';

// Icons
import { Briefcase, GraduationCap, Handshake, Users, ChartBar, ChartLine, Check, Info, Crown, Star } from 'lucide-react';

const Index = () => {
  const { t, language } = useLanguage();

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
      titleBn: "সাপ্লাই চেইন এক্সপার্ট: একজন ইন্ডাস্ট্রি প্রফেশনালের মতো ফ্লো অপটিমাইজ করুন",
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
      titleBn: "নিয়োগকর্তারা যেসব সার্টিফিকেট বিশ্বাস করে, সেগুলো অর্জন করুন",
      descriptionEn: "Showcase verifiable skills on your resume and LinkedIn.",
      descriptionBn: "আপনার রেজুমে এবং লিংকডইনে যাচাইযোগ্য দক্ষতা প্রদর্শন করুন।",
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

  const pricingEn = [
    { 
      plan: "Student", 
      yearly: "$79", 
      lifetime: "$199", 
      access: "Role-based access",
      features: ["Basic certifications", "Essential tools", "Community support"],
      tooltip: "University email required"
    },
    { 
      plan: "Professional", 
      yearly: "$149", 
      lifetime: "$299", 
      access: "Role-based access",
      features: ["Advanced certifications", "Premium tools", "Priority support", "Career coaching"],
      tooltip: ""
    },
    { 
      plan: "Executive", 
      yearly: "$249", 
      lifetime: "$499", 
      access: "Master access to all roles",
      features: ["All certifications", "Complete toolset", "VIP support", "1-on-1 mentorship", "Industry networking"],
      tooltip: ""
    },
    { 
      plan: "Institutional", 
      yearly: "—", 
      lifetime: "Custom", 
      access: "Custom access control",
      features: ["Bulk licenses", "Admin dashboard", "Custom branding", "Dedicated success manager"],
      tooltip: "Corporate or EDU B2B"
    },
  ];

  const pricingBn = [
    { 
      plan: "স্টুডেন্ট", 
      yearly: "৳1,490", 
      lifetime: "৳2,990", 
      access: "ভূমিকা-ভিত্তিক অ্যাক্সেস",
      features: ["মৌলিক সার্টিফিকেশন", "প্রয়োজনীয় টুলস", "কমিউনিটি সাপোর্ট"],
      tooltip: "বিশ্ববিদ্যালয়ের ইমেইল প্রয়োজন"
    },
    { 
      plan: "প্রফেশনাল", 
      yearly: "৳2,990", 
      lifetime: "৳4,990", 
      access: "ভূমিকা-ভিত্তিক অ্যাক্সেস",
      features: ["উন্নত সার্টিফিকেশন", "প্রিমিয়াম টুলস", "অগ্রাধিকার সাপোর্ট", "ক্যারিয়ার কোচিং"],
      tooltip: ""
    },
    { 
      plan: "এক্সিকিউটিভ", 
      yearly: "৳5,990", 
      lifetime: "৳8,990", 
      access: "সব ভূমিকায় মাস্টার অ্যাক্সেস",
      features: ["সকল সার্টিফিকেশন", "সম্পূর্ণ টুলসেট", "ভিআইপি সাপোর্ট", "১-অন-১ মেন্টরশিপ", "ইন্ডাস্ট্রি নেটওয়ার্কিং"],
      tooltip: ""
    },
    { 
      plan: "ইন্সটিউশনাল", 
      yearly: "—", 
      lifetime: "কাস্টম", 
      access: "কাস্টম অ্যাক্সেস কন্ট্রোল",
      features: ["বাল্ক লাইসেন্স", "অ্যাডমিন ড্যাশবোর্ড", "কাস্টম ব্র্যান্ডিং", "ডেডিকেটেড সাকসেস ম্যানেজার"],
      tooltip: "বিশ্ববিদ্যালয়, প্রতিষ্ঠান"
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <EarlyAccessBanner />
      <Navbar />
      
      <div className="relative flex-grow overflow-visible">
        <AnimatedBackground />
        
        <main className="relative z-10">
          <section className="py-16 md:py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-6 text-center relative">
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
                <Link to="/select-role">
                  <Button size="lg" className="skill-button-primary">
                    {t("Start Your Career Journey", "আপনার ক্যারিয়ার যাত্রা শুরু করুন")}
                  </Button>
                </Link>
                <Link to="/simulation">
                  <Button size="lg" variant="outline" className="skill-button-secondary">
                    {t("Try a Simple Simulation", "একটি সহজ সিমুলেশন চেষ্টা করুন")}
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-gradient-to-br from-skill-blue to-skill-green text-white relative z-10">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {t(
                      "Join the Revolution in Professional Growth",
                      "পেশাদার বৃদ্ধির বিপ্লবে যোগ দিন"
                    )}
                  </h2>
                  <p className="text-lg mb-6">
                    {t(
                      "SkillSim is changing how professionals learn industry-standard tools and processes with our unique blend of tutorials, interactive simulations, and real-world experience.",
                      "SkillSim টিউটোরিয়াল, ইন্টারঅ্যাক্টিভ সিমুলেশন, এবং বাস্তব অভিজ্ঞতার অনন্য মিশ্রণের মাধ্যমে পেশাদাররা কিভাবে ইন্ডাস্ট্রি-স্ট্যান্ডার্ড টুল এবং প্রক্রিয়া শিখে তা পরিবর্তন করছে।"
                    )}
                  </p>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">20%</div>
                      <div className="text-sm">{t("Expert Tutorials", "বিশেষজ্ঞ টিউটোরিয়াল")}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">40%</div>
                      <div className="text-sm">{t("Interactive Practice", "ইন্টারঅ্যাক্টিভ অনুশীলন")}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">40%</div>
                      <div className="text-sm">{t("Real-World Tasks", "বাস্তব কাজ")}</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold">100%</div>
                      <div className="text-sm">{t("Career Growth", "ক্যারিয়ার বৃদ্ধি")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-16 bg-gray-50 dark:bg-gray-900 relative z-10" id="why-skillsim">
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
          
          <section className="py-16 relative z-10" id="careers">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t("Who Should Enroll?", "কাদের ভর্তি হওয়া উচিত?")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {careers.map((career, index) => (
                  <Card key={index} className="skill-card hover:shadow-lg transition-shadow">
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
          
          <section className="py-16 bg-gray-50 dark:bg-gray-900 relative z-10" id="how-it-works">
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
          
          <section className="py-16 relative z-10" id="why-now">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t("Why Now?", "কেন এখন?")}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {whyNow.map((item, index) => (
                  <Card key={index} className="skill-card hover:shadow-lg transition-shadow">
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
          
          <section className="py-16 bg-gray-50 dark:bg-gray-900 relative z-10" id="pricing">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t("Pricing", "মূল্য")}
              </h2>
              
              <div className="max-w-6xl mx-auto">
                <Card className="skill-card">
                  <CardContent className="p-6">
                    <TooltipProvider>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="font-bold text-lg">
                              {t("Plan", "প্ল্যান")}
                            </TableHead>
                            <TableHead className="font-bold text-lg text-center">
                              {t("Yearly", "বার্ষিক")}
                            </TableHead>
                            <TableHead className="font-bold text-lg text-center">
                              {t("Lifetime", "লাইফটাইম")}
                            </TableHead>
                            <TableHead className="font-bold text-lg text-center">
                              {t("Access Level", "অ্যাক্সেস লেভেল")}
                            </TableHead>
                            <TableHead className="font-bold text-lg text-center">
                              {t("Key Features", "মূল বৈশিষ্ট্য")}
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {(language === 'bn' ? pricingBn : pricingEn).map((plan, index) => (
                            <TableRow key={index}>
                              <TableCell className="font-semibold">
                                <div className="flex items-center gap-2">
                                  {plan.plan}
                                  {plan.tooltip && (
                                    <Tooltip>
                                      <TooltipTrigger>
                                        <Info className="h-4 w-4 text-blue-500 cursor-help" />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <p>{plan.tooltip}</p>
                                      </TooltipContent>
                                    </Tooltip>
                                  )}
                                  {index === 2 && <Crown className="h-4 w-4 text-yellow-500" />}
                                </div>
                              </TableCell>
                              <TableCell className="text-center font-medium">{plan.yearly}</TableCell>
                              <TableCell className="text-center font-medium">{plan.lifetime}</TableCell>
                              <TableCell className="text-center">
                                <div className="flex items-center justify-center gap-1">
                                  {index === 2 && <Star className="h-4 w-4 text-yellow-500" />}
                                  <span className="text-sm">{plan.access}</span>
                                </div>
                              </TableCell>
                              <TableCell className="text-center">
                                <ul className="text-sm space-y-1">
                                  {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex} className="flex items-center justify-start gap-1">
                                      <Check className="h-3 w-3 text-green-500 flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TooltipProvider>
                  </CardContent>
                </Card>
                
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-blue-800 dark:text-blue-200 text-center font-medium">
                    <strong>{t("Important Notice:", "গুরুত্বপূর্ণ নোটিশ:")}</strong>{" "}
                    {t(
                      "Student package requires signup with a university email address.",
                      "স্টুডেন্ট প্যাকেজের জন্য বিশ্ববিদ্যালয়ের ইমেইল ঠিকানা দিয়ে সাইন আপ করতে হবে।"
                    )}
                  </p>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/select-role">
                    <Button size="lg" className="skill-button-primary mr-4">
                      {t("Get Started", "শুরু করুন")}
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="skill-button-secondary">
                      {t("Contact Sales", "সেলস এর সাথে যোগাযোগ করুন")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
