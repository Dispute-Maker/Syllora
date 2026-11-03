import React from 'react';
import { Menu, Sun, Moon, ShieldCheck, GraduationCap } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../context/AuthContext';

interface TopHeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen?: boolean;
}

export const TopHeader: React.FC<TopHeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200/80 dark:border-neutral-800 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-3 sm:gap-4">
        {!isSidebarOpen && (
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-xl text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Open navigation"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}

        {/* App Logo & Brand */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E6A02D] flex items-center justify-center text-white shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.3]" />
          </div>
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#25252B] dark:text-white font-['Poppins'] group-hover:text-[#E6A02D] transition-colors leading-none">
            Syllora
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          title="Toggle Light / Dark theme"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-neutral-600" />}
        </button>

        {isAuthenticated && user ? (
          <div
            onClick={() => navigate('/profile')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') navigate('/profile');
            }}
            className="flex items-center gap-2 pl-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-950 text-[#E6A02D] flex items-center justify-center font-bold text-xs">
              {user.name.charAt(0)}
            </div>
            <div className="hidden md:block text-left">
              <span className="block text-xs font-semibold text-[#25252B] dark:text-white group-hover:text-[#E6A02D] transition-colors leading-tight">
                {user.name}
              </span>
              <span className="text-[10px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1 font-medium">
                <ShieldCheck className="w-3 h-3" /> Student
              </span>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-[#E6A02D] text-white hover:bg-[#cf8e24] shadow-sm transition-colors cursor-pointer"
          >
            Sign In
          </button>
        )}
      </div>
    </header>
  );
};
