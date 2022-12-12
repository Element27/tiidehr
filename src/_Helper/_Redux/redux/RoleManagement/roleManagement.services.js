// import axiosInstance from "../../../_Axios/axios-config";

import axiosInstance from "../../AxiosConfig/axiosConfig";

// const localToken = JSON.parse(localStorage.getItem("token"));

const fetchAllRoles = async () => {
  try {
    const response = await axiosInstance.get("/roles")
    // console.log("from services", response.data)
    // let {data} = response;
    return response.data;
  } catch (error) {
    console.log(error)
  }
}

const addNewRole = async (newRole) => {
  // console.log("serv ", newRole)
  try {
    const res = await axiosInstance.post("roles", newRole)
    // const url = 'https://tiider-hr-tiidelab.herokuapp.com/v1/levels'
    // const res = await axiosInstance.post(url, newLevel)
    console.log(res)
    return res
  } catch (error) {
    console.log(error)
  }
}

const editRole = async (roleObj, roleId) => {

  // console.log("services", levelObj)
  try {
    const res = await axiosInstance.patch(`roles/2${roleId}`, roleObj)
    console.log(res)
    return res;
  } catch (error) {
    console.log(error)
  }
}

const deleteRole = async (roleId) => {
  try {
    const response = await axiosInstance.delete(`/roles/${roleId}`)
    // let {data} = response;
    console.log(response)
    return response;
  } catch (error) {
    console.log(error)
  }


}

const roleMgtServices = {
  fetchAllRoles,
  addNewRole,
  editRole,
  deleteRole,
}

export default roleMgtServices;