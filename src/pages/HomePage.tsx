import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  ArrowRight,
  BookOpen,
  GraduationCap,
  BookMarked,
  FileQuestion,
  Video
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTerm.trim();
    if (!query) return;
    navigate(`/explore?q=${encodeURIComponent(query)}`);
  };

  // Primary 4 academic learning categories
  const primaryCategories = [
    {
      id: 'syllabus',
      title: 'Syllabus',
      icon: GraduationCap,
      description: 'Explore official MCA curriculum semester-wise with verified syllabus PDFs.',
      shortDescription: 'Semester-wise PDFs',
      action: 'View Syllabus',
      accentBg: 'bg-amber-500/10 dark:bg-amber-500/20 text-[#E6A02D]',
      borderColor: 'border-amber-200/60 dark:border-amber-900/40 hover:border-[#E6A02D]',
      targetUrl: '/courses/mca?category=syllabus'
    },
    {
      id: 'notes',
      title: 'Notes',
      icon: BookMarked,
      description: 'Find study notes organized by semester, subject, and unit curriculum.',
      shortDescription: 'Subject-wise notes',
      action: 'Browse Notes',
      accentBg: 'bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400',
      borderColor: 'border-blue-200/60 dark:border-blue-900/40 hover:border-blue-500',
      targetUrl: '/courses/mca?category=notes'
    },
    {
      id: 'pyq',
      title: 'Question Papers',
      icon: FileQuestion,
      description: 'Access previous-year exam papers organized by semester and subject.',
      shortDescription: 'Previous-year papers',
      action: 'View Papers',
      accentBg: 'bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400',
      borderColor: 'border-emerald-200/60 dark:border-emerald-900/40 hover:border-emerald-500',
      targetUrl: '/courses/mca?category=pyq'
    },
    {
      id: 'youtube',
      title: 'YouTube Learning',
      icon: Video,
      description: 'Topic-wise curated video lectures aligned with university syllabus.',
      shortDescription: 'Video lessons',
      action: 'Watch Lectures',
      accentBg: 'bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400',
      borderColor: 'border-rose-200/60 dark:border-rose-900/40 hover:border-rose-500',
      targetUrl: '/youtube-learning'
    }
  ];

  return (
    <div className="space-y-4 sm:space-y-10 max-w-7xl mx-auto pb-8 sm:pb-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200/50 dark:border-amber-900/30 p-4 sm:p-10 lg:p-14">
        <div className="max-w-3xl space-y-3 sm:space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[#E6A02D]/15 text-[#E6A02D] font-semibold text-[11px] sm:text-xs">
            <BookOpen className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">MCA • Semesters 1 to 4 Ready</span>
          </div>

          <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-[#25252B] dark:text-white font-['Poppins'] tracking-tight leading-tight">
            Everything You Need to Study.
          </h1>

          <p className="text-xs sm:text-base text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
            Your academic learning resources, organized in one place. Explore official syllabus, notes,
            previous-year question papers, and curated video lectures aligned directly with your university curriculum.
          </p>

          {/* Prominent Search Bar */}
          <form onSubmit={handleSearchSubmit} className="pt-0.5 sm:pt-2">
            <div className="relative flex items-center max-w-2xl bg-white dark:bg-neutral-800 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-lg shadow-neutral-200/50 dark:shadow-none border border-neutral-200 dark:border-neutral-700">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 ml-2 sm:ml-3 flex-shrink-0" />
              <input
                type="text"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                placeholder="Try 'DBMS Normalization'..."
                className="w-full bg-transparent border-none focus:outline-none px-2 sm:px-3 text-xs sm:text-sm text-[#25252B] dark:text-white placeholder-neutral-400"
              />
              <button
                type="submit"
                className="bg-[#E6A02D] hover:bg-[#cf8e24] text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold text-xs transition-colors flex-shrink-0 shadow-sm cursor-pointer whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </form>

          {/* Action Shortcut */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-0.5 sm:pt-1">
            <button
              onClick={() => navigate('/courses/mca')}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-[#25252B] dark:bg-neutral-800 text-white font-semibold text-[11px] sm:text-xs hover:bg-neutral-800 dark:hover:bg-neutral-700 transition-colors shadow-sm border border-neutral-700/50 hover:border-[#E6A02D]/50 cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#E6A02D]" />
              <span>Browse All Semesters</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400 ml-0.5" />
            </button>
            <button
              onClick={() => navigate('/youtube-learning')}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold text-[11px] sm:text-xs hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors shadow-sm border border-neutral-200 dark:border-neutral-700 cursor-pointer"
            >
              <Video className="w-3.5 h-3.5 text-rose-500" />
              <span className="text-neutral-900 dark:text-white font-semibold opacity-100">Video Lectures</span>
            </button>
          </div>
        </div>

        {/* Decorative Syllora Student Character Illustration (Desktop only: lg and above) */}
        <div
          className="hidden lg:flex absolute lg:right-8 bottom-0 pointer-events-none select-none z-0 items-end justify-end h-full max-h-full"
          aria-hidden="true"
        >
          {/* Subtle warm amber ambient glow behind the character */}
          <div className="absolute -bottom-6 right-2 w-80 h-80 bg-amber-500/15 dark:bg-amber-400/10 rounded-full blur-3xl -z-10" />

          <img
            src={`${import.meta.env.BASE_URL.replace(/\/?$/, '/')}assets/aistudio/syllora-hero-student.png`}
            alt=""
            className="w-[350px] xl:w-[390px] max-h-[94%] object-contain object-bottom opacity-22 dark:opacity-18 transition-opacity duration-300"
            loading="eager"
            decoding="async"
          />
        </div>
      </section>

      {/* Primary Academic Categories Section */}
      <section className="space-y-2.5 sm:space-y-4">
        <div>
          <h2 className="text-base sm:text-2xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
            Explore MCA Resources
          </h2>
          <p className="text-[11px] sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5 sm:mt-1">
            Official curriculum, study notes, question papers, and video lectures organized semester-wise.
          </p>
        </div>

        {/* 4 Cards Grid - 2-Column Responsive Dashboard on Mobile, 2 on Tablet, 4 on Desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {primaryCategories.map(cat => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                onClick={() => navigate(cat.targetUrl)}
                className={`group bg-white dark:bg-neutral-800 p-3 sm:p-5 lg:p-6 rounded-2xl sm:rounded-3xl border ${cat.borderColor} shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between h-full`}
              >
                <div className="flex flex-col flex-1">
                  {/* Icon container */}
                  <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center ${cat.accentBg} group-hover:scale-105 transition-transform duration-200 shadow-sm flex-shrink-0 mb-2 sm:mb-3.5`}>
                    <Icon className="w-4 h-4 sm:w-6 sm:h-6 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-xs sm:text-lg text-[#25252B] dark:text-white group-hover:text-[#E6A02D] transition-colors font-['Poppins'] leading-tight sm:leading-normal min-h-[30px] sm:min-h-0 flex items-center sm:block line-clamp-2 sm:line-clamp-none">
                    {cat.title}
                  </h3>

                  {/* Mobile Short Description (< sm) vs Desktop Full Description (sm:) */}
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-1 leading-snug line-clamp-1 sm:hidden">
                    {cat.shortDescription}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 sm:mt-2 line-clamp-2 leading-relaxed hidden sm:block flex-1">
                    {cat.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="mt-3 sm:mt-5 pt-2 sm:pt-4 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-[#E6A02D]">
                  <span className="truncate">{cat.action}</span>
                  {/* Mobile simple arrow */}
                  <ArrowRight className="w-3 h-3 sm:hidden flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  {/* Desktop circular arrow container */}
                  <div className="w-6 h-6 rounded-full bg-amber-50 dark:bg-amber-950/40 hidden sm:flex items-center justify-center group-hover:translate-x-1 transition-transform">
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
