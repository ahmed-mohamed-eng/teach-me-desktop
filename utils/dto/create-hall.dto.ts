export interface CreateHallDto {
  _id?: string;
  name: string;
  capacity: number;
  /*** The available time of the day */
  availableTime: [Date, Date];
  /*** The available days of the week */
  availableDate: [Date, Date];

  centerID: string;
  creatorAdminID: string;
}
