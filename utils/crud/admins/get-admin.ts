import { CreateAdminDto } from "@/utils/dto/admin.dto";
import { AdminType } from "@/utils/enums/admin-type.enum";
import { faker } from "@faker-js/faker";

export default async function getAdminInfo(id: string): Promise<CreateAdminDto> {
  return {
    adminType: AdminType.Admin,
    centersId: [faker.string.uuid()],
    email: faker.internet.email(),
    name: faker.person.fullName(),
    password: faker.internet.password(),
    _id: faker.string.uuid(),
    avatarPath: faker.image.avatar(),
    creatorAdminId: faker.string.uuid(),
    firstName: faker.person.firstName(),
    id: faker.string.uuid(),
    lastName: faker.person.lastName(),
  };
}
