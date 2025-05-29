
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

        // Try multiple IP geolocation services
        const services = [
          'https://ipapi.co/json/',
          'https://api.ipgeolocation.io/ipgeo?apiKey=free',
          'https://freegeoip.app/json/'
        ];

        let detected = false;
        
        for (const service of services) {
          try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            
            const response = await fetch(service, {
              signal: controller.signal,
              headers: {
                'Accept': 'application/json',
              }
            });
            
            clearTimeout(timeoutId);
            
            if (response.ok) {
              const data = await response.json();
              console.log('Location data:', data);
              
              // Check for Bangladesh in different possible fields
              const countryCode = data.country_code || data.country || data.countryCode;
              const country = data.country_name || data.country || countryCode;
              
              if (countryCode === 'BD' || country === 'Bangladesh' || country === 'BD') {
                console.log('Detected Bangladesh, setting language to Bengali');
                setLanguage('bn');
                localStorage.setItem('skillsim-language', 'bn');
                detected = true;
                break;
              } else {
                console.log('Detected country:', countryCode || country, 'setting to English');
                setLanguage('en');
                localStorage.setItem('skillsim-language', 'en');
                detected = true;
                break;
              }
            }
          } catch (serviceError) {
            console.log(`Service ${service} failed:`, serviceError);
            continue;
          }
        }

        if (!detected) {
          // Fallback: try to detect from browser language
          const browserLang = navigator.language || navigator.languages?.[0];
          if (browserLang?.includes('bn') || browserLang?.includes('bd')) {
            console.log('Browser language suggests Bengali');
            setLanguage('bn');
          } else {
            console.log('Could not detect location, defaulting to English');
            setLanguage('en');
          }
        }
      } catch (error) {
        console.log('Location detection failed completely, defaulting to English', error);
        setLanguage('en');
      }
    };

    detectLocationAndSetLanguage();
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'bn' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('skillsim-language', newLanguage);
    console.log('Language toggled to:', newLanguage);
  };

  const t = (en: string, bn: string): string => {
    return language === 'bn' ? bn : en;
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
