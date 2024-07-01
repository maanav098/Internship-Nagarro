import { axiosInstance } from "./axiosIntstance";
import strings from "../localization/en";
import { SearchPhotosResponse } from "../store/searchInterface";
import { Collection } from "../store/collection-Interface";

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

export const fetchPhotos = async (
  query: string,
  page: number = 1,
  per_page: number = 10,
  order_by: string = "relevant"
): Promise<SearchPhotosResponse | null> => {
  try {
    const response = await axiosInstance.get("/search/photos", {
      params: {
        query,
        page,
        per_page,
        order_by,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
    return null;
  }
};

export const Collections = async (
  username: string,
  page: number = 1,
  per_page: number = 10
): Promise<Collection[]> => {
  try {
    const response = await axiosInstance.get(`/users/${username}/collections`, {
      params: {
        page,
        per_page,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching collections for user ${username}:`, error);
    return [];
  }
};
