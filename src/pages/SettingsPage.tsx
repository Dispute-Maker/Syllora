import React, { useState } from 'react';
import { Moon, Sun, KeyRound, HelpCircle, LogOut } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const SettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [passwordNotice, setPasswordNotice] = useState(false);

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
          Platform Settings
        </h1>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
          Configure interface preferences, themes, and view application build information.
        </p>
      </div>

      <div className="space-y-4">
        {/* Theme Toggle Card */}
        <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm flex items-center justify-between gap-3">
          <div className="space-y-0.5 sm:space-y-1 min-w-0">
            <h3 className="text-sm font-bold text-[#25252B] dark:text-white flex items-center gap-2">
              {theme === 'dark' ? <Moon className="w-4 h-4 text-amber-400 flex-shrink-0" /> : <Sun className="w-4 h-4 text-amber-500 flex-shrink-0" />}
              <span>Interface Theme</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 sm:line-clamp-none">
              Switch between Syllora light canvas and high-contrast dark mode.
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="px-3 sm:px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-xs font-semibold text-[#25252B] dark:text-white hover:bg-neutral-200 transition-colors cursor-pointer flex-shrink-0 whitespace-nowrap"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>

        {/* Change Password Card */}
        <div className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm flex items-center justify-between gap-3">
          <div className="space-y-0.5 sm:space-y-1 min-w-0">
            <h3 className="text-sm font-bold text-[#25252B] dark:text-white flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-[#E6A02D] flex-shrink-0" />
              <span>Change Account Password</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 sm:line-clamp-none">
              Update credentials used to log in and access downloads.
            </p>
          </div>
          <button
            onClick={() => {
              setPasswordNotice(true);
              setTimeout(() => setPasswordNotice(false), 3000);
            }}
            className="px-3 sm:px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-xs font-semibold text-[#25252B] dark:text-white hover:bg-neutral-200 transition-colors cursor-pointer flex-shrink-0"
          >
            Update
          </button>
        </div>
        {passwordNotice && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-800 text-xs rounded-xl font-medium">
            Demo notice: In this prototype, mock password reset links are simulated safely.
          </div>
        )}

        {/* Help Link Card */}
        <div
          onClick={() => navigate('/help')}
          className="bg-white dark:bg-neutral-800 p-4 sm:p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm flex items-center justify-between gap-3 cursor-pointer hover:border-[#E6A02D] transition-colors"
        >
          <div className="space-y-0.5 sm:space-y-1 min-w-0">
            <h3 className="text-sm font-bold text-[#25252B] dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#E6A02D] flex-shrink-0" />
              <span>Help & Support Center</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 sm:line-clamp-none">
              Read step-by-step guides, FAQs, and submit problem reports.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#E6A02D] flex-shrink-0">Visit Help</span>
        </div>


        {/* Sign Out Card */}
        <div className="pt-4 flex justify-end">
          <button
            onClick={() => {
              logout();
              navigate('/login');
            }}
            className="px-5 py-2.5 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out of Syllora</span>
          </button>
        </div>
      </div>
    </div>
  );
};
