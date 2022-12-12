import axiosInstance from "../../AxiosConfig/axiosConfig";
import { getRefreshToken } from "../../Services/getRefreshToken";

const {refresh} = getRefreshToken();

 const logOut = async () => {
    
  const payload = {
    refreshToken: refresh
  }

    try { 
      const response = await axiosInstance.post('/auth/logout', payload)  
      console.log(response)
      return response;
    } catch (error) {
      
    }

    
  }

  const userServices = {
    logOut
  };
  
  export default userServices;