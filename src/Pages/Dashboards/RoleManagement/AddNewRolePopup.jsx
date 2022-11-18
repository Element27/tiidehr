import { Formik } from 'formik'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import RoleTabletr from '../EmployeeManagement/playground/RoleTabletr'
import anrCss from './addNewRolecss.module.css'

function AddNewRolePopup({ closeModal }) {
  return (

    <div className={anrCss.addnewrolecontainer}>

      <FaTimes class={anrCss.close} onClick={closeModal} />
      <Formik

        initialValues={{
          roleTitle: "",
          desc: "",
          checked: [],
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}

      >

        {({ values }) => (
          <form className={anrCss.rolespopform}>
            <div className={anrCss.formgroup}>
              <label htmlFor='roleTitle'>Role Title</label>
              <input name='roleTitle' type="text" />
            </div>

            <div className={anrCss.formgroup}>
              <label htmlFor='roleDesc'>Role Description</label>
              <textarea name='roleDesc' />
            </div>
            <table className={anrCss.roleTable}>
              <thead>
                <tr className={anrCss.theadrow}>
                  <td>Access</td>
                  <td>Create</td>
                  <td>View</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              </thead>
              <tbody>
                <RoleTabletr classname={anrCss.tbodyrow} groupName="roleaccess" title="Role Management" />
                <RoleTabletr classname={anrCss.tbodyrow} groupName="levelaccess" title="Level Management" />
                <RoleTabletr classname={anrCss.tbodyrow} groupName="leaveaccess" title="Leave Management" />
                <RoleTabletr classname={anrCss.tbodyrow} groupName="employeeaccess" title="Employee Management" />
                <RoleTabletr classname={anrCss.tbodyrow} groupName="notificationaccess" title="Notification Management" />
              </tbody>
            </table>
            <div className={anrCss.mid}>
              <button className="primary-button" type="submit">Save</button></div>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default AddNewRolePopup