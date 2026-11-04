import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Home,
  Compass,
  BookOpen,
  User,
  Settings,
  HelpCircle,
  LogOut,
  LogIn,
  X
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<Props> = ({ isOpen, onClose }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLinkClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      onClose();
    }
  };

  const navItems = [
    { label: 'Home', path: '/', icon: Home },
    { label: 'Explore', path: '/explore', icon: Compass },
    { label: 'Courses', path: '/courses', icon: BookOpen },
    { label: 'Profile', path: '/profile', icon: User },
    { label: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-neutral-900/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Sidebar Panel */}
      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-[260px] bg-white dark:bg-black border-r border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div>
          {/* Sidebar Header with Main Navigation & Close Cross Button */}
          <div className="h-16 px-5 border-b border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-4 bg-[#E6A02D] rounded-full inline-block shadow-sm shadow-amber-500/50" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#25252B] dark:text-neutral-100">
                Main Navigation
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-neutral-400 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors cursor-pointer"
              aria-label="Close navigation"
              title="Close navigation"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="px-3 py-4">
            <nav className="space-y-1">
              {navItems.map(item => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-amber-500/15 dark:bg-amber-500/20 text-[#E6A02D] font-bold border border-amber-500/40 shadow-sm shadow-amber-500/10'
                          : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-[#25252B] dark:hover:text-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <Icon className="w-4 h-4 flex-shrink-0 stroke-[2.2]" />
                          <span>{item.label}</span>
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E6A02D] shadow-sm shadow-amber-500" />
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>

            {/* Support Navigation */}
            <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800/80">
              <span className="px-3 text-[11px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-400">
                Support
              </span>
              <nav className="mt-2">
                <NavLink
                  to="/help"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-amber-500/15 dark:bg-amber-500/20 text-[#E6A02D] font-bold border border-amber-500/40 shadow-sm shadow-amber-500/10'
                        : 'text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-[#25252B] dark:hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 flex-shrink-0 stroke-[2.2]" />
                        <span>Help & Assistant</span>
                      </div>
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E6A02D] shadow-sm shadow-amber-500" />
                      )}
                    </>
                  )}
                </NavLink>
              </nav>
            </div>
          </div>
        </div>

        {/* Account Bottom Section */}
        <div className="p-4 border-t border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/70 dark:bg-neutral-950">
          {isAuthenticated && user ? (
            <div className="flex items-center justify-between gap-3">
              <div
                onClick={() => {
                  navigate('/profile');
                  handleLinkClick();
                }}
                className="flex items-center gap-2.5 cursor-pointer min-w-0"
              >
                <img
                  src={user.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'}
                  alt={user.name}
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#E6A02D]"
                />
                <div className="min-w-0">
                  <p className="text-xs font-bold text-[#25252B] dark:text-white truncate">
                    {user.name}
                  </p>
                  <div className="mt-0.5">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-[#E6A02D]/20 text-[#E6A02D] border border-[#E6A02D]/40">
                      MCA Sem {user.semester}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleLogout}
                title="Logout"
                aria-label="Logout"
                className="p-2 text-neutral-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-2">
              <button
                onClick={() => {
                  navigate('/login');
                  handleLinkClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-white bg-[#E6A02D] hover:bg-[#cf8e24] rounded-xl shadow-sm transition-colors cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Sign In to Access</span>
              </button>
              <p className="text-[10px] text-center text-neutral-400 dark:text-neutral-500">
                Browsing guest mode
              </p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
