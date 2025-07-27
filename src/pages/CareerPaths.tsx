
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Icons
import { Briefcase, GraduationCap, Handshake, Users, ChartBar, ChartLine } from 'lucide-react';

const CareerPaths = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const careers = [
    {
      icon: <Briefcase className="h-12 w-12 text-skill-blue" />,
      titleEn: "Finance Professionals",
      titleBn: "ফাইন্যান্স পেশাদার",
      descriptionEn: "From ledger to leadership - master financial analysis, reporting, and strategy for corporate or entrepreneurial success.",
      descriptionBn: "লেজার থেকে নেতৃত্বে - কর্পোরেট বা উদ্যোক্তা সাফল্যের জন্য আর্থিক বিশ্লেষণ, রিপোর্টিং এবং কৌশল মাস্টার করুন।",
      skillsEn: ["Financial Analysis", "Budgeting", "Forecasting", "Risk Management"],
      skillsBn: ["আর্থিক বিশ্লেষণ", "বাজেট প্রস্তুত", "পূর্বাভাস", "ঝুঁকি ব্যবস্থাপনা"],
    },
    {
      icon: <GraduationCap className="h-12 w-12 text-skill-green" />,
      titleEn: "Project Leads",
      titleBn: "প্রজেক্ট লিড",
      descriptionEn: "Nail your next rollout with confidence - learn proven methodologies for managing complex projects from initiation to completion.",
      descriptionBn: "আত্মবিশ্বাসের সাথে আপনার পরবর্তী রোলআউট সম্পন্ন করুন - শুরু থেকে শেষ পর্যন্ত জটিল প্রকল্প পরিচালনার জন্য প্রমাণিত পদ্ধতি শিখুন।",
      skillsEn: ["Project Planning", "Team Leadership", "Risk Management", "Stakeholder Communication"],
      skillsBn: ["প্রকল্প পরিকল্পনা", "টিম লিডারশিপ", "ঝুঁকি ব্যবস্থাপনা", "স্টেকহোল্ডার যোগাযোগ"],
    },
    {
      icon: <Users className="h-12 w-12 text-skill-blue-dark" />,
      titleEn: "HR & Talent Teams",
      titleBn: "এইচআর ও ট্যালেন্ট টিম",
      descriptionEn: "Streamline processes & boost engagement - develop strategic HR skills to attract, develop, and retain top talent.",
      descriptionBn: "প্রক্রিয়া সহজ করুন এবং এনগেজমেন্ট বাড়ান - শীর্ষ প্রতিভা আকর্ষণ, বিকাশ এবং ধরে রাখার জন্য কৌশলগত এইচআর দক্ষতা বিকাশ করুন।",
      skillsEn: ["Talent Acquisition", "Performance Management", "Employee Engagement", "HR Analytics"],
      skillsBn: ["ট্যালেন্ট অ্যাকুইজিশন", "পারফরম্যান্স ম্যানেজমেন্ট", "এমপ্লয়ি এনগেজমেন্ট", "এইচআর অ্যানালিটিক্স"],
    },
    {
      icon: <ChartLine className="h-12 w-12 text-skill-green-dark" />,
      titleEn: "Supply Chain Experts",
      titleBn: "সাপ্লাই চেইন এক্সপার্ট",
      descriptionEn: "Optimize flows like an industry pro - master global logistics, inventory management, and supply chain optimization.",
      descriptionBn: "একজন ইন্ডাস্ট্রি প্রফেশনালের মতো ফ্লো অপটিমাইজ করুন - গ্লোবাল লজিস্টিকস, ইনভেন্টরি ম্যানেজমেন্ট এবং সাপ্লাই চেইন অপটিমাইজেশন মাস্টার করুন।",
      skillsEn: ["Logistics Management", "Inventory Optimization", "Demand Forecasting", "Supplier Management"],
      skillsBn: ["লজিস্টিকস ম্যানেজমেন্ট", "ইনভেন্টরি অপটিমাইজেশন", "ডিমান্ড ফোরকাস্টিং", "সাপ্লায়ার ম্যানেজমেন্ট"],
    },
    {
      icon: <Handshake className="h-12 w-12 text-purple-500" />,
      titleEn: "Sales & BizDev Pros",
      titleBn: "সেলস ও বিজনেস ডেভেলপমেন্ট প্রো",
      descriptionEn: "Turn data into deals - develop skills to identify opportunities, build relationships, and drive business growth.",
      descriptionBn: "ডেটা থেকে ডিল তৈরি করুন - সুযোগ চিহ্নিত করার, সম্পর্ক গড়ার এবং ব্যবসা বৃদ্ধি চালানোর দক্ষতা বিকাশ করুন।",
      skillsEn: ["Sales Strategy", "Negotiation", "Account Management", "CRM Systems"],
      skillsBn: ["সেলস স্ট্র্যাটেজি", "নেগোসিয়েশন", "অ্যাকাউন্ট ম্যানেজমেন্ট", "সিআরএম সিস্টেম"],
    },
    {
      icon: <ChartBar className="h-12 w-12 text-orange-500" />,
      titleEn: "Aspiring Analysts & Developers",
      titleBn: "উচ্চাকাঙ্ক্ষী বিশ্লেষক ও ডেভেলপার",
      descriptionEn: "Power data-driven decisions - learn to collect, analyze, and visualize data to drive business insights and development.",
      descriptionBn: "ডেটা-চালিত সিদ্ধান্ত নিন - ব্যবসায়িক অন্তর্দৃষ্টি এবং বিকাশ চালানোর জন্য ডেটা সংগ্রহ, বিশ্লেষণ এবং ভিজ্যুয়ালাইজ করতে শিখুন।",
      skillsEn: ["Data Analysis", "Programming Fundamentals", "Dashboard Creation", "Statistical Methods"],
      skillsBn: ["ডেটা অ্যানালিসিস", "প্রোগ্রামিং ফান্ডামেন্টালস", "ড্যাশবোর্ড ক্রিয়েশন", "স্ট্যাটিসটিক্যাল মেথডস"],
    },
  ];

  const departments = [
    {
      id: 'hr',
      titleEn: 'Human Resources',
      titleBn: 'মানব সম্পদ',
      icon: <Users className="h-8 w-8 text-blue-600" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      roles: [
        'HR Generalist',
        'Recruiter / Talent Acquisition Specialist',
        'Learning & Development Coordinator',
        'Payroll & Compliance Officer',
        'HR Business Partner'
      ]
    },
    {
      id: 'finance',
      titleEn: 'Accounting & Finance',
      titleBn: 'অ্যাকাউন্টিং এবং ফিনান্স',
      icon: <Briefcase className="h-8 w-8 text-green-600" />,
      color: 'text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100',
      roles: [
        'Accountant / Bookkeeper',
        'Financial Analyst',
        'Accounts Payable / Receivable Clerk',
        'Budget & Forecasting Specialist',
        'Payroll Specialist'
      ]
    },
    {
      id: 'sales',
      titleEn: 'Sales',
      titleBn: 'বিক্রয়',
      icon: <ChartBar className="h-8 w-8 text-purple-600" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      roles: [
        'Sales Development Representative (SDR)',
        'Account Executive',
        'Sales Operations Analyst',
        'Key Account Manager',
        'Territory Sales Manager'
      ]
    },
    {
      id: 'marketing',
      titleEn: 'Marketing',
      titleBn: 'মার্কেটিং',
      icon: <ChartLine className="h-8 w-8 text-pink-600" />,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100',
      roles: [
        'Marketing Specialist',
        'Content Strategist',
        'Social Media Manager',
        'Campaign Manager'
      ]
    },
    {
      id: 'operations',
      titleEn: 'Operations',
      titleBn: 'অপারেশনস',
      icon: <Handshake className="h-8 w-8 text-orange-600" />,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 hover:bg-orange-100',
      roles: [
        'Operations Coordinator',
        'Supply Chain Analyst',
        'Procurement / Purchasing Officer',
        'Inventory Manager',
        'Logistics Specialist'
      ]
    },
    {
      id: 'management',
      titleEn: 'Management',
      titleBn: 'ম্যানেজমেন্ট',
      icon: <GraduationCap className="h-8 w-8 text-indigo-600" />,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 hover:bg-indigo-100',
      roles: [
        'Project Manager',
        'Strategy Lead',
        'Department Head',
        'General Manager',
        'Business Operations Lead'
      ]
    }
  ];

  const handleDepartmentSelect = (departmentId: string, departmentName: string) => {
    localStorage.setItem('selectedDepartment', departmentId);
    localStorage.setItem('selectedDepartmentName', departmentName);
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-skill-blue to-skill-green bg-clip-text text-transparent">
              {t(
                "Accelerate Your Professional Growth",
                "আপনার পেশাগত বৃদ্ধি ত্বরান্বিত করুন"
              )}
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
              {t(
                "Discover specialized learning paths tailored to your career goals and industry needs.",
                "আপনার ক্যারিয়ার লক্ষ্য এবং শিল্প চাহিদার জন্য নির্ধারিত বিশেষায়িত শেখার পথ আবিষ্কার করুন।"
              )}
            </p>
          </div>
        </section>
        
        {/* Career Paths Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {careers.map((career, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      {career.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {t(career.titleEn, career.titleBn)}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {t(career.descriptionEn, career.descriptionBn)}
                    </p>
                    
                    <h4 className="font-semibold mb-2">
                      {t("Key Skills", "মূল দক্ষতা")}:
                    </h4>
                    <ul className="mb-6 grid grid-cols-2 gap-2">
                      {career.skillsEn.map((skill, skillIndex) => (
                        <li key={skillIndex} className="flex items-center">
                          <div className="h-2 w-2 bg-skill-blue rounded-full mr-2"></div>
                          <span className="text-sm">
                            {t(skill, career.skillsBn[skillIndex])}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link to="/login">
                      <Button className="w-full">
                        {t("Explore Path", "পাথ অন্বেষণ করুন")}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Department Selection Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("Choose Your Department", "আপনার বিভাগ বেছে নিন")}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                {t(
                  "Select your department to access personalized learning content and tools tailored to your career path.",
                  "আপনার ক্যারিয়ার পথের জন্য ব্যক্তিগতকৃত শেখার বিষয়বস্তু এবং টুলস অ্যাক্সেস করতে আপনার বিভাগ নির্বাচন করুন।"
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((department) => (
                <Card 
                  key={department.id} 
                  className={`transition-all duration-200 ${department.bgColor} border-2 hover:border-gray-300 cursor-pointer`}
                  onClick={() => handleDepartmentSelect(department.id, department.titleEn)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3">
                      {department.icon}
                      <span className="text-lg">{t(department.titleEn, department.titleBn)}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {department.roles.map((role, index) => (
                        <div key={index} className="p-2 rounded-md">
                          <div className="flex items-center gap-2">
                            <span className={department.color}>🔹</span>
                            <span className="text-sm font-medium">{role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-skill-blue to-skill-green text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t(
                "Ready to Accelerate Your Career?",
                "আপনার ক্যারিয়ার ত্বরান্বিত করতে প্রস্তুত?"
              )}
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t(
                "Join thousands of professionals who are mastering industry-standard skills with SkillSim.",
                "হাজার হাজার পেশাদারদের সাথে যোগ দিন যারা SkillSim এর সাথে ইন্ডাস্ট্রি-স্ট্যান্ডার্ড দক্ষতা অর্জন করছে।"
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/login">
                <Button size="lg" variant="secondary" className="bg-white text-skill-blue hover:bg-gray-100">
                  {t("Start Your Career Journey", "আপনার ক্যারিয়ার যাত্রা শুরু করুন")}
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  {t("Get Started", "শুরু করুন")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareerPaths;
