
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'hr' | 'accounting' | 'sales' | 'marketing' | 'operations' | 'management';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  department: string;
  isOnboarded: boolean;
  completedCourses: string[];
  currentCourses: string[];
  skillLevel: 'beginner' | 'intermediate' | 'advanced';
}

interface UserContextType {
  user: UserProfile | null;
  setUser: (user: UserProfile) => void;
  updateUserRole: (role: UserRole, department: string) => void;
  completeOnboarding: () => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUserState] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading user data from localStorage or API
    const loadUserData = () => {
      const savedUser = localStorage.getItem('skillsim-user');
      if (savedUser) {
        setUserState(JSON.parse(savedUser));
      }
      setIsLoading(false);
    };

    loadUserData();
  }, []);

  const setUser = (newUser: UserProfile) => {
    setUserState(newUser);
    localStorage.setItem('skillsim-user', JSON.stringify(newUser));
  };

  const updateUserRole = (role: UserRole, department: string) => {
    if (user) {
      const updatedUser = { ...user, role, department };
      setUser(updatedUser);
    }
  };

  const completeOnboarding = () => {
    if (user) {
      const updatedUser = { ...user, isOnboarded: true };
      setUser(updatedUser);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, updateUserRole, completeOnboarding, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
