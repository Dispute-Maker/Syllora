import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, AlertCircle } from 'lucide-react';
import { MOCK_RESOURCES, SUBJECTS } from '../data/mockData';
import { ResourceCard } from '../components/common/ResourceCard';

export const ExplorePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  // Keep state sync with URL params if entered via homepage or navigation
  useEffect(() => {
    const qParam = searchParams.get('q');
    if (qParam !== null) {
      setQuery(qParam);
    }
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (query.trim()) {
      newParams.set('q', query.trim());
    } else {
      newParams.delete('q');
    }
    setSearchParams(newParams);
  };

  const handleClear = () => {
    setQuery('');
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('q');
    setSearchParams(newParams);
  };

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    const typeParam = searchParams.get('type');
    const semParam = searchParams.get('semester');

    return MOCK_RESOURCES.filter(resource => {
      // Type param if present in URL
      if (typeParam && typeParam !== 'all' && resource.type !== typeParam) {
        return false;
      }
      // Semester param if present in URL
      if (semParam && semParam !== 'all' && resource.semesterId !== Number(semParam)) {
        return false;
      }
      // Query keyword search
      if (q) {
        const sub = SUBJECTS.find(s => s.id === resource.subjectId);
        const matchesTitle = resource.title.toLowerCase().includes(q);
        const matchesDesc = resource.description.toLowerCase().includes(q);
        const matchesSubject =
          sub?.name.toLowerCase().includes(q) || sub?.code.toLowerCase().includes(q);
        const matchesKeyword = resource.keywords.some(k => k.toLowerCase().includes(q));

        if (!matchesTitle && !matchesDesc && !matchesSubject && !matchesKeyword) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
  }, [query, searchParams]);

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
          Explore Academic Library
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
          Search across the entire MCA resource archive by title, syllabus topic, subject code, or unit.
        </p>
      </div>

      {/* Primary Search Bar with Search Button */}
      <form
        onSubmit={handleSearchSubmit}
        className="bg-white dark:bg-neutral-800 p-2 sm:p-2.5 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm flex items-center gap-2"
      >
        <div className="relative flex-1 flex items-center">
          <Search className="w-5 h-5 text-neutral-400 ml-2.5 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Type a topic, e.g. 'Relational Algebra', 'Banker Algorithm', 'AVL Trees'..."
            className="w-full bg-transparent px-3 text-sm text-[#25252B] dark:text-white focus:outline-none placeholder-neutral-400"
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="text-xs text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 px-2 cursor-pointer transition-colors"
            >
              Clear
            </button>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#E6A02D] hover:bg-[#cf8e24] text-white px-5 py-2.5 rounded-xl font-semibold text-xs transition-colors flex-shrink-0 shadow-sm cursor-pointer"
        >
          Search
        </button>
      </form>

      {/* Results Count & Grid */}
      <div className="space-y-4">
        <div className="text-xs text-neutral-500 font-medium">
          Showing <span className="font-bold text-[#25252B] dark:text-white">{results.length}</span> matching academic resources
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {results.map(res => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-neutral-800 rounded-3xl p-12 text-center border border-dashed border-neutral-300 dark:border-neutral-700 space-y-4 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-[#E6A02D] flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#25252B] dark:text-white">No Resources Found</h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                No academic items matched your search query. Try searching for a different topic, subject, or code.
              </p>
            </div>
            {query && (
              <button
                type="button"
                onClick={handleClear}
                className="px-4 py-2 rounded-xl bg-[#E6A02D] text-white text-xs font-semibold hover:bg-[#cf8e24] transition-colors cursor-pointer"
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
