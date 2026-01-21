
export type CategoryId = 
  | 'discrete-math' 
  | 'calculus' 
  | 'coding' 
  | 'heal' 
  | 'giggles' 
  | 'others';

export interface Category {
  id: CategoryId;
  name: string;
}

export interface VideoConfig {
  youtubeUrl: string;
  category: CategoryId;
}

export interface VideoMetadata {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  embedUrl: string;
}

export type FileType = 'PDF' | 'Word' | 'Excel' | 'PowerPoint' | 'Zip' | 'Other';

export interface Document {
  id: string;
  title: string;
  filePath: string;
  fileType: FileType;
}

export type View = 'home' | 'videos' | 'documents';
export type Theme = 'light' | 'dark';
