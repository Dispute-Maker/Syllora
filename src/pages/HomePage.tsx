import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  BookOpen,
  GraduationCap,
  BookMarked,
  FileQuestion
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/explore');
    }
  };

  // Primary 3 MCA categories requested by user
  const primaryCategories = [
    {
      id: 'syllabus',
      title: 'Syllabus',
      icon: GraduationCap,
      description: 'Explore the official MCA syllabus semester-wise, including subjects and units.',
      action: 'Explore Syllabus',
      accentBg: 'bg-amber-500/10 dark:bg-amber-500/20 text-[#E6A02D]',
      borderColor: 'border-amber-200/60 dark:border-amber-900/40 hover:border-[#E6A02D]',
      targetUrl: '/courses/mca?category=syllabus'
    },
    {
      id: 'notes',
      title: 'Notes',
      icon: BookMarked,
      description: 'Find study notes organized by semester, subject and unit.',
      action: 'Explore Notes',
      accentBg: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
      borderColor: 'border-blue-200/60 dark:border-blue-900/40 hover:border-blue-500',
      targetUrl: '/courses/mca?category=notes'
    },
    {
      id: 'pyq',
      title: 'Question Papers',
      icon: FileQuestion,
      description: 'Access previous-year MCA question papers organized by semester and subject.',
      action: 'Explore Question Papers',
      accentBg: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
      borderColor: 'border-emerald-200/60 dark:border-emerald-900/40 hover:border-emerald-500',
      targetUrl: '/courses/mca?category=pyq'
    }
  ];

  return (
    <div className="space-y-12 max-w-7xl mx-auto pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/50 dark:border-amber-900/30 p-8 sm:p-12 lg:p-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E6A02D]/15 text-[#E6A02D] font-semibold text-xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Master of Computer Applications — Semester 1 to 4 Ready</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#25252B] dark:text-white font-['Poppins'] tracking-tight leading-tight">
            Everything You Need to Study.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed">
            Your academic learning resources, organized in one place. Explore official syllabus, notes,
            and previous-year question papers aligned directly with your university curriculum.
          </p>

          {/* Prominent Search Bar */}
          <form onSubmit={handleSearchSubmit} className="pt-2">
            <div className="relative flex items-center max-w-2xl bg-white dark:bg-neutral-800 rounded-2xl p-2 shadow-lg shadow-neutral-200/50 dark:shadow-none border border-neutral-200 dark:border-neutral-700">
              <Search className="w-5 h-5 text-neutral-400 ml-3 flex-shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Try searching 'DBMS Normalization', 'Deadlocks', or 'MCA 101'..."
                className="w-full bg-transparent border-none focus:outline-none px-3 text-sm text-[#25252B] dark:text-white placeholder-neutral-400"
              />
              <button
                type="submit"
                className="bg-[#E6A02D] hover:bg-[#cf8e24] text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors flex-shrink-0 shadow-sm cursor-pointer"
              >
                Search Library
              </button>
            </div>
          </form>

          {/* Action Shortcut */}
          <div className="flex items-center gap-4 pt-2">
            <button
              onClick={() => navigate('/courses/mca')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25252B] dark:bg-neutral-800 text-white font-semibold text-xs hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors shadow-sm border border-neutral-700/50 hover:border-[#E6A02D]/50 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#E6A02D]" />
              <span>Browse All Semesters</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Primary MCA Resource Categories Section (Replacing old Curated Resource Types) */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
            Explore MCA Resources
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Everything you need for your MCA studies, organized semester-wise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {primaryCategories.map(cat => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => navigate(cat.targetUrl)}
                className={`group bg-white dark:bg-neutral-800 p-7 rounded-3xl border ${cat.borderColor} shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${cat.accentBg} group-hover:scale-105 transition-transform duration-300 shadow-sm`}>
                    <Icon className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg sm:text-xl text-[#25252B] dark:text-white group-hover:text-[#E6A02D] transition-colors font-['Poppins']">
                      {cat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between text-xs font-semibold text-[#E6A02D]">
                  <span>{cat.action}</span>
                  <div className="w-7 h-7 rounded-full bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
