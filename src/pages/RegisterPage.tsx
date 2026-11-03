import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, UserPlus } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [studentId, setStudentId] = useState('');
  const [course, setCourse] = useState('MCA (Master of Computer Applications)');
  const [semester, setSemester] = useState(1);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !studentId || !password) {
      setError('Please fill out all registration fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Password and confirmation do not match.');
      return;
    }

    register(
      {
        name,
        email,
        studentId,
        course,
        semester,
        collegeName: 'School of Information Technology & Engineering'
      },
      password
    );

    navigate('/profile');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-10 px-4">
      <div className="max-w-md w-full bg-white dark:bg-neutral-800 rounded-3xl p-8 border border-neutral-100 dark:border-neutral-700/60 shadow-xl space-y-6">
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-[#E6A02D] text-white flex items-center justify-center mx-auto shadow-md">
            <GraduationCap className="w-7 h-7" />
          </div>
          <h1 className="text-2xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
            Create Student Account
          </h1>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            Join Syllora to access semester resources, lecture guides, and test papers.
          </p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 text-rose-800 text-xs font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-3.5">
          <div>
            <label className="block text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Aman Sharma"
              className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-2.5 focus:outline-none focus:border-[#E6A02D]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
              Student Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="e.g. student@college.edu"
              className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-2.5 focus:outline-none focus:border-[#E6A02D]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
              Student ID / Enrollment Number
            </label>
            <input
              type="text"
              required
              value={studentId}
              onChange={e => setStudentId(e.target.value)}
              placeholder="e.g. 0827CA231012"
              className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-2.5 focus:outline-none focus:border-[#E6A02D]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
                Programme
              </label>
              <select
                value={course}
                onChange={e => setCourse(e.target.value)}
                className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-2.5 focus:outline-none focus:border-[#E6A02D]"
              >
                <option value="MCA (Master of Computer Applications)">MCA</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
                Semester
              </label>
              <select
                value={semester}
                onChange={e => setSemester(Number(e.target.value))}
                className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-2.5 focus:outline-none focus:border-[#E6A02D]"
              >
                <option value={1}>Semester 1</option>
                <option value={2}>Semester 2</option>
                <option value={3}>Semester 3</option>
                <option value={4}>Semester 4</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-2.5 focus:outline-none focus:border-[#E6A02D]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 mb-1">
                Confirm
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white p-2.5 focus:outline-none focus:border-[#E6A02D]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl bg-[#E6A02D] hover:bg-[#cf8e24] text-white font-semibold text-xs transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>Complete Registration</span>
          </button>
        </form>

        <p className="text-center text-xs text-neutral-500">
          Already registered?{' '}
          <Link to="/login" className="font-semibold text-[#E6A02D] hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};
