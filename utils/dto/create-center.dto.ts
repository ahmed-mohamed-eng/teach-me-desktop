export interface CreateCenterDto {
  _id?: string;
  name: string;
  location: [number, number];
  creatorID: string;
  centerImages: FileList;
}
