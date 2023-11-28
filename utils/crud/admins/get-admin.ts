import axios from "axios";

import { EndPoints } from "@/utils/api-points";
import { CreateAdminDto } from "@/utils/dto/admin.dto";
import { setLocalObject } from "@/utils/local-storage/setLocalObj";

export async function getAdminInfo() {
  const adminToken = localStorage?.getItem("adminToken");

  if (!adminToken) return;

  try {
    const res = await axios.get<CreateAdminDto>(
      EndPoints.admin.getOne(adminToken)
    );

    setLocalObject<CreateAdminDto>("adminInfo", res.data);

    return res.data;
  } catch (error: any) {
    console.error(error.response.data);

    return;
  }
}
