
import React from 'react';
import { useLocation } from 'react-router-dom';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  
  // Function to scroll to section when on homepage
  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      return true; // Allow normal navigation
    }
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return false; // Prevent default
    }
    return true; // Allow normal navigation if element not found
  };
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (!scrollToSection(id)) {
      e.preventDefault();
    }
  };
  
  return (
    <nav className="bg-white dark:bg-skill-dark shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-skill-blue">SkillSim</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="/career-paths" className="text-gray-700 dark:text-gray-300 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
            {t("Career Paths", "ক্যারিয়ার পাথস")}
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleNavClick(e, 'pricing')} 
            className="text-gray-700 dark:text-gray-300 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors"
          >
            {t("Pricing", "মূল্য")}
          </a>
          <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
            {t("About", "আমাদের সম্পর্কে")}
          </a>
          <a href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
            {t("Contact", "যোগাযোগ")}
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};
