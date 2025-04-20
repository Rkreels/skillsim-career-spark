
import React from 'react';
import { Link } from 'react-router-dom';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  
  // Function to scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return false;
    }
    return true;
  };
  
  return (
    <nav className="bg-white dark:bg-skill-dark shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-skill-blue">SkillSim</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/career-paths" className="text-gray-700 dark:text-gray-300 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
            {t("Career Paths", "ক্যারিয়ার পাথস")}
          </Link>
          <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }} className="text-gray-700 dark:text-gray-300 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
            {t("Pricing", "মূল্য")}
          </a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-700 dark:text-gray-300 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
            {t("About", "আমাদের সম্পর্কে")}
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <Link to="/login">
            <Button variant="outline">
              {t("Login", "লগইন")}
            </Button>
          </Link>
          <Link to="/signup" className="hidden md:block">
            <Button>
              {t("Sign Up", "সাইন আপ")}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
