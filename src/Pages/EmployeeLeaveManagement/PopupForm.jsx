import React from 'react'

import styles from './popup.module.css'

const PopupForm = ({closeModal}) => {


  return (
    <React.Fragment>
    <aside  className={styles.popupContainer}>
    <div  className={styles.popupContent}>
    <h4 className={styles.popupTitle}>Leave Application</h4>
    <form className={styles.leavAppForm} >
      <fieldset>
        <section className={styles.popupForm}>
          <div  className={styles.columnSpanFull}>
            <label htmlFor="typeOfLeave">
              <h5>Type</h5>
            </label>
            <input list="leaves" type="text" name="typeOfLeave" placeholder="Select Leave Type"  />
            <datalist id="leaves" className={styles.leaves}>
              <option value="Maternity/Paternity Leave" />
              <option value="Casual Leave" />
              <option value="Sick Leave" />
              <option value="Annual Leave" />
              <option value="Other...">Specify Type in Description</option>
            </datalist>
          </div>
          <div >
            <label htmlFor="startLeave">
              <h5>To Start</h5>
            </label>
            <input type="date" name="startLeave" id="startLeave"  />
          </div>
          <div>
            <label htmlFor="endLeave">
              <h5>To End</h5>
            </label>
            <input type="date" name="endLeave" id="endLeave" placeholder="MM/DD/YYYY"  />
          </div>
          <div  className={styles.columnSpanFull}>
            <label htmlFor="leaveText">
              <h5>Description</h5>
            </label>
            <textarea name="leaveText" placeholder="Type Leave Description"  />
          </div>
        </section>
        <section className={styles.submitButtons}>
          <button  className={styles.secondaryBtn} onClick={closeModal} type="button" >
            Cancel
          </button>
          <button  className={styles.primaryBtn} type="submit">
            Submit
          </button>
        </section>
      </fieldset>
    </form>
  </div>
</aside>

        </React.Fragment>
  )
}

export default PopupForm