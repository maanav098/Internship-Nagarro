
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com/', 
  timeout: 10000,
})



export default axiosInstance;
