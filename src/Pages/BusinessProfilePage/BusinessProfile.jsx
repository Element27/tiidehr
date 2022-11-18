import React from "react";

import styles from "../../Pages/BusinessProfilePage/Style.module.css";
import TopBar from "../../Components/Dashboard/TopBar/TopBar";
import SideNav from "../../Components/Dashboard/SideNav/SideNav";
import Content from "./Content";

// import { useFormik } from "formik";


function BusinessProfile() {
  return (
    <div className="App">
      <TopBar />
      <div className={styles.sideFormContainer}>
        <SideNav />
        <Content />
      </div>
    </div>
  );
}

export default BusinessProfile;
