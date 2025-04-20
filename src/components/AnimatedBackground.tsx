
import React, { useEffect, useState, useRef } from "react";
import { FloatingBubble } from "./FloatingBubble";

// List of unique floating items as per user specification
const FLOATING_ITEMS: string[] = [
  "Invoice",
  "Ledger",
  "Payroll",
  "Budgeting",
  "Tax",
  "Roadmap",
  "Sprint",
  "Prototype",
  "Wireframe",
  "Feature Request",
  "Job Application",
  "Onboarding",
  "Performance",
  "New Hire",
  "Resume",
  "Task",
  "Timeline",
  "Workflow",
  "Resource",
  "Milestone",
  "Lead",
  "CRM",
  "Deal",
  "Proposal",
  "Pipeline",
  "Inventory",
  "Procurement",
  "Shipment",
  "Order",
  "Warehouse",
  "Dashboard",
  "Report",
  "AI Suggestion",
  "Badge",
  "Certificate",
  "Notifications",
];

interface AnimationItem {
  id: number;
  name: string;
  left: string;
  top: string;
  duration: number;
  delay: number;
  scale: number;
}

const AnimatedBackground: React.FC = () => {
  const [items, setItems] = useState<AnimationItem[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef<number | null>(null);
  const itemsRef = useRef<AnimationItem[]>([]);

  useEffect(() => {
    // Only render one bubble per unique name
    const pageHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    const newItems: AnimationItem[] = FLOATING_ITEMS.map((name, i) => {
      const baseDuration = 15 + Math.random() * 10;
      const speedIncreasedDuration = baseDuration * 0.95; // 5% faster
      return {
        id: i,
        name,
        left: `${Math.random() * 90}%`,
        top: `${(i / FLOATING_ITEMS.length) * pageHeight}px`,
        duration: speedIncreasedDuration,
        delay: Math.random() * 5,
        scale: 0.7 + Math.random() * 0.4,
      };
    });
    setItems(newItems);
    itemsRef.current = newItems;
    // Cleanup
    return () => {
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) window.clearTimeout(scrollTimeout.current);
    };
  }, []);

  // Generate animation keyframes for each bubble
  const generateAnimationStyles = () => {
    return items
      .map(
        (item) => `
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
    `
      )
      .join("");
  };

  return (
    <div className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-50">
      {items.map((item) => (
        <FloatingBubble
          key={item.id}
          {...item}
          isPaused={isScrolling}
        />
      ))}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        ${generateAnimationStyles()}
        .paused {
          animation-play-state: paused !important;
        }
      `,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;

