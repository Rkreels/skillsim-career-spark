
import { useLanguage } from '@/contexts/LanguageContext';

export const EarlyAccessBanner = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-skill-blue text-white py-3 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base font-medium">
          {t(
            "You're among the first—get ahead of peers and revolutionize your learning.",
            "আপনি প্রথমদের একজন—সহকর্মীদের থেকে এগিয়ে থাকুন এবং শেখার নতুন যুগের সূচনা করুন।"
          )}
        </p>
      </div>
    </div>
  );
};
