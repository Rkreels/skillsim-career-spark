
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (en: string, bn: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const detectLocationAndSetLanguage = async () => {
      try {
        // Check if user has a saved language preference
        const savedLanguage = localStorage.getItem('skillsim-language') as Language;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'bn')) {
          setLanguage(savedLanguage);
          return;
        }

        // Try to detect location using a free IP geolocation service
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        // If user is from Bangladesh, set Bengali as default
        if (data.country_code === 'BD') {
          setLanguage('bn');
        } else {
          setLanguage('en');
        }
      } catch (error) {
        console.log('Could not detect location, defaulting to English');
        setLanguage('en');
      }
    };

    detectLocationAndSetLanguage();
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'bn' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('skillsim-language', newLanguage);
  };

  const t = (en: string, bn: string): string => {
    return language === 'en' ? en : bn;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
