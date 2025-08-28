
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
// Icons
import { Briefcase, GraduationCap, Handshake, Users, ChartBar, ChartLine, Check, Info, Crown, Star, PlayCircle, Award, Target, Zap, Shield, Globe, TrendingUp, Clock, BookOpen, MessageSquare } from 'lucide-react';

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
      
      <div className="relative flex-grow">        
        <main className="relative">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-background/95 to-primary/5">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                      {t("Master", "মাস্টার করুন")} 
                      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> 
                        {t(" Industry Skills", " ইন্ডাস্ট্রি দক্ষতা")}
                      </span>
                      <br />
                      {t("Accelerate Your Career", "আপনার ক্যারিয়ার ত্বরান্বিত করুন")}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                      {t(
                        "Professional simulations and real-world scenarios to build expertise that employers demand. From finance to operations, master the tools that drive success.",
                        "পেশাদার সিমুলেশন এবং বাস্তব পরিস্থিতির মাধ্যমে নিয়োগকর্তাদের চাহিদার দক্ষতা গড়ুন। ফাইন্যান্স থেকে অপারেশনস পর্যন্ত, সফলতার জন্য প্রয়োজনীয় টুলস মাস্টার করুন।"
                      )}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/login">
                      <Button size="lg" className="w-full sm:w-auto">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        {t("Start Learning Now", "এখনই শিখতে শুরু করুন")}
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={() => scrollToSection('demo')}>
                      <BookOpen className="mr-2 h-5 w-5" />
                      {t("Watch Demo", "ডেমো দেখুন")}
                    </Button>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      {t("Industry Certified", "ইন্ডাস্ট্রি সার্টিফাইড")}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      {t("10K+ Professionals", "১০ হাজার+ পেশাদার")}
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-primary" />
                      {t("Global Recognition", "বিশ্বব্যাপী স্বীকৃতি")}
                    </div>
                  </div>
                </div>

                <div className="lg:pl-8">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-primary/20 rounded-lg">
                            <TrendingUp className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold">95%</p>
                            <p className="text-sm text-muted-foreground">{t("Success Rate", "সফলতার হার")}</p>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-secondary/20 rounded-lg">
                            <Clock className="h-6 w-6 text-secondary" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold">30%</p>
                            <p className="text-sm text-muted-foreground">{t("Faster Learning", "দ্রুত শিক্ষা")}</p>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-accent/20 rounded-lg">
                            <Target className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold">500+</p>
                            <p className="text-sm text-muted-foreground">{t("Skills Covered", "দক্ষতা কভার")}</p>
                          </div>
                        </div>
                      </Card>
                      <Card className="p-6 bg-gradient-to-br from-destructive/10 to-destructive/5 border-destructive/20">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-destructive/20 rounded-lg">
                            <Shield className="h-6 w-6 text-destructive" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold">100%</p>
                            <p className="text-sm text-muted-foreground">{t("Job Ready", "কাজের জন্য প্রস্তুত")}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t("Why Choose SkillSim", "কেন SkillSim বেছে নিবেন")}
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  {t(
                    "Experience learning that mirrors real workplace scenarios with cutting-edge simulation technology",
                    "অত্যাধুনিক সিমুলেশন প্রযুক্তির মাধ্যমে বাস্তব কর্মক্ষেত্রের পরিস্থিতির মতো শেখার অভিজ্ঞতা নিন"
                  )}
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                      <Zap className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{t("Interactive Simulations", "ইন্টারঅ্যাক্টিভ সিমুলেশন")}</h3>
                    <p className="text-muted-foreground">
                      {t(
                        "Practice with realistic software environments that mirror what you'll use at work",
                        "কর্মক্ষেত্রে ব্যবহৃত সফটওয়্যার পরিবেশের মতো বাস্তবসম্মত পরিবেশে অনুশীলন করুন"
                      )}
                    </p>
                  </div>
                </Card>

                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="space-y-4">
                    <div className="p-3 bg-secondary/10 rounded-lg w-fit">
                      <Award className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">{t("Industry Certifications", "ইন্ডাস্ট্রি সার্টিফিকেশন")}</h3>
                    <p className="text-muted-foreground">
                      {t(
                        "Earn recognized credentials that validate your skills to employers worldwide",
                        "বিশ্বব্যাপী নিয়োগকর্তাদের কাছে আপনার দক্ষতা প্রমাণ করে এমন স্বীকৃত সার্টিফিকেশন অর্জন করুন"
                      )}
                    </p>
                  </div>
                </Card>

                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="space-y-4">
                    <div className="p-3 bg-accent/10 rounded-lg w-fit">
                      <Target className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{t("Role-Based Learning", "ভূমিকা-ভিত্তিক শিক্ষা")}</h3>
                    <p className="text-muted-foreground">
                      {t(
                        "Customized learning paths designed specifically for your career goals",
                        "আপনার ক্যারিয়ার লক্ষ্যের জন্য বিশেষভাবে ডিজাইন করা কাস্টমাইজড শেখার পথ"
                      )}
                    </p>
                  </div>
                </Card>

                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg w-fit">
                      <Clock className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{t("Flexible Learning", "নমনীয় শিক্ষা")}</h3>
                    <p className="text-muted-foreground">
                      {t(
                        "Learn at your own pace with 24/7 access to all courses and simulations",
                        "সকল কোর্স এবং সিমুলেশনে ২৪/৭ অ্যাক্সেস সহ নিজের গতিতে শিখুন"
                      )}
                    </p>
                  </div>
                </Card>

                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="space-y-4">
                    <div className="p-3 bg-secondary/10 rounded-lg w-fit">
                      <MessageSquare className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold">{t("Expert Mentorship", "বিশেষজ্ঞ পরামর্শ")}</h3>
                    <p className="text-muted-foreground">
                      {t(
                        "Get guidance from industry experts with years of practical experience",
                        "বছরের পর বছর ব্যবহারিক অভিজ্ঞতাসম্পন্ন ইন্ডাস্ট্রি বিশেষজ্ঞদের থেকে দিকনির্দেশনা নিন"
                      )}
                    </p>
                  </div>
                </Card>

                <Card className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="space-y-4">
                    <div className="p-3 bg-accent/10 rounded-lg w-fit">
                      <Globe className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold">{t("Global Community", "বিশ্বব্যাপী কমিউনিটি")}</h3>
                    <p className="text-muted-foreground">
                      {t(
                        "Connect with professionals worldwide and build your network",
                        "বিশ্বব্যাপী পেশাদারদের সাথে যুক্ত হন এবং আপনার নেটওয়ার্ক তৈরি করুন"
                      )}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </section>
          
          {/* Testimonials Section */}
          <section className="py-20" id="testimonials">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t("What Our Students Say", "আমাদের শিক্ষার্থীরা কী বলেন")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("Real stories from professionals who transformed their careers", "যারা তাদের ক্যারিয়ার পরিবর্তন করেছেন তাদের সত্যি গল্প")}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {/* Video Testimonial 1 */}
                <Card className="overflow-hidden">
                  <div className="relative aspect-video bg-muted">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Sarah Ahmed - HR Professional Success Story"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Sarah Ahmed</h3>
                    <p className="text-sm text-muted-foreground">HR Manager at TechCorp</p>
                    <p className="text-sm mt-3">
                      {t(
                        "SkillSim's HR simulations helped me master workforce analytics. I got promoted within 6 months!",
                        "SkillSim এর HR সিমুলেশন আমাকে কর্মশক্তি বিশ্লেষণে দক্ষ হতে সাহায্য করেছে। ৬ মাসের মধ্যেই আমি পদোন্নতি পেয়েছি!"
                      )}
                    </p>
                  </CardContent>
                </Card>

                {/* Video Testimonial 2 */}
                <Card className="overflow-hidden">
                  <div className="relative aspect-video bg-muted">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Rahul Sharma - Finance Professional Success"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Rahul Sharma</h3>
                    <p className="text-sm text-muted-foreground">Senior Financial Analyst</p>
                    <p className="text-sm mt-3">
                      {t(
                        "The financial modeling simulations were game-changing. Now I confidently handle complex forecasts.",
                        "ফাইন্যান্সিয়াল মডেলিং সিমুলেশনগুলি গেম-চেঞ্জার ছিল। এখন আমি জটিল পূর্বাভাসগুলি আত্মবিশ্বাসের সাথে পরিচালনা করি।"
                      )}
                    </p>
                  </CardContent>
                </Card>

                {/* Video Testimonial 3 */}
                <Card className="overflow-hidden">
                  <div className="relative aspect-video bg-muted">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Maria Rodriguez - Operations Excellence"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Maria Rodriguez</h3>
                    <p className="text-sm text-muted-foreground">Operations Director</p>
                    <p className="text-sm mt-3">
                      {t(
                        "Learning supply chain optimization through real scenarios gave me the edge I needed for leadership.",
                        "প্রকৃত পরিস্থিতির মাধ্যমে সাপ্লাই চেইন অপ্টিমাইজেশন শেখা আমাকে নেতৃত্বের জন্য প্রয়োজনীয় সুবিধা দিয়েছে।"
                      )}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Success Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">10,000+</div>
                  <p className="text-muted-foreground">{t("Professionals Trained", "প্রশিক্ষিত পেশাদার")}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-secondary">95%</div>
                  <p className="text-muted-foreground">{t("Job Placement Rate", "চাকরি প্রাপ্তির হার")}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-accent">40%</div>
                  <p className="text-muted-foreground">{t("Average Salary Increase", "গড় বেতন বৃদ্ধি")}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-destructive">500+</div>
                  <p className="text-muted-foreground">{t("Industry Partners", "ইন্ডাস্ট্রি অংশীদার")}</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Demo Section */}
          <section className="py-20 bg-muted/50" id="demo">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t("See SkillSim in Action", "SkillSim এর কার্যকারিতা দেখুন")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("Experience our interactive learning platform", "আমাদের ইন্টারঅ্যাক্টিভ লার্নিং প্ল্যাটফর্ম অভিজ্ঞতা নিন")}
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <Card className="overflow-hidden shadow-2xl">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-secondary/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="lg" className="bg-white/90 text-primary hover:bg-white shadow-lg">
                        <PlayCircle className="mr-2 h-6 w-6" />
                        {t("Play Demo", "ডেমো চালান")}
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
          
          {/* Career Paths Section */}
          <section className="py-20" id="careers">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t("Choose Your Career Path", "আপনার ক্যারিয়ার পথ বেছে নিন")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("Specialized learning tracks for every professional role", "প্রতিটি পেশাদার ভূমিকার জন্য বিশেষায়িত শেখার ট্র্যাক")}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {careers.map((career, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          {career.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                            {t(career.titleEn, career.titleBn)}
                          </h3>
                          <Link to="/select-role">
                            <Button variant="ghost" size="sm" className="p-0 h-auto font-normal text-muted-foreground hover:text-primary">
                              {t("Explore Path →", "পথ অন্বেষণ করুন →")}
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          
          {/* How It Works Section */}
          <section className="py-20 bg-muted/50" id="how-it-works">
            <div className="container mx-auto px-4 md:px-6">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t("How It Works", "এটি কীভাবে কাজ করে")}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t("Your journey from beginner to expert in 3 simple steps", "৩টি সহজ ধাপে নতুন থেকে বিশেষজ্ঞ হওয়ার যাত্রা")}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="text-center relative">
                    {/* Connector Line */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-accent transform translate-x-1/2 z-0" />
                    )}
                    
                    <Card className="relative z-10 p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardContent className="p-0 space-y-4">
                        <div className="relative">
                          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mb-4">
                            {step.icon}
                          </div>
                          <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold">
                          {t(step.titleEn, step.titleBn)}
                        </h3>
                        <p className="text-muted-foreground">
                          {t(step.descriptionEn, step.descriptionBn)}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Call to Action Section */}
          <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t("Ready to Transform Your Career?", "আপনার ক্যারিয়ার পরিবর্তন করতে প্রস্তুত?")}
                </h2>
                <p className="text-xl text-white/90">
                  {t(
                    "Join thousands of professionals who have already accelerated their careers with SkillSim",
                    "হাজার হাজার পেশাদারদের সাথে যোগ দিন যারা ইতিমধ্যে SkillSim এর সাথে তাদের ক্যারিয়ার ত্বরান্বিত করেছেন"
                  )}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/login">
                    <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                      <Award className="mr-2 h-5 w-5" />
                      {t("Start Free Trial", "ফ্রি ট্রায়াল শুরু করুন")}
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={() => scrollToSection('pricing')}>
                    <Crown className="mr-2 h-5 w-5" />
                    {t("View Pricing", "মূল্য দেখুন")}
                  </Button>
                </div>
                <div className="pt-8 border-t border-white/20">
                  <div className="grid grid-cols-3 gap-8 text-center">
                    {whyNow.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="font-semibold text-lg">
                          {t(item.titleEn, item.titleBn)}
                        </h3>
                        <p className="text-white/80 text-sm">
                          {t(item.descriptionEn, item.descriptionBn)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
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
