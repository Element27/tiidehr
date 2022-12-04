import React from 'react'
import { FaUserAlt } from "react-icons/fa"
import {BiTime} from "react-icons/bi"
import {BsArrowRight} from "react-icons/bs"
import styles from "./pendingleave.module.css";

const PendingLeaves = () => {

    const arrowIcon = (
        <BsArrowRight
          className={styles.arrowIcon}
          size="20px"
          color="#000080"
        />
    );

        const timeIcon = (
            <BiTime
              className={styles.timeIcon}
              size="16px"
            />
      );
  return (
    <div className={styles.mainContent}>
    <section className={styles.pendingLeavesWrapper}>
        <div className={styles.pendingLeaveCard}>
            <div className={styles.pendingLeaveHeader}>
                <FaUserAlt className={styles.userDp} />
                <div className={styles.userInfo}>
                    <span className={styles.userName}>Moshood Playboy</span>
                    <span className={styles.userRole}>Senior Playboy</span>
                </div>
                <div className={styles.applicationDate}>
                    <span className={styles.timeIconWrapper}> {timeIcon} </span>
                    <span>12/12/2022</span>
                </div>

            </div>
            <div className={styles.leaveBrief}>
            <div className={styles.leaveDuration}>
                <div className={styles.startDate}>
                    <span className={styles.month}>
                        Feb
                    </span>
                    <span className={styles.date}>
                        04
                    </span>
                    <span className={styles.day}>
                        Tuesday
                    </span>
                </div>
                <div className={styles.middle}>            
                        <div className={styles.arrow}>
                    <span className={styles.preArrows}>
                        {/* ----- */}
                    </span>
                    <span className={styles.arrowIconWrapper}>
                    {/* {arrowIcon} */}
                    {/* {arrowIcon} */}
                    {arrowIcon}

                    </span>
                </div >
                    <div className={styles.text}>
                        1 day 
                         </div>
                </div>
                <div className={styles.endDate}>
                    <span className={styles.month}>
                        Feb
                    </span>
                    <span className={styles.date}>
                        05
                    </span>
                    <span className={styles.day}>
                        Wednesday
                    </span>
                </div>
            </div>

            <span className={styles.label}>
                    Annual Leave
                </span>
            </div>
            

            <div className={styles.description}>
                <p className={styles.descriptionText}>
                    Since, I am due for my annual leave, I would like to take some time off and get needed rest.
                </p>
                
            </div>

            <div className={styles.actionBtns}>
                <button className={styles.approveBtn}>
                    Approve
                </button>
                <button className={styles.rejectBtn}>
                    Reject
                </button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default PendingLeaves