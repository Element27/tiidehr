import axios from 'axios';



const fetchEmployeeData = async (localToken, setEmployeeData) => {
  const response = await axios.get("https://tiider-hr-tiidelab.herokuapp.com/v1/staffs",
    {
      headers: {
        Authorization: `Bearer ${localToken[0].access}`,
      },
    }
  )

  try {
    let { data } = response;
    setEmployeeData(data)
    console.log(data)
  } catch (error) {

  }

  return response;
}



export default fetchEmployeeData;