import React, { useState } from 'react'
import Createlevelbutton from './Createbutton'
import LevelmanagementTable from './levelManagementTable'
import Leveltabletitle from './levelTableTitle'
import styles from './levelmanagement.module.css'
import PopupForm from './PopupForm'


function Levels() {

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

        <Leveltabletitle />

        <LevelmanagementTable />

        <Createlevelbutton clickFunction={showModal} />

        {openPopup ? <PopupForm closeModal={closeModal} /> : null}

      </div>
    </>
  )
}

export default Levels