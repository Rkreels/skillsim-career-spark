
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Users, 
  DollarSign, 
  BarChart3, 
  Megaphone, 
  Settings, 
  Briefcase,
  Target,
  GraduationCap,
  Headphones
} from 'lucide-react';

const RoleSelection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const departments = [
    {
      id: 'hr',
      titleEn: 'Human Resources',
      titleBn: 'মানব সম্পদ',
      icon: Users,
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
      icon: DollarSign,
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
      icon: BarChart3,
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
      icon: Megaphone,
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
      icon: Settings,
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
      icon: Briefcase,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 hover:bg-indigo-100',
      roles: [
        'Project Manager',
        'Strategy Lead',
        'Department Head',
        'General Manager',
        'Business Operations Lead'
      ]
    },
    {
      id: 'product',
      titleEn: 'Product & Innovation',
      titleBn: 'প্রোডাক্ট এবং ইনোভেশন',
      icon: Target,
      color: 'text-red-600',
      bgColor: 'bg-red-50 hover:bg-red-100',
      roles: [
        'Product Manager',
        'Business Analyst',
        'Innovation Strategist'
      ]
    },
    {
      id: 'education',
      titleEn: 'Learning & Development / Education',
      titleBn: 'শিক্ষা ও উন্নয়ন',
      icon: GraduationCap,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50 hover:bg-teal-100',
      roles: [
        'Education Consultant',
        'Admission Officer'
      ]
    },
    {
      id: 'customer',
      titleEn: 'Customer Success / Service',
      titleBn: 'কাস্টমার সাকসেস',
      icon: Headphones,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50 hover:bg-cyan-100',
      roles: [
        'Customer Support Agent',
        'Client Onboarding Specialist',
        'Customer Success Manager'
      ]
    }
  ];

  const handleDepartmentSelect = (departmentId: string, departmentName: string) => {
    // Store selection in localStorage for later use
    localStorage.setItem('selectedDepartment', departmentId);
    localStorage.setItem('selectedDepartmentName', departmentName);
    
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t("Choose Your Department", "আপনার বিভাগ বেছে নিন")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t(
              "Select your department to access personalized learning content and tools tailored to your career path.",
              "আপনার ক্যারিয়ার পথের জন্য ব্যক্তিগতকৃত শেখার বিষয়বস্তু এবং টুলস অ্যাক্সেস করতে আপনার বিভাগ নির্বাচন করুন।"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((department) => {
            const Icon = department.icon;
            return (
              <Card 
                key={department.id} 
                className={`transition-all duration-200 ${department.bgColor} border-2 hover:border-gray-300 cursor-pointer`}
                onClick={() => handleDepartmentSelect(department.id, department.titleEn)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3">
                    <Icon className={`h-6 w-6 ${department.color}`} />
                    <span className="text-lg">{t(department.titleEn, department.titleBn)}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {department.roles.map((role, index) => (
                      <div
                        key={index}
                        className="p-2 rounded-md"
                      >
                        <div className="flex items-center gap-2">
                          <span className={department.color}>🔹</span>
                          <span className="text-sm font-medium">{role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
