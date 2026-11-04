import React from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import {
  ChevronRight,
  CheckCircle,
  Clock,
  Download,
  FileText,
  FileQuestion,
  GraduationCap,
  BookOpen,
  BookMarked,
  Layers,
  ArrowLeft,
  ExternalLink,
  BookCheck,
  CheckCircle2
} from 'lucide-react';
import { COURSES, SUBJECTS, MOCK_RESOURCES } from '../data/mockData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ResourceCard } from '../components/common/ResourceCard';

type AcademicCategory = 'syllabus' | 'notes' | 'pyq';

export const CoursesPage: React.FC = () => {
  const { courseId, semesterNum, subjectId, unitNum } = useParams<{
    courseId?: string;
    semesterNum?: string;
    subjectId?: string;
    unitNum?: string;
  }>();

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Active category: 'syllabus' | 'notes' | 'pyq'
  const categoryParam = searchParams.get('category');
  const activeCategory: AcademicCategory =
    categoryParam === 'notes' ? 'notes' : categoryParam === 'pyq' ? 'pyq' : 'syllabus';

  const setCategory = (cat: AcademicCategory) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('category', cat);
    setSearchParams(newParams);
  };

  const getCategoryQuery = () => `?category=${activeCategory}`;

  // Helper to render Category Switcher tabs
  const renderCategorySwitcher = () => {
    return (
      <div className="flex items-center gap-0.5 sm:gap-2 bg-[#F2F3FC] dark:bg-neutral-950 p-0.5 sm:p-1.5 rounded-xl sm:rounded-2xl border border-neutral-200/80 dark:border-neutral-800 w-full sm:w-fit">
        <button
          onClick={() => setCategory('syllabus')}
          className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[10.5px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeCategory === 'syllabus'
              ? 'bg-[#E6A02D] text-white shadow-sm'
              : 'text-neutral-600 dark:text-neutral-300 hover:text-[#25252B] dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-900'
          }`}
        >
          <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
          <span>Syllabus</span>
        </button>
        <button
          onClick={() => setCategory('notes')}
          className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[10.5px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeCategory === 'notes'
              ? 'bg-[#E6A02D] text-white shadow-sm'
              : 'text-neutral-600 dark:text-neutral-300 hover:text-[#25252B] dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-900'
          }`}
        >
          <BookMarked className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
          <span>Notes</span>
        </button>
        <button
          onClick={() => setCategory('pyq')}
          className={`flex-1 sm:flex-initial flex items-center justify-center gap-1 sm:gap-2 px-1.5 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[10.5px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
            activeCategory === 'pyq'
              ? 'bg-[#E6A02D] text-white shadow-sm'
              : 'text-neutral-600 dark:text-neutral-300 hover:text-[#25252B] dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-900'
          }`}
        >
          <FileQuestion className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
          <span>Question Papers</span>
        </button>
      </div>
    );
  };

  // 1. Root Courses List (e.g. /courses)
  if (!courseId) {
    return (
      <div className="space-y-8 max-w-7xl mx-auto pb-12">
        <Breadcrumbs items={[{ label: 'Courses' }]} />

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
            Academic Programmes
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Select your enrolled degree programme to navigate official syllabus structures, semester curriculums, notes, and question papers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COURSES.map(course => {
            const isActive = course.status === 'active';
            return (
              <div
                key={course.id}
                onClick={() => isActive && navigate(`/courses/${course.id}${getCategoryQuery()}`)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all ${
                  isActive
                    ? 'bg-white dark:bg-neutral-800 border-neutral-100 dark:border-neutral-700/60 shadow-sm hover:shadow-md hover:border-[#E6A02D] cursor-pointer'
                    : 'bg-neutral-50/70 dark:bg-neutral-900/50 border-dashed border-neutral-200 dark:border-neutral-800 cursor-not-allowed opacity-80'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-[#E6A02D] flex items-center justify-center font-bold text-lg font-mono">
                    {course.code}
                  </div>
                  {isActive ? (
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200/50 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" /> Active Programme
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-200/60 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
                  {course.name}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-2 leading-relaxed">
                  {course.description}
                </p>

                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between text-xs font-semibold">
                  <span className="text-neutral-400">{course.duration}</span>
                  {isActive ? (
                    <span className="text-[#E6A02D] flex items-center gap-1 group-hover:translate-x-1">
                      <span>Explore Programme</span>
                      <ChevronRight className="w-4 h-4" />
                    </span>
                  ) : (
                    <span className="text-neutral-400">Curriculum Under Verification</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 2. Programme Overview Page (e.g. /courses/mca)
  const currentCourse = COURSES.find(c => c.id === courseId);
  if (!currentCourse) {
    return (
      <div className="text-center py-16 space-y-4">
        <h2 className="text-xl font-bold">Programme not found.</h2>
        <button onClick={() => navigate('/courses')} className="text-xs text-[#E6A02D] underline">Back to Courses</button>
      </div>
    );
  }

  // If viewing Course Programme Level (List Semesters)
  if (!semesterNum) {
    return (
      <div className="space-y-8 max-w-7xl mx-auto pb-12">
        <Breadcrumbs items={[{ label: 'Courses', path: '/courses' }, { label: currentCourse.code }]} />

        {/* Top Header with Category Switcher */}
        <div className="bg-white dark:bg-neutral-800 p-5 sm:p-8 rounded-3xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6A02D]">
                Master of Computer Applications • Academic Navigation
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins'] mt-1">
                {currentCourse.name} ({currentCourse.code})
              </h1>
            </div>
            {renderCategorySwitcher()}
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
            {activeCategory === 'syllabus' && (
              <>Explore the official Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) MCA syllabus semester-wise. Select a semester to view all subjects, unit topics, textbooks, and download official syllabus PDFs.</>
            )}
            {activeCategory === 'notes' && (
              <>Find verified lecture notes and unit summaries organized semester-wise. Select a semester below to explore available study notes.</>
            )}
            {activeCategory === 'pyq' && (
              <>Access previous-year university examination question papers organized by semester and subject. Select a semester below to view question papers.</>
            )}
          </p>
        </div>

        {/* Semester Selection Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {currentCourse.semesters.map(sem => {
            const semSubjects = SUBJECTS.filter(s => s.semester === sem.number);
            const semNotesCount = MOCK_RESOURCES.filter(r => r.semesterId === sem.number && r.type === 'notes').length;
            const semPyqCount = MOCK_RESOURCES.filter(r => r.semesterId === sem.number && r.type === 'pyq').length;

            return (
              <div
                key={sem.number}
                onClick={() => navigate(`/courses/${courseId}/semester/${sem.number}${getCategoryQuery()}`)}
                className="group bg-white dark:bg-neutral-800 p-6 rounded-3xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm hover:shadow-md hover:border-[#E6A02D] cursor-pointer transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-[#E6A02D] flex items-center justify-center font-bold text-sm">
                      Sem {sem.number}
                    </div>
                    {sem.syllabusPdfUrl && (
                      <span className="text-[10px] font-semibold text-neutral-400 bg-neutral-100 dark:bg-neutral-700/60 px-2 py-0.5 rounded-md flex items-center gap-1">
                        <Download className="w-2.5 h-2.5 text-[#E6A02D]" />
                        Official PDF
                      </span>
                    )}
                  </div>

                  <h3 className="font-bold text-base text-[#25252B] dark:text-white group-hover:text-[#E6A02D] transition-colors">
                    {sem.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                    {sem.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-medium text-[11px]">
                    {activeCategory === 'syllabus' && `${semSubjects.length} Subjects`}
                    {activeCategory === 'notes' && `${semNotesCount} ${semNotesCount === 1 ? 'Note' : 'Notes'} Available`}
                    {activeCategory === 'pyq' && `${semPyqCount} ${semPyqCount === 1 ? 'Paper' : 'Papers'} Available`}
                  </span>
                  <span className="text-[#E6A02D] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    <span>
                      {activeCategory === 'syllabus' ? 'View Syllabus' : activeCategory === 'notes' ? 'Browse Notes' : 'View Papers'}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 3. Semester Level Page (e.g. /courses/mca/semester/1)
  const currentSemester = currentCourse.semesters.find(s => s.number === Number(semesterNum));
  const semesterSubjects = SUBJECTS.filter(s => s.semester === Number(semesterNum));
  const coreSubjects = semesterSubjects.filter(s => !s.isElective && s.units.length > 0);
  const labSubjects = semesterSubjects.filter(s => s.units.length === 0);
  const electiveSubjects = semesterSubjects.filter(s => s.isElective);

  // Group electives by group (e.g. "Elective – I", "Elective – II", etc.)
  const electiveGroups = Array.from(new Set(electiveSubjects.map(s => s.electiveGroup).filter(Boolean))) as string[];

  if (!subjectId) {
    return (
      <div className="space-y-8 max-w-7xl mx-auto pb-12">
        <Breadcrumbs
          items={[
            { label: 'Courses', path: '/courses' },
            { label: currentCourse.code, path: `/courses/${courseId}${getCategoryQuery()}` },
            { label: `Semester ${semesterNum}` }
          ]}
        />

        {/* Semester Header with Category Switcher and Official PDF Download Link */}
        <div className="bg-white dark:bg-neutral-800 p-5 sm:p-8 rounded-3xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#E6A02D]">
                  {currentCourse.code} • Semester {semesterNum}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-500/10 text-[#E6A02D]">
                  {activeCategory === 'syllabus' ? 'Official Syllabus' : activeCategory === 'notes' ? 'Study Notes' : 'Question Papers'}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins'] mt-1">
                Semester {semesterNum} Curriculum
              </h1>
              <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                {currentSemester?.description}
              </p>
            </div>
            {renderCategorySwitcher()}
          </div>

          {/* Official Syllabus PDF Download Bar */}
          {currentSemester?.syllabusPdfUrl && (
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E6A02D] text-white flex items-center justify-center flex-shrink-0">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#25252B] dark:text-white">
                    Official Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) Syllabus PDF
                  </p>
                  <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    Semester {semesterNum} full scheme, course outcomes, and prescribed books
                  </p>
                </div>
              </div>
              <a
                href={currentSemester.syllabusPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-[#E6A02D] hover:bg-[#cf8e24] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Download Semester {semesterNum} PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>

        {/* Compulsory Core Subjects */}
        {coreSubjects.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E6A02D]" />
                <span>Compulsory Core Subjects</span>
              </h2>
              <span className="text-xs text-neutral-400">{coreSubjects.length} Subjects</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {coreSubjects.map(sub => {
                const subNotesCount = MOCK_RESOURCES.filter(r => r.subjectId === sub.id && r.type === 'notes').length;
                const subPyqCount = MOCK_RESOURCES.filter(r => r.subjectId === sub.id && r.type === 'pyq').length;

                return (
                  <div
                    key={sub.id}
                    onClick={() => navigate(`/courses/${courseId}/semester/${semesterNum}/subject/${sub.id}${getCategoryQuery()}`)}
                    className="group bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm hover:shadow-md hover:border-[#E6A02D] cursor-pointer transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-neutral-100 dark:bg-neutral-700 text-[#25252B] dark:text-neutral-200">
                          {sub.code}
                        </span>
                        <span className="text-[10px] font-semibold text-neutral-400">
                          {sub.units.length} Units
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-[#25252B] dark:text-white group-hover:text-[#E6A02D] transition-colors">
                        {sub.name}
                      </h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                        {sub.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between text-xs text-neutral-500">
                      <span>
                        {activeCategory === 'syllabus' && `${sub.units.length} Units Prescribed`}
                        {activeCategory === 'notes' && (subNotesCount > 0 ? `${subNotesCount} Available` : 'No Notes Yet')}
                        {activeCategory === 'pyq' && (subPyqCount > 0 ? `${subPyqCount} Available` : 'No PYQs Yet')}
                      </span>
                      <span className="text-[#E6A02D] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>
                          {activeCategory === 'syllabus' ? 'Syllabus' : activeCategory === 'notes' ? 'Notes' : 'Papers'}
                        </span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Departmental Electives (Semesters 3 & 4) */}
        {electiveGroups.length > 0 && (
          <div className="space-y-6 pt-4">
            <div>
              <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <span>Departmental Elective Courses</span>
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Prescribed elective groups according to the official syllabus. Students elect one course per elective bracket.
              </p>
            </div>

            {electiveGroups.map(groupName => {
              const groupSubjects = electiveSubjects.filter(s => s.electiveGroup === groupName);

              return (
                <div key={groupName} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300">
                      {groupName}
                    </span>
                    <span className="text-xs text-neutral-400">Choose one subject from this bracket</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {groupSubjects.map(sub => {
                      const subNotesCount = MOCK_RESOURCES.filter(r => r.subjectId === sub.id && r.type === 'notes').length;
                      const subPyqCount = MOCK_RESOURCES.filter(r => r.subjectId === sub.id && r.type === 'pyq').length;

                      return (
                        <div
                          key={sub.id}
                          onClick={() => navigate(`/courses/${courseId}/semester/${semesterNum}/subject/${sub.id}${getCategoryQuery()}`)}
                          className="group bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-purple-100 dark:border-purple-900/30 shadow-sm hover:shadow-md hover:border-purple-500 cursor-pointer transition-all flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300">
                                {sub.code}
                              </span>
                              <span className="text-[10px] font-semibold text-neutral-400">
                                {sub.units.length} Units
                              </span>
                            </div>
                            <h3 className="font-bold text-base text-[#25252B] dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                              {sub.name}
                            </h3>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                              {sub.description}
                            </p>
                          </div>

                          <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between text-xs text-neutral-500">
                            <span>
                              {activeCategory === 'syllabus' && `${sub.units.length} Units`}
                              {activeCategory === 'notes' && (subNotesCount > 0 ? `${subNotesCount} Available` : 'No Notes Yet')}
                              {activeCategory === 'pyq' && (subPyqCount > 0 ? `${subPyqCount} Available` : 'No PYQs Yet')}
                            </span>
                            <span className="text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                              <span>Explore</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Practical Laboratory Subjects (if any) */}
        {labSubjects.length > 0 && (
          <div className="space-y-4 pt-4">
            <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span>Laboratory & Practical Courses</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {labSubjects.map(sub => (
                <div
                  key={sub.id}
                  onClick={() => navigate(`/courses/${courseId}/semester/${semesterNum}/subject/${sub.id}${getCategoryQuery()}`)}
                  className="group bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 shadow-sm hover:shadow-md hover:border-emerald-500 cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                        {sub.code}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                        Practical Lab
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-[#25252B] dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {sub.name}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                      {sub.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between text-xs text-neutral-500">
                    <span>{sub.practicals?.length || 0} Practical Experiments</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>View Practicals</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 4. Subject Level Page (e.g. /courses/mca/semester/1/subject/mca-101)
  const currentSubject = SUBJECTS.find(s => s.id === subjectId);
  if (!currentSubject) {
    return (
      <div className="text-center py-16 space-y-4">
        <h2 className="text-xl font-bold">Subject not found.</h2>
        <button
          onClick={() => navigate(`/courses/${courseId}/semester/${semesterNum}${getCategoryQuery()}`)}
          className="text-xs text-[#E6A02D] underline"
        >
          Back to Semester {semesterNum}
        </button>
      </div>
    );
  }

  // Question Papers at Subject Level
  const subjectPyqs = MOCK_RESOURCES.filter(r => r.subjectId === currentSubject.id && r.type === 'pyq');
  const subjectSolutions = MOCK_RESOURCES.filter(r => r.subjectId === currentSubject.id && r.type === 'solution');

  // If viewing Subject Level (Units list OR Question Papers directly)
  if (!unitNum) {
    return (
      <div className="space-y-8 max-w-7xl mx-auto pb-12">
        <Breadcrumbs
          items={[
            { label: 'Courses', path: '/courses' },
            { label: currentCourse.code, path: `/courses/${courseId}${getCategoryQuery()}` },
            { label: `Semester ${semesterNum}`, path: `/courses/${courseId}/semester/${semesterNum}${getCategoryQuery()}` },
            { label: currentSubject.code }
          ]}
        />

        {/* Subject Header */}
        <div className="bg-white dark:bg-neutral-800 p-5 sm:p-8 rounded-3xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#E6A02D]/15 text-[#E6A02D] font-mono font-bold text-xs">
                  {currentSubject.code}
                </span>
                {currentSubject.isElective && (
                  <span className="px-2.5 py-1 rounded bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 font-bold text-xs">
                    {currentSubject.electiveGroup}
                  </span>
                )}
                <span className="px-2.5 py-1 rounded text-xs font-semibold bg-neutral-100 dark:bg-neutral-700/60 text-neutral-600 dark:text-neutral-300">
                  Semester {currentSubject.semester}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins'] mt-2">
                {currentSubject.name}
              </h1>
            </div>
            {renderCategorySwitcher()}
          </div>

          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 max-w-3xl leading-relaxed">
            {currentSubject.description}
          </p>

          {/* Official Syllabus PDF Link */}
          {currentSubject.syllabusPdfUrl && (
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={currentSubject.syllabusPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 text-[#E6A02D] hover:bg-[#E6A02D] hover:text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Semester {currentSubject.semester} Official Syllabus PDF (RGPV)</span>
              </a>
            </div>
          )}
        </div>

        {/* CATEGORY VIEW: QUESTION PAPERS (Directly at Subject Level per specification) */}
        {activeCategory === 'pyq' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
                <FileQuestion className="w-5 h-5 text-[#E6A02D]" />
                <span>Previous-Year Question Papers for {currentSubject.code}</span>
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Official semester-end theory examination papers with university marks schemes.
              </p>
            </div>

            {subjectPyqs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {subjectPyqs.map(paper => (
                  <ResourceCard key={paper.id} resource={paper} />
                ))}
              </div>
            ) : (
              <div className="bg-white dark:bg-neutral-800 rounded-3xl p-10 text-center border border-neutral-100 dark:border-neutral-700/60 space-y-3 max-w-md mx-auto">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-[#E6A02D] flex items-center justify-center mx-auto">
                  <FileQuestion className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-200 font-['Poppins']">
                  No Question Papers Uploaded Yet
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Official previous-year examination papers for {currentSubject.name} ({currentSubject.code}) will be added soon.
                </p>
                <button
                  onClick={() => setCategory('syllabus')}
                  className="px-4 py-2 rounded-xl bg-[#E6A02D] text-white text-xs font-semibold cursor-pointer"
                >
                  View Subject Syllabus Instead
                </button>
              </div>
            )}

            {/* Related Solutions if available */}
            {subjectSolutions.length > 0 && (
              <div className="space-y-4 pt-6 border-t border-neutral-100 dark:border-neutral-700/60">
                <h3 className="text-base font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Verified Solutions for {currentSubject.code}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {subjectSolutions.map(sol => (
                    <ResourceCard key={sol.id} resource={sol} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* CATEGORY VIEW: NOTES (Subject level -> shows units to explore notes) */}
        {activeCategory === 'notes' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-[#E6A02D]" />
                <span>Unit-Wise Study Notes</span>
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Select a unit below to explore lecture notes and concise summary materials.
              </p>
            </div>

            {currentSubject.units.length > 0 ? (
              <div className="space-y-4">
                {currentSubject.units.map(unit => {
                  const unitNotes = MOCK_RESOURCES.filter(
                    r => r.subjectId === currentSubject.id && r.unitId === unit.unitNumber && r.type === 'notes'
                  );

                  return (
                    <div
                      key={unit.unitNumber}
                      onClick={() =>
                        navigate(
                          `/courses/${courseId}/semester/${semesterNum}/subject/${subjectId}/unit/${unit.unitNumber}${getCategoryQuery()}`
                        )
                      }
                      className="group bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm hover:shadow-md hover:border-[#E6A02D] cursor-pointer transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-2 max-w-2xl">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-[#E6A02D] font-bold text-xs">
                            Unit {unit.unitNumber}
                          </span>
                          <h3 className="font-bold text-base text-[#25252B] dark:text-white group-hover:text-[#E6A02D] transition-colors">
                            {unit.title}
                          </h3>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {unit.topics.slice(0, 5).map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] bg-neutral-100 dark:bg-neutral-700/60 text-neutral-600 dark:text-neutral-300 px-2 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                          {unit.topics.length > 5 && (
                            <span className="text-[11px] text-neutral-400 px-1 py-0.5">
                              +{unit.topics.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-4 flex-shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-100 dark:border-neutral-700/60">
                        <span className="text-xs font-medium text-neutral-400">
                          {unitNotes.length > 0 ? (
                            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                              {unitNotes.length} {unitNotes.length === 1 ? 'Note' : 'Notes'}
                            </span>
                          ) : (
                            'No notes uploaded yet'
                          )}
                        </span>
                        <button className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-700 group-hover:bg-[#E6A02D] group-hover:text-white text-xs font-semibold text-neutral-700 dark:text-neutral-200 transition-colors flex items-center gap-1 cursor-pointer">
                          <span>Explore Notes</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 text-center border border-neutral-100 dark:border-neutral-700/60">
                <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                  Practical Course — See Lab Guidelines below
                </p>
              </div>
            )}
          </div>
        )}

        {/* CATEGORY VIEW: SYLLABUS (Default: Full official units, topics, textbooks & practicals) */}
        {activeCategory === 'syllabus' && (
          <div className="space-y-8">
            {/* Units & Prescribed Topics */}
            {currentSubject.units.length > 0 ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#E6A02D]" />
                    <span>Official Units & Prescribed Syllabus</span>
                  </h2>
                  <span className="text-xs text-neutral-400">{currentSubject.units.length} Units</span>
                </div>

                <div className="space-y-4">
                  {currentSubject.units.map(unit => (
                    <div
                      key={unit.unitNumber}
                      onClick={() =>
                        navigate(
                          `/courses/${courseId}/semester/${semesterNum}/subject/${subjectId}/unit/${unit.unitNumber}${getCategoryQuery()}`
                        )
                      }
                      className="group bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm hover:shadow-md hover:border-[#E6A02D] cursor-pointer transition-all space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-[#E6A02D] font-bold text-xs">
                            Unit {unit.unitNumber}
                          </span>
                          <h3 className="font-bold text-base text-[#25252B] dark:text-white group-hover:text-[#E6A02D] transition-colors">
                            {unit.title}
                          </h3>
                        </div>
                        <span className="text-xs text-[#E6A02D] font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>View Unit</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {unit.topics.map((t, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] bg-neutral-100 dark:bg-neutral-700/60 text-neutral-600 dark:text-neutral-300 px-2 py-0.5 rounded leading-relaxed"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {/* Prescribed Practicals for Lab Courses */}
            {currentSubject.practicals && currentSubject.practicals.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>Prescribed Practical Lab Assignments</span>
                </h2>
                <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm">
                  <ol className="space-y-2.5 list-decimal list-inside text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    {currentSubject.practicals.map((p, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span className="font-medium">{p}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {/* Textbooks and Reference Books from the Official Syllabus */}
            {currentSubject.books && currentSubject.books.length > 0 && (
              <div className="space-y-3">
                <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
                  <BookCheck className="w-5 h-5 text-[#E6A02D]" />
                  <span>Prescribed Textbooks & Reference Literature</span>
                </h2>
                <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm">
                  <ul className="space-y-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                    {currentSubject.books.map((book, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#E6A02D] font-bold">•</span>
                        <span>{book}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // 5. Unit Level Page: Specific Unit Content / Notes
  const currentUnit = currentSubject.units.find(u => u.unitNumber === Number(unitNum));
  const unitNotes = MOCK_RESOURCES.filter(
    r => r.subjectId === currentSubject.id && r.unitId === Number(unitNum) && r.type === 'notes'
  );
  const otherUnitResources = MOCK_RESOURCES.filter(
    r => r.subjectId === currentSubject.id && r.unitId === Number(unitNum) && r.type !== 'notes'
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      <Breadcrumbs
        items={[
          { label: 'Courses', path: '/courses' },
          { label: currentCourse.code, path: `/courses/${courseId}${getCategoryQuery()}` },
          { label: `Semester ${semesterNum}`, path: `/courses/${courseId}/semester/${semesterNum}${getCategoryQuery()}` },
          { label: currentSubject.code, path: `/courses/${courseId}/semester/${semesterNum}/subject/${subjectId}${getCategoryQuery()}` },
          { label: `Unit ${unitNum}` }
        ]}
      />

      {/* Unit Banner */}
      <div className="bg-white dark:bg-neutral-800 p-8 rounded-3xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#E6A02D]/15 text-[#E6A02D] font-mono font-bold text-xs">
                {currentSubject.code}
              </span>
              <span className="text-xs font-semibold text-neutral-400">
                Semester {currentSubject.semester}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins'] mt-2">
              Unit {unitNum}: {currentUnit?.title || 'Topics'}
            </h1>
          </div>
          {renderCategorySwitcher()}
        </div>

        {/* Prescribed Topics */}
        <div className="pt-2">
          <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
            Official Prescribed Topics:
          </p>
          <div className="flex flex-wrap gap-2">
            {currentUnit?.topics.map((t, idx) => (
              <span
                key={idx}
                className="text-xs bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 px-3 py-1 rounded-lg border border-amber-200/50"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Available Notes Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-[#E6A02D]" />
            <span>Study Notes for Unit {unitNum}</span>
          </h2>
          <span className="text-xs text-neutral-400">
            {unitNotes.length} {unitNotes.length === 1 ? 'Note' : 'Notes'}
          </span>
        </div>

        {unitNotes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {unitNotes.map(res => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-neutral-800 rounded-3xl p-10 text-center border border-neutral-100 dark:border-neutral-700/60 space-y-3 max-w-md mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-[#E6A02D] flex items-center justify-center mx-auto">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-200 font-['Poppins']">
              No Notes Uploaded Yet for Unit {unitNum}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Curated lecture notes and summaries for this unit will be added soon. Check back shortly!
            </p>
            <button
              onClick={() => navigate(`/courses/${courseId}/semester/${semesterNum}/subject/${subjectId}${getCategoryQuery()}`)}
              className="px-4 py-2 rounded-xl bg-[#E6A02D] text-white text-xs font-semibold cursor-pointer"
            >
              Back to Subject Overview
            </button>
          </div>
        )}
      </div>

      {/* Other learning resources (Videos / Solutions) for this unit */}
      {otherUnitResources.length > 0 && (
        <div className="space-y-4 pt-6 border-t border-neutral-100 dark:border-neutral-700/60">
          <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins']">
            Additional Unit {unitNum} Video Lessons & Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherUnitResources.map(res => (
              <ResourceCard key={res.id} resource={res} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
