import React from "react";
import logo from "../../Assets/icons/logo.png";
import styles from "./Style.module.css";

import { Formik,useFormik } from "formik";

function Content() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      cac: "",
      rc: "",
      tin: "",
      currency: "",
    },
  });
  return (
    <section className={styles.generalContainer}>
      <section id={styles.containerForms}>
        <div className={styles.profileLogo}>
          <img className={styles.contiainerLogo} src={logo} alt="pics" />
          <div className={styles.editProfile}>Edit Logo</div>
        </div>
        <h1>Business Details</h1>
        <form>
          <div className={styles.field}>
            <div className={styles.labelColor}>Business Name</div>
            <input
              type="text"
              className={styles.inputField}
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div>
            <div className={styles.labelColor}>Business Email</div>
            <input
              type="text"
              className={styles.inputField}
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div>
            <div className={styles.labelColor}>Business Address</div>
            <input
              type="text"
              className={styles.inputField}
              id="address"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </div>
          <div>
            <div className={styles.labelColor}>CAC Registration Detail</div>
            <input
              type="text"
              className={styles.inputField}
              id="cac"
              name="cac"
              onChange={formik.handleChange}
              value={formik.values.cac}
            />
          </div>
          <div>
            <div className={styles.labelColor}>RC Number</div>
            <input
              type="text"
              className={styles.inputField}
              id="rc"
              name="rc"
              onChange={formik.handleChange}
              value={formik.values.rc}
            />
          </div>
          <div>
            <div className={styles.labelColor}>Tax Identification Number</div>
            <input
              type="text"
              className={styles.inputField}
              id="tin"
              name="tin"
              onChange={formik.handleChange}
              value={formik.values.tin}
            />
          </div>
          <div>
            <div className={styles.labelColor}>Select Currency</div>
            {/* <input type="text" className="input-field" id="tin" /> --&gt; */}

            <select
              className={styles.inputField}
              name="currency"
              id="currency"
              onChange={formik.handleChange}
              value={formik.values.currency}
            >
              <option value="naira">Naira</option>
              <option value="dollar">Dollar</option>
            </select>
          </div>
          <div className={styles.register}>
            <button id={styles.save} type="submit">
              <h3>Save</h3>
            </button>
          </div>
        </form>
      </section>
      <section className={styles.sideContainer}>
        <section className={styles.passwordAccess}>
          {/* <h1>Change Password</h1> */}
          <p>
            You can change your password here or permanently close your account.
          </p>
          {/* <p className="edit-profile">Change Password</p> --&gt; */}
          <div className={styles.dpPreview}>
            {/* <img src="AD.png" alt /> --&gt; */}
            {/* <i className="fa-solid fa-user big" /> --&gt; */}
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
    </section>
  );
}

export default Content;
