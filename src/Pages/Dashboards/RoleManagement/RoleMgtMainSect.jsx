import React from 'react'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import styles from "./RoleMgt.module.css"
import "../../../Components/Dashboard/tablecomponent.css"


const RoleMgtMainSect = ({ openModal }) => {
  return (
    <>
      {/* main section */}

      {/* content section */}
      <section className={styles.contentarea}>
        <div className="leave-text">
          <h4 className="Xlarge-text-bold">Role Management</h4>
          {/* <i className="fa-solid fa-circle-plus" /> */}
        </div>
        {/* new table style */}
        <table>
          <thead>
            <td>
              Roles
            </td>
            <td>
              Description
            </td>
            <td>
              Granted Access
            </td>
            <td>
              Users
            </td>
            <td>
              Action
            </td>
          </thead>

          <tbody className='bodyTable'>
            <tr>
              <td>Frontend Developer</td>
              <td>Development of graphical user interface of a website.</td>
              <td>Role Management</td>
              <td>
                0
              </td>
              <td>
                <FaEdit className="edit" />
                <FaRegTrashAlt className="delete" />
              </td>
            </tr>
            <tr>
              <td>Backend Developer</td>
              <td>Development of the server side of a website.</td>
              <td>Level Management</td><td>
                0
              </td>
              <td>
                <FaEdit className="edit" />
                <FaRegTrashAlt className="delete" />
              </td>
            </tr>
            <tr>
              <td>Product Manager</td>
              <td>Planning and Management of a product or service.</td>
              <td>Notification Management</td>
              <td>
                0
              </td>
              <td>
                <FaEdit className="edit" />
                <FaRegTrashAlt className="delete" />
              </td>
            </tr>
          </tbody>
        </table>
        {/* button */}
        <div id={styles.btnContainer}>

          <button className="primary-button" onClick={openModal}>
            Create New Role
          </button>
        </div>
      </section>
    </>
  )
}

export default RoleMgtMainSect