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
  Sparkles,
  Layers,
  GraduationCap,
  Globe2,
  ListVideo,
  AlertTriangle,
  RotateCcw,
  Check,
  Filter
} from 'lucide-react';
import { SUBJECTS, COURSES } from '../data/mockData';
import {
  getTopicsForUnit,
  getTopicByNumber,
  getTopicNavigation,
  getSubjectUnitsSummary,
  getSubjectSummary,
  getSemesterSummary,
} from '../data/youtubeLearningData';
import { CuratedVideo } from '../types/youtubeLearning';

export const YouTubeLearningPage: React.FC = () => {
  const { semesterNum, subjectId, unitNum, topicNum } = useParams<{
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

  // Active selected video inside the player (state so user can switch alternatives without reloading)
  const [activeVideo, setActiveVideo] = useState<CuratedVideo | null>(null);
  const [showEmbedFallback, setShowEmbedFallback] = useState<boolean>(false);
  const [subjectFilter, setSubjectFilter] = useState<'all' | 'available' | 'coming_soon'>('all');

  useEffect(() => {
    if (currentTopic && currentTopic.videos.length > 0) {
      // Default to primary video or first available
      const primary = currentTopic.videos.find(v => v.videoType === 'primary') || currentTopic.videos[0];
      setActiveVideo(primary);
      setShowEmbedFallback(false);
    } else {
      setActiveVideo(null);
      setShowEmbedFallback(false);
    }
  }, [currentTopic]);

  // Course metadata
  const mcaCourse = COURSES.find(c => c.id === 'mca');

  // Breadcrumb helper
  const renderBreadcrumbs = () => (
    <nav className="flex items-center flex-wrap gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 mb-6">
      <Link
        to="/youtube-learning"
        className="hover:text-amber-500 transition-colors font-medium flex items-center gap-1"
      >
        <Video className="w-3.5 h-3.5 text-amber-500" />
        <span>YouTube Learning</span>
      </Link>

      {parsedSemester && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600 flex-shrink-0" />
          <Link
            to={`/youtube-learning/mca/semester/${parsedSemester}`}
            className={`hover:text-amber-500 transition-colors ${!subjectId ? 'text-amber-500 font-semibold' : ''}`}
          >
            Semester {parsedSemester}
          </Link>
        </>
      )}

      {currentSubject && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600 flex-shrink-0" />
          <Link
            to={`/youtube-learning/mca/semester/${currentSubject.semester}/subject/${currentSubject.id}`}
            className={`hover:text-amber-500 transition-colors ${!parsedUnit ? 'text-amber-500 font-semibold' : ''}`}
          >
            {currentSubject.code}
          </Link>
        </>
      )}

      {currentUnit && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600 flex-shrink-0" />
          <Link
            to={`/youtube-learning/mca/semester/${currentSubject?.semester}/subject/${currentSubject?.id}/unit/${currentUnit.unitNumber}`}
            className={`hover:text-amber-500 transition-colors ${!parsedTopic ? 'text-amber-500 font-semibold' : ''}`}
          >
            Unit {currentUnit.unitNumber}
          </Link>
        </>
      )}

      {currentTopic && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600 flex-shrink-0" />
          <span className="text-amber-500 font-semibold truncate max-w-[200px] sm:max-w-xs">
            Topic {currentTopic.topicNumber}: {currentTopic.title}
          </span>
        </>
      )}
    </nav>
  );

  // =========================================================================
  // 1. TOPIC DEDICATED PLAYER VIEW
  // =========================================================================
  if (currentSubject && parsedUnit && parsedTopic && currentTopic) {
    const nav = getTopicNavigation(currentSubject.id, parsedUnit, parsedTopic);

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-20">
        {renderBreadcrumbs()}

        {/* Topic Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200/70 dark:border-neutral-800 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
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
            <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              {currentTopic.title}
            </h1>
            {currentTopic.description && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 max-w-3xl">
                {currentTopic.description}
              </p>
            )}
          </div>

          <Link
            to={`/youtube-learning/mca/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${parsedUnit}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-200 transition-colors w-fit flex-shrink-0"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>All Unit {parsedUnit} Topics</span>
          </Link>
        </div>

        {/* Video Player or Empty State */}
        {currentTopic.videos.length > 0 && activeVideo ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 cols: Video Player + Active Video Details */}
            <div className="lg:col-span-2 space-y-5">
              {/* Responsive 16:9 Player with youtube-nocookie.com */}
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
                /* Fallback Player Card when embedding is restricted or user prefers direct watching */
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Direct YouTube Playback Mode</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                      {activeVideo.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400">
                      Lecturer: <span className="text-amber-400 font-semibold">{activeVideo.channelName}</span> ({activeVideo.language})
                    </p>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <a
                      href={activeVideo.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-700 text-white transition-all shadow-lg shadow-red-600/30"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Watch Full Lecture on YouTube</span>
                    </a>
                    <button
                      onClick={() => setShowEmbedFallback(false)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-medium bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Try Embedded Player Again</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Video Info Bar */}
              <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 shadow-sm space-y-3">
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

                  {/* External Watch Button and Fallback Toggle */}
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

                <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
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
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ListVideo className="w-4 h-4 text-amber-500" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                    Curated Lectures ({currentTopic.videos.length})
                  </h3>
                </div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400">
                  Click to switch player
                </span>
              </div>

              <div className="space-y-2.5">
                {currentTopic.videos.map(video => {
                  const isSelected = activeVideo.id === video.id;
                  return (
                    <button
                      key={video.id}
                      onClick={() => {
                        setActiveVideo(video);
                        setShowEmbedFallback(false);
                      }}
                      className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex gap-3 ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500/50 dark:bg-amber-500/15 ring-1 ring-amber-500/30'
                          : 'bg-white dark:bg-neutral-900 border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/40 dark:hover:border-neutral-700'
                      }`}
                    >
                      {/* Video Thumbnail */}
                      <div className="relative w-24 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800">
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

                      {/* Video Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-[11px] font-bold text-amber-500 truncate">
                            {video.channelName}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 uppercase font-medium">
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
              <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-neutral-800 dark:text-neutral-200">
                  <GraduationCap className="w-4 h-4 text-amber-500" />
                  <span>Syllabus Verified Video Library</span>
                </div>
                <p className="leading-relaxed">
                  Lectures are curated from trusted educational channels (Jenny&apos;s Lectures, CodeWithHarry, Gate Smashers, Apna College) and verified for strict alignment with the official RGPV MCA curriculum.
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Empty State for Uncurated Topic - Clean, helpful, syllabus preserved */
          <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 text-center max-w-2xl mx-auto space-y-4 my-8">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto border border-amber-500/30">
              <Clock className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
              Curated Videos Coming Soon
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This topic is part of the prescribed RGPV MCA syllabus. We are reviewing and hand-curating the best university-level video lectures for <span className="font-semibold text-neutral-900 dark:text-neutral-200">&ldquo;{currentTopic.title}&rdquo;</span> from accredited instructors.
            </p>
            <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap items-center justify-center gap-3">
              <span className="text-xs px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 font-medium">
                {currentSubject.code} • Unit {parsedUnit}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 font-semibold border border-amber-500/20">
                Official RGPV Curriculum Topic
              </span>
            </div>
          </div>
        )}

        {/* Previous / Next Topic Navigation Footer */}
        <div className="mt-10 pt-6 border-t border-neutral-200/80 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          {nav.previousTopic ? (
            <Link
              to={`/youtube-learning/mca/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${parsedUnit}/topic/${nav.previousTopic.topicNumber}`}
              className="w-full sm:w-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-amber-500/40 text-neutral-800 dark:text-neutral-200 transition-colors shadow-sm"
            >
              <ArrowLeft className="w-4 h-4 text-amber-500" />
              <div className="text-left">
                <div className="text-[10px] text-neutral-400 uppercase font-mono">Previous Topic</div>
                <div className="font-bold truncate max-w-[180px]">{nav.previousTopic.title}</div>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}

          <Link
            to={`/youtube-learning/mca/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${parsedUnit}`}
            className="text-xs font-bold text-amber-500 hover:underline"
          >
            Back to Unit {parsedUnit} Syllabus Topics
          </Link>

          {nav.nextTopic ? (
            <Link
              to={`/youtube-learning/mca/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${parsedUnit}/topic/${nav.nextTopic.topicNumber}`}
              className="w-full sm:w-auto inline-flex items-center justify-end gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-amber-500/40 text-neutral-800 dark:text-neutral-200 transition-colors shadow-sm text-right"
            >
              <div>
                <div className="text-[10px] text-neutral-400 uppercase font-mono">Next Topic</div>
                <div className="font-bold truncate max-w-[180px]">{nav.nextTopic.title}</div>
              </div>
              <ArrowRight className="w-4 h-4 text-amber-500" />
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. UNIT TOPICS LIST VIEW
  // =========================================================================
  if (currentSubject && parsedUnit && currentUnit) {
    const topics = getTopicsForUnit(currentSubject.id, parsedUnit);

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-20">
        {renderBreadcrumbs()}

        {/* Unit Header */}
        <div className="mb-8">
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
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-3xl">
            Choose any topic from the official RGPV MCA syllabus below to watch curated, topic-specific YouTube lectures or explore syllabus concepts.
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
                    `/youtube-learning/mca/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${parsedUnit}/topic/${topic.topicNumber}`
                  )
                }
                className="group p-4 sm:p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/40 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-800 group-hover:bg-amber-500/10 group-hover:text-amber-500 text-neutral-700 dark:text-neutral-300 font-bold text-xs flex items-center justify-center flex-shrink-0 transition-colors border border-neutral-200/60 dark:border-neutral-700">
                    #{topic.topicNumber}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {topic.title}
                    </h3>
                    {topic.description && (
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 line-clamp-1">
                        {topic.description}
                      </p>
                    )}

                    {hasVideos && (
                      <div className="flex items-center gap-2 mt-2 flex-wrap text-xs">
                        <span className="font-medium text-neutral-600 dark:text-neutral-300">
                          {topic.videos.length} {topic.videos.length === 1 ? 'Curated Lecture' : 'Curated Lectures'}:
                        </span>
                        <span className="text-amber-500 font-medium">
                          {primaryVideo?.channelName}
                        </span>
                        {topic.videos.length > 1 && (
                          <span className="text-neutral-400">
                            +{topic.videos.length - 1} alternative{topic.videos.length - 1 > 1 ? 's' : ''}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:self-center flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-100 dark:border-neutral-800 justify-between sm:justify-end">
                  {hasVideos ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-500 text-black group-hover:bg-amber-400 transition-colors shadow-sm shadow-amber-500/20">
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Watch Lectures</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-neutral-100 dark:bg-neutral-800/80 text-neutral-500 dark:text-neutral-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Videos coming soon</span>
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-amber-500 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================================
  // 3. SUBJECT UNITS LIST VIEW
  // =========================================================================
  if (currentSubject) {
    const unitsSummary = getSubjectUnitsSummary(currentSubject.id);

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-20">
        {renderBreadcrumbs()}

        {/* Subject Header */}
        <div className="mb-8">
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
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-3xl leading-relaxed">
            {currentSubject.description}
          </p>
        </div>

        {/* Units Grid */}
        {unitsSummary.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {unitsSummary.map(unit => (
              <Link
                key={unit.unitNumber}
                to={`/youtube-learning/mca/semester/${currentSubject.semester}/subject/${currentSubject.id}/unit/${unit.unitNumber}`}
                className="group p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 font-bold text-xs flex items-center justify-center border border-amber-500/20">
                      U{unit.unitNumber}
                    </span>
                    {unit.status === 'available' ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        {unit.videosCount} Verified Lectures
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                        Syllabus Ready
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors mb-2">
                    Unit {unit.unitNumber}: {unit.title}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {unit.topicsCount} prescribed syllabus topics
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-amber-500 transition-colors">
                  <span>Explore Topics & Lectures</span>
                  <ChevronRight className="w-4 h-4" />
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
  // 4. SEMESTER SUBJECTS LIST VIEW
  // =========================================================================
  if (parsedSemester) {
    const semesterData = getSemesterSummary(parsedSemester);
    const semesterInfo = mcaCourse?.semesters.find(s => s.number === parsedSemester);

    const filteredSubjects = semesterData.subjects.filter(s => {
      if (subjectFilter === 'available') return s.status === 'available';
      if (subjectFilter === 'coming_soon') return s.status === 'coming_soon';
      return true;
    });

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pb-20">
        {renderBreadcrumbs()}

        {/* Semester Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/30">
              Semester {parsedSemester}
            </span>
            <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Master of Computer Applications (MCA) • {semesterData.totalSubjects} Prescribed Subjects
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Semester {parsedSemester} Subjects
          </h1>
          {semesterInfo?.description && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 max-w-3xl leading-relaxed">
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
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <div className="flex items-center gap-1.5 p-1 bg-neutral-100 dark:bg-neutral-900 rounded-xl border border-neutral-200/60 dark:border-neutral-800">
              <button
                onClick={() => setSubjectFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  subjectFilter === 'all'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                All Subjects ({semesterData.totalSubjects})
              </button>
              <button
                onClick={() => setSubjectFilter('available')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  subjectFilter === 'available'
                    ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-sm font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Verified Videos Available ({semesterData.availableSubjectsCount})
              </button>
              <button
                onClick={() => setSubjectFilter('coming_soon')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  subjectFilter === 'coming_soon'
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm font-bold'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                Syllabus Ready ({semesterData.totalSubjects - semesterData.availableSubjectsCount})
              </button>
            </div>

            <div className="text-xs text-neutral-500 dark:text-neutral-400">
              {semesterData.totalCuratedVideos > 0 && (
                <span className="font-semibold text-emerald-500">{semesterData.totalCuratedVideos} Verified Videos</span>
              )}
            </div>
          </div>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSubjects.map(subject => {
            const isAvailable = subject.status === 'available';

            return (
              <Link
                key={subject.id}
                to={`/youtube-learning/mca/semester/${parsedSemester}/subject/${subject.id}`}
                className="group p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-1 rounded-md text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      {subject.code}
                    </span>
                    {isAvailable ? (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                        {subject.curatedVideosCount} Videos
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-500">
                        Syllabus Ready
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors mb-2 line-clamp-2">
                    {subject.name}
                  </h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                    {subject.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 group-hover:text-amber-500 transition-colors">
                  <span>{subject.unitsCount} Units • View Topics</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================================
  // 5. LANDING PAGE: SEMESTER SELECTION (Course: MCA)
  // =========================================================================
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 pb-20">
      {/* Page Header */}
      <div className="mb-10 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-4 shadow-sm shadow-amber-500/10">
          <Video className="w-3.5 h-3.5" />
          <span>Syllabus-Driven Video Learning</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
          YouTube Learning Library
        </h1>
        <p className="text-base text-neutral-600 dark:text-neutral-400 mt-3 leading-relaxed">
          Master every topic in your official university syllabus through hand-curated educational YouTube videos from verified channels: Jenny&apos;s Lectures, CodeWithHarry, Gate Smashers, and Apna College.
        </p>

        {/* Academic Hierarchy Badge */}
        <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-300 font-medium">
          <GraduationCap className="w-4 h-4 text-amber-500" />
          <span>Curriculum: Master of Computer Applications (MCA) • Official RGPV Syllabus</span>
        </div>
      </div>

      {/* 4 Semesters Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {mcaCourse?.semesters.map(semester => {
          const semData = getSemesterSummary(semester.number);
          const hasCuratedHighlight = semData.totalCuratedVideos > 0;

          return (
            <Link
              key={semester.number}
              to={`/youtube-learning/mca/semester/${semester.number}`}
              className="group p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-amber-500/50 dark:hover:border-amber-500/40 hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden"
            >
              {hasCuratedHighlight && (
                <div className="absolute top-0 right-0">
                  <span className="px-3 py-1 rounded-bl-xl text-[10px] font-bold uppercase tracking-wider bg-emerald-500 text-black">
                    {semData.totalCuratedVideos} Verified Videos
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-extrabold text-base border border-amber-500/20 group-hover:scale-105 transition-transform">
                    0{semester.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-amber-500 transition-colors">
                      {semester.title}
                    </h3>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {semData.totalSubjects} Core & Elective Subjects
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed mb-4">
                  {semester.description}
                </p>

                {/* Subject tags preview */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {semData.subjects.slice(0, 4).map(sub => (
                    <span
                      key={sub.id}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800/70 text-neutral-600 dark:text-neutral-300"
                    >
                      {sub.code}
                    </span>
                  ))}
                  {semData.subjects.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[11px] text-neutral-400">
                      +{semData.subjects.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-bold text-amber-500">
                <span>Browse Syllabus Videos</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Curated Educators & Channels Information */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800/80">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
            Curated Channel Quality Standards
          </h2>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 max-w-3xl leading-relaxed">
          Every video recommendation in this library is audited for active public availability and syllabus conformance. Preferred educational channels prioritize clear Hindi instruction for university exam preparation and deep concept clarity.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { name: "Jenny's Lectures", spec: 'C, DS & Algorithms' },
            { name: 'Gate Smashers', spec: 'OS, DBMS, Networks' },
            { name: 'CodeWithHarry', spec: 'C & Web Tech' },
            { name: 'Apna College', spec: 'Java & Python' },
            { name: '5 Min Engineering', spec: 'Software Eng & Networks' },
            { name: 'SyntaxHub / Neso', spec: 'English Alternatives' },
          ].map(ch => (
            <div
              key={ch.name}
              className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200/60 dark:border-neutral-700/60 text-center"
            >
              <div className="text-xs font-bold text-neutral-900 dark:text-white truncate">
                {ch.name}
              </div>
              <div className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
                {ch.spec}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
