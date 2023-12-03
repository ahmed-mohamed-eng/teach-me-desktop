import axios from "axios";
import { toast } from "react-toastify";

import { EndPoints } from "@/utils/api-points";
import { CreateCenterDto } from "@/utils/dto/create-center.dto";

export async function createNewCenter(data: CreateCenterDto) {
  try {
    await toast.promise(
      axios.post<CreateCenterDto>(EndPoints.center.base(), data),
      {
        error: "Can't Create New Center",
        pending: "Please Wait",
        success: "Center Created Successfully",
      }
    );
  } catch (error) {
    console.error(error);
    toast.error("Error: Can't Create Center");
  }
}
