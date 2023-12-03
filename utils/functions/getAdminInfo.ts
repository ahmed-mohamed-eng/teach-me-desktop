import { CreateAdminDto } from "../dto/admin.dto";

export function getAdminInfo() {
  const adminInfo = localStorage.getItem("adminInfo");

  if (!adminInfo) return null;

  return JSON.parse(adminInfo) as CreateAdminDto;
}
