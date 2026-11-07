export type VideoAvailabilityStatus = 'available' | 'coming_soon';

export interface CuratedVideo {
  id: string;
  youtubeVideoId: string;
  youtubeUrl: string;
  title: string;
  channelName: string;
  language: 'Hindi' | 'English';
  description?: string;
  thumbnail?: string;
  duration?: string;
  videoType: 'primary' | 'alternative';
  displayOrder: number;
}

export interface LearningTopic {
  id: string;
  subjectId: string;
  unitNumber: number;
  topicNumber: number;
  title: string;
  description?: string;
  videos: CuratedVideo[];
  status: VideoAvailabilityStatus;
}

export interface UnitSummary {
  unitNumber: number;
  title: string;
  topicsCount: number;
  availableTopicsCount: number;
  videosCount: number;
  status: VideoAvailabilityStatus;
}

export interface SubjectSummary {
  id: string;
  code: string;
  name: string;
  semester: number;
  description: string;
  isElective: boolean;
  unitsCount: number;
  totalTopicsCount: number;
  availableTopicsCount: number;
  curatedVideosCount: number;
  status: VideoAvailabilityStatus;
}
