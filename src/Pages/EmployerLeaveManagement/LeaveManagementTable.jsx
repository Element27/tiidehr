import React from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import styles from "./employerleave.module.css";

const LeaveManagementTable = (props) => {
  let { leavePolicy, leavePolicies, setLeavePolicies, fetchLeavePolicies } =
    props;
    // Return an empty object if the leavePolicy is empty to prevent the app from crashing
  const { title, duration, description } = leavePolicy || {};
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <td className={styles.td}>Type</td>
            <td className={styles.td}>Duration (Days)</td>
            <td className={styles.td}>Description</td>
            <td className={styles.td}>Action</td>
          </tr>
        </thead>

        {/* LeavePolicies will be undefined on render, hence we check for when the length is > 0 before we map */}
        {leavePolicies.length > 0 ? (
          leavePolicies.map((leavePolicy, index) => {
            const { title, duration, description } = leavePolicy;
           
            return (
              <>
                <tbody>
                  <tr className={styles.tr}>
                    <td className={styles.td}>{title}</td>
                    <td className={styles.td}>{duration}</td>
                    <td className={styles.td}>{description}</td>
                    <td>
                      <FaEdit className={styles.edit} />
                      <FaRegTrashAlt className={styles.delete} />
                    </td>
                  </tr>
                </tbody>
              </>
            );
          })
        ) : (
          <>
            <tbody>
              <tr className={styles.tr}>
                <td className={styles.td}>No records found. Please create a leave policy first.</td>
              </tr>
            </tbody>
          </>
        )}
      </table>
    </>
  );
};

export default LeaveManagementTable;

{
  /* <ListSection
              setisDeleting={setisDeleting}
              setTodoToDelete={setTodoToDelete}
              fetchTodos={fetchTodos}
              todo={todo}
              key={todo.id}
              todos={todos}
              settodos={settodos}
            /> */
}

{
  /* <tr className={styles.tr}> */
}
{
  /* <td className={styles.td}>Sick</td>
            <td className={styles.td}>10</td>
            <td className={styles.td}>Sickness</td>
            <td>
              <FaEdit className={styles.edit} />
              <FaRegTrashAlt className={styles.delete} />
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Casual</td>
            <td className={styles.td}>3</td>
            <td className={styles.td}>Miscellanous</td><td>
              <FaEdit className={styles.edit}  />
              <FaRegTrashAlt className={styles.delete}  />
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.td}>Maternity</td>
            <td className={styles.td}>40</td>
            <td className={styles.td}>Maternal</td><td>
              <FaEdit className={styles.edit}  />
              <FaRegTrashAlt className={styles.delete}  />
            </td> */
}
// </tr>
