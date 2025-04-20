
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SkillSim</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              {t("Revolutionizing how people learn software tools through hands-on simulations.", 
                 "হাতে-কলমে সিমুলেশনের মাধ্যমে সফটওয়্যার টুলস শেখার পদ্ধতিকে বিপ্লবিত করছে।")}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("Quick Links", "দ্রুত লিঙ্ক")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
                  {t("About", "আমাদের সম্পর্কে")}
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
                  {t("Careers", "ক্যারিয়ার")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
                  {t("Contact", "যোগাযোগ")}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("Legal", "আইনি")}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
                  {t("Privacy Policy", "গোপনীয়তা নীতি")}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
                  {t("Terms of Service", "সেবার শর্তাবলী")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} SkillSim. {t("All rights reserved.", "সর্বস্বত্ব সংরক্ষিত।")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
              Facebook
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
              Twitter
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-skill-blue dark:hover:text-skill-blue-dark transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
