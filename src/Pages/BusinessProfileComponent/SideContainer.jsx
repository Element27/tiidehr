import React from "react";
import styles from "./styles.module.css";

import { Formik } from "formik";

function SideContainer() {
  return (
  
      <>
      <section className={styles.sideContainer}>
        <section className={styles.passwordAccess}>
          {/* <h1>Change Password</h1> */}
          {/* <p>
            You can change your password here or permanently close your account.
          </p> */}
          
          <div className={styles.dpPreview}>
            <div className={styles.dpText}>
              <div className={styles.infoFlex}>
                <i className="fa-solid fa-user" />
                <span className={styles.emailPreview} id="name-preview">
                  Business name
                </span>
              </div>
              <div className={styles.infoFlex}>
                <i className="fa-solid fa-envelope" />
                <span className={styles.emailPreview} id="email-preview">
                  Business email
                </span>
              </div>
              <div className={styles.infoFlex}>
                <i className="fa-solid fa-address-card" />
                <span className={styles.phonePreview} id="address-preview">
                  Business address
                </span>
              </div>
              <div className={styles.infoFlex}>
                <i className="fa-solid fa fa-book fa-fw" />
                <span id="cac-preview">CAC number</span>
              </div>
              <div className={styles.infoFlex}>
                <i className="fa-solid fa fa-pencil fa-fw" />
                <span id="rc-preview">RC number</span>
              </div>
              <div className={styles.infoFlex}>
                <i className="fa-solid fa-home fa-fw" />
                <span id="tin-preview">TIN number</span>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.passwordAccess}>
          <h1>Add Employee</h1>
          <p>You can add an employee into your organization from here.</p>
          <a
            href="../EmployeeManagement/employeeMgt.html"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <p className={styles.editProfile}>Add Employee</p>
          </a>
        </section>
      </section>
    </>
  );
}

export default SideContainer;
