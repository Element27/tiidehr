// EXTERNAL IMPORTS
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import axios from "axios";

// INTERNAL IMPORTS
import "./App.css";
import About from "./Pages/AboutPage/About";
import SignIn from "./Pages/SignInPage/SignIn";
import Homepage from "./Pages/Landing page/Homepage";
import Privacy from "./Pages/privacy policy/Privacy";
import Signup from "./Pages/Signup/Signup";
import EmployeeManagementDashboard from "./Pages/Dashboards/EmployeeManagement/EmployeeManagementDashboard";
import Employerdashboard from "./Pages/Employerdashboard/Employerdashboard";
import Contact from "./Pages/ContactPage/Contact";
import PopusPlayground from "./Pages/Dashboards/EmployeeManagement/playground/PopusPlayground";
import EmployerLeaveManagement from "./Pages/EmployerLeaveManagement/EmployerLeaveManagement";
import Employeedashboard from "./Pages/Employeedashboard/Employeedashboard";

import RoleManagementDashboard from "./Pages/Dashboards/RoleManagement/RoleManagementDashboard";

import EmployeeLeaveManagement from "./Pages/EmployeeLeaveManagement/EmployeeLeavemanagement";
import ManagementLevel from "./Pages/LevelManagement/ManagementLevel";
import BusinessProfile from "./Pages/BusinessProfilePage/BusinessProfile";
import NewBusinessProfile from "./Pages/BusinessProfileComponent/BusinessProfile";


// import fetchLeavePolicies from './fetchLeaveData';
// import fetchEmployeeMgtData from './FetchEmployeeMgtData';
import ForgotPassword from "./Pages/ForgotPassWord/ForgotPassword";


function App() {

  const localToken = JSON.parse(localStorage.getItem("token"));

  const [leavePolicies, setLeavePolicies] = useState([]);

  const fetchLeavePolicies = async () => {
    const response = await axios.get("https://tiider-hr-tiidelab.herokuapp.com/v1/leavePolicy",
      {
        headers: {
          Authorization: `Bearer ${localToken[0].access}`,
        },
      }
    )

    try {
      let { data } = response;
      setLeavePolicies(data)
      console.log(data)
    } catch (error) {

    }
    // if(response.data.length > 0) {

    //   let {data} = response;
    //   setLeavePolicies(...data)
    //   console.log(data)
    //   console.log(response)

    // } else {
    //   setLeavePolicies(null)
    // }

    return response;
  }
  // We use useEffect to prevent the function from making continous API calls which could break the server
  useEffect(() => {

    fetchLeavePolicies(localToken, setLeavePolicies);

  }, [])

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/emd" element={<EmployeeManagementDashboard localToken={localToken} />} />
        <Route path="/rolemgtdashb" element={<RoleManagementDashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/employer" element={<Employerdashboard />} />
        <Route path="/employee" element={<Employeedashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employerleave" element={<EmployerLeaveManagement fetchLeavePolicies={fetchLeavePolicies} leavePolicies={leavePolicies} setLeavePolicies={setLeavePolicies} />} />
        <Route path="/employeeleave" element={<EmployeeLeaveManagement />} />
        <Route path="/levelmanagement" element={<ManagementLevel />} />
        <Route path="/ppg" element={<PopusPlayground />} />
        <Route path="/businessprofile" element={<BusinessProfile />} />
        <Route path="/businessprofile2" element={<NewBusinessProfile />} />
      </Routes>
    </div>
  );
}

export default App;
