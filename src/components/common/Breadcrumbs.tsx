import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<Props> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mb-6 flex-wrap">
      <Link to="/" className="hover:text-[#E6A02D] transition-colors flex items-center gap-1">
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600 flex-shrink-0" />
            {isLast || !item.path ? (
              <span className="font-medium text-[#25252B] dark:text-neutral-200 truncate max-w-[200px] md:max-w-xs">
                {item.label}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-[#E6A02D] transition-colors truncate max-w-[150px] md:max-w-none">
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
