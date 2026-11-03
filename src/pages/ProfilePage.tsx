import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Edit3, Check, KeyRound, LogOut, GraduationCap, Building2, Hash, Mail } from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { user, isAuthenticated, updateProfile, logout } = useAuth();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || '');
  const [collegeName, setCollegeName] = useState(user?.collegeName || '');
  const [semester, setSemester] = useState(user?.semester || 1);
  const [successMessage, setSuccessMessage] = useState('');
  const [passwordNotice, setPasswordNotice] = useState(false);

  if (!isAuthenticated || !user) {
    return (
      <div className="max-w-md mx-auto text-center py-20 space-y-4">
        <h2 className="text-xl font-bold text-[#25252B] dark:text-white">Profile Access Restricted</h2>
        <p className="text-xs text-neutral-500">Please sign in to view your academic student identity.</p>
        <button
          onClick={() => navigate('/login?redirect=/profile')}
          className="px-5 py-2.5 bg-[#E6A02D] text-white font-semibold rounded-xl text-xs cursor-pointer"
        >
          Go to Sign In
        </button>
      </div>
    );
  }

  const handleSave = () => {
    updateProfile({ name, collegeName, semester });
    setIsEditing(false);
    setSuccessMessage('Profile details updated successfully!');
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 pb-12">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
          Student Profile
        </h1>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
          Review your enrolled university details and profile credentials.
        </p>
      </div>

      {successMessage && (
        <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
          {successMessage}
        </div>
      )}

      {/* Main Student Card */}
      <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-neutral-100 dark:border-neutral-700/60">
          <img
            src={user.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80'}
            alt={user.name}
            className="w-24 h-24 rounded-full object-cover border-4 border-amber-300 shadow-md"
          />
          <div className="text-center sm:text-left space-y-1">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-[#E6A02D] dark:bg-amber-950/40">
              Verified Student
            </span>
            <h2 className="text-xl font-bold text-[#25252B] dark:text-white">{user.name}</h2>
            <p className="text-xs text-neutral-500 flex items-center justify-center sm:justify-start gap-1">
              <Mail className="w-3.5 h-3.5" />
              <span>{user.email}</span>
            </p>
          </div>

          <div className="sm:ml-auto">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm cursor-pointer"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save Changes</span>
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-700 hover:bg-neutral-200 text-neutral-700 dark:text-neutral-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Profile</span>
              </button>
            )}
          </div>
        </div>

        {/* Profile Attributes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
            <span className="text-[11px] font-semibold text-neutral-400 block mb-1">Full Name</span>
            {isEditing ? (
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-[#25252B] dark:text-white"
              />
            ) : (
              <p className="text-xs font-bold text-[#25252B] dark:text-white">{user.name}</p>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
            <span className="text-[11px] font-semibold text-neutral-400 block mb-1">Student ID / Enrollment</span>
            <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#25252B] dark:text-white">
              <Hash className="w-3.5 h-3.5 text-neutral-400" />
              <span>{user.studentId}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
            <span className="text-[11px] font-semibold text-neutral-400 block mb-1">Enrolled Programme</span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#25252B] dark:text-white">
              <GraduationCap className="w-4 h-4 text-[#E6A02D]" />
              <span>{user.course}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800">
            <span className="text-[11px] font-semibold text-neutral-400 block mb-1">Current Semester</span>
            {isEditing ? (
              <select
                value={semester}
                onChange={e => setSemester(Number(e.target.value))}
                className="w-full text-xs p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-[#25252B] dark:text-white"
              >
                <option value={1}>Semester 1</option>
                <option value={2}>Semester 2</option>
                <option value={3}>Semester 3</option>
                <option value={4}>Semester 4</option>
              </select>
            ) : (
              <p className="text-xs font-bold text-[#25252B] dark:text-white">Semester {user.semester}</p>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 sm:col-span-2">
            <span className="text-[11px] font-semibold text-neutral-400 block mb-1">College / Institution</span>
            {isEditing ? (
              <input
                type="text"
                value={collegeName}
                onChange={e => setCollegeName(e.target.value)}
                className="w-full text-xs p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-[#25252B] dark:text-white"
              />
            ) : (
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#25252B] dark:text-white">
                <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                <span>{user.collegeName}</span>
              </div>
            )}
          </div>
        </div>

        {passwordNotice && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-800 text-xs rounded-xl font-medium">
            Password reset link sent to your registered email address ({user.email}).
          </div>
        )}

        {/* Actions */}
        <div className="pt-4 border-t border-neutral-100 dark:border-neutral-700/60 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              setPasswordNotice(true);
              setTimeout(() => setPasswordNotice(false), 4000);
            }}
            className="text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:text-[#E6A02D] flex items-center gap-1.5 cursor-pointer"
          >
            <KeyRound className="w-3.5 h-3.5" />
            <span>Change Password</span>
          </button>

          <button
            onClick={() => {
              logout();
              navigate('/login');
            }}
            className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1.5 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  );
};
