import axiosInstance from "../../../_Axios/axios-config"

const getAllLevels = async () => {
  try {
    const res = await axiosInstance.get("/levels")
    // console.log("serv", res.data)
    return res.data;
  } catch (error) {
    console.log(error)
  }
}

const addNewLevel = async (newLevel) => {
  try {
    const res = await axiosInstance.post("/levels", newLevel)
    // const url = 'https://tiider-hr-tiidelab.herokuapp.com/v1/levels'
    // const res = await axiosInstance.post(url, newLevel)
    console.log(res)
    console.log("serv ", newLevel)
    // return res.data
  } catch (error) {
    console.log(error)
  }
}

const deleteLevel = async (levelId) => {
  try {
    const res = await axiosInstance.delete(`levels/${levelId}`)
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

const levelServices = {
  getAllLevels,
  addNewLevel,
  deleteLevel,
}

export default levelServices;