import React, {useState} from 'react'
import PolicyCreateButton from './CreateButton';
import styles from "./employeeleave.module.css";
import LeaveManagementTable from './LeaveManagementTable';
import TableTitle from './TableTitle';

import PopupForm from "./PopupForm";
import { useSelector } from 'react-redux';

const EmployeeLeave = () => {


  const [openPopup, setOpenpopup] = useState(false);

  
  // on click of the poppopup button state the openpopup state to true
  const poppopup = () => {
    setOpenpopup(true);
  };

    // on click of the cancel button, set the state back to false
    const closeModal = () => {
      setOpenpopup(false);
    };

    const {appliedLeaves} = useSelector(state=>state.appliedLeavesStore)
    const totalLeaves = appliedLeaves.length;

  return (
    <>

    <div className={styles.mainContent}>

        <div className={styles.leaveSummary}>

        {/* <!-- CARD 1 --> */}
      <section className={`${styles.contentBoxes} ${styles.leftContentBox}`}>

        <h3 className={`${styles.session} ${styles.semiLargeTextBold}`}>2022-2023 </h3>
        

            <div className={styles.leaveBrief}>
          <div  className={`${styles.leaveCounter} ${styles.secBlueBg}` }>
            <div className={`${styles.leaveCount} ${styles.largeTextBold}` }>{totalLeaves}</div> 
            <p className={styles.largeText}>Total Leaves</p>
          </div>

          <div  className={`${styles.leaveCounter} ${styles.pinkBg}`}>
            <div  className={`${styles.leaveCount} ${styles.largeTextBold}` }>0</div>
            <p className={styles.largeText}>Approved</p>
          </div>

          <div className={`${styles.leaveCounter} ${styles.greenBg}`}>
            <div className={`${styles.leaveCount} ${styles.largeTextBold}` }>0</div>
            <p className={styles.largeText}>Rejected</p>
          </div>

          </div>


      </section>

       {/* CARD 2  */}
      <section  className={`${styles.contentBoxes} ${styles.rightContentBox}`}>
        <h3 className={`${styles.cardTitle} ${styles.semiLargeTextBold}`}>Upcoming Leaves</h3>

        <div className={styles.sideContainer}>
          <div  className={`${styles.largeText} ${styles.sideTitle} `}>New Year</div>
          <div  className={styles.sideWrapper}>
            <p className={styles.normalText}>Jan 01 2023</p>
            <p  className={styles.normalText}>Wednesday</p>
          </div>
        </div>

      </section>

        </div>

        <div className={styles.leaveHistory}> 
        <TableTitle />

        <LeaveManagementTable />

        <PolicyCreateButton clickFunction = {poppopup} />

        {openPopup && <PopupForm closeModal={closeModal} /> }

        </div>
        
      </div>
    </>
  )
}

export default EmployeeLeave




