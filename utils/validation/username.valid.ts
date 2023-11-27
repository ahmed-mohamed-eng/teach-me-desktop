import { toast } from "react-toastify";
import validator from "validator";

export function isValidUsername(value: string) {
  if (validator.contains(value, "-")) {
    toast.error("Username Shouldn't have '-' in it");

    return false;
  } else if(validator.contains(value, " ")) {
    toast.error("Username Shouldn't have space in it");
    return false;
  }
   else {
    return true;
  }
}
