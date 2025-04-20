
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              {t("About SkillSim", "SkillSim সম্পর্কে")}
            </h1>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg mb-6">
                {t(
                  "SkillSim is revolutionizing how professionals learn and master industry-standard tools and processes through hands-on simulations.",
                  "SkillSim হাতে-কলমে সিমুলেশনের মাধ্যমে পেশাদাররা কিভাবে শিখে এবং ইন্ডাস্ট্রি-স্ট্যান্ডার্ড টুল এবং প্রক্রিয়া মাস্টার করে তা বিপ্লব করছে।"
                )}
              </p>
              <p className="text-lg mb-6">
                {t(
                  "Our mission is to bridge the gap between theoretical knowledge and practical skills that employers demand, helping professionals advance their careers and stand out in a competitive market.",
                  "আমাদের লক্ষ্য হল তাত্ত্বিক জ্ঞান এবং নিয়োগকর্তারা যে ব্যবহারিক দক্ষতার দাবি করে তার মধ্যে সেতু তৈরি করা, পেশাদারদের তাদের ক্যারিয়ার এগিয়ে নিতে এবং প্রতিযোগিতামূলক বাজারে বিশেষ স্থান অর্জন করতে সাহায্য করা।"
                )}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Users className="h-16 w-16 text-skill-blue" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {t("Our Team", "আমাদের টিম")}
                  </h3>
                  <p>
                    {t(
                      "Our team consists of industry experts, educators, and technology innovators committed to transforming professional education.",
                      "আমাদের টিম শিল্প বিশেষজ্ঞ, শিক্ষাবিদ এবং প্রযুক্তি উদ্ভাবকদের নিয়ে গঠিত যারা পেশাদার শিক্ষাকে রূপান্তরিত করতে প্রতিশ্রুতিবদ্ধ।"
                    )}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <GraduationCap className="h-16 w-16 text-skill-green" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {t("Our Approach", "আমাদের পদ্ধতি")}
                  </h3>
                  <p>
                    {t(
                      "We believe in learning by doing. Our 20/40/40 approach combines expert tutorials, interactive practice, and real-world simulations for effective skill mastery.",
                      "আমরা করে শেখায় বিশ্বাস করি। আমাদের ২০/৪০/৪০ পদ্ধতি বিশেষজ্ঞ টিউটোরিয়াল, ইন্টারঅ্যাকটিভ অনুশীলন এবং বাস্তব জগতের সিমুলেশনকে একত্রিত করে কার্যকর দক্ষতা অর্জনের জন্য।"
                    )}
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    <Award className="h-16 w-16 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">
                    {t("Our Vision", "আমাদের দৃষ্টিভঙ্গি")}
                  </h3>
                  <p>
                    {t(
                      "We envision a world where everyone has access to high-quality, practical training that directly translates to career advancement and success.",
                      "আমরা এমন একটি বিশ্ব কল্পনা করি যেখানে প্রত্যেকেরই উচ্চ-মানের, ব্যবহারিক প্রশিক্ষণে অ্যাক্সেস আছে যা সরাসরি ক্যারিয়ার উন্নতি এবং সাফল্যে রূপান্তরিত হয়।"
                    )}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
