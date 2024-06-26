
import { axiosInstance} from "./axiosIntstance";
import strings from "../localization/en";




export const API = async () => {
  try {
    const response = await axiosInstance.get("/photos");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(strings.console_error_photo, error);
    return [error];
  }
};

export const Random = async () => {
  try {
    const response = await axiosInstance.get("/photos/random");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(strings.console_error_random, error);
    return [error];
  }
};

export const getUserProfile = async () => {

  try {
    const response = await axiosInstance.get("/me");
    return response.data;
  } catch (error) {
    console.error(strings.console_error_profile, error);
    return error;
  }
};
