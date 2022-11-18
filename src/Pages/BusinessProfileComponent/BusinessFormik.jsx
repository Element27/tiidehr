import React, {useEffect, useState} from "react";
import logo from "../../Assets/icons/logo.png";
import styles from "./styles.module.css";
import { BusinessRegistrationSchema } from "../utils/validation/validation-schema";

// External imports
// import { Formik } from "formik";
import { Formik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

function BusinessRegistrationForm() {
    const [token, setToken] = useState(false);
    const localToken = JSON.parse(localStorage.getItem("token"));
    let tokenExists = localToken?.length > 0;
    useEffect(() => {
        console.log("Token exists")
        if (tokenExists) {
        setToken(true);
        }
    }, [tokenExists]);
    return (
  <>
    <Formik
      initialValues={{
        name: "",
        email: "",
        cacno: "",
        address: "",
        taxid: "",
        rcno: "",
        currency: "",
      }}
      validationSchema={BusinessRegistrationSchema}
      onSubmit={async  (values, { setSubmitting, }) => {
        const { name, email, cacno, address, taxid, rcno } = values;
        setSubmitting(true);
        try {
            console.log("Making request to backend")
            // console.log(localToken)
            // console.log(localToken[0])
            // console.log(localToken[0].access)

            let response = await axios.post("https://tiider-hr-tiidelab.herokuapp.com/v1/business", {
              name,
              email,
              cacno,
              address,
              taxid,
              rcno
            }, 
            { headers: {
                 Authorization : `Bearer ${localToken[0].access}`
                 }},
            );
            console.log("Request Completed")
            // console.log(response)
            // const localToken = JSON.parse(localStorage.getItem("token"));
            
            if(token){
            //   navigate('/emd')
            // console.log("Account created")
            toast.success("Business Profile Created Successfully", {
                position: "top-center",
              });
            console.log(localToken);
            return response;
            }
          } catch (error) {
            toast.error("Business Profile Creation failed", {
                position: "top-center",
              });
          }
        
      }}
      validate={(values) => {
        const { name, email, cacno, address, taxid, rcno, currency } = values;
        const errors = {};

        // if (!email) errors.email = "Email field cannot be empty";
        // if (!name) errors.name = "Business Name field cannot be empty";
        // if (!cacno) errors.cacno = "CAC Registration Details field cannot be empty";
        // if (!address) errors.address = "Business Address field cannot be empty";
        // if (!taxid) errors.taxid = "Tax Identification field cannot be empty";
        // if (!rcno) errors.name = "RC number field cannot be empty";
        // if (!currency) errors.currency = "Currency field field cannot be empty";
        return errors;
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleReset,
        isSubmitting,
      }) => (
        <React.Fragment>
          <section className={styles.containerForms}>
            {/* <div className={styles.profileLogo}>
              <img className={styles.contiainerLogo} src={logo} alt="business logo" />
              <div className={styles.editProfile}>Edit Logo</div>
            </div> */}
            <h1>Business Details</h1>


            <form>
              <div className={styles.formGroup}>
                <div className={styles.labelColor}>Business Name</div>
                <input
                  type="text"
                  className={styles.inputField}
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
              </div>
              {errors.name && touched.name && (
                <p className={styles.errorText}>{errors.name}</p>
              )}

              <div className={styles.formGroup}>
                <div className={styles.labelColor}>Business Email</div>
                <input
                  type="text"
                  className={styles.inputField}
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
              </div>
              {errors.email && touched.email && (
                <p className={styles.errorText}>{errors.email}</p>
              )}

              <div className={styles.formGroup}>
                <div className={styles.labelColor}>Business Address</div>
                <input
                  type="text"
                  className={styles.inputField}
                  name="address"
                  onChange={handleChange}
                  value={values.address}
                />
              </div>
              {errors.address && touched.address && (
                <p className={styles.errorText}>{errors.address}</p>
              )}

              <div className={styles.formGroup}>
                <div className={styles.labelColor}>CAC Registration Detail</div>
                <input
                  type="number"
                  className={styles.inputField}
                  name="cacno"
                  onChange={handleChange}
                  value={values.cacno}
                />
              </div>
              {errors.cacno && touched.cacno && (
                <p className={styles.errorText}>{errors.cacno}</p>
              )}

              <div className={styles.formGroup}>
                <div className={styles.labelColor}>RC Number</div>
                <input
                  type="number"
                  className={styles.inputField}
                  name="rcno"
                  onChange={handleChange}
                  value={values.rcno}
                />
              </div>
              {errors.rcno && touched.rcno && (
                <p className={styles.errorText}>{errors.rcno}</p>
              )}

              <div className={styles.formGroup}>
                <div className={styles.labelColor}>
                  Tax Identification Number
                </div>
                <input
                  type="text"
                  className={styles.inputField}
                  name="taxid"
                  onChange={handleChange}
                  value={values.taxid}
                />
              </div>
              {errors.taxid && touched.taxid && (
                <p className={styles.errorText}>{errors.taxid}</p>
              )}

              <div className={styles.formGroup}>
                <div className={styles.labelColor}>Currency</div>

                <select
                  className={styles.inputField}
                  name="currency"
                  onChange={handleChange}
                  value={values.currency}
                >
                  <option value="naira">Select a Currency</option>
                  <option value="naira">Naira</option>
                  <option value="dollar">Dollar</option>
                </select>
              </div>
              {errors.currency && touched.currency && (
                <p className={styles.errorText}>{errors.currency}</p>
              )}

              <div className={styles.formGroup}>
                <button
                  className={styles.saveBtn}
                  type="submit"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                >
                  {isSubmitting ? "Loading" : "Register"}
                </button>
              </div>
            </form>
          </section>
        </React.Fragment>
      )}
    </Formik>
  </>
   );
}

export default BusinessRegistrationForm;
