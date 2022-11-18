import React from 'react'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import styles from "./employeeleave.module.css";

const LeaveManagementTable = () => {
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <td className={styles.td}>
            Type
          </td>
          <td className={styles.td}>
            Date Applied 
          </td>
          <td className={styles.td}>
            Duration (Days)
          </td>
          <td className={styles.td}>
            Status 
          </td>
          <td className={styles.td}>
            Action 
          </td>
        </thead>

        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>Sick</td>
            <td className={styles.td}>10</td>
            <td className={styles.td}>Sickness</td>
            <td className={styles.td}>Pending</td>
            <td>
              <FaEdit className={styles.edit} />
              <FaRegTrashAlt className={styles.delete} />
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Casual</td>
            <td className={styles.td}>3</td>
            <td className={styles.td}>Miscellanous</td>
            <td className={styles.td}>Approved</td>
            <td>
              <FaEdit className={styles.edit}  />
              <FaRegTrashAlt className={styles.delete}  />
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Maternity</td>
            <td className={styles.td}>40</td>
            <td className={styles.td}>Maternal</td>
            <td className={styles.td}>Completed</td>
            <td>
              <FaEdit className={styles.edit}  />
              <FaRegTrashAlt className={styles.delete}  />
            </td>
          </tr>

          
        </tbody>
      </table>

    </>
  )
}

export default LeaveManagementTable