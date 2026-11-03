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
      className="group bg-white dark:bg-neutral-800 rounded-2xl p-5 border border-neutral-100 dark:border-neutral-700/60 shadow-sm hover:shadow-md hover:border-[#E6A02D]/40 transition-all duration-200 cursor-pointer flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${badge.bg}`}>
            <BadgeIcon className="w-3.5 h-3.5" />
            {badge.label}
          </span>
          <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
            Sem {resource.semesterId}
          </span>
        </div>

        <h3 className="font-semibold text-base text-[#25252B] dark:text-white line-clamp-2 group-hover:text-[#E6A02D] transition-colors mb-2">
          {resource.title}
        </h3>

        <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-2 mb-4 leading-relaxed">
          {resource.description}
        </p>
      </div>

      <div className="pt-3 border-t border-neutral-100 dark:border-neutral-700/50 text-[11px] text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
        <div className="flex items-center gap-1 truncate max-w-[65%]">
          <Layers className="w-3.5 h-3.5 flex-shrink-0 text-[#E6A02D]" />
          <span className="truncate">{subject?.name || resource.subjectId}</span>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Calendar className="w-3.5 h-3.5" />
          <span>{resource.examYear ? `Exam ${resource.examYear}` : resource.dateAdded}</span>
        </div>
      </div>
    </div>
  );
};
