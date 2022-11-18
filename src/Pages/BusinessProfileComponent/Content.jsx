import React from "react";
import styles from "./styles.module.css";

import SideContainer from "./SideContainer";
// import BusinessFormik from "./BusinessFormik";
import BusinessRegistrationForm from "./BusinessFormik";

function Content() {
 
  return (
    <section className={styles.generalContainer}>
      <BusinessRegistrationForm />
      <SideContainer />
    </section>
  );
}

export default Content;
