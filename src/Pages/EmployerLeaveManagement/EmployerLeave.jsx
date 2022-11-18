import React, { useState } from "react";

import PolicyCreateButton from "./CreateButton";
import styles from "./employerleave.module.css";
import LeaveManagementTable from "./LeaveManagementTable";
import TableTitle from "./TableTitle";

import PopupForm from "./PopupForm";

const EmployerLeave = (props) => {
  const {leavePolicies, setLeavePolicies, fetchLeavePolicies} = props;
  const [openPopup, setOpenpopup] = useState(false);

  
  // on click of the poppopup button state the openpopup state to true
  const showModal = () => {
    setOpenpopup(true);
    // setOpenpopup(!openPopup);
  };

    // on click of the cancel button, set the state back to false
    const closeModal = () => {
      setOpenpopup(false);
    };

  return (
    <>
      <div className={styles.mainContent}>
        <TableTitle />

        <LeaveManagementTable fetchLeavePolicies={fetchLeavePolicies} leavePolicies={leavePolicies} setLeavePolicies={setLeavePolicies} />
        {/* <LeaveManagementTable /> */}

        <PolicyCreateButton clickFunction = {showModal} />

        {openPopup ? <PopupForm closeModal= {closeModal} fetchLeavePolicies={fetchLeavePolicies} /> : null}

      </div>
    </>
  );
};

export default EmployerLeave;


