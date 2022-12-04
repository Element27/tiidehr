import React from 'react'
import styles from "./employeeleave.module.css";


const PolicyCreateButton = ({clickFunction}) => {
  return (
    <>
        <div id="btnContainer" className={styles.createBtnContainer}>
          <button className={styles.createButton} type="button" onClick={clickFunction}>
            Apply For Leave
          </button>
        </div>

    </>
  )
}

export default PolicyCreateButton