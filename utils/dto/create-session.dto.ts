

export interface CreateSessionDto {
  _id?: string;
  date: Date;
  time: [Date, Date];
  title?: string;

  hallID: string;
  centerID: string;
  teacherID: string;
  studentsIDs?: string[];
  attachmentsIDs?: string[];
}
