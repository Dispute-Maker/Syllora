import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Video,
  Play,
  ChevronRight,
  ExternalLink,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  Layers,
  GraduationCap,
  ListVideo,
  AlertTriangle,
  RotateCcw,
  Check,
  CheckCircle,
  Cpu,
  Briefcase,
  FlaskConical,
  Scale
} from 'lucide-react';
import { SUBJECTS, COURSES } from '../data/mockData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import {
  getTopicsForUnit,
  getTopicByNumber,
  getTopicNavigation,
  getSubjectUnitsSummary,
  getSemesterSummary,
} from '../data/youtubeLearningData';
import { CuratedVideo } from '../types/youtubeLearning';

export const YouTubeLearningPage: React.FC = () => {
  const { courseId, semesterNum, subjectId, unitNum, topicNum } = useParams<{
    courseId?: string;
    semesterNum?: string;
    subjectId?: string;
    unitNum?: string;
    topicNum?: string;
  }>();

  const navigate = useNavigate();

  const parsedSemester = semesterNum ? parseInt(semesterNum, 10) : undefined;
  const parsedUnit = unitNum ? parseInt(unitNum, 10) : undefined;
  const parsedTopic = topicNum ? parseInt(topicNum, 10) : undefined;

  // Selected academic programme
  const currentCourse = courseId ? COURSES.find(c => c.id === courseId) : undefined;
  const effectiveCourseId = currentCourse?.id || 'mca';

  // Selected subject
  const currentSubject = subjectId
    ? SUBJECTS.find(s => s.id === subjectId || s.code.toLowerCase().replace(/\s+/g, '-') === subjectId)
    : undefined;

  // Current unit
  const currentUnit = (currentSubject && parsedUnit)
    ? currentSubject.units.find(u => u.unitNumber === parsedUnit)
    : undefined;

  // Current topic (if on dedicated player view)
  const currentTopic = (currentSubject && parsedUnit && parsedTopic)
    ? getTopicByNumber(currentSubject.id, parsedUnit, parsedTopic)
    : undefined;

  // Active selected video inside the player
  const [activeVideo, setActiveVideo] = useState<CuratedVideo | null>(null);
  const [showEmbedFallback, setShowEmbedFallback] = useState<boolean>(false);
  const [subjectFilter, setSubjectFilter] = useState<'all' | 'available' | 'coming_soon'>('all');

  useEffect(() => {
    if (currentTopic && currentTopic.videos.length > 0) {
      const primary = currentTopic.videos.find(v => v.videoType === 'primary') || currentTopic.videos[0];
      setActiveVideo(primary);
      setShowEmbedFallback(false);
    } else {
      setActiveVideo(null);
      setShowEmbedFallback(false);
    }
  }, [currentTopic]);

  // Helper to resolve course icon matching Courses section
  const getCourseIcon = (id: string) => {
    switch (id) {
      case 'mca':
        return GraduationCap;
      case 'btech':
        return Cpu;
      case 'mba':
        return Briefcase;
      case 'pharmacy':
        return FlaskConical;
      case 'llb':
        return Scale;
      default:
        return BookOpen;
    }
  };

  // =========================================================================
  // LEVEL 1: ACADEMIC PROGRAMME SELECTION (e.g. /youtube-learning)
  // =========================================================================
  if (!courseId) {
    return (
      <div className="space-y-6 sm:space-y-8 max-w-7xl mx-auto pb-12">
        <Breadcrumbs items={[{ label: 'YouTube Learning' }]} />

        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-2.5 shadow-sm shadow-amber-500/10">
            <Video className="w-3.5 h-3.5" />
            <span>Syllabus-Driven Video Learning</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
            Academic Programmes
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-3xl leading-relaxed">
            Select your enrolled degree programme to explore hand-curated educational YouTube video lectures strictly aligned with your university curriculum.
          </p>
        </div>

        {/* Six Course Selection Grid - Compact on Mobile, 2 on Tablet, 3 on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {COURSES.map(course => {
            const isActive = course.status === 'active';
            const Icon = getCourseIcon(course.id);
            const curatedVideosTotal = course.id === 'mca'
              ? [1, 2, 3, 4].reduce((sum, s) => sum + getSemesterSummary(s).totalCuratedVideos, 0)
              : 0;

            return (
              <div
                key={course.id}
                onClick={() => {
                  if (isActive) {
                    navigate(`/youtube-learning/${course.id}`);
                  }
                }}
                className={`p-3.5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl border transition-all flex flex-col justify-between h-full ${
                  isActive
                    ? 'bg-white dark:bg-neutral-800 border-neutral-200/80 dark:border-neutral-700/60 shadow-sm hover:shadow-md hover:border-[#E6A02D] cursor-pointer group'
                    : 'bg-neutral-50/70 dark:bg-neutral-900/40 border border-neutral-200/60 dark:border-neutral-800 cursor-default select-none'
                }`}
              >
                <div className="flex flex-col flex-1">
                  {/* Clean Aligned Header: Icon on left, Code & Full Name beside it, Badge on the right */}
                  <div className="flex items-start justify-between gap-2.5 sm:gap-3 mb-2.5 sm:mb-3.5">
                    <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive
                            ? 'bg-amber-50 dark:bg-amber-950/40 text-[#E6A02D] group-hover:bg-[#E6A02D]/15'
                            : 'bg-neutral-200/60 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-500'
                        }`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h2
                          className={`text-base sm:text-xl font-bold font-['Poppins'] tracking-tight transition-colors truncate leading-tight ${
                            isActive
                              ? 'text-[#25252B] dark:text-white group-hover:text-[#E6A02D]'
                              : 'text-neutral-800 dark:text-neutral-200'
                          }`}
                        >
                          {course.code}
                        </h2>
                        <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 font-['Poppins'] truncate mt-0.5 leading-snug">
                          {course.name}
                        </p>
                      </div>
                    </div>

                    <div className="flex-shrink-0 pt-0.5">
                      {isActive ? (
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9.5px] sm:text-[11px] font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200/60 flex items-center gap-1 shadow-sm whitespace-nowrap">
                          <CheckCircle className="w-3 h-3 flex-shrink-0" />
                          <span>Available</span>
                        </span>
                      ) : (
                        <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[9.5px] sm:text-[11px] font-semibold bg-neutral-200/60 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400 border border-neutral-300/40 dark:border-neutral-700 flex items-center gap-1 whitespace-nowrap">
                          <Clock className="w-3 h-3 flex-shrink-0" />
                          <span>Coming Soon</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Course Description - cleanly aligned with equal vertical distribution */}
                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 sm:line-clamp-3 leading-normal sm:leading-relaxed flex-1">
                    {course.description}
                  </p>
                </div>

                <div className="mt-3 sm:mt-6 pt-2.5 sm:pt-4 border-t border-neutral-100 dark:border-neutral-700/60 flex items-center justify-between text-[11px] sm:text-xs font-semibold">
                  <span className="text-neutral-400 text-[10px] sm:text-[11px]">
                    {isActive ? `${curatedVideosTotal} Verified Lectures` : course.duration}
                  </span>
                  {isActive ? (
                    <span className="text-[#E6A02D] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Explore Videos</span>
                      <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </span>
                  ) : (
                    <span className="text-neutral-400 dark:text-neutral-500 text-[10px] sm:text-[11px] font-normal">
                      Curriculum in prep
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // If course not found in mock data
  if (!currentCourse) {
    return (
      <div className="text-center py-16 space-y-4 max-w-md mx-auto">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-[#E6A02D] flex items-center justify-center mx-auto">
          <AlertTriangle className="w-6 h-6" />
        </div>
        <h2 className="text-lg font-bold text-[#25252B] dark:text-white">Academic Programme Not Found</h2>
        <p className="text-xs text-neutral-500">The selected academic programme could not be located.</p>
        <button
          onClick={() => navigate('/youtube-learning')}
          className="px-4 py-2 rounded-xl bg-[#E6A02D] text-white text-xs font-semibold cursor-pointer"
        >
          Return to Academic Programmes
        </button>
      </div>
    );
  }

  // =========================================================================
  // LEVEL 6: TOPIC DEDICATED PLAYER VIEW
  // =========================================================================
  if (currentSubject && parsedUnit && parsedTopic && currentTopic) {
    const nav = getTopicNavigation(currentSubject.id, parsedUnit, parsedTopic);

    return (
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-4 sm:py-6 pb-16">
        <Breadcrumbs
          items={[
            { label: 'YouTube Learning', path: '/youtube-learning' },
            { label: currentCourse.code, path: `/youtube-learning/${currentCourse.id}` },
            { label: `Semester ${parsedSemester}`, path: `/youtube-learning/${currentCourse.id}/semester/${parsedSemester}` },
            { label: currentSubject.code, path: `/youtube-learning/${currentCourse.id}/semester/${parsedSemester}/subject/${currentSubject.id}` },
            { label: `Unit ${parsedUnit}`, path: `/youtube-learning/${currentCourse.id}/semester/${parsedSemester}/subject/${currentSubject.id}/unit/${parsedUnit}` },
            { label: `Topic ${currentTopic.topicNumber}: ${currentTopic.title}` }
          ]}
        />

        {/* Topic Header */}
        <div className="mb-4 sm:mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 border-b border-neutral-200/70 dark:border-neutral-800 pb-3 sm:pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2 flex-wrap">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/30">
                Topic {currentTopic.topicNumber} of {nav.totalTopics}
              </span>
              <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
                {currentSubject.code} • Unit {parsedUnit}: {currentUnit?.title}
              </span>
              {currentTopic.status === 'available' ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  <Check className="w-3 h-3" />
                  Verified Video Available
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                  <Clock className="w-3 h-3" />
                  Videos Coming Soon
                </span>
              )}
            </div>
            <h1 className="text-xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              {currentTopic.title}
            </h1>
            {currentTopic.description && (
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-3xl leading-relaxed">
                {currentTopic.description}
              </p>
            )}
          </div>

          <Link
            to={`/youtube-learning/${currentCourse.id}/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${parsedUnit}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 transition-colors w-fit flex-shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Unit {parsedUnit} Topics</span>
          </Link>
        </div>

        {/* Video Player or Empty State */}
        {currentTopic.videos.length > 0 && activeVideo ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Left 2 cols: Video Player + Active Video Details */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-5">
              {!showEmbedFallback ? (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-neutral-800/80">
                  <iframe
                    key={activeVideo.youtubeVideoId}
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeVideoId}?rel=0&modestbranding=1`}
                    title={activeVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl p-5 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Direct YouTube Playback Mode</span>
                    </div>
                    <h3 className="text-base sm:text-xl font-bold text-white leading-snug">
                      {activeVideo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400">
                      Lecturer: <span className="text-amber-400 font-semibold">{activeVideo.channelName}</span> ({activeVideo.language})
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <a
                      href={activeVideo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition-all shadow-lg shadow-red-600/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Watch Full Lecture on YouTube</span>
                    </a>
                    <button
                      onClick={() => setShowEmbedFallback(false)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 sm:py-2.5 rounded-xl text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Try Embedded Player Again</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Video Info Bar */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/30">
                      {activeVideo.channelName}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                      Language: {activeVideo.language}
                    </span>
                    {activeVideo.duration && (
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-neutral-400" />
                        {activeVideo.duration}
                      </span>
                    )}
                    {activeVideo.videoType === 'primary' && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        Primary Recommendation
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowEmbedFallback(!showEmbedFallback)}
                      className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-amber-500 underline transition-colors cursor-pointer"
                    >
                      {showEmbedFallback ? 'Show Embedded Frame' : 'Playback Help'}
                    </button>
                    <a
                      href={activeVideo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-700 text-white transition-colors shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Watch on YouTube</span>
                    </a>
                  </div>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                  {activeVideo.title}
                </h2>

                {activeVideo.description && (
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed border-t border-neutral-100 dark:border-neutral-800 pt-3">
                    {activeVideo.description}
                  </p>
                )}
              </div>
            </div>

            {/* Right col: Alternative Curated Videos Switcher */}
            <div className="space-y-3.5 sm:space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ListVideo className="w-4 h-4 text-amber-500" />
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                    Curated Lectures ({currentTopic.videos.length})
                  </h3>
                </div>
                <span className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400">
                  Switch player
                </span>
              </div>

              <div className="space-y-2 sm:space-y-2.5">
                {currentTopic.videos.map(video => {
                  const isSelected = activeVideo.id === video.id;
                  return (
                    <button
                      key={video.id}
                      onClick={() => {
                        setActiveVideo(video);
                        setShowEmbedFallback(false);
                      }}
                      className={`w-full text-left p-2.5 sm:p-3 rounded-xl border transition-all cursor-pointer flex gap-2.5 sm:gap-3 ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500/50 dark:bg-amber-500/15 ring-1 ring-amber-500/30'
                          : 'bg-white dark:bg-neutral-900 border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/40 dark:hover:border-neutral-700'
                      }`}
                    >
                      <div className="relative w-20 sm:w-24 h-14 sm:h-16 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800">
                        <img
                          src={video.thumbnail || `https://img.youtube.com/vi/${video.youtubeVideoId}/hqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                          <div className={`p-1 rounded-full ${isSelected ? 'bg-amber-500 text-black' : 'bg-black/60 text-white'}`}>
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                          </div>
                        </div>
                        {video.duration && (
                          <span className="absolute bottom-1 right-1 px-1 py-0.2 bg-black/80 rounded text-[9px] font-mono text-white">
                            {video.duration}
                          </span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5 sm:mb-1">
                          <span className="text-[10.5px] sm:text-[11px] font-bold text-amber-500 truncate">
                            {video.channelName}
                          </span>
                          <span className="text-[9.5px] sm:text-[10px] px-1.5 py-0.2 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 uppercase font-medium">
                            {video.language}
                          </span>
                        </div>
                        <p className="text-xs font-semibold text-neutral-900 dark:text-white line-clamp-2 leading-snug">
                          {video.title}
                        </p>
                        {isSelected && (
                          <span className="inline-flex items-center gap-1 mt-1 text-[10px] font-bold text-amber-500">
                            <CheckCircle2 className="w-3 h-3" />
                            Now Playing
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Syllabus Context Box */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 text-xs text-neutral-600 dark:text-neutral-400 space-y-1.5 sm:space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-neutral-800 dark:text-neutral-200">
                  <GraduationCap className="w-4 h-4 text-amber-500" />
                  <span>Syllabus Verified Video Library</span>
                </div>
                <p className="leading-relaxed text-[11px] sm:text-xs">
                  Lectures are curated from trusted educational channels and verified for strict alignment with the official university curriculum.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-12 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-center max-w-2xl mx-auto space-y-3 sm:space-y-4 my-6 sm:my-8">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto border border-amber-500/30">
              <Clock className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
              Curated Videos Coming Soon
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This topic is part of the prescribed syllabus. We are reviewing and hand-curating university-level video lectures for <span className="font-semibold text-neutral-900 dark:text-neutral-200">&ldquo;{currentTopic.title}&rdquo;</span> from accredited instructors.
            </p>
            <div className="pt-2 sm:pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-medium">
                {currentSubject.code} • Unit {parsedUnit}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-500 font-semibold border border-amber-500/20">
                Official Curriculum Topic
              </span>
            </div>
          </div>
        )}

        {/* Previous / Next Topic Navigation Footer */}
        <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-neutral-200/80 dark:border-neutral-800 space-y-3 sm:space-y-0">
          <div className="text-center sm:hidden">
            <Link
              to={`/youtube-learning/${currentCourse.id}/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${parsedUnit}`}
              className="text-xs font-bold text-amber-500 hover:underline"
            >
              Back to Unit {parsedUnit} Syllabus Topics
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:flex sm:items-center sm:justify-between sm:gap-4">
            {nav.previousTopic ? (
              <Link
                to={`/youtube-learning/${currentCourse.id}/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${parsedUnit}/topic/${nav.previousTopic.topicNumber}`}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-amber-500/40 text-neutral-800 dark:text-neutral-200 transition-colors shadow-sm min-w-0"
              >
                <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 flex-shrink-0" />
                <div className="text-left min-w-0 truncate">
                  <div className="text-[9.5px] sm:text-[10px] text-neutral-400 uppercase font-mono">Previous</div>
                  <div className="font-bold truncate text-[11px] sm:text-xs">{nav.previousTopic.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <div className="hidden sm:block">
              <Link
                to={`/youtube-learning/${currentCourse.id}/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${parsedUnit}`}
                className="text-xs font-bold text-amber-500 hover:underline"
              >
                Back to Unit {parsedUnit} Syllabus Topics
              </Link>
            </div>

            {nav.nextTopic ? (
              <Link
                to={`/youtube-learning/${currentCourse.id}/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${parsedUnit}/topic/${nav.nextTopic.topicNumber}`}
                className="inline-flex items-center justify-end gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-amber-500/40 text-neutral-800 dark:text-neutral-200 transition-colors shadow-sm text-right min-w-0"
              >
                <div className="min-w-0 truncate">
                  <div className="text-[9.5px] sm:text-[10px] text-neutral-400 uppercase font-mono">Next</div>
                  <div className="font-bold truncate text-[11px] sm:text-xs">{nav.nextTopic.title}</div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 flex-shrink-0" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // LEVEL 5: UNIT TOPICS LIST VIEW
  // =========================================================================
  if (currentSubject && parsedUnit && currentUnit) {
    const topics = getTopicsForUnit(currentSubject.id, parsedUnit);

    return (
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-5 sm:py-6 pb-20">
        <Breadcrumbs
          items={[
            { label: 'YouTube Learning', path: '/youtube-learning' },
            { label: currentCourse.code, path: `/youtube-learning/${currentCourse.id}` },
            { label: `Semester ${parsedSemester}`, path: `/youtube-learning/${currentCourse.id}/semester/${parsedSemester}` },
            { label: currentSubject.code, path: `/youtube-learning/${currentCourse.id}/semester/${parsedSemester}/subject/${currentSubject.id}` },
            { label: `Unit ${parsedUnit}` }
          ]}
        />

        {/* Return Button */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => navigate(`/youtube-learning/${currentCourse.id}/semester/${parsedSemester}/subject/${currentSubject.id}`)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-[#E6A02D] dark:text-neutral-400 dark:hover:text-[#E6A02D] transition-colors cursor-pointer w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to {currentSubject.code} Units</span>
          </button>
        </div>

        {/* Unit Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/30">
              Unit {currentUnit.unitNumber}
            </span>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              {currentSubject.code} • {currentSubject.name}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {currentUnit.title}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-3xl leading-relaxed">
            Choose any topic from the official university syllabus below to watch curated, topic-specific YouTube lectures or explore syllabus concepts.
          </p>
        </div>

        {/* Topics List in strict syllabus sequence */}
        <div className="space-y-3">
          {topics.map(topic => {
            const hasVideos = topic.videos.length > 0;
            const primaryVideo = topic.videos.find(v => v.videoType === 'primary') || topic.videos[0];

            return (
              <div
                key={topic.id}
                onClick={() =>
                  navigate(
                    `/youtube-learning/${currentCourse.id}/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${parsedUnit}/topic/${topic.topicNumber}`
                  )
                }
                className="group p-3 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/40 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4"
              >
                <div className="flex items-start gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                  <div className="min-w-[28px] sm:min-w-[36px] h-7 sm:h-9 px-1 rounded-lg sm:rounded-xl bg-neutral-100 dark:bg-neutral-800 group-hover:bg-amber-500/10 group-hover:text-amber-500 text-neutral-700 dark:text-neutral-300 font-bold text-[11px] sm:text-xs flex items-center justify-center flex-shrink-0 transition-colors border border-neutral-200/60 dark:border-neutral-700 whitespace-nowrap">
                    #{topic.topicNumber}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs sm:text-base font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors leading-snug truncate sm:whitespace-normal">
                      {topic.title}
                    </h3>
                    {topic.description && (
                      <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1">
                        {topic.description}
                      </p>
                    )}

                    {hasVideos && (
                      <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-2 flex-wrap text-xs">
                        <span className="font-medium text-neutral-600 dark:text-neutral-300 text-[10px] sm:text-xs whitespace-nowrap flex-shrink-0">
                          {topic.videos.length} {topic.videos.length === 1 ? 'Lecture' : 'Lectures'}:
                        </span>
                        <span className="text-amber-500 font-medium text-[10px] sm:text-xs truncate max-w-[140px] sm:max-w-none">
                          {primaryVideo?.channelName}
                        </span>
                        {topic.videos.length > 1 && (
                          <span className="text-neutral-400 text-[10px] sm:text-[11px] whitespace-nowrap flex-shrink-0">
                            +{topic.videos.length - 1} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 sm:self-center flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100 dark:border-neutral-800 justify-between sm:justify-end">
                  {hasVideos ? (
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-bold bg-amber-500 text-black group-hover:bg-amber-400 transition-colors shadow-sm shadow-amber-500/20 whitespace-nowrap flex-shrink-0">
                      <Play className="w-3 h-3 fill-current flex-shrink-0" />
                      <span>Watch Lectures</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl text-[10.5px] sm:text-xs font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-500 dark:text-neutral-400 whitespace-nowrap flex-shrink-0">
                      <Clock className="w-3 h-3 flex-shrink-0" />
                      <span>Videos coming soon</span>
                    </span>
                  )}
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================================
  // LEVEL 4: SUBJECT UNITS LIST VIEW
  // =========================================================================
  if (currentSubject) {
    const unitsSummary = getSubjectUnitsSummary(currentSubject.id);

    return (
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-5 sm:py-6 pb-20">
        <Breadcrumbs
          items={[
            { label: 'YouTube Learning', path: '/youtube-learning' },
            { label: currentCourse.code, path: `/youtube-learning/${currentCourse.id}` },
            { label: `Semester ${parsedSemester}`, path: `/youtube-learning/${currentCourse.id}/semester/${parsedSemester}` },
            { label: currentSubject.code }
          ]}
        />

        {/* Return Button */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => navigate(`/youtube-learning/${currentCourse.id}/semester/${parsedSemester}`)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-[#E6A02D] dark:text-neutral-400 dark:hover:text-[#E6A02D] transition-colors cursor-pointer w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Semester {parsedSemester} Subjects</span>
          </button>
        </div>

        {/* Subject Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/30">
              {currentSubject.code}
            </span>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Semester {currentSubject.semester} • {unitsSummary.length} Syllabus Units
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            {currentSubject.name}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-3xl leading-relaxed">
            {currentSubject.description}
          </p>
        </div>

        {/* Units Grid */}
        {unitsSummary.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {unitsSummary.map(unit => (
              <Link
                key={unit.unitNumber}
                to={`/youtube-learning/${currentCourse.id}/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${unit.unitNumber}`}
                className="group p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-amber-500/10 text-amber-500 font-bold text-xs flex items-center justify-center border border-amber-500/20 flex-shrink-0 whitespace-nowrap">
                        U{unit.unitNumber}
                      </span>
                      <h3 className="sm:hidden font-bold text-sm text-neutral-900 dark:text-white truncate min-w-0 flex-1">
                        Unit {unit.unitNumber}
                      </h3>
                    </div>
                    {unit.status === 'available' ? (
                      <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 whitespace-nowrap flex-shrink-0">
                        {unit.videosCount} Verified Lectures
                      </span>
                    ) : (
                      <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-500 whitespace-nowrap flex-shrink-0">
                        Syllabus Ready
                      </span>
                    )}
                  </div>

                  <h3 className="hidden sm:block text-lg font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors mb-1.5 sm:mb-2">
                    Unit {unit.unitNumber}: {unit.title}
                  </h3>
                  <p className="sm:hidden text-xs font-semibold text-neutral-700 dark:text-neutral-300 mb-0.5 truncate">
                    {unit.title}
                  </p>
                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400">
                    {unit.topicsCount} prescribed syllabus topics
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-4 mt-2.5 sm:mt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-amber-500 transition-colors">
                  <span>Explore Topics & Lectures</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="p-8 sm:p-12 text-center bg-white dark:bg-neutral-900 rounded-3xl border border-dashed border-neutral-200/80 dark:border-neutral-800 space-y-3 max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Provisional Subject — Curriculum Pending
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {currentSubject.name} is part of the proposed Semester 4 advanced academic track. Curated video lectures and topics will be organized once official university curriculum units are confirmed.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // LEVEL 3: SEMESTER SUBJECTS LIST VIEW (e.g. /youtube-learning/:courseId/semester/:semesterNum)
  // =========================================================================
  if (parsedSemester) {
    const semesterData = getSemesterSummary(parsedSemester);
    const semesterInfo = currentCourse.semesters.find(s => s.number === parsedSemester);

    const filteredSubjects = semesterData.subjects.filter(s => {
      if (subjectFilter === 'available') return s.status === 'available';
      if (subjectFilter === 'coming_soon') return s.status === 'coming_soon';
      return true;
    });

    return (
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-5 sm:py-6 pb-20">
        <Breadcrumbs
          items={[
            { label: 'YouTube Learning', path: '/youtube-learning' },
            { label: currentCourse.code, path: `/youtube-learning/${currentCourse.id}` },
            { label: `Semester ${parsedSemester}` }
          ]}
        />

        {/* Return Button */}
        <div className="mb-4">
          <button
            type="button"
            onClick={() => navigate(`/youtube-learning/${currentCourse.id}`)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-[#E6A02D] dark:text-neutral-400 dark:hover:text-[#E6A02D] transition-colors cursor-pointer w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to {currentCourse.code} Semesters</span>
          </button>
        </div>

        {/* Semester Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/30">
              Semester {parsedSemester}
            </span>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              {currentCourse.name} ({currentCourse.code}) • {semesterData.totalSubjects} Prescribed Subjects
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Semester {parsedSemester} Subjects
          </h1>
          {semesterInfo?.description && (
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-3xl leading-relaxed">
              {semesterInfo.description}
            </p>
          )}

          {parsedSemester === 4 && (
            <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2.5 max-w-3xl">
              <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5 text-amber-500" />
              <div className="space-y-0.5">
                <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                  Provisional Advanced Continuation Structure
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Semester 4 subjects represent proposed continuation tracks based on Semester 3. Curated video playlists and verified syllabus units will be organized once officially confirmed by RGPV.
                </p>
              </div>
            </div>
          )}

          {/* Filter Bar */}
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 sm:pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <div className="overflow-x-auto no-scrollbar -mx-1 px-1">
              <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200/60 dark:border-neutral-800 w-max">
                <button
                  onClick={() => setSubjectFilter('all')}
                  className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    subjectFilter === 'all'
                      ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm font-bold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  All Subjects ({semesterData.totalSubjects})
                </button>
                <button
                  onClick={() => setSubjectFilter('available')}
                  className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    subjectFilter === 'available'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-sm font-bold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Verified Videos ({semesterData.availableSubjectsCount})
                </button>
                <button
                  onClick={() => setSubjectFilter('coming_soon')}
                  className={`px-2.5 sm:px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                    subjectFilter === 'coming_soon'
                      ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm font-bold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  Syllabus Ready ({semesterData.totalSubjects - semesterData.availableSubjectsCount})
                </button>
              </div>
            </div>

            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {semesterData.totalCuratedVideos > 0 && (
                <span className="font-semibold text-emerald-500">{semesterData.totalCuratedVideos} Verified Videos</span>
              )}
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {filteredSubjects.map(subject => {
            const isAvailable = subject.status === 'available';

            return (
              <Link
                key={subject.id}
                to={`/youtube-learning/${currentCourse.id}/semester/${parsedSemester}/subject/${subject.id}`}
                className="group p-3.5 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/40 hover:shadow-lg transition-all flex flex-col justify-between h-full"
              >
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
                    <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20 whitespace-nowrap flex-shrink-0">
                      {subject.code}
                    </span>
                    {isAvailable ? (
                      <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 whitespace-nowrap flex-shrink-0">
                        {subject.curatedVideosCount} Videos
                      </span>
                    ) : (
                      <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[9.5px] sm:text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-500 whitespace-nowrap flex-shrink-0">
                        Syllabus Ready
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors mb-1 sm:mb-2 line-clamp-1 sm:line-clamp-2">
                    {subject.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 sm:line-clamp-3 leading-normal sm:leading-relaxed flex-1">
                    {subject.description}
                  </p>
                </div>

                <div className="pt-2.5 sm:pt-4 mt-3 sm:mt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] sm:text-xs font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-amber-500 transition-colors">
                  <span>{subject.unitsCount} Units • View Topics</span>
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================================
  // LEVEL 2: SEMESTER SELECTION FOR SELECTED PROGRAMME (e.g. /youtube-learning/:courseId)
  // =========================================================================
  return (
    <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto pb-16 px-1 sm:px-0">
      <Breadcrumbs
        items={[
          { label: 'YouTube Learning', path: '/youtube-learning' },
          { label: currentCourse.code }
        ]}
      />

      {/* Return Button */}
      <div>
        <button
          type="button"
          onClick={() => navigate('/youtube-learning')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-[#E6A02D] dark:text-neutral-400 dark:hover:text-[#E6A02D] transition-colors cursor-pointer w-fit"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Academic Programmes</span>
        </button>
      </div>

      {/* Page Header */}
      <div className="bg-white dark:bg-neutral-800 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-2 shadow-sm shadow-amber-500/10">
              <Video className="w-3.5 h-3.5" />
              <span>{currentCourse.code} • Syllabus-Driven Video Learning</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
              {currentCourse.name} ({currentCourse.code})
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-2 max-w-3xl leading-relaxed">
              Select your semester below to explore curated educational YouTube video lectures strictly aligned with the university syllabus.
            </p>
          </div>
        </div>
      </div>

      {/* Semesters Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
        {currentCourse.semesters.map(semester => {
          const semData = getSemesterSummary(semester.number);
          const hasCuratedHighlight = semData.totalCuratedVideos > 0;

          return (
            <Link
              key={semester.number}
              to={`/youtube-learning/${currentCourse.id}/semester/${semester.number}`}
              className="group p-3.5 sm:p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/40 hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden h-full"
            >
              {hasCuratedHighlight && (
                <div className="absolute top-0 right-0">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-bl-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-black">
                    {semData.totalCuratedVideos} Videos
                  </span>
                </div>
              )}

              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-4">
                  <div className="min-w-[42px] sm:min-w-[48px] h-9 sm:h-12 px-2 rounded-xl sm:rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-extrabold text-xs sm:text-base border border-amber-500/20 group-hover:scale-105 transition-transform flex-shrink-0 whitespace-nowrap">
                    0{semester.number}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm sm:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors truncate">
                      {semester.title}
                    </h3>
                    <span className="text-[10.5px] sm:text-xs text-neutral-500 dark:text-neutral-400 block truncate">
                      {semData.totalSubjects} Prescribed Subjects
                    </span>
                  </div>
                </div>

                <p className="text-[11px] sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-1 sm:line-clamp-3 leading-normal sm:leading-relaxed mb-2 sm:mb-4 flex-1">
                  {semester.description}
                </p>

                {/* Subject tags preview - 3 on mobile, 4 on desktop */}
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-1.5 sm:mb-2">
                  {semData.subjects.slice(0, 3).map(sub => (
                    <span
                      key={sub.id}
                      className="px-1.5 sm:px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800/70 text-neutral-600 dark:text-neutral-300"
                    >
                      {sub.code}
                    </span>
                  ))}
                  {/* 4th subject chip on sm+ screens */}
                  {semData.subjects.length > 3 && (
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800/70 text-neutral-600 dark:text-neutral-300">
                      {semData.subjects[3].code}
                    </span>
                  )}
                  {semData.subjects.length > 3 && (
                    <span className="sm:hidden px-1 py-0.5 rounded-md text-[10px] text-neutral-400">
                      +{semData.subjects.length - 3} more
                    </span>
                  )}
                  {semData.subjects.length > 4 && (
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded-md text-[11px] text-neutral-400">
                      +{semData.subjects.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-2.5 sm:pt-4 mt-3 sm:mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] sm:text-xs font-bold text-amber-500">
                <span>Browse Learning Videos</span>
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
