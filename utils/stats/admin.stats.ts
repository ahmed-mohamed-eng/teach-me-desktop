import axios from "axios";
import { MonthsNamesEnum } from "../enums/months-names.enum";
import { EndPoints } from "../api-points";

export interface AdminStatics {
  month: MonthsNamesEnum;
  adminsNumber: number;
}

export async function getAdminStats() {
  const adminToken = localStorage?.getItem("adminToken");

  if (!adminToken) return;

  try {
    const res = await axios.get<AdminStatics[]>(
      EndPoints.admin.getStat(adminToken)
    );

    return res.data;
  } catch (error) {
    console.error(error);
  }
}
