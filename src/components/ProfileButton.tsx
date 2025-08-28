import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useUser } from '@/contexts/UserContext';
import { useAnalytics } from '@/hooks/useAnalytics';
import { useLanguage } from '@/contexts/LanguageContext';
import UserProfilePanel from './UserProfilePanel';
import { User } from 'lucide-react';

const ProfileButton: React.FC = () => {
  const { user } = useUser();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <User className="h-6 w-6" />
          <span className="sr-only">{t('Profile', 'প্রোফাইল')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-2xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-left">
            {t('User Profile & Analytics', 'ব্যবহারকারীর প্রোফাইল এবং বিশ্লেষণ')}
          </SheetTitle>
          <SheetDescription className="text-left">
            {t('Track your progress and view detailed analytics', 'আপনার অগ্রগতি ট্র্যাক করুন এবং বিস্তারিত বিশ্লেষণ দেখুন')}
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          <UserProfilePanel />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileButton;