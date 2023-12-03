export interface CreateCenterDto {
  name: string;
  location: [number, number];
  creatorID: string;
  centerImages: FileList;
}
