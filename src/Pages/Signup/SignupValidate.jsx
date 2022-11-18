import React from "react";
import FormLeft from "./FormLeft";
import styles from "./signup.module.css";
import SignupFormik from "./SignupFormik";

function SignupValidate() {
  return (
    <div className={styles.container}>
      <div className={styles.signupFormContainer}>
        <FormLeft />

        <SignupFormik />
      </div>
    </div>
  );
}

export default SignupValidate;

