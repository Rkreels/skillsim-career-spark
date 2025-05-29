
import { UserRole } from '@/contexts/UserContext';

export interface Course {
  id: number;
  titleEn: string;
  titleBn: string;
  progressPercent: number;
  imageUrl: string;
  category: string;
}

export interface Tool {
  id: number;
  nameEn: string;
  nameBn: string;
  descriptionEn: string;
  descriptionBn: string;
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  imageUrl: string;
}

export interface Badge {
  id: number;
  titleEn: string;
  titleBn: string;
  icon: string;
}

export const getRoleBasedCourses = (role: UserRole): Course[] => {
  const allCourses = {
    hr: [
      {
        id: 1,
        titleEn: "HR Analytics with Excel",
        titleBn: "এক্সেল দিয়ে এইচআর অ্যানালিটিক্স",
        progressPercent: 75,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        category: "analytics"
      },
      {
        id: 2,
        titleEn: "Workday HRIS Fundamentals",
        titleBn: "ওয়ার্কডে এইচআরআইএস ফান্ডামেন্টালস",
        progressPercent: 40,
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        category: "hris"
      },
      {
        id: 3,
        titleEn: "BambooHR Management",
        titleBn: "ব্যাম্বুএইচআর ম্যানেজমেন্ট",
        progressPercent: 10,
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        category: "hris"
      }
    ],
    accounting: [
      {
        id: 4,
        titleEn: "QuickBooks Advanced",
        titleBn: "কুইকবুকস অ্যাডভান্সড",
        progressPercent: 85,
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        category: "accounting"
      },
      {
        id: 5,
        titleEn: "SAP Financial Accounting",
        titleBn: "এসএপি ফিন্যান্সিয়াল অ্যাকাউন্টিং",
        progressPercent: 60,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        category: "erp"
      },
      {
        id: 6,
        titleEn: "Excel for Financial Modeling",
        titleBn: "ফিন্যান্সিয়াল মডেলিংয়ের জন্য এক্সেল",
        progressPercent: 30,
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        category: "analytics"
      }
    ],
    sales: [
      {
        id: 7,
        titleEn: "Salesforce CRM Mastery",
        titleBn: "সেলসফোর্স সিআরএম মাস্টারি",
        progressPercent: 70,
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        category: "crm"
      },
      {
        id: 8,
        titleEn: "HubSpot Sales Hub",
        titleBn: "হাবস্পট সেলস হাব",
        progressPercent: 45,
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        category: "crm"
      },
      {
        id: 9,
        titleEn: "LinkedIn Sales Navigator",
        titleBn: "লিংকডইন সেলস নেভিগেটর",
        progressPercent: 20,
        imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        category: "social"
      }
    ],
    marketing: [
      {
        id: 10,
        titleEn: "Google Analytics 4",
        titleBn: "গুগল অ্যানালিটিক্স ৪",
        progressPercent: 80,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        category: "analytics"
      },
      {
        id: 11,
        titleEn: "Facebook Ads Manager",
        titleBn: "ফেসবুক অ্যাডস ম্যানেজার",
        progressPercent: 55,
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        category: "advertising"
      }
    ],
    operations: [
      {
        id: 12,
        titleEn: "Jira Project Management",
        titleBn: "জিরা প্রোজেক্ট ম্যানেজমেন্ট",
        progressPercent: 65,
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        category: "project"
      },
      {
        id: 13,
        titleEn: "Asana Workflow Automation",
        titleBn: "আসানা ওয়ার্কফ্লো অটোমেশন",
        progressPercent: 35,
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        category: "project"
      }
    ],
    management: [
      {
        id: 14,
        titleEn: "Business Intelligence with Power BI",
        titleBn: "পাওয়ার বিআই দিয়ে বিজনেস ইন্টেলিজেন্স",
        progressPercent: 90,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        category: "analytics"
      },
      {
        id: 15,
        titleEn: "Tableau Dashboard Creation",
        titleBn: "ট্যাবলো ড্যাশবোর্ড তৈরি",
        progressPercent: 70,
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        category: "analytics"
      }
    ]
  };

  return allCourses[role] || [];
};

export const getRoleBasedRecommendations = (role: UserRole): Course[] => {
  const recommendations = {
    hr: [
      {
        id: 16,
        titleEn: "Advanced HRIS Configuration",
        titleBn: "অ্যাডভান্সড এইচআরআইএস কনফিগারেশন",
        progressPercent: 0,
        imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        category: "hris"
      },
      {
        id: 17,
        titleEn: "Employee Engagement Analytics",
        titleBn: "কর্মচারী সংযুক্তি বিশ্লেষণ",
        progressPercent: 0,
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        category: "analytics"
      }
    ],
    accounting: [
      {
        id: 18,
        titleEn: "Advanced Excel Formulas for Finance",
        titleBn: "ফিন্যান্সের জন্য অ্যাডভান্সড এক্সেল ফর্মুলা",
        progressPercent: 0,
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        category: "analytics"
      },
      {
        id: 19,
        titleEn: "Oracle NetSuite Fundamentals",
        titleBn: "ওরাকল নেটসুইট ফান্ডামেন্টালস",
        progressPercent: 0,
        imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        category: "erp"
      }
    ],
    sales: [
      {
        id: 20,
        titleEn: "Advanced CRM Automation",
        titleBn: "অ্যাডভান্সড সিআরএম অটোমেশন",
        progressPercent: 0,
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
        category: "crm"
      }
    ],
    marketing: [
      {
        id: 21,
        titleEn: "Marketing Automation with Marketo",
        titleBn: "মার্কেটো দিয়ে মার্কেটিং অটোমেশন",
        progressPercent: 0,
        imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        category: "automation"
      }
    ],
    operations: [
      {
        id: 22,
        titleEn: "Advanced Process Automation",
        titleBn: "অ্যাডভান্সড প্রসেস অটোমেশন",
        progressPercent: 0,
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        category: "automation"
      }
    ],
    management: [
      {
        id: 23,
        titleEn: "Executive Dashboard Design",
        titleBn: "এক্সিকিউটিভ ড্যাশবোর্ড ডিজাইন",
        progressPercent: 0,
        imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        category: "analytics"
      }
    ]
  };

  return recommendations[role] || [];
};

export const getRoleBasedBadges = (role: UserRole): Badge[] => {
  const badges = {
    hr: [
      { id: 1, titleEn: "HR Analytics Expert", titleBn: "এইচআর অ্যানালিটিক্স এক্সপার্ট", icon: "👥" },
      { id: 2, titleEn: "HRIS Master", titleBn: "এইচআরআইএস মাস্টার", icon: "🏆" },
      { id: 3, titleEn: "People Operations Pro", titleBn: "পিপল অপারেশনস প্রো", icon: "⭐" }
    ],
    accounting: [
      { id: 4, titleEn: "QuickBooks Certified", titleBn: "কুইকবুকস সার্টিফাইড", icon: "💰" },
      { id: 5, titleEn: "Financial Analyst", titleBn: "ফিন্যান্সিয়াল অ্যানালিস্ট", icon: "📊" },
      { id: 6, titleEn: "SAP Finance Expert", titleBn: "এসএপি ফিন্যান্স এক্সপার্ট", icon: "🏆" }
    ],
    sales: [
      { id: 7, titleEn: "CRM Master", titleBn: "সিআরএম মাস্টার", icon: "🎯" },
      { id: 8, titleEn: "Sales Analytics Pro", titleBn: "সেলস অ্যানালিটিক্স প্রো", icon: "📈" },
      { id: 9, titleEn: "Pipeline Optimizer", titleBn: "পাইপলাইন অপটিমাইজার", icon: "⚡" }
    ],
    marketing: [
      { id: 10, titleEn: "Digital Marketing Expert", titleBn: "ডিজিটাল মার্কেটিং এক্সপার্ট", icon: "🚀" },
      { id: 11, titleEn: "Analytics Guru", titleBn: "অ্যানালিটিক্স গুরু", icon: "📊" },
      { id: 12, titleEn: "Campaign Master", titleBn: "ক্যাম্পেইন মাস্টার", icon: "🎨" }
    ],
    operations: [
      { id: 13, titleEn: "Process Expert", titleBn: "প্রসেস এক্সপার্ট", icon: "⚙️" },
      { id: 14, titleEn: "Project Management Pro", titleBn: "প্রোজেক্ট ম্যানেজমেন্ট প্রো", icon: "📋" },
      { id: 15, titleEn: "Efficiency Champion", titleBn: "দক্ষতা চ্যাম্পিয়ন", icon: "🏃" }
    ],
    management: [
      { id: 16, titleEn: "Strategic Leader", titleBn: "কৌশলগত নেতা", icon: "👑" },
      { id: 17, titleEn: "BI Architect", titleBn: "বিআই আর্কিটেক্ট", icon: "🏗️" },
      { id: 18, titleEn: "Executive Dashboard Designer", titleBn: "এক্সিকিউটিভ ড্যাশবোর্ড ডিজাইনার", icon: "📊" }
    ]
  };

  return badges[role] || [];
};
