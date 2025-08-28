import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface ToolTrackerProps {
  toolId: string;
  toolName: string;
  department: string;
  onToolClick: () => void;
}

const ToolTracker: React.FC<ToolTrackerProps> = ({ 
  toolId, 
  toolName, 
  department, 
  onToolClick 
}) => {
  const { trackToolInteraction } = useAnalytics();

  const handleClick = () => {
    // Track the tool interaction
    trackToolInteraction({
      toolId,
      toolName,
      department,
      timestamp: Date.now(),
      duration: Math.floor(Math.random() * 30) + 5, // Simulate 5-35 minutes
      actionsCount: 1,
      completionRate: Math.random() * 100
    });

    // Execute the original click handler
    onToolClick();
  };

  return null; // This is a utility component, no UI
};

export default ToolTracker;