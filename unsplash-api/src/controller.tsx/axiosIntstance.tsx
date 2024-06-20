
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com/', 
  timeout: 10000,
})








