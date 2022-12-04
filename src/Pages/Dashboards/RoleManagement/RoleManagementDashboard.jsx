import React, { useState, useEffect } from 'react'
import SideNav from '../../../Components/Dashboard/SideNav/SideNav'
import TopBar from "../../../Components/Dashboard/TopBar/TopBar"
import RoleMgtMainSect from './RoleMgtMainSect'
import styles from "./RoleMgt.module.css"
import AddNewRolePopup from './AddNewRolePopup'



const RoleManagementDashboard = (props) => {
  const {localToken, isLoading, setIsLoading, getRoles , setGetRoles} = props
  const [modalState, setModalState] = useState(false)

  const openModal = () => {
    setModalState(true)
  }

  const closeModal = () => {
    setModalState(false)
  }

  // Fetch the Roles when this component is mounted
  useEffect(()=>{

    console.log("Load and update when roles has been fetched")
  
    // getRoles(localToken, setGetRoles, setIsLoading);

  }, [])


  return (
      <>
       <TopBar />
      <section className={styles.roleManagement}>
        {modalState ?
          <><div className={styles.blur} onClick={closeModal}></div>
            <AddNewRolePopup closeModal={closeModal} />

          </> : null}


        <SideNav />

        <section className={styles.roleMgtDashboard}>
          <RoleMgtMainSect
            openModal={openModal} 
            localToken={localToken}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            getRoles ={getRoles}
            setGetRoles={setGetRoles}
          />
        </section>
      </section>
      </>
  )
}

export default RoleManagementDashboard