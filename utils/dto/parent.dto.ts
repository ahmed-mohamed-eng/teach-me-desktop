export interface CreateParentDto {
  _id?: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  username?: string;
  nationalId?: string;

  /**Parent Children */
  studentsIds: string[];

  /**The Associated Centers to the Parent. */
  centersIds: string[];

  tokens?: string[];
  avatarPath?: string;

  createdAt?: string;
}
