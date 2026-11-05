import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { GraduationCap, LogIn, UserCheck, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState('');

  const { login, redirectAfterLogin, setRedirectAfterLogin } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirectParam = searchParams.get('redirect') || redirectAfterLogin || '/';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please provide both student email and password.');
      return;
    }

    login(email, password);
    setRedirectAfterLogin(null);
    navigate(redirectParam);
  };

  const handleDemoFill = () => {
    setEmail('aman.mca24@syllora.edu');
    setPassword('syllora2025');
    setError('');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10 px-4">
      <div className="max-w-md w-full bg-white dark:bg-neutral-800 rounded-3xl p-8 border border-neutral-100 dark:border-neutral-700/60 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#E6A02D] text-white flex items-center justify-center mx-auto shadow-md">
            <GraduationCap className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
            Welcome to Syllora
          </h1>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Sign in to download study notes, access previous papers, and bookmark units.
          </p>
        </div>

        {redirectParam !== '/' && (
          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 text-amber-800 dark:text-amber-200 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>Sign in required to view or download protected syllabus materials.</span>
          </div>
        )}

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 text-rose-800 text-xs font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="e.g. aman.mca24@syllora.edu"
              className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-3 focus:outline-none focus:border-[#E6A02D]"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-3 focus:outline-none focus:border-[#E6A02D]"
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <label className="flex items-center gap-2 text-neutral-500 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
                className="rounded text-[#E6A02D] focus:ring-0"
              />
              <span>Remember me</span>
            </label>
            <span className="text-[#E6A02D] hover:underline cursor-pointer">Forgot password?</span>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[#E6A02D] hover:bg-[#cf8e24] text-white font-semibold text-xs transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            <span>Sign In to Account</span>
          </button>
        </form>

        {/* 1-Click Demo Shortcut */}
        <div className="pt-2">
          <button
            type="button"
            onClick={handleDemoFill}
            className="w-full py-2.5 px-3 rounded-xl border border-amber-300 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20 text-[#E6A02D] text-xs font-semibold hover:bg-amber-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>Fill Demo Credentials (1-Click)</span>
          </button>
        </div>

        <p className="text-center text-xs text-neutral-500">
          Don't have a student profile?{' '}
          <Link to="/register" className="font-semibold text-[#E6A02D] hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};
