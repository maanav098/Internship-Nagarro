
import axiosInstance from './axiosIntstance';


export const API = async () => {
  try {
    const response = await axiosInstance.get("/photos",{
      params : {
        client_id:"Rhj6lYrk1mgmy41e3fPcqT_NV2neardQRLfkewHk7X8"
      }
    })    
    console.log(response.data);
    return response.data;  
  } catch (error) {
    console.log(error)
    return [error];  
  }
};

export const Random = async () => {
  try {
    const abc = await axiosInstance.get("/photos/random", {
      params: {
        client_id: "Rhj6lYrk1mgmy41e3fPcqT_NV2neardQRLfkewHk7X8",
      },
    });
    console.log(abc.data);
    return abc.data;
  } catch (error) {
    console.log(error);
    return [error];
  }
};
