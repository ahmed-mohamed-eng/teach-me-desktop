import { CreateAttachmentDto } from "@/utils/dto/attachment.dto";
import { faker } from "@faker-js/faker";

export default async function getAttachment(
  id: string
): Promise<CreateAttachmentDto> {
  return {
    centerId: faker.string.uuid(),
    filePath: faker.image.url(),
    hallId: faker.string.uuid(),
    name: faker.person.fullName(),
    sessionId: faker.string.uuid(),
    size: faker.number.int({ min: 0, max: 10 }).toString(),
    teacherId: faker.string.uuid(),
    createdAt: faker.date.anytime().toISOString(),
    adminId: faker.string.uuid(),
    _id: faker.string.uuid(),
  };
}
