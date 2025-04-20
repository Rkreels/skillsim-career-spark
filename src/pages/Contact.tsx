
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {t("Contact Us", "যোগাযোগ করুন")}
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {t("Get In Touch", "যোগাযোগ করুন")}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-skill-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("Address", "ঠিকানা")}</h3>
                    <p>123 Innovation Hub, Dhaka-1212, Bangladesh</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-skill-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("Email", "ইমেইল")}</h3>
                    <p>info@skillsim.app</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-skill-blue mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t("Phone", "ফোন")}</h3>
                    <p>+880 1234 567890</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t("Name", "নাম")}</Label>
                      <Input id="name" placeholder={t("Your name", "আপনার নাম")} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("Email", "ইমেইল")}</Label>
                      <Input id="email" type="email" placeholder={t("Your email", "আপনার ইমেইল")} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("Subject", "বিষয়")}</Label>
                      <Input id="subject" placeholder={t("Subject of your message", "আপনার বার্তার বিষয়")} />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">{t("Message", "বার্তা")}</Label>
                      <Textarea 
                        id="message" 
                        rows={5} 
                        placeholder={t("How can we help you?", "আমরা কিভাবে আপনাকে সাহায্য করতে পারি?")} 
                      />
                    </div>
                    
                    <Button className="w-full skill-button-primary">
                      {t("Send Message", "বার্তা পাঠান")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
