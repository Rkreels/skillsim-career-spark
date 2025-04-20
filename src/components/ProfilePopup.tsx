
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

interface ProfilePopupProps {
  open: boolean;
  onClose: () => void;
}

export const ProfilePopup: React.FC<ProfilePopupProps> = ({ open, onClose }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    education: '',
    institution: '',
    profession: '',
    careerGoal: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  const professions = [
    { value: 'student', labelEn: 'Student', labelBn: 'শিক্ষার্থী' },
    { value: 'professional', labelEn: 'Professional', labelBn: 'পেশাদার' },
    { value: 'executive', labelEn: 'Executive', labelBn: 'এক্সিকিউটিভ' },
    { value: 'freelancer', labelEn: 'Freelancer', labelBn: 'ফ্রিল্যান্সার' },
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {t("Complete Your Profile", "আপনার প্রোফাইল সম্পূর্ণ করুন")}
          </DialogTitle>
          <DialogDescription>
            {t(
              "Help us tailor your journey—20% tutorials, 40% interactive tasks, 40% real scenarios.",
              "আপনার শেখার পথ নিজস্বভাবে সাজাতে সহায়তা করুন—২০% টিউটোরিয়াল, ৪০% ইন্টারঅ্যাক্টিভ টাস্ক, ৪০% বাস্তব সিনারিও।"
            )}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fullName" className="text-right">
                {t("Full Name", "পূর্ণ নাম")}
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t("Your full name", "আপনার পূর্ণ নাম")}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="education" className="text-right">
                {t("Educational Background", "শিক্ষাগত পটভূমি")}
              </Label>
              <Input
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder={t("Your highest degree", "আপনার সর্বোচ্চ ডিগ্রি")}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="institution" className="text-right">
                {t("University/Institution", "বিশ্ববিদ্যালয়/প্রতিষ্ঠান")}
              </Label>
              <Input
                id="institution"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder={t("Your institution name", "আপনার প্রতিষ্ঠানের নাম")}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="profession" className="text-right">
                {t("Current Profession", "বর্তমান পেশা")}
              </Label>
              <Select
                value={formData.profession}
                onValueChange={(value) => handleSelectChange('profession', value)}
              >
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder={t("Select your profession", "আপনার পেশা নির্বাচন করুন")} />
                </SelectTrigger>
                <SelectContent>
                  {professions.map((profession) => (
                    <SelectItem key={profession.value} value={profession.value}>
                      {t(profession.labelEn, profession.labelBn)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="careerGoal" className="text-right pt-2">
                {t("Career Goal", "ক্যারিয়ার লক্ষ্য")}
              </Label>
              <Textarea
                id="careerGoal"
                name="careerGoal"
                value={formData.careerGoal}
                onChange={handleChange}
                placeholder={t("Describe your career aspirations", "আপনার ক্যারিয়ার আকাঙ্ক্ষা বর্ণনা করুন")}
                className="col-span-3"
                rows={3}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="skill-button-primary">
              {t("Save & Continue", "সংরক্ষণ করুন ও চালিয়ে যান")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
