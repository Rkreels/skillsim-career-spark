
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useUser } from '@/contexts/UserContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const Login = () => {
  const { t } = useLanguage();
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleDemoLogin = () => {
    // Get selected department from localStorage
    const selectedDepartment = localStorage.getItem('selectedDepartment') || 'hr';
    const selectedDepartmentName = localStorage.getItem('selectedDepartmentName') || 'Human Resources';
    
    // Create demo user
    const demoUser = {
      id: 'demo-user-1',
      name: 'Demo User',
      email: 'demo@skillsim.com',
      role: selectedDepartment as any,
      department: selectedDepartmentName,
      isOnboarded: true,
      completedCourses: ['course-1', 'course-2'],
      currentCourses: ['course-3', 'course-4'],
      skillLevel: 'intermediate' as const
    };
    
    setUser(demoUser);
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <Card className="skill-card">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  {t("Log in to SkillSim", "SkillSim এ লগ ইন করুন")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Demo Login Button */}
                <div className="mb-6">
                  <Button 
                    onClick={handleDemoLogin}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    {t("🚀 One-Click Demo Login", "🚀 ওয়ান-ক্লিক ডেমো লগইন")}
                  </Button>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    {t("Try SkillSim instantly with demo data", "ডেমো ডেটা দিয়ে তাৎক্ষণিক SkillSim চেষ্টা করুন")}
                  </p>
                </div>

                <div className="relative mb-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
                      {t("Or sign in manually", "অথবা ম্যানুয়ালি সাইন ইন করুন")}
                    </span>
                  </div>
                </div>

                <form>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("Email", "ইমেইল")}</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder={t("Enter your email", "আপনার ইমেইল লিখুন")} 
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">{t("Password", "পাসওয়ার্ড")}</Label>
                        <Link 
                          to="/forgot-password" 
                          className="text-sm text-skill-blue hover:underline"
                        >
                          {t("Forgot password?", "পাসওয়ার্ড ভুলে গেছেন?")}
                        </Link>
                      </div>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder={t("Enter your password", "আপনার পাসওয়ার্ড লিখুন")}
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="admin" />
                      <Label htmlFor="admin" className="text-sm font-normal">
                        {t("I'm an Admin", "আমি একজন অ্যাডমিন")}
                      </Label>
                    </div>
                    <Button className="w-full skill-button-primary">
                      {t("Log In", "লগ ইন")}
                    </Button>
                  </div>
                </form>
                
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white dark:bg-gray-800 text-gray-500">
                        {t("Or continue with", "অথবা চালিয়ে যান")}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <Button variant="outline">Google</Button>
                    <Button variant="outline">LinkedIn</Button>
                  </div>
                </div>
                
                <div className="mt-6 text-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">
                    {t("Don't have an account?", "একাউন্ট নেই?")}
                  </span>
                  {' '}
                  <Link 
                    to="/signup" 
                    className="text-skill-blue font-medium hover:underline"
                  >
                    {t("Sign up", "সাইন আপ করুন")}
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
