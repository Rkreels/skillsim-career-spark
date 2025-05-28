
import React from "react";
// Only allowed Lucide icons are imported.
import {
  File,
  FileBadge,
  FileCheck,
  FileText,
  FileSpreadsheet,
  FileSearch,
  BarChart,
  LineChart,
  PieChart,
  Check,
  ClipboardList,
  Calendar,
  User,
  UserPlus,
  UserCog,
  Users,
  Book,
  BookCheck,
  Badge,
  BadgeCheck,
  Folder,
  FolderCheck,
  Inbox,
  Package as PackageIcon,
  Mail,
} from "lucide-react";

// Mapping each unique floating item to an icon
const iconMap: Record<string, React.ElementType> = {
  Invoice: FileBadge,
  Ledger: FileText,
  Payroll: FileCheck,
  Budgeting: FileSpreadsheet,
  Tax: FileCheck,
  Roadmap: LineChart,
  Sprint: Calendar,
  Prototype: File,
  Wireframe: File,
  "Feature Request": FileSearch,
  "Job Application": FileCheck,
  Onboarding: UserPlus,
  Performance: Check,
  "New Hire": UserPlus,
  Resume: FileText,
  Task: ClipboardList,
  Timeline: BarChart,
  Workflow: BarChart,
  Resource: Folder,
  Milestone: BookCheck,
  Lead: User,
  CRM: Users,
  Deal: FileBadge,
  Proposal: FileText,
  Pipeline: BarChart,
  Inventory: PackageIcon,
  Procurement: PackageIcon,
  Shipment: PackageIcon,
  Order: ClipboardList,
  Warehouse: Folder,
  Dashboard: BarChart,
  Report: FileText,
  "AI Suggestion": Badge,
  Badge: Badge,
  Certificate: BadgeCheck,
  Notifications: Mail,
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
