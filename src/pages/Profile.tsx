import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@/contexts/UserContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import UserProfilePanel from '@/components/UserProfilePanel';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, isLoading } = useUser();
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-skill-blue mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">{t("Loading...", "লোড হচ্ছে...")}</p>
        </div>
      </div>
    );
  }

  if (!user || !user.isOnboarded) {
    navigate('/login');
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => navigate('/dashboard')}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t('Back to Dashboard', 'ড্যাশবোর্ডে ফিরে যান')}
                </Button>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {t('My Profile & Analytics', 'আমার প্রোফাইল এবং বিশ্লেষণ')}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    {t('Track your learning progress and skill development', 'আপনার শেখার অগ্রগতি এবং দক্ষতা উন্নয়ন ট্র্যাক করুন')}
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Panel */}
            <UserProfilePanel />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;