
import React, { useEffect, useState } from 'react';

interface AnimationItem {
  id: number;
  type: 'finance' | 'project' | 'analytics';
  left: string;
  top: string;
  duration: number;
  delay: number;
}

const AnimatedBackground: React.FC = () => {
  const [items, setItems] = useState<AnimationItem[]>([]);

  useEffect(() => {
    const generateItems = () => {
      const newItems: AnimationItem[] = [];
      const types = ['finance', 'project', 'analytics'];
      
      for (let i = 0; i < 15; i++) {
        newItems.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)] as 'finance' | 'project' | 'analytics',
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          duration: 3 + Math.random() * 4,
          delay: Math.random() * 5,
        });
      }
      
      setItems(newItems);
    };
    
    generateItems();
  }, []);

  const renderIcon = (type: string) => {
    switch (type) {
      case 'finance':
        return (
          <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-md flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1 p-1">
              <div className="w-3 h-3 bg-blue-500/50 animate-pulse"></div>
              <div className="w-3 h-3 bg-blue-500/30"></div>
              <div className="w-3 h-3 bg-blue-500/30"></div>
              <div className="w-3 h-3 bg-blue-500/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        );
      case 'project':
        return (
          <div className="w-20 h-14 bg-green-100 dark:bg-green-900/30 rounded-md p-2">
            <div className="h-2 w-12 bg-green-500/50 rounded mb-2"></div>
            <div className="h-2 w-8 bg-green-500/30 rounded mb-2"></div>
            <div className="h-2 w-10 bg-green-500/40 rounded animate-pulse"></div>
          </div>
        );
      case 'analytics':
        return (
          <div className="w-20 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-md p-2">
            <div className="h-6 w-full bg-purple-500/20 rounded flex items-end justify-center">
              <div className="h-4 w-1 bg-purple-500/40 mx-0.5 rounded-t animate-pulse"></div>
              <div className="h-3 w-1 bg-purple-500/40 mx-0.5 rounded-t"></div>
              <div className="h-5 w-1 bg-purple-500/40 mx-0.5 rounded-t animate-pulse"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="background-animations fixed inset-0 z-0 pointer-events-none">
      {items.map(item => (
        <div
          key={item.id}
          className="animation-item absolute opacity-25 hover:opacity-40 transition-opacity"
          style={{
            left: item.left,
            top: item.top,
            animation: `float ${item.duration}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
          }}
        >
          {renderIcon(item.type)}
        </div>
      ))}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
