import { axiosInstance } from "./axiosIntstance";


const accessToken = sessionStorage.getItem("unsplash_access_token");

export const API = async () => {
  try {
    const response = await axiosInstance.get("/photos", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [error];
  }
};

export const Random = async () => {
  try {
    const response = await axiosInstance.get("/photos/random", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return [error];
  }
};


export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.get("/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
