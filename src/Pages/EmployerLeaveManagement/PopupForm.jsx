//External Imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Field } from "formik";
import { toast } from "react-toastify";

//Internal Imports
import styles from "./popup.module.css";
import { CreateLeaveSchema } from "../utils/validation/policy-schema";

function PopupForm({ closeModal, fetchLeavePolicies }) {
  // Generic for all post requests
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
          title: "",
          duration: "",
          description: "",
        }}
        validationSchema={CreateLeaveSchema} // Dynamic
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          // Generic for all post requests
          const { title, duration, description } = values; // Dynamic
          setSubmitting(true); // Generic

          try {
            // console.log("Making request to backend")
          let response = await axios.post( "https://tiider-hr-tiidelab.herokuapp.com/v1/leavePolicy",
              {
                //Dynamic
                title,
                duration,
                description,
              },
              // Generic
              {
                headers: {
                  Authorization: `Bearer ${localToken[0].access}`,
                },
              }
            );
            console.log("Request Completed");
            console.log(response);

            // Generic
            if (token) {
              toast.success("Leave Policy Created Successfully", {
                position: "top-center",
              });
              fetchLeavePolicies();
              resetForm();
              closeModal()
              return response;
            }
          } catch (error) {
            toast.error("Unable to create Leave Policy", {
              position: "top-center",
            });
          }
        }}
        validate={(values) => {
          const { title, duration, description } = values;
          const errors = {};
          // These custom error messages will override the default yup required error messages
          if (!title) errors.title = "This field is required";
          if (!duration) errors.duration = "This field is required";
          if (!description) errors.description = "This field is required";
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
            <aside className={styles.popupContainer}>
              <div className={styles.popupContent}>
                <h4 className={styles.popupTitle}>Create Leave Policy</h4>
                <form id="createLeaveForm" className={styles.popupForm}>
                  <fieldset>
                    <section className={styles.popupForm}>
                      {/* LeaveType Field */}
                      <div>
                        <label htmlFor="leaveSelect">Type</label>
                        <input
                          className={styles.leaveType}
                          type="text"
                          name="title"
                          value={values.title}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.title && touched.title && (
                        <p className={styles.errorText}>{errors.title}</p>
                      )}

                      {/* Duration Field */}
                      <div>
                        <label htmlFor="durationSelect">Duration (Days)</label>
                        <input
                          className={styles.duration}
                          type="number"
                          name="duration"
                          value={values.duration}
                          min={0}
                          max={365}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.duration && touched.duration && (
                        <p className={styles.errorText}>{errors.duration}</p>
                      )}

                      {/* Textarea */}
                      <div className={styles.columnSpanFull}>
                        <label htmlFor="leaveText">Description</label>
                        <Field
                          className={styles.description}
                          as="textarea"
                          name="description"
                          value={values.description}
                          placeholder="Type Leave Description..."
                          onChange={handleChange}
                        />
                      </div>
                      {errors.description && touched.description && (
                        <p className={styles.errorText}>{errors.description}</p>
                      )}

                      {/* Action Buttons */}
                    </section>
                    <section className={styles.submitButtons}>
                      <button
                        className={styles.secondaryBtn}
                        type="button"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        className={`${styles.primaryBtn} ${styles.saveButton}`}
                        type="button"
                        onClick={handleSubmit}
                      >
                        Save
                      </button>
                    </section>
                  </fieldset>
                </form>
              </div>
            </aside>
          </React.Fragment>
        )}
      </Formik>
    </>
  );
}

export default PopupForm;
