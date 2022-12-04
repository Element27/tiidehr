import React from 'react'
import styles from "./approvedleave.module.css"
import tableStyles from "./employerleave.module.css"

const RejectedLeaves = () => {
  return (
    <div className={styles.mainContent}>
        <table className={tableStyles.table}>
        <thead className={tableStyles.thead}>
          <tr className={tableStyles.tr}>
            <td className={tableStyles.td}>Employee Name</td>
            <td className={tableStyles.td}>Leave Type</td>
            <td className={tableStyles.td}>From</td>
            <td className={tableStyles.td}>To</td>
            <td className={tableStyles.td}>Days</td>
          </tr>
        </thead>

        <tbody>
            <tr className={tableStyles.tr}>
                <td className={tableStyles.td}> Emmanuel </td>
                <td className={tableStyles.td}> Sick </td>
                <td className={tableStyles.td}> 10/08/2022 </td>
                <td className={tableStyles.td}> 10/09/2022 </td>
                <td className={tableStyles.td}> 2 </td>

            </tr>

        </tbody>
        </table>
    </div>
  )
}

export default RejectedLeaves