import React from 'react'
import SideNav from '../../Components/Dashboard/SideNav/SideNav';
import TopBar from '../../Components/Dashboard/TopBar/TopBar';

import EmployerLeave from './EmployerLeave'
import styles from "./employerleave.module.css";

const EmployerLeaveManagement = (props) => {
  const {leavePolicies, setLeavePolicies, fetchLeavePolicies} = props;
  return (
    <>
    <TopBar />
    
    <div className={styles.mainContainer}>
    <SideNav />
    <EmployerLeave fetchLeavePolicies={fetchLeavePolicies} leavePolicies={leavePolicies} setLeavePolicies={setLeavePolicies} />
    {/* <EmployerLeave /> */}
    </div>
    </>
  )
}

export default EmployerLeaveManagement