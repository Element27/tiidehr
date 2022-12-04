import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./employeeleave.module.css";


const TableTitle = () => {
  return (
    <>


    <div className = {styles.cardTitle2}>
          <span className ={styles.xlargeTextBold}>Leave History</span>
          
        </div>
        

        <hr className={styles.dividerLine} />

        <Link className={styles.linkToLeaveManagement} to ="/leaveManagement"> Manage Leaves</Link>

      
    </>
  )
}

export default TableTitle