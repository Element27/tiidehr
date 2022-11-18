import React from 'react'
import styles from "./employeeleave.module.css";


const PolicyCreateButton = ({clickFunction}) => {
  return (
    <>
        <div id="btnContainer" className={styles.createBtnContainer}>
          <button class={styles.createButton} type="button" onClick={clickFunction}>
            Apply
          </button>
        </div>

    </>
  )
}

export default PolicyCreateButton