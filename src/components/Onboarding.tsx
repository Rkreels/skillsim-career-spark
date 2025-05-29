
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useUser, UserRole } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Briefcase, Users, DollarSign, Megaphone, Settings, BarChart3 } from 'lucide-react';

const Onboarding = () => {
  const { t } = useLanguage();
  const { updateUserRole, completeOnboarding } = useUser();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    role: '' as UserRole,
    skillLevel: 'beginner' as 'beginner' | 'intermediate' | 'advanced'
  });

  const roleOptions = [
    { value: 'hr', labelEn: 'Human Resources', labelBn: 'মানব সম্পদ', icon: Users, color: 'text-blue-600' },
    { value: 'accounting', labelEn: 'Accounting & Finance', labelBn: 'অ্যাকাউন্টিং এবং ফিনান্স', icon: DollarSign, color: 'text-green-600' },
    { value: 'sales', labelEn: 'Sales', labelBn: 'বিক্রয়', icon: BarChart3, color: 'text-purple-600' },
    { value: 'marketing', labelEn: 'Marketing', labelBn: 'মার্কেটিং', icon: Megaphone, color: 'text-pink-600' },
    { value: 'operations', labelEn: 'Operations', labelBn: 'অপারেশনস', icon: Settings, color: 'text-orange-600' },
    { value: 'management', labelEn: 'Management', labelBn: 'ম্যানেজমেন্ট', icon: Briefcase, color: 'text-indigo-600' }
  ];

  const handleRoleSelect = (role: UserRole) => {
    const selectedRole = roleOptions.find(r => r.value === role);
    setFormData({ 
      ...formData, 
      role, 
      department: selectedRole ? t(selectedRole.labelEn, selectedRole.labelBn) : ''
    });
    setStep(2);
  };

  const handleComplete = () => {
    updateUserRole(formData.role, formData.department);
    completeOnboarding();
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">
              {t("Welcome to SkillSim!", "SkillSim এ স্বাগতম!")}
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-400">
              {t("Let's personalize your learning experience. What's your role?", "আসুন আপনার শেখার অভিজ্ঞতা ব্যক্তিগতকৃত করি। আপনার ভূমিকা কী?")}
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {roleOptions.map((role) => {
                const Icon = role.icon;
                return (
                  <Card 
                    key={role.value}
                    className="cursor-pointer hover:shadow-md transition-shadow border-2 hover:border-skill-blue"
                    onClick={() => handleRoleSelect(role.value as UserRole)}
                  >
                    <CardContent className="p-6 text-center">
                      <Icon className={`h-12 w-12 mx-auto mb-3 ${role.color}`} />
                      <h3 className="font-semibold mb-2">
                        {t(role.labelEn, role.labelBn)}
                      </h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            {t("Almost Done!", "প্রায় শেষ!")}
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-400">
            {t("Tell us about your experience level", "আপনার অভিজ্ঞতার স্তর সম্পর্কে বলুন")}
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="name">{t("Your Name", "আপনার নাম")}</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t("Enter your name", "আপনার নাম লিখুন")}
            />
          </div>
          
          <div>
            <Label>{t("Experience Level", "অভিজ্ঞতার স্তর")}</Label>
            <Select value={formData.skillLevel} onValueChange={(value: any) => setFormData({ ...formData, skillLevel: value })}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">{t("Beginner", "শুরুকারী")}</SelectItem>
                <SelectItem value="intermediate">{t("Intermediate", "মধ্যবর্তী")}</SelectItem>
                <SelectItem value="advanced">{t("Advanced", "উন্নত")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            className="w-full mt-6" 
            onClick={handleComplete}
            disabled={!formData.name}
          >
            {t("Get Started", "শুরু করুন")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;
