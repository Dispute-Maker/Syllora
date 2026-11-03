import { Resource, Subject } from '../types';

export interface FilterCriteria {
  query?: string;
  semesterId?: string | number;
  subjectId?: string;
  unitId?: string | number;
  type?: string;
  sortBy?: 'latest' | 'oldest';
}

export function filterAcademicResources(
  resources: Resource[],
  subjects: Subject[],
  criteria: FilterCriteria
): Resource[] {
  const { query, semesterId, subjectId, unitId, type, sortBy = 'latest' } = criteria;

  return resources
    .filter(res => {
      // Semester filter
      if (semesterId && semesterId !== 'all') {
        if (res.semesterId !== Number(semesterId)) return false;
      }

      // Subject filter
      if (subjectId && subjectId !== 'all') {
        if (res.subjectId !== subjectId) return false;
      }

      // Unit filter
      if (unitId && unitId !== 'all') {
        if (!res.unitId || res.unitId !== Number(unitId)) return false;
      }

      // Resource Type filter
      if (type && type !== 'all') {
        if (res.type !== type) return false;
      }

      // Query matching
      if (query && query.trim()) {
        const q = query.trim().toLowerCase();
        const sub = subjects.find(s => s.id === res.subjectId);
        const matchesTitle = res.title.toLowerCase().includes(q);
        const matchesDesc = res.description.toLowerCase().includes(q);
        const matchesSubject =
          (sub && (sub.name.toLowerCase().includes(q) || sub.code.toLowerCase().includes(q))) ?? false;
        const matchesKeyword = res.keywords.some(k => k.toLowerCase().includes(q));

        if (!matchesTitle && !matchesDesc && !matchesSubject && !matchesKeyword) {
          return false;
        }
      }

      return true;
    })
    .sort((a, b) => {
      const dateA = new Date(a.dateAdded).getTime();
      const dateB = new Date(b.dateAdded).getTime();
      return sortBy === 'latest' ? dateB - dateA : dateA - dateB;
    });
}

export function calculateSemesterTotalCredits(semesters: { totalCredits: number }[]): number {
  return semesters.reduce((sum, s) => sum + s.totalCredits, 0);
}
