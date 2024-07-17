export interface CreateAttachmentDto {
  _id?: string;

  hallId: string;
  centerId: string;
  sessionId: string;
  teacherId: string;

  filePath: string;
  name: string;
  size: string;

  adminId?: string;

  createdAt?: string;
}
