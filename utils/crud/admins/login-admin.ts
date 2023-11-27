import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

import { EndPoints } from "@/utils/api-points";

import { AdminLoginInfo } from "@/components/pages/login/LoginComp";

export type AdminData = AdminLoginInfo;
export type AdminAuthData = { adminAccessToken: string };

export async function loginToAdmin(data: AdminData) {
  try {
    const res = await toast.promise(
      axios.post<AdminLoginInfo, AxiosResponse<AdminAuthData>, AdminLoginInfo>(
        EndPoints.admin.login(),
        {
          usernameOrEmail: data.usernameOrEmail,
          password: data.password,
        }
      ),
      {
        error: "Can't Login",
        pending: "Logging in Now",
        success: "Welcome",
      }
    );

    return res.data;
  } catch (error: any) {
    console.error(error.response);
  }
}
