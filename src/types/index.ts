export type ResourceType = 'notes' | 'pyq' | 'solution' | 'video';

export interface Resource {
  id: string;
  title: string;
  type: ResourceType;
  description: string;
  courseId: string;
  semesterId: number;
  subjectId: string;
  unitId?: number; // Optional: PYQs may span all units
  fileUrl?: string;
  videoUrl?: string;
  examYear?: string;
  examSession?: 'Nov-Dec' | 'May-June';
  relatedResourceIds?: string[];
  dateAdded: string;
  keywords: string[];
  fileSize?: string;
  pages?: number;
  authorOrSource?: string;
}

export interface Unit {
  unitNumber: number;
  title: string;
  topics: string[];
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  semester: number;
  isElective: boolean;
  electiveGroup?: string;
  units: Unit[];
  description: string;
  books?: string[];
  referenceBooks?: string[];
  practicals?: string[];
  syllabusPdfUrl?: string;
}

export interface Semester {
  number: number;
  title: string;
  description: string;
  totalCredits: number;
  syllabusPdfUrl?: string;
}

export interface Course {
  id: string;
  code: string;
  name: string;
  duration: string;
  status: 'active' | 'coming_soon';
  description: string;
  semesters: Semester[];
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  studentId: string;
  course: string;
  semester: number;
  collegeName: string;
  avatarUrl?: string;
}
