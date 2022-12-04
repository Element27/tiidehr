import { Formik, Field, Form } from 'formik'
import axios from "axios"
import {toast} from "react-toastify"
import React, {useEffect, useState} from 'react'
import { FaTimes } from 'react-icons/fa'
import { CreateRoleSchema } from '../../utils/validation/rolemgt-schema'
import RoleTabletr from '../EmployeeManagement/playground/RoleTabletr'
import anrCss from './addNewRolecss.module.css'

function AddNewRolePopup({ closeModal }) {

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

    <div className={anrCss.addnewrolecontainer}>

      
      <Formik

        initialValues={{
          title: "",
          description: "",

          manageRole: false,          
          manageLevel: false,          
          manageLeave: false,          
          manageStaff: false,          
          // manageNotification: false,          
        }}
        
        validationSchema={CreateRoleSchema}

        //NOTE: whenever you want to do edit button, remember to set enableReinitialize to true
        // onSubmit={ async (values, {setSubmitting}) => alert(JSON.stringify(values, null, 2))}

       
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          let payload = {};
          payload.title = values.title;
          payload.description = values.description;
          delete values.title;
          delete values.description;
          payload.permissions = values;
          


          // Generic for all post requests
       
          setSubmitting(true);


          try {
          let response = await axios.post(
            "https://tiider-hr-tiidelab.herokuapp.com/v1/roles",
            
            payload,
            {
              headers: {
                Authorization: `Bearer ${localToken[0].access}`,
              },
            }
          );
          

          // Generic
          if (token) {
            resetForm();
            toast.success("Role Created Successfully", {
              position: "top-center",
            });
          
            return response;
          }
        } catch (error) {
          toast.error("Unable to create Role", {
            position: "top-center",
          });
        }

        
      }}
      >

        {({ values, errors, touched, handleSubmit, handleChange, handleReset, isSubmitting }) => (
          <Form className={anrCss.rolespopform}>
            {/* <pre>{JSON.stringify(values, 2, null)}</pre> */}
            <div className={anrCss.formgroup}>
              <label htmlFor='title'>Role Title</label>
              <input name='title' type="text" value={values.title} onChange={handleChange}/>
              {errors.title && touched.title ? <div className={anrCss.errorMessage}>{errors.title}</div> : null }
            </div>

            <div className={anrCss.formgroup}>
              <label htmlFor='description'>Role Description</label>
              <Field as="textarea" name='description' value ={values.description} onChange={handleChange} />
              {errors.description && touched.description ? <div className={anrCss.errorMessage}>{errors.description}</div> : null }
            </div>
            <table className={anrCss.roleTable}>
              <thead>
                <tr className={anrCss.theadrow}>
                  <td> Access</td>
                  <td> Grant Access</td>
                
                </tr>
              </thead>
              <tbody>
                <RoleTabletr classname={anrCss.tbodyrow} permissions="manageRole"  title="Role Management" handleChange={handleChange}/>
                <RoleTabletr classname={anrCss.tbodyrow} permissions="manageLevel" title="Level Management" handleChange={handleChange}/>
                <RoleTabletr classname={anrCss.tbodyrow} permissions="manageLeave"  title="Leave Management" handleChange={handleChange}/>
                <RoleTabletr classname={anrCss.tbodyrow} permissions="manageStaff"  title="Employee Management" handleChange={handleChange}/>
                {/* <RoleTabletr classname={anrCss.tbodyrow} permissions="manageNotification"  title="Notification Management" handleChange={handleChange}/> */}
                
              </tbody>
            </table>
            {/* <div className={anrCss.mid}>
              <button className="primary-button" type="submit">Save</button></div> */}

              <section className={anrCss.submitButtons}>
                      <button
                        className={anrCss.secondaryBtn}
                        type="button"
                        onClick={closeModal}
                      >
                        Cancel
                      </button>
                      <button
                        className={`${anrCss.primaryBtn} ${anrCss.saveButton}`}
                        type="button"
                        onClick={handleSubmit}
                      >
                        Save
                      </button>
                    </section>
          </Form>
        )}
      </Formik>
   </div>
  )
}

export default AddNewRolePopup