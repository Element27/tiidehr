import { Formik } from 'formik';
import React from 'react'
import addEmpModcss from './AddEmployeeModal.module.css'


function AddNewEmployeeFormik() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        photo: '',
        role: '',
        level: '',
      }}

      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <form className={addEmpModcss.AddEmployeeModalForm}>

        <div className={addEmpModcss.formgroup}>
          <label htmlFor="photo" className={addEmpModcss.imglabel}>Img Upload</label>
          <input
            id="photo"
            name="photo"
            type="file"
            accept='image/*'
            className={addEmpModcss.uploadImg}
          />
        </div>


        <div className={addEmpModcss.formgroup}>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" placeholder="Jane" />
        </div>

        <div className={addEmpModcss.formgroup}>

          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" placeholder="Doe" />
        </div>



        <div className={addEmpModcss.supformgroup}>
          <div className={addEmpModcss.formgroup}>
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" placeholder="jane@acme.com" type="email" />
          </div>
          <div className={addEmpModcss.formgroup}>
            <label htmlFor="phoneNum">Phone Number</label>
            <input id="phoneNum" name="phoneNum" placeholder="080 1234 4567" type="tel" />
          </div>
        </div>

        <div className={addEmpModcss.supformgroup}>
          <div className={addEmpModcss.formgroup}>
            <label htmlFor='role'>Select Role</label>
            <select id='role' name='role'>
              <option></option>
            </select>
          </div>

          <div className={addEmpModcss.formgroup}>
            <label htmlFor='level'>Select Level</label>
            <select id='level' name='level'>
              <option></option>
            </select>
          </div>
        </div>

        <div className={addEmpModcss.supformgroup}>
          <div className={addEmpModcss.formgroup}>
            <label htmlFor='DOB'>Date of Birth</label>
            <input id="DOB" name="DOB" type="date" />
          </div>
          <div className={addEmpModcss.formgroup}>
            <label htmlFor='resDate'>Resumption Date</label>
            <input id="resDate" name="resDate" type="date" />
          </div>
        </div>

        <div className={addEmpModcss.buttoncont}>
          <button type="submit" className='primary-button'>Submit</button>
        </div>
      </form>
    </Formik>
  )

}

export default AddNewEmployeeFormik
