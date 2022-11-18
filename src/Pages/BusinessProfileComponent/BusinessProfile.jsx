import React from "react";

import styles from "./styles.module.css";
import TopBar from "../../Components/Dashboard/TopBar/TopBar";
import SideNav from "../../Components/Dashboard/SideNav/SideNav";
import Content from "./Content";



function NewBusinessProfile() {
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

export default NewBusinessProfile;
