import axios from "axios"

// const [leavePolicies, setLeavePolicies] = useState([]);

  const getRoles = async (localToken, setRoles, setIsLoading) => {
    const response = await axios.get("https://tiider-hr-tiidelab.herokuapp.com/v1/roles", 
    {
      headers: {
        Authorization: `Bearer ${localToken[0].access}`,
      },
    }
    
    )  

    setIsLoading(false)
    
    try {
      let {data} = response;
      setRoles(data)
    } catch (error) {
      
    }
   

    return response;
  }

  export default getRoles;