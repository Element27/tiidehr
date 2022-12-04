import axiosInstance from "../../AxiosConfig/axiosConfig";



 export const fetchAppliedLeaves = async (accessToken) => {
    try { 
      const response = await axiosInstance.get("/leaveApplication", 
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
      
      )  
      let {data} = response;
      return data;
    } catch (error) {
      
    }

    
  }

  export const deleteLeave = async (accessToken, id) => {
    try { 
      const response = await axiosInstance.delete(`/leaveApplication/${id}`, 
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
      
      )  
      let {data} = response;
      console.log(response)
      return data;
    } catch (error) {
      
    }

    
  }

 