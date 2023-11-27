import { AdminType } from "../enums/admin-type.enum";

export interface CreateAdminDto {
  name: string;
  email: string;
  adminType: AdminType;
  password: string;
  lastName?: string;
  username?: string;
  firstName?: string;
  nationalID?: number;

  tokens?: string[];
  avatarPath?: string;

  creatorAdminID?: string;
}
