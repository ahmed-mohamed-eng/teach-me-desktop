/**The basic permissions each node have in our system */
type CRUDPermissions = "READ" | "CREATE" | "UPDATE" | "DELETE";

export default interface PermissionsDto {
  id?: string;
  adminId: string;
  centerId: string;
  createdAt: string;
  updatedAt: string;

  createdById?: string;

  hallPermissions: CRUDPermissions[];
  adminPermissions: CRUDPermissions[];
  centerPermissions: CRUDPermissions[];
  parentsPermissions: CRUDPermissions[];
  studentsPermissions: CRUDPermissions[];
  teachersPermissions: CRUDPermissions[];
  attachmentsPermissions: CRUDPermissions[];

  /**This lets the admin modify the permissions of other admins */
  permissions: CRUDPermissions[];
}
