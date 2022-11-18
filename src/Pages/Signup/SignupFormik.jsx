// External Imports
import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

// Internal Imports
import { SignupSchema } from "../utils/validation/validation-schema";
import styles from "./signup.module.css";
import axios from "axios";


function SignupFormik() {

  // Toggle Password Visibility Functionality
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown)
  };

  const hidePasswordIcon = (
    <AiFillEyeInvisible
      className={styles.hidePass}
      size="28px"
      color="#000080"
    />
  );

  const showPasswordIcon = (
    <AiFillEye
      className={styles.showPass}
      size="28px"
      color="#000080"
    />
  );

  //Signup Authentication 
  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  const localToken = JSON.parse(localStorage.getItem("token"));
  let tokenExists = localToken?.length > 0;
  useEffect(() => {
    
    if (tokenExists) {
      setToken(true);
    }
  }, [tokenExists]);
  return (
    <>
       <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { setSubmitting}) => {
            const { firstName, lastName, email, password } = values;
            setSubmitting(true);
            // console.log(values)
            try {
              // console.log("Making request to backend")
              let response = await axios.post("https://tiider-hr-tiidelab.herokuapp.com/v1/auth/register", {
                firstName,
                lastName,
                email,
                password,
              });
              // console.log("Request Completed")
              // console.log(response.data)
              const {access, refresh} = response.data.tokens
              const tokens=[]
              tokens.push( {access: access.token})
              tokens.push( {refresh: refresh.token})
              console.log(tokens)
              localStorage.setItem("token", JSON.stringify(tokens) )
              
              if(token){
                // toast.success("Signup Successful, Redirecting", {
                //   position: "top-center",
                // });
                navigate('/businessprofile2')
                toast.success("Welcome To Tiide HR", {
                  position: "top-center",
                });

              }
            } catch (error) {
              toast.error("Signup Failed! Please try again", {
                position: "top-center",
              });
              
            }
          
          }}
          validate={(values) => {
            const { firstName, lastName, email, password, confirmPassword } = values;
            const errors = {};
            // These custom error messages will override the default yup required error message
            if (!firstName) errors.firstName = "First Name is a required field"; 
            if (!lastName) errors.lastName = "Last Name is a required field"; 
            if (!email) errors.email = "Email is a required field"; 
            if (!password) errors.password = "Password is a required field"; 
            if (!confirmPassword) errors.confirmPassword = "Confirm Password is a required field"; 
            return errors;
          }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
          isSubmitting,
        }) => (
          <React.Fragment>
            <form className={styles.signupForm}>
              <h5 className={styles.heading5}>Let's get you started!</h5>

              {/* First Name Field */}
              <div className={styles.formGroup}>
                <label name="fisrtName" htmlFor="firstName" className={styles.label}>
                  First Name
                </label>
                <input
                  className={styles.input}
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </div>
              {errors.firstName && touched.firstName && (
                <p className={styles.errorText}>{errors.firstName}</p>
              )}

              {/* Last Name Field */}
              <div className={styles.formGroup}>
                <label name="lastName" htmlFor="lastName" className={styles.label}>
                  Last Name
                </label>
                <input
                  className={styles.input}
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </div>
              {errors.lastName && touched.lastName && (
                <p className={styles.errorText}>{errors.lastName}</p>
              )}

              {/* Email field */}
              <div className={styles.formGroup}>
                <label name="email" htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  className={styles.input}
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && touched.email && (
                <p className={styles.errorText}>{errors.email}</p>
              )}

              {/* Password Field */}
              <div className={styles.formGroup}>
                <label
                  name="password"
                  htmlFor="password"
                  className={styles.label}
                >
                  Password
                </label>
                <input
                  className={`${styles.input} ${styles.passwordInput}`}
                  type={passwordShown ? "text" : "password"}
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                /> 
                
                <span className={styles.toggleBtn1}
               onClick={togglePassword}
             > {passwordShown ?  showPasswordIcon : hidePasswordIcon }
              </span>
                
              </div>
              {errors.password && touched.password && (
                <p className={styles.errorText}>{errors.password}</p>
              )}

              {/* Cpassword Field */}
              <div className={styles.formGroup}>
                <label
                  name="confirmPassword"
                  htmlFor="confirmPassword"
                  className={styles.label}
                >
                  Confirm Password
                </label>
                <input
                  className={`${styles.input} ${styles.passwordInput}`}
                  type={confirmPasswordShown ? "text" : "password"}
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                />
                  <span className={styles.toggleBtn2}
               onClick={toggleConfirmPassword}
             > {confirmPasswordShown ? showPasswordIcon : hidePasswordIcon } 
              </span>

              </div>
              {errors.confirmPassword && touched.confirmPassword && (
                <p className={styles.errorText}>{errors.confirmPassword}</p>
              )}

              {/* Button Field */}
              <div>
                <div className={styles.formGroup}>
                  <button
                    className={styles.submitBtn}
                    disabled={isSubmitting}
                    type="button"
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? "Loading" : "Signup"}
                  </button>
                </div>

                
                <p className={styles.signinRedirect}>
                  Already have an account? <Link to="/signin">Sign In</Link>
                </p>
              </div>
            </form>
          </React.Fragment>
        )}
      </Formik>
    </>
  );
}

export default SignupFormik;
