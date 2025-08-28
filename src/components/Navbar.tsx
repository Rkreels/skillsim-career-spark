
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { useUser } from '@/contexts/UserContext';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { User, LogOut, BarChart3 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const { user, logout } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  
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
          {user && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <User className="h-5 w-5" />
                  <span className="sr-only">{t('User menu', 'ব্যবহারকারী মেনু')}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="px-2 py-1.5">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <BarChart3 className="mr-2 h-4 w-4" />
                  {t('Profile & Analytics', 'প্রোফাইল এবং বিশ্লেষণ')}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => { logout(); navigate('/'); }}>
                  <LogOut className="mr-2 h-4 w-4" />
                  {t('Logout', 'লগআউট')}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </nav>
  );
};
