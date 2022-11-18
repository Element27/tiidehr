import React from 'react'

import styles from './popup.module.css'

const PopupForm = ({closeModal}) => {



  return (
    <React.Fragment>

<aside className={styles.popupContainer}>
  <div className={styles.popupContent}>
    <h4>Create Level</h4>
    <form className={styles.createLeaveForm}>
      <fieldset>
        <section className= {styles.popupForm}>
          <div >
            <label htmlFor="leaveSelect">
              <h5>Level</h5>
            </label>
            <input type="text" className={styles.role} name="leaveSelect" placeholder = "Select Level Type" />
          </div>
          <div>
            <label htmlFor="durationSelect">
              <h5>Basic Salary</h5>
            </label>
            {/* <input class="duration-input" type="text"> */}
            <input name="days" className={styles.salary} type="text" />
          </div>
          <div  className={styles.columnSpanFull}>
            <label htmlFor="leaveText">
              <h5>Description</h5>
            </label>
            <textarea name="leaveText" className={styles.description} placeholder = "Type Level Description" />
          </div>
        </section>
        <section className={styles.submitButtons}>
          <button className={styles.secondaryBtn}type="button" onClick={closeModal}>
            Cancel
          </button>
          <button className={styles.primaryBtn} id="save" type="button">
            Save
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