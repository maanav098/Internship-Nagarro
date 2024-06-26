
import { axiosInstance} from "./axiosIntstance";




export const API = async () => {
  try {
    const response = await axiosInstance.get("/photos");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [error];
  }
};

export const Random = async () => {
  try {
    const response = await axiosInstance.get("/photos/random");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching random photo:", error);
    return [error];
  }
};

export const getUserProfile = async () => {

  try {
    const response = await axiosInstance.get("/me");
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return error;
  }
};
