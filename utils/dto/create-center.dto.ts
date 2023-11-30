export interface ImageInfo {
  name: string;
  path: string;
  size: string;
  extensions: string;
}

export interface CreateCenterDto {
  name: string;
  location: [string, string];
  creatorID: string;
  adminsIDs: string[];
  hallsIDs?: string[];
  studentsIDs?: string[];
  teachersIDs?: string[];
  sessionsIDs?: string[];
  centerImages: ImageInfo[];
}
