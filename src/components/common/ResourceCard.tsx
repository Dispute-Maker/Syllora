import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Award, CheckCircle2, PlayCircle, Calendar, Layers } from 'lucide-react';
import { Resource } from '../../types';
import { SUBJECTS } from '../../data/mockData';

export const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  const navigate = useNavigate();
  const subject = SUBJECTS.find(s => s.id === resource.subjectId);

  const getBadgeConfig = () => {
    switch (resource.type) {
      case 'notes':
        return { label: 'PDF Notes', bg: 'bg-[#EDE6FA] text-purple-800 dark:bg-purple-950/60 dark:text-purple-300', icon: FileText };
      case 'pyq':
        return { label: 'Question Paper', bg: 'bg-[#FCE7E7] text-rose-800 dark:bg-rose-950/60 dark:text-rose-300', icon: Award };
      case 'solution':
        return { label: 'Solution', bg: 'bg-[#DDF2E2] text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300', icon: CheckCircle2 };
      case 'video':
        return { label: 'YouTube Video', bg: 'bg-[#E4EFFB] text-sky-800 dark:bg-sky-950/60 dark:text-sky-300', icon: PlayCircle };
    }
  };

  const badge = getBadgeConfig();
  const BadgeIcon = badge.icon;

  return (
    <div
      onClick={() => navigate(`/resource/${resource.id}`)}
      className="group bg-white dark:bg-neutral-800 rounded-2xl p-3 sm:p-5 border border-neutral-100 dark:border-neutral-700/60 shadow-sm hover:shadow-md hover:border-[#E6A02D]/40 transition-all duration-200 cursor-pointer flex flex-col justify-between h-full"
    >
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-3">
          <span className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold whitespace-nowrap flex-shrink-0 ${badge.bg}`}>
            <BadgeIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
            <span>{badge.label}</span>
          </span>
          <span className="text-[10px] sm:text-xs font-mono font-medium text-neutral-400 dark:text-neutral-500 whitespace-nowrap flex-shrink-0 bg-neutral-100 dark:bg-neutral-700/60 px-2 py-0.5 rounded">
            Sem {resource.semesterId}
          </span>
        </div>

        <h3 className="font-semibold text-xs sm:text-base text-[#25252B] dark:text-white line-clamp-2 group-hover:text-[#E6A02D] transition-colors mb-1 sm:mb-2 leading-snug">
          {resource.title}
        </h3>

        <p className="text-[11px] sm:text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 sm:line-clamp-2 mb-2 sm:mb-4 leading-normal sm:leading-relaxed flex-1">
          {resource.description}
        </p>
      </div>

      <div className="pt-2 sm:pt-3 border-t border-neutral-100 dark:border-neutral-700/50 text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-1 truncate max-w-[65%] min-w-0">
          <Layers className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 text-[#E6A02D]" />
          <span className="truncate">{subject?.name || resource.subjectId}</span>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0 whitespace-nowrap">
          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
          <span>{resource.examYear ? `Exam ${resource.examYear}` : resource.dateAdded}</span>
        </div>
      </div>
    </div>
  );
};
