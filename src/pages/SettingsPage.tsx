import React, { useState } from 'react';
import { Moon, Sun, KeyRound, HelpCircle, Info, LogOut } from 'lucide-react';
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
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#25252B] dark:text-white flex items-center gap-2">
              {theme === 'dark' ? <Moon className="w-4 h-4 text-amber-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
              <span>Interface Theme</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Switch between Syllora light canvas and high-contrast dark mode.
            </p>
          </div>
          <button
            onClick={toggleTheme}
            className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-xs font-semibold text-[#25252B] dark:text-white hover:bg-neutral-200 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
          </button>
        </div>

        {/* Change Password Card */}
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#25252B] dark:text-white flex items-center gap-2">
              <KeyRound className="w-4 h-4 text-[#E6A02D]" />
              <span>Change Account Password</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Update credentials used to log in and access downloads.
            </p>
          </div>
          <button
            onClick={() => {
              setPasswordNotice(true);
              setTimeout(() => setPasswordNotice(false), 3000);
            }}
            className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-xs font-semibold text-[#25252B] dark:text-white hover:bg-neutral-200 transition-colors cursor-pointer"
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
          className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm flex items-center justify-between cursor-pointer hover:border-[#E6A02D] transition-colors"
        >
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-[#25252B] dark:text-white flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#E6A02D]" />
              <span>Help & Support Center</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Read step-by-step guides, FAQs, and submit problem reports.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#E6A02D]">Visit Help</span>
        </div>

        {/* About Syllora */}
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-[#25252B] dark:text-white flex items-center gap-2">
            <Info className="w-4 h-4 text-neutral-400" />
            <span>About Syllora Prototype</span>
          </h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Syllora is an MCA College Minor Project built as an academic resource platform.
            Official syllabus units and past exam materials are curated systematically to eliminate
            chaotic WhatsApp and cloud drive sharing.
          </p>
          <div className="pt-2 text-[11px] font-mono text-neutral-400 space-y-1">
            <p>Prototype Architecture: React 19 + TypeScript + Tailwind CSS</p>
            <p>Production Target Stack: Node.js, Express, MongoDB Atlas, Mongoose, EJS & Bootstrap</p>
          </div>
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
