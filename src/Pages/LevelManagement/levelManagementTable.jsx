import React from 'react'
import styles from './levelmanagement.module.css'
import { FaEdit, FaRegTrashAlt } from 'react-icons/fa'

function LevelmanagementTable() {

  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <td className={styles.td}>
            Level
          </td>
          <td className={styles.td}>
            Description 
          </td>
          <td className={styles.td}>
            Salary <span>per month</span> (<span id="selectCurrency"></span>)
          </td>
          <td className={styles.td}>
            Action 
          </td>
        </thead>

        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>2</td>
            <td className={styles.td}>Intern</td>
            <td className={styles.td}>90,000</td>
            <td>
              <FaEdit className={styles.edit} />
              <FaRegTrashAlt className={styles.delete} />
            </td>
          </tr>

          
        </tbody>
      </table>
    </>
  )

}

export default LevelmanagementTable