"use client";

import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

import { EndPoints } from "@/utils/api-points";
import { CreateAdminDto } from "@/utils/dto/admin.dto";
import { AdminType } from "@/utils/enums/admin-type.enum";

export type AdminData = Omit<
  CreateAdminDto,
  "adminType" | "avatarPath" | "creatorAdminID"
>;

export async function createNewAdmin(
  data: AdminData,
  isFirstTime: boolean = true
) {
  try {
    const res = await toast.promise(
      axios.post<CreateAdminDto, AxiosResponse<CreateAdminDto>, CreateAdminDto>(
        EndPoints.admin.base(),
        {
          adminType: isFirstTime ? AdminType.CenterOwner : AdminType.Admin,
          email: data.email,
          name: data.name,
          password: data.password,
          firstName: data.firstName,
          lastName: data.lastName,
          nationalID: data.nationalID,
          username: data.username,
        }
      ),
      {
        error: "Can't Create Admin",
        pending: "Registering Now",
        success: "Admin Created Successfully",
      }
    );

    return res.data;
  } catch (error: any) {
    console.error(error.response);
  }
}
