import axios from "axios";
import { EndPoints } from "../api-points";

export async function getCenterCount() {
  try {
    const { data } = await axios.get<number>(EndPoints.center.count());
    return data;
  } catch (error) {
    console.error(error);
  }
}
