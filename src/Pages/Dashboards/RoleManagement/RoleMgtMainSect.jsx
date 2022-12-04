import React, {useState, useEffect} from 'react';
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa';
import styles from "./RoleMgt.module.css";
import "../../../Components/Dashboard/tablecomponent.css";
import getRoles from './getRoles';
import {toast} from "react-toastify";
import DonutSpinner from '../../../Components/Loaders/DonutSpinner';



const RoleMgtMainSect = (props) => {

  let {
    openModal,
    getRole,
    getRoles,
    setGetRoles,
    isLoading,
    setIsLoading,
  } = props;

  let {  title, description } = getRole || {};


   // Get access token from local storage
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
      {/* main section */}

      <section className={styles.contentarea}>
        <div className="leave-text">
          <h4 className={styles.tableTitle}>Role Management</h4>
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

          {/* <React.Fragment>
          {isLoading && <DonutSpinner />}




          
          
          {
            getRoles.length > 0
              ? getRoles.map((getRole, index) => {
                  const {id, title, description, users, grantedAccess} = getRole;
                  return (
                    <>
                      
                        <tr className={styles.tr} key={id} >
                          <td className={styles.td}>{title}</td>
                          <td className={styles.td}>{description}</td>
                          <td className={styles.td}>{grantedAccess}</td>
                          <td className={styles.td}>{users}</td>
                          <td>
                            <FaEdit className={styles.edit} />
                            <FaRegTrashAlt
                              
                            />
                          </td>
                        </tr>
                      
                    </>
                  );
                })
              : null
          }
        </React.Fragment>  */}







            {/* <tr>
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
            </tr> */}
          </tbody>
        </table>

        
        {/* button */}
        <div id={styles.btnContainer}>

          <button className={styles.createBtn} onClick={openModal}>
            Create New Role
          </button>
        </div>
      </section>
    </>
  )
}

export default RoleMgtMainSect