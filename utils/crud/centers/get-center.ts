import { CreateAdminDto } from "@/utils/dto/admin.dto";
import { CreateAttachmentDto } from "@/utils/dto/attachment.dto";
import { CreateCenterDto } from "@/utils/dto/create-center.dto";
import { CreateHallDto } from "@/utils/dto/create-hall.dto";
import { CreateSessionDto } from "@/utils/dto/create-session.dto";
import { CreateTeacherDto } from "@/utils/dto/create-teacher.dto";
import { CreateParentDto } from "@/utils/dto/parent.dto";
import { StudentDto } from "@/utils/dto/students.dto";
import { AdminType } from "@/utils/enums/admin-type.enum";

import { faker } from "@faker-js/faker";

interface CenterDto extends Omit<CreateCenterDto, "creatorId" | "centerImages"> {
  hallsIDs: CreateHallDto[];
  adminsIDs: CreateAdminDto[];
  parentsIDs: CreateParentDto[];
  studentsIDs: StudentDto[];
  teachersIDs: CreateTeacherDto[];
  sessionsIDs: CreateSessionDto[];
  attachmentsIDs: CreateAttachmentDto[];
  creatorId: CreateAdminDto;
  centerImages: string[]
}

export default async function getCenter(id: string): Promise<CenterDto> {
  return {
    hallsIDs: [],
    adminsIDs: [],
    parentsIDs: [],
    sessionsIDs: [],
    studentsIDs: [],
    teachersIDs: [],
    attachmentsIDs: [],
    centerImages: [],
    creatorId: {
      adminType: AdminType.CenterOwner,
      centersId: [],
      email: faker.internet.email(),
      name: faker.person.lastName(),
      password: faker.internet.password(),
    },
    dayFrom: "Monday",
    dayTo: "Friday",
    location: [faker.location.latitude(), faker.location.longitude()],
    name: faker.person.fullName(),
    timeFrom: "7AM",
    timeTo: "7PM",
    _id: id,
  };
}
