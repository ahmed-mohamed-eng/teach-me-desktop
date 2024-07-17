import { AdminType } from "../enums/admin-type.enum";

export interface CreateAdminDto {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  adminType: AdminType;
  password: string;
  lastName?: string;
  username?: string;
  firstName?: string;
  nationalId?: number;

  tokens?: string[];
  avatarPath?: string;

  permissionsId?: string;

  creatorAdminId?: string;

  centersId: string[];
}
