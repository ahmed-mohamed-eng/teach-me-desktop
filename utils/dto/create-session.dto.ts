

export interface CreateSessionDto {
  _id?: string;
  date: string;
  time: [string, string];
  title?: string;

  name?: string;

  hallId: string;
  centerId: string;
  teacherId: string;
  studentsIds?: string[];
  attachmentsIds?: string[];
}
