

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.unsplash.com/", 
  headers: {
    "Content-Type": "application/json", 
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem("unsplash_access_token");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
