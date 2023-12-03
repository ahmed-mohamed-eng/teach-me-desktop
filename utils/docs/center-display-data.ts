import { StudentDto } from "../dto/students.dto";
import { CreateAdminDto } from "../dto/admin.dto";
import { CreateHallDto } from "../dto/create-hall.dto";
import { CreateTeacherDto } from "../dto/create-teacher.dto";
import { CreateSessionDto } from "../dto/create-session.dto";
import { FullMetadata } from "../dto/image-info.dto";

export interface CenterDisplayData {
  _id: string;
  name: string;
  location: [number, number];
  creatorID: CreateAdminDto;
  adminsIDs?: CreateAdminDto[];
  hallsIDs?: CreateHallDto[];
  studentsIDs?: StudentDto[];
  teachersIDs?: CreateTeacherDto[];
  sessionsIDs?: CreateSessionDto[];
  centerImages?: FullMetadata[];
  createdAt: string;
  updatedAt: string;
}
