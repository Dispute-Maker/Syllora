import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { MOCK_RESOURCES, SUBJECTS, COURSES } from '../data/mockData';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { PdfPreviewer } from '../components/previews/PdfPreviewer';

export const ResourceDetailPage: React.FC = () => {
  const { resourceId } = useParams<{ resourceId: string }>();
  const navigate = useNavigate();

  const resource = MOCK_RESOURCES.find(r => r.id === resourceId);

  if (!resource) {
    return (
      <div className="max-w-xl mx-auto text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-[#25252B] dark:text-white">Resource Not Found</h2>
        <p className="text-xs text-neutral-500">The requested academic material could not be located.</p>
        <button
          onClick={() => navigate('/explore')}
          className="px-4 py-2 bg-[#E6A02D] text-white text-xs font-semibold rounded-xl cursor-pointer"
        >
          Back to Explore
        </button>
      </div>
    );
  }

  const subject = SUBJECTS.find(s => s.id === resource.subjectId);
  const course = COURSES.find(c => c.id === resource.courseId);

  // Cross linked question papers / solutions
  const relatedResources = resource.relatedResourceIds
    ? MOCK_RESOURCES.filter(r => resource.relatedResourceIds?.includes(r.id))
    : [];

  const breadcrumbs = [
    { label: 'Courses', path: '/courses' },
    { label: course?.code || 'MCA', path: `/courses/${resource.courseId}` },
    { label: `Semester ${resource.semesterId}`, path: `/courses/${resource.courseId}/semester/${resource.semesterId}` },
    { label: subject?.code || 'Subject', path: `/courses/${resource.courseId}/semester/${resource.semesterId}/subject/${resource.subjectId}` },
    { label: resource.title }
  ];

  return (
    <div className="space-y-5 sm:space-y-8 max-w-5xl mx-auto pb-16">
      <Breadcrumbs items={breadcrumbs} />

      {/* Header Info */}
      <div className="bg-white dark:bg-neutral-800 p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-3 sm:space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 dark:bg-amber-950 text-[#E6A02D]">
            {resource.type.toUpperCase()} DOCUMENT
          </span>
          <span className="text-xs text-neutral-400">Added on {resource.dateAdded}</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-[#25252B] dark:text-white font-['Poppins']">
          {resource.title}
        </h1>

        {/* Academic Context Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-semibold">
            {course?.code}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200">
            Semester {resource.semesterId}
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 font-medium">
            {subject?.name} ({subject?.code})
          </span>
          {resource.unitId && (
            <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-200 font-semibold">
              Unit {resource.unitId}
            </span>
          )}
          {resource.examYear && (
            <span className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-800 dark:bg-rose-950 dark:text-rose-200 font-semibold">
              Exam: {resource.examSession} {resource.examYear}
            </span>
          )}
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pt-2">
          {resource.description}
        </p>
      </div>

      {/* Main Preview Container */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[#25252B] dark:text-white font-['Poppins']">
          Resource Interactive Preview
        </h2>

        {resource.type === 'video' ? (
          <div className="bg-black rounded-3xl overflow-hidden shadow-xl aspect-video w-full max-w-4xl mx-auto">
            {resource.videoUrl ? (
              <iframe
                src={resource.videoUrl}
                title={resource.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="flex items-center justify-center h-full text-white text-xs">
                Demonstration video player placeholder
              </div>
            )}
          </div>
        ) : (
          <PdfPreviewer
            title={resource.title}
            fileSize={resource.fileSize}
            pages={resource.pages}
            subjectName={subject?.name || 'Syllabus Course'}
            unitNumber={resource.unitId}
          />
        )}
      </div>

      {/* Academic Source & Verification Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-[#25252B] dark:text-white font-['Poppins'] flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Academic Verification</span>
          </h3>
          <div className="text-xs text-neutral-500 dark:text-neutral-400 space-y-2">
            <p>
              <strong className="text-neutral-700 dark:text-neutral-200">Source:</strong>{' '}
              {resource.authorOrSource || 'University MCA Academic Cell'}
            </p>
            <p>
              <strong className="text-neutral-700 dark:text-neutral-200">Syllabus Compliance:</strong>{' '}
              Verified against current 2-Year MCA Curriculum.
            </p>
            <div className="flex flex-wrap gap-1 pt-1">
              {resource.keywords.map((kw, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-700 text-[10px] text-neutral-600 dark:text-neutral-300"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Cross-Link Section (e.g. PYQ <-> Solution) */}
        <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-neutral-100 dark:border-neutral-700/60 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-[#25252B] dark:text-white font-['Poppins']">
            {resource.type === 'pyq' ? 'Corresponding Solutions' : 'Linked Question Papers'}
          </h3>

          {relatedResources.length > 0 ? (
            <div className="space-y-2">
              {relatedResources.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => navigate(`/resource/${rel.id}`)}
                  className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/50 flex items-center justify-between cursor-pointer hover:bg-amber-100 transition-colors"
                >
                  <div className="truncate pr-2">
                    <p className="text-xs font-bold text-[#25252B] dark:text-white truncate">{rel.title}</p>
                    <p className="text-[10px] text-neutral-500">{rel.type.toUpperCase()}</p>
                  </div>
                  <span className="text-xs font-semibold text-[#E6A02D] flex items-center gap-1 flex-shrink-0">
                    <span>Open</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs text-neutral-400">
              No direct question paper / model answer link registered for this demonstration entry.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
