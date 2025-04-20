
import React from "react";
// Only allowed Lucide icons are imported.
import {
  file,
  file-badge,
  file-check,
  file-text,
  file-spreadsheet,
  file-search,
  chart-bar,
  chart-line,
  chart-pie,
  check,
  clipboard-list,
  calendar,
  user,
  user-plus,
  user-cog,
  users,
  book,
  book-check,
  badge,
  badge-check,
  folder,
  folder-check,
  inbox,
  order,
  package as packageIcon,
  pipeline,
  resource,
  report,
  task,
  timeline,
  workflow,
  notifications,
  mail,
} from "lucide-react";

// Mapping each unique floating item to an icon
const iconMap: Record<string, React.ElementType> = {
  Invoice: file-badge,
  Ledger: file-text,
  Payroll: file-check,
  Budgeting: file-spreadsheet,
  Tax: file-check,
  Roadmap: chart-line,
  Sprint: calendar,
  Prototype: file,
  Wireframe: file,
  "Feature Request": file-search,
  "Job Application": file-check,
  Onboarding: user-plus,
  Performance: check,
  "New Hire": user-plus,
  Resume: file-text,
  Task: task,
  Timeline: timeline,
  Workflow: workflow,
  Resource: resource,
  Milestone: book-check,
  Lead: user,
  CRM: users,
  Deal: file-badge,
  Proposal: file-text,
  Pipeline: pipeline,
  Inventory: packageIcon,
  Procurement: packageIcon,
  Shipment: packageIcon,
  Order: order,
  Warehouse: folder,
  Dashboard: chart-bar,
  Report: report,
  "AI Suggestion": badge,
  Badge: badge,
  Certificate: badge-check,
  Notifications: notifications,
};

interface FloatingBubbleProps {
  name: string;
  left: string;
  top: string;
  duration: number;
  delay: number;
  scale: number;
  isPaused: boolean;
  id: number;
}
const FLOAT_COLORS = [
  "bg-blue-100/20 dark:bg-blue-900/20",
  "bg-green-100/20 dark:bg-green-900/20",
  "bg-purple-100/20 dark:bg-purple-900/20",
  "bg-orange-100/20 dark:bg-orange-900/20",
  "bg-yellow-100/20 dark:bg-yellow-900/20",
  "bg-red-100/20 dark:bg-red-900/20",
  "bg-cyan-100/20 dark:bg-cyan-900/20",
  "bg-amber-100/20 dark:bg-amber-900/20",
  "bg-indigo-100/20 dark:bg-indigo-900/20",
];

export const FloatingBubble: React.FC<FloatingBubbleProps> = ({
  name,
  left,
  top,
  duration,
  delay,
  scale,
  isPaused,
  id,
}) => {
  const Icon = iconMap[name];
  const color = FLOAT_COLORS[id % FLOAT_COLORS.length];

  return (
    <div
      className={`absolute pointer-events-none transition-all ${isPaused ? "paused" : ""}`}
      style={{
        left,
        top,
        transform: `scale(${scale})`,
        animation: !isPaused
          ? `float-bubble-${id} ${duration}s ease-in-out infinite`
          : "none",
        animationDelay: `${delay}s`,
        zIndex: 51,
        willChange: "transform",
      }}
    >
      <div className={`w-28 h-24 ${color} rounded-xl shadow-md flex flex-col items-center justify-center`}>
        {Icon && <Icon className="w-10 h-10 mb-1 text-skill-blue" />}
        <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">{name}</span>
      </div>
    </div>
  );
};
