
import React, { useEffect, useState } from 'react';
import {
  Briefcase,
  FileText,
  Wallet,
  Users,
  FileSpreadsheet,
  Receipt,
  DollarSign,
  UserPlus,
  UserCheck,
  Boxes,
  Package,
  BarChart,
  LineChart
} from 'lucide-react';

interface AnimationItem {
  id: number;
  type: 'finance' | 'project' | 'analytics' | 'hr';
  left: string;
  top: string;
  duration: number;
  delay: number;
  scale: number;
}

const AnimatedBackground: React.FC = () => {
  const [items, setItems] = useState<AnimationItem[]>([]);

  useEffect(() => {
    const generateItems = () => {
      const newItems: AnimationItem[] = [];
      const types = ['finance', 'project', 'analytics', 'hr'];
      
      for (let i = 0; i < 20; i++) {
        newItems.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)] as 'finance' | 'project' | 'analytics' | 'hr',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          duration: 15 + Math.random() * 10, // Slower animation
          delay: Math.random() * 8,
          scale: 0.8 + Math.random() * 0.4, // Random size between 80% and 120%
        });
      }
      
      setItems(newItems);
    };
    
    generateItems();
  }, []);

  const renderIcon = (type: string) => {
    const commonClasses = "w-full h-full";
    
    switch (type) {
      case 'finance':
        return (
          <div className="w-24 h-24 bg-blue-100/30 dark:bg-blue-900/30 rounded-lg flex items-center justify-center group">
            <div className="grid grid-cols-2 gap-2 p-2">
              <DollarSign className={`${commonClasses} text-blue-500/60 group-hover:text-blue-500/70 transition-colors`} />
              <Wallet className={`${commonClasses} text-blue-500/50 group-hover:text-blue-500/60 transition-colors`} />
              <FileSpreadsheet className={`${commonClasses} text-blue-500/55 group-hover:text-blue-500/65 transition-colors`} />
              <Receipt className={`${commonClasses} text-blue-500/60 group-hover:text-blue-500/70 transition-colors`} />
            </div>
          </div>
        );
      case 'project':
        return (
          <div className="w-28 h-20 bg-green-100/30 dark:bg-green-900/30 rounded-lg p-3">
            <div className="flex flex-col space-y-2">
              <Briefcase className={`${commonClasses} text-green-500/60 group-hover:text-green-500/70 transition-colors`} />
              <FileText className={`${commonClasses} text-green-500/55 group-hover:text-green-500/65 transition-colors`} />
            </div>
          </div>
        );
      case 'hr':
        return (
          <div className="w-24 h-24 bg-purple-100/30 dark:bg-purple-900/30 rounded-lg p-3">
            <div className="grid grid-cols-2 gap-2">
              <Users className={`${commonClasses} text-purple-500/60 group-hover:text-purple-500/70 transition-colors`} />
              <UserPlus className={`${commonClasses} text-purple-500/55 group-hover:text-purple-500/65 transition-colors`} />
              <UserCheck className={`${commonClasses} text-purple-500/60 group-hover:text-purple-500/70 transition-colors`} />
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="w-28 h-24 bg-orange-100/30 dark:bg-orange-900/30 rounded-lg p-3">
            <div className="grid grid-cols-2 gap-2">
              <BarChart className={`${commonClasses} text-orange-500/60 group-hover:text-orange-500/70 transition-colors`} />
              <LineChart className={`${commonClasses} text-orange-500/55 group-hover:text-orange-500/65 transition-colors`} />
              <Boxes className={`${commonClasses} text-orange-500/60 group-hover:text-orange-500/70 transition-colors`} />
              <Package className={`${commonClasses} text-orange-500/55 group-hover:text-orange-500/65 transition-colors`} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        {items.map(item => (
          <div
            key={item.id}
            className="absolute opacity-30 hover:opacity-40 transition-opacity duration-1000"
            style={{
              left: item.left,
              top: item.top,
              transform: `scale(${item.scale})`,
              animation: `
                float-x ${item.duration}s ease-in-out infinite,
                float-y ${item.duration * 1.5}s ease-in-out infinite,
                pulse ${item.duration}s ease-in-out infinite
              `,
              animationDelay: `${item.delay}s`,
            }}
          >
            {renderIcon(item.type)}
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes float-x {
            0%, 100% {
              transform: translateX(0px) scale(var(--scale));
            }
            50% {
              transform: translateX(30px) scale(var(--scale));
            }
          }
          @keyframes float-y {
            0%, 100% {
              transform: translateY(0px) scale(var(--scale));
            }
            50% {
              transform: translateY(20px) scale(var(--scale));
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 0.25;
            }
            50% {
              opacity: 0.35;
            }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;
