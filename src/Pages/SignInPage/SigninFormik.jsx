//External Imports
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

//Internal Imports
import { SigninSchema } from "../utils/validation/validation-schema";
import styles from "./signin.module.css";
import googleIcon from "../../Assets/icons/google.svg";

// Icons Imports
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

function SigninFormik() {
  // Toggle Password Visibility Functionality
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const hidePasswordIcon = (
    <AiFillEyeInvisible
      className={styles.hidePass}
      size="28px"
      color="#000080"
    />
  );

  const showPasswordIcon = (
    <AiFillEye className={styles.showPass} size="28px" color="#000080" />
  );

  // Signin Authentication
  const navigate = useNavigate();
  const [token, setToken] = useState(false);
  const localToken = JSON.parse(localStorage.getItem("token"));
  let tokenExists = localToken?.length > 0;
  useEffect(() => {
    console.log("Token exists");
    if (tokenExists) {
      setToken(true);
    }
  }, [tokenExists]);

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SigninSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const { email, password } = values;
          setSubmitting(true);

          try {
            // console.log("Making request to backend")
            let response = await axios.post(
              "https://tiider-hr-tiidelab.herokuapp.com/v1/auth/login",
              {
                email,
                password,
              }
            );

            // console.log("Request Completed")
            // console.log(response)
            const { access, refresh } = response.data.tokens;
            // console.log(access)
            const tokens = [];
            tokens.push({ access: access.token });
            tokens.push({ refresh: refresh.token });

            localStorage.setItem("token", JSON.stringify(tokens));

            if (token) {
              navigate("/emd");
            }
          }
          catch (error) {
            toast.error("Signin Failed! Please try again", {
              position: "top-center",
            });
          }

        }}
        validate={(values) => {
          const { email, password } = values;
          const errors = {};
          // These custom error messages will override the default yup required error messages
          if (!email) errors.email = "This field is required";
          if (!password) errors.password = "This field is required";
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
            <div className={styles.signinFormContainer}>
              <form className={styles.signinForm}>
                <div className={styles.formHeading}>
                  Welcome Back <br />
                  <span>Please enter your details</span>
                </div>

                {/* Email Field */}
                <div className={styles.formGroup}>
                  <label name="email" htmlFor="email" className={styles.label}>
                    Email
                  </label>
                  <input
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
                <div
                  className={`${styles.formGroup} ${styles.passwordFormGroup}`}
                >
                  <label
                    name="password"
                    htmlFor="password"
                    className={styles.label}
                  >
                    Password
                  </label>
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />

                  <span className={styles.toggleBtn1} onClick={togglePassword}>
                    {passwordShown ? showPasswordIcon : hidePasswordIcon}
                  </span>
                </div>
                {errors.password && touched.password && (
                  <p className={styles.errorText}>{errors.password}</p>
                )}

                <div className={styles.formGroup}>
                  <button
                    className={`${styles.submitBtn} ${styles.signinButton}`}
                    disabled={isSubmitting}
                    type="button"
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? "Signing In" : "Signin"}
                  </button>
                </div>

                <div className={styles.buttonDividerLine} />
                <div className={styles.btnDividerText}>
                  <span>OR</span>
                </div>
                <div className={styles.formGroup}>
                  <button type="button" className={styles.googleSigninBtn}>
                    <span>
                      <img
                        className={styles.googleSvg}
                        src={googleIcon}
                        alt="google icon"
                      />
                    </span>
                    Sign in with Google
                  </button>
                </div>
                <div className={styles.signupRedirect}>
                  <p>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                  </p>
                </div>
              </form>
            </div>
          </React.Fragment>
        )}
      </Formik>
    </>
  );
}

export default SigninFormik;