/* import axios from 'axios';

const loadAllLevel = async (localToken, setEmployeeData) => {
  const response = await axios.get("https://tiider-hr-tiidelab.herokuapp.com/v1/levels",
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
    console.log(error)
  }

  return response;
}

const addLevel = async (localToken, values) => {
  console.log(values);
  const response = await axios.post("https://tiider-hr-tiidelab.herokuapp.com/v1/levels",
    {
      headers: {
        Authorization: `Bearer ${localToken[0].access}`,
      },
    }
  )


}

const LevelMgtFunc = {
  loadAllLevel,
  addLevel
}


export default LevelMgtFunc;

*/