import React, { createContext, useContext, useState, useEffect } from 'react';
import { UserProfile } from '../types';

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string, redirectPath?: string) => boolean;
  register: (profileData: Omit<UserProfile, 'id'>, pass: string) => boolean;
  logout: () => void;
  updateProfile: (updated: Partial<UserProfile>) => void;
  redirectAfterLogin: string | null;
  setRedirectAfterLogin: (path: string | null) => void;
}

const DEFAULT_USER: UserProfile = {
  id: 'usr-mca-901',
  name: 'Aman Sharma',
  email: 'aman.mca24@syllora.edu',
  studentId: '0827CA231012',
  course: 'MCA (Master of Computer Applications)',
  semester: 2,
  collegeName: 'School of Information Technology & Engineering',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80'
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('syllora_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [redirectAfterLogin, setRedirectAfterLogin] = useState<string | null>(() => {
    try {
      return localStorage.getItem('syllora_redirect_path') || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem('syllora_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('syllora_user');
      }
    } catch {
      // ignore
    }
  }, [user]);

  useEffect(() => {
    try {
      if (redirectAfterLogin) {
        localStorage.setItem('syllora_redirect_path', redirectAfterLogin);
      } else {
        localStorage.removeItem('syllora_redirect_path');
      }
    } catch {
      // ignore
    }
  }, [redirectAfterLogin]);

  const login = (email: string, _pass: string, redirectPath?: string): boolean => {
    const loggedUser: UserProfile = {
      ...DEFAULT_USER,
      email: email || DEFAULT_USER.email
    };
    setUser(loggedUser);
    if (redirectPath) {
      setRedirectAfterLogin(redirectPath);
    }
    return true;
  };

  const register = (profileData: Omit<UserProfile, 'id'>, _pass: string): boolean => {
    const newUser: UserProfile = {
      ...profileData,
      id: `usr-${Date.now()}`
    };
    setUser(newUser);
    return true;
  };

  const logout = () => {
    setUser(null);
    setRedirectAfterLogin(null);
  };

  const updateProfile = (updated: Partial<UserProfile>) => {
    if (!user) return;
    const modified = { ...user, ...updated };
    setUser(modified);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        updateProfile,
        redirectAfterLogin,
        setRedirectAfterLogin
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
