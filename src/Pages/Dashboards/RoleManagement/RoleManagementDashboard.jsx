import React, { useState } from 'react'
import SideNav from '../../../Components/Dashboard/SideNav/SideNav'
import TopBar from "../../../Components/Dashboard/TopBar/TopBar"
import RoleMgtMainSect from './RoleMgtMainSect'
import styles from "./RoleMgt.module.css"
import AddNewRolePopup from './AddNewRolePopup'



const RoleManagementDashboard = () => {
  const [modalState, setModalState] = useState(false)

  const openModal = () => {
    setModalState(true)
  }

  const closeModal = () => {
    setModalState(false)
  }





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
          <RoleMgtMainSect openModal={openModal} />
        </section>
      </section>
      </>
  )
}

export default RoleManagementDashboard