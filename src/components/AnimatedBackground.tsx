
import React, { useEffect, useState } from 'react';
import {
  Briefcase,
  FileText,
  Wallet,
  Users,
  FileSpreadsheet,
  BarChart,
  LineChart,
  Database,
  Server,
  HardDrive
} from 'lucide-react';

interface AnimationItem {
  id: number;
  type: 'finance' | 'project' | 'analytics' | 'hr' | 'database';
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
      const types = ['finance', 'project', 'analytics', 'hr', 'database'];
      const pageHeight = document.body.scrollHeight;
      
      for (let i = 0; i < 12; i++) {
        newItems.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)] as 'finance' | 'project' | 'analytics' | 'hr' | 'database',
          left: `${Math.random() * 90}%`,
          // Distribute bubbles throughout the page height
          top: `${Math.random() * pageHeight}px`,
          duration: 15 + Math.random() * 10,
          delay: Math.random() * 5,
          scale: 0.7 + Math.random() * 0.4,
        });
      }
      setItems(newItems);
    };
    
    generateItems();
    
    // Regenerate on scroll to reposition elements
    const handleScroll = () => {
      generateItems();
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', generateItems);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', generateItems);
    };
  }, []);

  const renderIcon = (type: string) => {
    const commonClasses = "w-full h-full";
    
    switch (type) {
      case 'finance':
        return (
          <div className="w-32 h-28 bg-blue-100/20 dark:bg-blue-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-blue-200/30 dark:bg-blue-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-blue-600/70 dark:text-blue-300/70">Financial Dashboard</div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-2">
                <div className="flex flex-col items-center">
                  <Wallet className={`${commonClasses} text-blue-500/80 h-8 w-8`} />
                  <div className="h-2 w-16 bg-blue-300/50 mt-2 rounded-full"></div>
                </div>
                <div className="flex flex-col items-center">
                  <LineChart className={`${commonClasses} text-blue-600/80 h-8 w-8`} />
                  <div className="h-2 w-12 bg-blue-300/50 mt-2 rounded-full"></div>
                </div>
                <div className="h-2 w-full bg-blue-300/40 mt-4 rounded-full"></div>
                <div className="h-2 w-full bg-blue-300/40 mt-4 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      case 'project':
        return (
          <div className="w-32 h-28 bg-green-100/20 dark:bg-green-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-green-200/30 dark:bg-green-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-green-600/70 dark:text-green-300/70">Project Tracker</div>
              </div>
              <div className="mt-8 space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-sm border border-green-500/70 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-500/70 rounded-sm"></div>
                  </div>
                  <div className="h-2 w-20 bg-green-300/50 ml-2 rounded-full"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-sm border border-green-500/70"></div>
                  <div className="h-2 w-16 bg-green-300/50 ml-2 rounded-full"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-sm border border-green-500/70"></div>
                  <div className="h-2 w-24 bg-green-300/50 ml-2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'hr':
        return (
          <div className="w-32 h-28 bg-purple-100/20 dark:bg-purple-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-purple-200/30 dark:bg-purple-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-purple-600/70 dark:text-purple-300/70">HR Portal</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <Users className={`${commonClasses} text-purple-500/80 h-8 w-8 mb-2`} />
                <div className="h-2 w-20 bg-purple-300/50 rounded-full"></div>
                <div className="mt-3 grid grid-cols-3 gap-1 w-full">
                  <div className="h-6 w-6 rounded-full bg-purple-300/40 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-purple-500/60"></div>
                  </div>
                  <div className="h-6 w-6 rounded-full bg-purple-300/40 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-purple-500/60"></div>
                  </div>
                  <div className="h-6 w-6 rounded-full bg-purple-300/40 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-purple-500/60"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="w-32 h-28 bg-orange-100/20 dark:bg-orange-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-orange-200/30 dark:bg-orange-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-orange-600/70 dark:text-orange-300/70">Analytics</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <div className="w-full h-12 flex items-end">
                  <div className="h-4 w-3 bg-orange-300/60 mx-0.5"></div>
                  <div className="h-6 w-3 bg-orange-400/60 mx-0.5"></div>
                  <div className="h-8 w-3 bg-orange-500/60 mx-0.5"></div>
                  <div className="h-10 w-3 bg-orange-600/60 mx-0.5"></div>
                  <div className="h-5 w-3 bg-orange-400/60 mx-0.5"></div>
                  <div className="h-7 w-3 bg-orange-500/60 mx-0.5"></div>
                  <div className="h-3 w-3 bg-orange-300/60 mx-0.5"></div>
                  <div className="h-9 w-3 bg-orange-600/60 mx-0.5"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'database':
        return (
          <div className="w-32 h-28 bg-gray-100/20 dark:bg-gray-800/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-gray-200/30 dark:bg-gray-700/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-gray-600/70 dark:text-gray-300/70">Database</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <Server className={`${commonClasses} text-gray-500/80 h-8 w-8 mb-2`} />
                <div className="h-2 w-20 bg-gray-300/50 rounded-full mb-2"></div>
                <div className="h-2 w-16 bg-gray-300/50 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-50">
      {items.map(item => (
        <div
          key={item.id}
          className="absolute pointer-events-none"
          style={{
            left: item.left,
            top: item.top,
            transform: `scale(${item.scale})`,
            animation: `float-bubble-${item.id} ${item.duration}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
            zIndex: 51,
          }}
        >
          {renderIcon(item.type)}
        </div>
      ))}

      <style>
        {items.map(item => `
          @keyframes float-bubble-${item.id} {
            0% {
              transform: translate(0, 0) scale(${item.scale});
            }
            25% {
              transform: translate(${10 + Math.random() * 15}px, ${-25 - Math.random() * 22}px) scale(${item.scale});
            }
            50% {
              transform: translate(${24 + Math.random() * 13}px, ${Math.random() * 20}px) scale(${item.scale});
            }
            75% {
              transform: translate(${-12 - Math.random() * 20}px, ${17 + Math.random() * 15}px) scale(${item.scale});
            }
            100% {
              transform: translate(0, 0) scale(${item.scale});
            }
          }
        `).join('')}
      </style>
    </div>
  );
};

export default AnimatedBackground;
