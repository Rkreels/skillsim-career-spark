import React, { useEffect, useState, useRef } from 'react';
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
  HardDrive,
  Projector,
  CheckSquare,
  DollarSign,
  UserPlus,
  Receipt,
  Calculator,
  CreditCard,
  UserCog,
  Truck,
  Package,
  PieChart,
  ClipboardList
} from 'lucide-react';

interface AnimationItem {
  id: number;
  type: string;
  left: string;
  top: string;
  duration: number;
  delay: number;
  scale: number;
}

const AnimatedBackground: React.FC = () => {
  const [items, setItems] = useState<AnimationItem[]>([]);
  const animationRef = useRef<number | null>(null);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    const generateItems = () => {
      const newItems: AnimationItem[] = [];
      const types = [
        'finance', 'project', 'analytics', 'hr', 'database',
        'tasks', 'leads', 'invoice', 'tax', 'payroll',
        'new-hire', 'job-application', 'supply-chain', 'inventory', 'reports'
      ];
      const pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      );
      
      for (let i = 0; i < 20; i++) {
        newItems.push({
          id: i,
          type: types[Math.floor(Math.random() * types.length)],
          left: `${Math.random() * 90}%`,
          top: `${(i / 20) * pageHeight}px`,
          duration: 15 + Math.random() * 10,
          delay: Math.random() * 5,
          scale: 0.7 + Math.random() * 0.4,
        });
      }
      setItems(newItems);
    };
    
    generateItems();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      animationRef.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
          lastScrollY.current = currentScrollY;
          
          setItems(prevItems => 
            prevItems.map(item => ({
              ...item,
              left: item.left,
              top: `${parseFloat(item.top) + (Math.random() * 2 - 1)}px`,
            }))
          );
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
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
      case 'tasks':
        return (
          <div className="w-32 h-28 bg-yellow-100/20 dark:bg-yellow-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-yellow-200/30 dark:bg-yellow-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-yellow-600/70 dark:text-yellow-300/70">Tasks</div>
              </div>
              <div className="mt-8 space-y-3">
                <CheckSquare className={`${commonClasses} text-yellow-500/80 h-8 w-8 mb-2 mx-auto`} />
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-sm border border-yellow-500/70 flex items-center justify-center">
                    <div className="w-2 h-2 bg-yellow-500/70 rounded-sm"></div>
                  </div>
                  <div className="h-2 w-20 bg-yellow-300/50 ml-2 rounded-full"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 rounded-sm border border-yellow-500/70"></div>
                  <div className="h-2 w-16 bg-yellow-300/50 ml-2 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'leads':
        return (
          <div className="w-32 h-28 bg-blue-100/20 dark:bg-blue-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-blue-200/30 dark:bg-blue-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-blue-600/70 dark:text-blue-300/70">Leads</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <UserPlus className={`${commonClasses} text-blue-500/80 h-8 w-8 mb-2`} />
                <div className="h-2 w-20 bg-blue-300/50 rounded-full mb-2"></div>
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="h-6 w-full bg-blue-300/30 rounded-sm"></div>
                  <div className="h-6 w-full bg-blue-400/30 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'invoice':
        return (
          <div className="w-32 h-28 bg-purple-100/20 dark:bg-purple-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-purple-200/30 dark:bg-purple-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-purple-600/70 dark:text-purple-300/70">Invoice</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <Receipt className={`${commonClasses} text-purple-500/80 h-8 w-8 mb-2`} />
                <div className="h-2 w-20 bg-purple-300/50 rounded-full mb-2"></div>
                <div className="grid grid-cols-3 gap-1 w-full">
                  <div className="h-2 w-full bg-purple-300/40 rounded-full"></div>
                  <div className="h-2 w-full bg-purple-300/40 rounded-full"></div>
                  <div className="h-2 w-full bg-purple-300/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'tax':
        return (
          <div className="w-32 h-28 bg-green-100/20 dark:bg-green-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-green-200/30 dark:bg-green-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-green-600/70 dark:text-green-300/70">Tax</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <Calculator className={`${commonClasses} text-green-500/80 h-8 w-8 mb-2`} />
                <div className="flex justify-between w-full">
                  <div className="h-2 w-8 bg-green-400/50 rounded-full"></div>
                  <div className="h-2 w-12 bg-green-300/50 rounded-full"></div>
                </div>
                <div className="h-2 w-20 bg-green-500/30 rounded-full mt-3"></div>
              </div>
            </div>
          </div>
        );
      case 'payroll':
        return (
          <div className="w-32 h-28 bg-red-100/20 dark:bg-red-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-red-200/30 dark:bg-red-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-red-600/70 dark:text-red-300/70">Payroll</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <CreditCard className={`${commonClasses} text-red-500/80 h-8 w-8 mb-2`} />
                <div className="grid grid-cols-3 gap-1 w-full">
                  <div className="h-6 w-full bg-red-300/30 rounded-md"></div>
                  <div className="h-6 w-full bg-red-300/30 rounded-md"></div>
                  <div className="h-6 w-full bg-red-300/30 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'new-hire':
        return (
          <div className="w-32 h-28 bg-orange-100/20 dark:bg-orange-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-orange-200/30 dark:bg-orange-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-orange-600/70 dark:text-orange-300/70">New Hire</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <UserCog className={`${commonClasses} text-orange-500/80 h-8 w-8 mb-2`} />
                <div className="h-2 w-20 bg-orange-300/50 rounded-full mb-2"></div>
                <div className="h-2 w-16 bg-orange-400/50 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      case 'job-application':
        return (
          <div className="w-32 h-28 bg-teal-100/20 dark:bg-teal-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-teal-200/30 dark:bg-teal-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-teal-600/70 dark:text-teal-300/70">Applications</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <FileText className={`${commonClasses} text-teal-500/80 h-8 w-8 mb-2`} />
                <div className="grid grid-cols-1 gap-2 w-full">
                  <div className="h-2 w-full bg-teal-300/40 rounded-full"></div>
                  <div className="h-2 w-full bg-teal-300/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'supply-chain':
        return (
          <div className="w-32 h-28 bg-indigo-100/20 dark:bg-indigo-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-indigo-200/30 dark:bg-indigo-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-indigo-600/70 dark:text-indigo-300/70">Supply Chain</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <Truck className={`${commonClasses} text-indigo-500/80 h-8 w-8 mb-2`} />
                <div className="w-full h-6 flex justify-between">
                  <div className="h-2 w-2 bg-indigo-400/70 rounded-full self-start"></div>
                  <div className="h-2 w-16 bg-indigo-300/50 rounded-full self-center"></div>
                  <div className="h-2 w-2 bg-indigo-400/70 rounded-full self-end"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'inventory':
        return (
          <div className="w-32 h-28 bg-cyan-100/20 dark:bg-cyan-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-cyan-200/30 dark:bg-cyan-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-cyan-600/70 dark:text-cyan-300/70">Inventory</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <Package className={`${commonClasses} text-cyan-500/80 h-8 w-8 mb-2`} />
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="h-4 w-full bg-cyan-300/40 rounded-sm"></div>
                  <div className="h-4 w-full bg-cyan-400/40 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'reports':
        return (
          <div className="w-32 h-28 bg-amber-100/20 dark:bg-amber-900/20 rounded-lg shadow-md">
            <div className="relative w-full h-full p-3">
              <div className="absolute top-0 left-0 w-full h-6 bg-amber-200/30 dark:bg-amber-800/30 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-400/50 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-400/50 rounded-full"></div>
                <div className="ml-auto text-xs text-amber-600/70 dark:text-amber-300/70">Reports</div>
              </div>
              <div className="mt-8 flex flex-col items-center">
                <ClipboardList className={`${commonClasses} text-amber-500/80 h-8 w-8 mb-2`} />
                <div className="h-2 w-20 bg-amber-300/50 rounded-full mb-2"></div>
                <div className="grid grid-cols-1 gap-1 w-full">
                  <div className="h-2 w-full bg-amber-300/40 rounded-full"></div>
                  <div className="h-2 w-3/4 bg-amber-300/40 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-50">
      {items.map(item => (
        <div
          key={item.id}
          className="absolute pointer-events-none transition-all duration-500 ease-in-out"
          style={{
            left: item.left,
            top: item.top,
            transform: `scale(${item.scale})`,
            animation: `float-bubble-${item.id} ${item.duration}s ease-in-out infinite`,
            animationDelay: `${item.delay}s`,
            zIndex: 51,
            willChange: 'transform',
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
