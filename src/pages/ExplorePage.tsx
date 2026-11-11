import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Search,
  X,
  FileText,
  Award,
  CheckCircle2,
  PlayCircle,
  BookOpen,
  Layers,
  ArrowRight,
  RotateCcw,
  AlertCircle,
  Lightbulb,
  SlidersHorizontal
} from 'lucide-react';
import { MOCK_RESOURCES, SUBJECTS } from '../data/mockData';

export type SearchResultKind =
  | 'subject'
  | 'topic'
  | 'notes'
  | 'pyq'
  | 'solution'
  | 'video';

export interface SearchResultItem {
  id: string;
  kind: SearchResultKind;
  title: string;
  description: string;
  courseCode: string;
  courseId: string;
  semester: number;
  subjectName: string;
  subjectCode: string;
  subjectId: string;
  unitNumber?: number;
  unitTitle?: string;
  actionLabel: string;
  actionUrl: string;
  badgeLabel: string;
  badgeStyle: string;
  hasDownloadableFile: boolean;
}

export const ExplorePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // URL query parameter 'q'
  const urlQuery = searchParams.get('q') || '';

  // Local search input value and actively executed query
  const [searchInput, setSearchInput] = useState(urlQuery);
  const [activeQuery, setActiveQuery] = useState(urlQuery);

  // Filters state
  const [selectedSemester, setSelectedSemester] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  // Keep state synchronized with URL search parameter (e.g. when landing from HomePage)
  useEffect(() => {
    const qParam = searchParams.get('q') || '';
    setSearchInput(qParam);
    setActiveQuery(qParam);
  }, [searchParams]);

  // Dynamically available subjects based on selected semester
  const availableSubjects = useMemo(() => {
    if (selectedSemester === 'all') {
      return SUBJECTS;
    }
    return SUBJECTS.filter(s => s.semester === Number(selectedSemester));
  }, [selectedSemester]);

  // Reset selected subject if it does not belong to the selected semester
  useEffect(() => {
    if (selectedSubject !== 'all') {
      const exists = availableSubjects.some(s => s.id === selectedSubject);
      if (!exists) {
        setSelectedSubject('all');
      }
    }
  }, [selectedSemester, availableSubjects, selectedSubject]);

  // Handle Search Submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchInput.trim();
    setActiveQuery(trimmed);

    if (trimmed) {
      setSearchParams({ q: trimmed });
    } else {
      setSearchParams({});
    }
  };

  // Clear search input and search results
  const handleClearSearch = () => {
    setSearchInput('');
    setActiveQuery('');
    setSearchParams({});
    setSelectedSemester('all');
    setSelectedSubject('all');
    setSelectedType('all');
  };

  // Reset all filters to default
  const handleClearFilters = () => {
    setSelectedSemester('all');
    setSelectedSubject('all');
    setSelectedType('all');
  };

  const isFiltersActive =
    selectedSemester !== 'all' ||
    selectedSubject !== 'all' ||
    selectedType !== 'all';

  // Search Engine Algorithm
  const searchResults: SearchResultItem[] = useMemo(() => {
    const q = activeQuery.toLowerCase().trim();
    if (!q) return [];

    const terms = q.split(/\s+/).filter(Boolean);

    // Text matcher helper (matches full query phrase or all whitespace-separated terms)
    const matchesText = (text?: string): boolean => {
      if (!text) return false;
      const lower = text.toLowerCase();
      return lower.includes(q) || terms.every(t => lower.includes(t));
    };

    const results: SearchResultItem[] = [];

    // Helper for resource badge styling
    const getResourceBadge = (type: string) => {
      switch (type) {
        case 'notes':
          return {
            label: 'Study Notes',
            style:
              'bg-amber-50 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/40'
          };
        case 'pyq':
          return {
            label: 'Question Paper',
            style:
              'bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300 border border-rose-200/60 dark:border-rose-900/40'
          };
        case 'solution':
          return {
            label: 'Solution',
            style:
              'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/40'
          };
        case 'video':
          return {
            label: 'YouTube Video',
            style:
              'bg-sky-50 text-sky-800 dark:bg-sky-950/40 dark:text-sky-300 border border-sky-200/60 dark:border-sky-900/40'
          };
        default:
          return {
            label: 'Resource',
            style: 'bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'
          };
      }
    };

    // 1. Search across verified academic resources (Notes, PYQs, Solutions, Videos)
    for (const res of MOCK_RESOURCES) {
      const subject = SUBJECTS.find(s => s.id === res.subjectId);
      let unitTitle = '';
      if (res.unitId && subject?.units) {
        const u = subject.units.find(un => un.unitNumber === res.unitId);
        if (u) unitTitle = `Unit ${res.unitId}: ${u.title}`;
        else unitTitle = `Unit ${res.unitId}`;
      }

      const matches =
        matchesText(res.title) ||
        matchesText(res.description) ||
        matchesText(subject?.name) ||
        matchesText(subject?.code) ||
        matchesText(unitTitle) ||
        res.keywords.some(k => matchesText(k));

      if (matches) {
        // Filter verification
        if (selectedSemester !== 'all' && res.semesterId !== Number(selectedSemester)) {
          continue;
        }
        if (selectedSubject !== 'all' && res.subjectId !== selectedSubject) {
          continue;
        }
        if (selectedType !== 'all' && res.type !== selectedType) {
          continue;
        }

        const badge = getResourceBadge(res.type);
        results.push({
          id: `res-${res.id}`,
          kind: res.type,
          title: res.title,
          description: res.description,
          courseCode: 'MCA',
          courseId: 'mca',
          semester: res.semesterId,
          subjectName: subject?.name || res.subjectId,
          subjectCode: subject?.code || '',
          subjectId: res.subjectId,
          unitNumber: res.unitId,
          unitTitle: unitTitle || undefined,
          actionLabel: res.type === 'video' ? 'Watch Video' : 'View Resource',
          actionUrl: `/resource/${res.id}`,
          badgeLabel: badge.label,
          badgeStyle: badge.style,
          hasDownloadableFile: res.type !== 'video'
        });
      }
    }

    // 2. Search across academic subjects (Academic Subject Matches)
    if (selectedType === 'all' || selectedType === 'subject') {
      for (const sub of SUBJECTS) {
        const matches =
          matchesText(sub.name) ||
          matchesText(sub.code) ||
          matchesText(sub.description);

        if (matches) {
          if (selectedSemester !== 'all' && sub.semester !== Number(selectedSemester)) {
            continue;
          }
          if (selectedSubject !== 'all' && sub.id !== selectedSubject) {
            continue;
          }

          results.push({
            id: `sub-${sub.id}`,
            kind: 'subject',
            title: `${sub.code}: ${sub.name}`,
            description: sub.description,
            courseCode: 'MCA',
            courseId: 'mca',
            semester: sub.semester,
            subjectName: sub.name,
            subjectCode: sub.code,
            subjectId: sub.id,
            actionLabel: 'View Subject Curriculum',
            actionUrl: `/courses/mca/semester/${sub.semester}/subject/${sub.id}?category=notes`,
            badgeLabel: 'Academic Subject',
            badgeStyle:
              'bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300 border border-purple-200/50 dark:border-purple-800/40',
            hasDownloadableFile: false
          });
        }
      }
    }

    // 3. Search across prescribed syllabus units & topics
    if (selectedType === 'all' || selectedType === 'topic') {
      for (const sub of SUBJECTS) {
        if (selectedSemester !== 'all' && sub.semester !== Number(selectedSemester)) {
          continue;
        }
        if (selectedSubject !== 'all' && sub.id !== selectedSubject) {
          continue;
        }

        for (const unit of sub.units) {
          const unitTitleMatches = matchesText(unit.title);
          const matchingTopics = unit.topics.filter(t => matchesText(t));

          if (unitTitleMatches || matchingTopics.length > 0) {
            const matchedTopicName = matchingTopics[0] || unit.title;
            const extraTopicsCount =
              matchingTopics.length > 1
                ? ` (+${matchingTopics.length - 1} related topics)`
                : '';

            results.push({
              id: `topic-${sub.id}-u${unit.unitNumber}`,
              kind: 'topic',
              title: `${matchedTopicName}${extraTopicsCount}`,
              description: `Prescribed syllabus topic under Unit ${unit.unitNumber} (${unit.title}) for ${sub.name}.`,
              courseCode: 'MCA',
              courseId: 'mca',
              semester: sub.semester,
              subjectName: sub.name,
              subjectCode: sub.code,
              subjectId: sub.id,
              unitNumber: unit.unitNumber,
              unitTitle: `Unit ${unit.unitNumber}: ${unit.title}`,
              actionLabel: 'View Unit Topics',
              actionUrl: `/courses/mca/semester/${sub.semester}/subject/${sub.id}/unit/${unit.unitNumber}?category=notes`,
              badgeLabel: 'Syllabus Topic',
              badgeStyle:
                'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300 border border-amber-200/50 dark:border-amber-800/40',
              hasDownloadableFile: false
            });
          }
        }
      }
    }

    return results;
  }, [activeQuery, selectedSemester, selectedSubject, selectedType]);

  // Helper for rendering item icons
  const renderItemIcon = (kind: SearchResultKind) => {
    switch (kind) {
      case 'notes':
        return (
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-500/10 text-[#E6A02D] dark:bg-amber-500/15 flex items-center justify-center flex-shrink-0">
            <FileText className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
          </div>
        );
      case 'pyq':
        return (
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-rose-500/10 text-rose-600 dark:bg-rose-500/15 dark:text-rose-400 flex items-center justify-center flex-shrink-0">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
          </div>
        );
      case 'solution':
        return (
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
          </div>
        );
      case 'video':
        return (
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-sky-500/10 text-sky-600 dark:bg-sky-500/15 dark:text-sky-400 flex items-center justify-center flex-shrink-0">
            <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
          </div>
        );
      case 'subject':
        return (
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-500/10 text-purple-600 dark:bg-purple-500/15 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
          </div>
        );
      case 'topic':
        return (
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
          </div>
        );
    }
  };

  // =========================================================================
  // 1. INITIAL EMPTY STATE (When no search has been performed yet)
  // =========================================================================
  if (!activeQuery) {
    return (
      <div className="max-w-3xl mx-auto py-8 sm:py-20 px-3 sm:px-4 text-center space-y-5 sm:space-y-8 animate-fadeIn">
        <div className="space-y-2 sm:space-y-3">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#25252B] dark:text-white font-['Poppins'] tracking-tight leading-tight">
            What do you want to learn?
          </h1>
          <p className="text-xs sm:text-base text-neutral-500 dark:text-neutral-400 max-w-lg mx-auto leading-relaxed">
            Search across subjects, topics, notes and academic resources.
          </p>
        </div>

        {/* Prominent Center Search Form */}
        <form
          onSubmit={handleSearchSubmit}
          className="bg-white dark:bg-neutral-800/95 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl border border-neutral-200/80 dark:border-neutral-700/70 shadow-lg shadow-neutral-200/40 dark:shadow-none flex items-center gap-2 max-w-2xl mx-auto focus-within:border-[#E6A02D] focus-within:ring-2 focus-within:ring-[#E6A02D]/15 transition-all"
        >
          <div className="relative flex-1 flex items-center min-w-0">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 ml-2.5 sm:ml-3 flex-shrink-0" />
            <input
              type="text"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Search subjects, topics, notes..."
              autoFocus
              className="w-full bg-transparent px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-[#25252B] dark:text-white focus:outline-none placeholder-neutral-400 font-normal"
            />
            {searchInput && (
              <button
                type="button"
                onClick={() => setSearchInput('')}
                className="p-1 sm:p-1.5 mr-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
                aria-label="Clear input"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#E6A02D] hover:bg-[#cf8e24] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-sm cursor-pointer flex-shrink-0 active:scale-[0.98]"
          >
            Search
          </button>
        </form>

        {/* Subtle whitespace-rich empty state message */}
        <div className="pt-4 sm:pt-6 text-xs sm:text-sm text-neutral-400 dark:text-neutral-500 font-medium flex items-center justify-center gap-2">
          <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E6A02D]" />
          <span>Search for something to discover academic resources.</span>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. ACTIVE SEARCH RESULTS STATE
  // =========================================================================
  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto pb-12 px-1 sm:px-0">
      {/* Top Search Toolbar */}
      <form
        onSubmit={handleSearchSubmit}
        className="bg-white dark:bg-neutral-800/95 p-1.5 sm:p-2 rounded-2xl border border-neutral-200/80 dark:border-neutral-700/70 shadow-sm flex items-center gap-2 transition-all focus-within:border-[#E6A02D] focus-within:ring-2 focus-within:ring-[#E6A02D]/15"
      >
        <div className="relative flex-1 flex items-center min-w-0">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-400 ml-3 flex-shrink-0" />
          <input
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
            placeholder="Search subjects, topics, notes..."
            className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-[#25252B] dark:text-white focus:outline-none placeholder-neutral-400 font-normal"
          />
          {searchInput && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="p-1.5 mr-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#E6A02D] hover:bg-[#cf8e24] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all shadow-sm cursor-pointer flex-shrink-0 active:scale-[0.98]"
        >
          Search
        </button>
      </form>

      {/* Filter Toolbar & Result Counter */}
      <div className="bg-white dark:bg-neutral-800/90 p-3 sm:p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-700/60 shadow-sm space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#25252B] dark:text-neutral-200">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#E6A02D]" />
            <span>Filter Results</span>
          </div>

          <div className="flex items-center gap-3">
            {isFiltersActive && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1 text-[11px] text-[#E6A02D] hover:text-[#cf8e24] font-medium transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Clear Filters</span>
              </button>
            )}
            <button
              type="button"
              onClick={handleClearSearch}
              className="text-[11px] text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors cursor-pointer"
            >
              New Search
            </button>
          </div>
        </div>

        {/* Compact Filters Grid (Responsive: 1 col on XS, 3 cols on SM/MD) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {/* Semester Filter */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 dark:text-neutral-500 block">
              Semester
            </label>
            <select
              value={selectedSemester}
              onChange={e => setSelectedSemester(e.target.value)}
              className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white px-2.5 py-2 focus:outline-none focus:border-[#E6A02D] cursor-pointer truncate"
            >
              <option value="all">All Semesters</option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
            </select>
          </div>

          {/* Subject Filter (Dynamically Populated) */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 dark:text-neutral-500 block">
              Subject
            </label>
            <select
              value={selectedSubject}
              onChange={e => setSelectedSubject(e.target.value)}
              className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white px-2.5 py-2 focus:outline-none focus:border-[#E6A02D] cursor-pointer truncate"
            >
              <option value="all">All Subjects</option>
              {availableSubjects.map(sub => (
                <option key={sub.id} value={sub.id}>
                  {sub.code} – {sub.name}
                </option>
              ))}
            </select>
          </div>

          {/* Resource Type Filter */}
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-wider font-semibold text-neutral-400 dark:text-neutral-500 block">
              Resource Type
            </label>
            <select
              value={selectedType}
              onChange={e => setSelectedType(e.target.value)}
              className="w-full text-xs rounded-xl border border-neutral-200 dark:border-neutral-700/80 bg-neutral-50 dark:bg-neutral-900 text-[#25252B] dark:text-white px-2.5 py-2 focus:outline-none focus:border-[#E6A02D] cursor-pointer truncate"
            >
              <option value="all">All Types</option>
              <option value="notes">Study Notes</option>
              <option value="pyq">Question Papers</option>
              <option value="solution">Solutions</option>
              <option value="video">YouTube Videos</option>
              <option value="subject">Academic Subjects</option>
              <option value="topic">Syllabus Topics</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header Count */}
      <div className="text-xs text-neutral-500 dark:text-neutral-400 px-1">
        Showing <span className="font-bold text-[#25252B] dark:text-white">{searchResults.length}</span>{' '}
        {searchResults.length === 1 ? 'academic result' : 'academic results'} for &ldquo;
        <span className="font-semibold text-[#E6A02D]">{activeQuery}</span>&rdquo;
      </div>

      {/* Results List or No Results State */}
      {searchResults.length > 0 ? (
        <div className="space-y-3">
          {searchResults.map(item => (
            <div
              key={item.id}
              onClick={() => navigate(item.actionUrl)}
              className="group bg-white dark:bg-neutral-800/90 rounded-xl sm:rounded-2xl border border-neutral-200/80 dark:border-neutral-700/60 p-3 sm:p-5 hover:border-[#E6A02D] dark:hover:border-[#E6A02D]/70 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-md cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4"
            >
              {/* Left Section: Icon & Content */}
              <div className="flex items-start gap-2.5 sm:gap-4 flex-1 min-w-0">
                {renderItemIcon(item.kind)}

                <div className="space-y-1 min-w-0 flex-1">
                  <h3 className="text-xs sm:text-base font-bold text-[#25252B] dark:text-white font-['Poppins'] tracking-tight group-hover:text-[#E6A02D] transition-colors leading-snug line-clamp-1 sm:line-clamp-none">
                    {item.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 sm:line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] sm:text-xs pt-0.5">
                    <span className="font-medium text-neutral-700 dark:text-neutral-300">
                      {item.courseCode} • Sem {item.semester}
                    </span>
                    <span className="text-neutral-300 dark:text-neutral-600 hidden sm:inline">
                      •
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400 truncate max-w-[180px] sm:max-w-[220px]">
                      {item.subjectCode} {item.subjectName}
                    </span>
                    {item.unitTitle && (
                      <>
                        <span className="text-neutral-300 dark:text-neutral-600 hidden sm:inline">
                          •
                        </span>
                        <span className="text-[#E6A02D] font-medium text-[10px] sm:text-xs truncate max-w-[140px] sm:max-w-none">
                          {item.unitTitle}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Section: Badges & Action Button */}
              <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3.5 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100 dark:border-neutral-700/60 flex-shrink-0">
                <span
                  className={`inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-[11px] font-semibold whitespace-nowrap ${item.badgeStyle}`}
                >
                  {item.badgeLabel}
                </span>

                <button
                  type="button"
                  onClick={e => {
                    e.stopPropagation();
                    navigate(item.actionUrl);
                  }}
                  className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl bg-neutral-50 dark:bg-neutral-700/50 hover:bg-[#E6A02D] dark:hover:bg-[#E6A02D] text-neutral-700 dark:text-neutral-200 hover:text-white dark:hover:text-white text-[11px] sm:text-xs font-semibold transition-all border border-neutral-200 dark:border-neutral-700 hover:border-transparent cursor-pointer flex-shrink-0"
                >
                  <span>{item.actionLabel}</span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Helpful No Results State */
        <div className="bg-white dark:bg-neutral-800/90 rounded-3xl p-8 sm:p-14 text-center border border-dashed border-neutral-300 dark:border-neutral-700 space-y-4 max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-[#E6A02D] flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#25252B] dark:text-white font-['Poppins']">
              No academic results found
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              No subjects, units, notes or question papers matched &ldquo;{activeQuery}&rdquo;.
            </p>
          </div>
          <p className="text-[11px] text-neutral-400 leading-normal">
            Try searching for a subject code (e.g. &lsquo;MCA 101&rsquo;), topic (e.g. &lsquo;Normalization&rsquo;, &lsquo;Deadlock&rsquo;), or reset filters.
          </p>
          <div className="pt-2 flex items-center justify-center gap-2">
            {isFiltersActive && (
              <button
                type="button"
                onClick={handleClearFilters}
                className="px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 text-xs font-semibold text-neutral-700 dark:text-neutral-200 hover:border-[#E6A02D] transition-colors cursor-pointer"
              >
                Reset Filters
              </button>
            )}
            <button
              type="button"
              onClick={handleClearSearch}
              className="px-4 py-2 rounded-xl bg-[#E6A02D] hover:bg-[#cf8e24] text-white text-xs font-semibold transition-colors shadow-sm cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
