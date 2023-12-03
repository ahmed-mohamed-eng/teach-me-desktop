import axios from "axios";

import { EndPoints } from "@/utils/api-points";
import { CenterDisplayData } from "@/utils/docs/center-display-data";

export async function getCentersByPage(page: number = 0) {
  try {
    const { data } = await axios.get<CenterDisplayData[]>(
      EndPoints.center.getPage(page)
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}
