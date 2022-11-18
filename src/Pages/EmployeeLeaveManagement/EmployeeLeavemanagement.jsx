import React from 'react'
import SideNav from '../../Components/Dashboard/SideNav/SideNav';
import TopBar from '../../Components/Dashboard/TopBar/TopBar';
import EmployeeLeave from './EmployeeLeave'
import styles from "./employeeleave.module.css";

const EmployeeLeaveManagement = () => {
  return (
    <>
    <TopBar />
    <div className={styles.mainContainer}>
    <SideNav />
    <EmployeeLeave />
    </div>
    </>
  )
}

export default EmployeeLeaveManagement