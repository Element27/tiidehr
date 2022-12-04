import { Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addEmployee, loadEmployee } from '../../../_Helper/_Redux/redux/EmployeeManagement/employeemanagement.action';
import employeeManagementServices from '../../../_Helper/_Redux/redux/EmployeeManagement/employeemanagement.services';
import addEmpModcss from './AddEmployeeModal.module.css'


function AddNewEmployeeFormik({ closeModal }) {


  const dispatch = useDispatch()
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        photo: '',
        role: '',
        level: '',
        startDate: '',
        birthday: '',
        phoneNumber: ''
      }}

      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        employeeManagementServices.addNewEmployee(values).then((values) => {
          dispatch(addEmployee(values));
          // console.log(values);
        }).then((res) => {
          console.log("get to dispatch")
          employeeManagementServices.getEmployee().then((data) => {
            dispatch(loadEmployee(data))
          })
          console.log("after dispatch")
        })
        console.log("outside on submit")
        resetForm();
        closeModal();
      }}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        handleReset,
        isSubmitting,
      }) =>

      (<form className={addEmpModcss.AddEmployeeModalForm} >

        {/* <div className={addEmpModcss.formgroup}>
            <label htmlFor="photo" className={addEmpModcss.imglabel}>Img Upload</label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept='image/*'
              className={addEmpModcss.uploadImg}
            />
          </div> */}


        <div className={addEmpModcss.formgroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            name="firstName"
            placeholder="Jane"
            value={values.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className={addEmpModcss.formgroup}>

          <label htmlFor="lastName">Last Name</label>
          <input
            name="lastName"
            placeholder="Doe"
            value={values.lastName}
            onChange={handleChange}
            required
          />
        </div>



        <div className={addEmpModcss.supformgroup}>
          <div className={addEmpModcss.formgroup}>
            <label htmlFor="email">Email Address</label>
            <input
              name="email"
              placeholder="jane@acme.com"
              type="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={addEmpModcss.formgroup}>
            <label htmlFor="phoneNum">Phone Number</label>
            <input
              name="phoneNum"
              placeholder="080-1234-4567"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              value={values.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={addEmpModcss.supformgroup}>
          <div className={addEmpModcss.formgroup}>
            <label htmlFor='role'>Select Role</label>
            <select id='role' name='role'>
              <option>Frontend</option>
            </select>
          </div>

          <div className={addEmpModcss.formgroup}>
            <label htmlFor='level'>Select Level</label>
            <select id='level' name='level'>
              <option>Junior</option>
            </select>
          </div>
        </div>

        <div className={addEmpModcss.supformgroup}>
          <div className={addEmpModcss.formgroup}>
            <label htmlFor='birthday'>Date of Birth</label>
            <input
              name="birthday"
              type="date"
              value={values.birthday}
              onChange={handleChange}
            />
          </div>

          <div className={addEmpModcss.formgroup}>
            <label htmlFor='startDate'>Resumption Date</label>
            <input
              name="startDate"
              type="date"
              value={values.startDate}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className={addEmpModcss.buttoncont}>
          <button type="submit" className='primary-button' onClick={handleSubmit} >Submit</button>
        </div>
      </form>)}
    </Formik >
  )

}

export default AddNewEmployeeFormik
