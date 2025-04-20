
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <Button 
      onClick={toggleLanguage} 
      variant="outline" 
      className="rounded-full px-4 py-2 h-auto"
    >
      {language === 'en' ? 'বাংলা' : 'English'}
    </Button>
  );
};
