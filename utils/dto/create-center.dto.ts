import { CreateAdminDto } from "./admin.dto";
import { CreateAttachmentDto } from "./attachment.dto";
import { CreateHallDto } from "./create-hall.dto";
import { CreateSessionDto } from "./create-session.dto";
import { CreateTeacherDto } from "./create-teacher.dto";
import { CreateParentDto } from "./parent.dto";
import { StudentDto } from "./students.dto";

export interface CreateCenterDto {
  _id?: string;
  name: string;
  location: [number, number];
  creatorId: string;
  centerImages: FileList;

  hallsIDs: string[] | CreateHallDto[];
  adminsIDs: string[] | CreateAdminDto[];
  parentsIDs: string[] | CreateParentDto[];
  studentsIDs: string[] | StudentDto[];
  teachersIDs: string[] | CreateTeacherDto[];
  sessionsIDs: string[] | CreateSessionDto[];
  attachmentsIDs: string[] | CreateAttachmentDto[];

  // Available Time.
  dayFrom: string;
  dayTo: string;
  timeFrom: string;
  timeTo: string;
}
