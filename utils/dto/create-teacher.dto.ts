import { Payment } from "./students.dto";

export interface CreateTeacherDto {
  _id?: string;

  name: string;
  email: string;
  password: string;
  lastName?: string;
  username?: string;
  firstName?: string;
  nationalID?: string;

  tokens?: string[];
  avatarPath?: string;
  payments?: Payment[];

  creatorID?: string;
  studentsIDs?: string[];
  attachmentsIDs?: string[];
  tutoringCentersIDs?: string[];
}
