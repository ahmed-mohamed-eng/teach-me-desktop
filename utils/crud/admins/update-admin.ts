import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

import { EndPoints } from "@/utils/api-points";
import { CreateAdminDto } from "@/utils/dto/admin.dto";
import { setLocalObject } from "@/utils/local-storage/setLocalObj";
import {
  AdminInfo,
  UpdatedAdminInfo,
} from "@/components/pages/profile/ProfileFormComp";

export type AdminData = Omit<
  CreateAdminDto,
  "creatorAdminID" | "tokens" | "avatarPath" | "adminType"
> & { image: string | File };

export async function updateAdmin(data: Partial<AdminData>) {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    toast.error("No Token Found");
    return;
  }

  try {
    const res = await toast.promise(
      axios.patch<
        CreateAdminDto,
        AxiosResponse<CreateAdminDto>,
        Partial<AdminData>
      >(EndPoints.admin.update(token), {
        email: data.email,
        name: data.name,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        nationalID: data.nationalID,
        username: data.username,
        image: data.image,
      }),
      {
        error: "Can't Update Admin",
        pending: "Updating Now",
        success: "Admin Updated Successfully",
      }
    );

    setLocalObject("adminInfo", res.data);

    return res.data;
  } catch (error: any) {
    console.error(error.response);
  }
}

export async function filterUpdateAdmin(data: Partial<UpdatedAdminInfo>) {
  return Object.keys(data)
    .filter((k) => {
      const value = data[k as keyof AdminInfo];
      if (typeof value === "object") {
        return Object.keys(value).length > 0;
      }
      return !!value;
    })
    .reduce((obj, key) => {
      obj[key as keyof typeof data] = data[key as keyof AdminInfo];
      return obj;
    }, {} as Partial<UpdatedAdminInfo>);
}
