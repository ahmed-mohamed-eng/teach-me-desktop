export interface CreateHallDto {
  _id?: string;
  name: string;
  capacity: number;
  /*** The available time of the day */
  availableTime: [string, string];
  /*** The available days of the week */
  availableDate: [string, string];

  centerId: string;
  creatorAdminID: string;
}
