export interface CreateCenterDto {
  _id?: string;
  name: string;
  location: [number, number];
  creatorID: string;
  centerImages: FileList;

  hallsIDs: string[];
  adminsIDs: string[];
  parentsIDs: string[];
  studentsIDs: string[];
  teachersIDs: string[];
  sessionsIDs: string[];
  attachmentsIDs: string[];
}
