import React, { useState } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteLeave,
  fetchAppliedLeaves,
} from "../../_Helper/_Redux/redux/LeaveApplication/leaveApplication.services";
import { getToken } from "../../_Helper/_Redux/Services/globalUtil";
import styles from "./employeeleave.module.css";
import { toast } from "react-toastify";
import { loadAppliedLeaves } from "../../_Helper/_Redux/redux/LeaveApplication/leaveApplication.action";

const LeaveManagementTable = (props) => {
  const {showEditForm, setLeaveToEdit } = props;


  const { access } = getToken();
  const { leaves } = useSelector((state) => state.appliedLeavesStore);
  const dispatch = useDispatch();

  //Edit Functionality
  const handleEdit = (leave)=>{
    showEditForm();
    setLeaveToEdit(leave)
    
    
  }


  

  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <td className={styles.td}>Type</td>
              <td className={styles.td}>Start Date</td>
              <td className={styles.td}>End Date</td>
              <td className={styles.td}>Description</td>
              <td className={styles.td}>Status</td>
              <td className={styles.td}>Action</td>
            </tr>
          </thead>

          <tbody>
            <React.Fragment>
              {/* {isLoading && <DonutSpinner />} */}

              {!isLoading && leaves.length < 1 && (
                <p style={{ textAlign: "center" }}>No records found</p>
              )}

              {/* Leaves will be undefined on render, hence we check for when the length is > 0 before we map */}
              {leaves.length > 0
                ? leaves.map((leave) => {
                    const { id, title, description, startDate, endDate } =
                      leave || {};
                    return (
                      <>
                        <tr className={styles.tr} key={id}>
                          <td className={styles.td}>{title}</td>
                          <td className={styles.td}>
                            {startDate.slice(0, 10)}
                          </td>
                          <td className={styles.td}>{endDate.slice(0, 10)}</td>
                          <td className={styles.td}>{description}</td>
                          <td className={styles.td}>Pending</td>
                          <td>
                            <FaEdit className={styles.edit} onClick={()=>{handleEdit(leave)}} />

                            <FaRegTrashAlt
                              className={styles.delete}
                              onClick={() =>
                                deleteLeave(access, id)
                                  .then((response) => {
                                    fetchAppliedLeaves(access).then(
                                      (response) => {
                                        dispatch(loadAppliedLeaves(response));
                                      }
                                    );
                                    toast.success(
                                      "Leave Application Deleted Successfully",
                                      {
                                        position: "top-center",
                                      }
                                    );
                                  })
                                  .catch((error) => {
                                    toast.error(
                                      "Unable to delete Leave Application, please try again",
                                      { position: "top-center" }
                                    );
                                  })
                              }
                            />
                          </td>
                        </tr>
                      </>
                    );
                  })
                : null}
            </React.Fragment>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaveManagementTable;
