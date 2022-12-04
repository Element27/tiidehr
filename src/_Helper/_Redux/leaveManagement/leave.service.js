// import axiosInstance from "../AxiosConfig/axios-todo-config";

import axiosInstance from "../AxiosConfig/axiosConfig";

const localToken = JSON.parse(localStorage.getItem("token"));

// const fetchLeavePolicies = async (localToken, setLeavePolicies, setIsLoading) => {
    const fetchLeavePolicies = async ( setLeavePolicies, setIsLoading) => {
    try { 
      const response = await axiosInstance.get("/leavePolicy", 
      {
        headers: {
          Authorization: `Bearer ${localToken[0].access}`,
        },
      }
      
      )  
  
      setIsLoading(false)
      let {data} = response;
      setLeavePolicies(data)

      return response;
    } catch (error) {
      
    }
    // }
    
    
    // try {
      
   

    
  }

  const LeaveManagementServices = {
    fetchLeavePolicies,
  };
  
  export default LeaveManagementServices;

//   export default fetchLeavePolicies;