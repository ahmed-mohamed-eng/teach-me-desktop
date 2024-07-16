

export interface CreateSessionDto {
  _id?: string;
  date: string;
  time: [string, string];
  title?: string;

  hallId: string;
  centerId: string;
  teacherId: string;
  studentsIds?: string[];
  attachmentsIds?: string[];
}
