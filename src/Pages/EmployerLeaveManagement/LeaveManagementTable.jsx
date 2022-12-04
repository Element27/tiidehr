// External Imports
import React, { useState, useEffect } from "react";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

//Internal Imports
import DonutSpinner from "../../Components/Loaders/DonutSpinner";
import styles from "./employerleave.module.css";
import fetchLeavePolicies from "./fetchLeave";
import { getToken } from "../../_Helper/_Redux/Services/globalUtil";
import { loadLeavePolicies } from "../../_Helper/_Redux/leaveManagement/leave.action";

const LeaveManagementTable = (props) => {
  const {clickFunction} = props;

  const [isLoading, setIsLoading] = useState(true);


  // Get access token from local storage
  const [token, setToken] = useState(false);
  const {access} = getToken();
  useEffect(() => {
    if (access) {
      setToken(true);
    }
  }, [access]);

  const {leaves} = useSelector(state=>state.leaveManagementStore); 
  const dispatch = useDispatch();


  //deleteFunctionality
  const [isDeleting, setIsDeleting] = useState(false);

  // const deleteLeave = async (id) => {
  //   setIsDeleting(true);
  //   console.log("Making request to the backend");

  //   try {
  //     const response = await axios.delete(
  //       `https://tiider-hr-tiidelab.herokuapp.com/v1/leavePolic/${id}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localToken[0].access}`,
  //         },
  //       }
  //     )
  //     .then((response)=>{
  //       fetchLeavePolicies().then(()=>{
  //         setIsDeleting(false)
  //       toast.success("Leave Policy Deleted Successfully", {
  //         position: "top-center",
  //       });
  //       })
  //       return response;
  //     })
      

  //    .catch((error)=> {
  //     toast.error("Unable to delete Leave Policy, Please try again", {
  //       position: "top-center",
  //     });
  //   }
    
  //    )
      

  //   return response;
  // };

  function deleteLeave(id) {
    setIsDeleting(true);
    const response = axios
      .delete(`https://tiider-hr-tiidelab.herokuapp.com/v1/leavePolicy/${id}`, 
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
      ) // Delete from DB first
      .then((response) => {
        fetchLeavePolicies(access).then( (response) => {
            dispatch(loadLeavePolicies(response))
          }
        );
        toast.success(
          "Leave Policy Deleted Successfully",
          {
            position: "top-center",
          }
        );
        
        return response;
      })
      .catch((error) => {
        toast.error("Unable to delete Leave policy, please try again", { position: "top-center" });
      });

    return response;
  }

  return (
    <>
    <div className={styles.tableWrapper} > 
          <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <td className={styles.td}>Type</td>
            <td className={styles.td}>Duration (Days)</td>
            <td className={styles.td}>Description</td>
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
              ? leaves.map((leave, index) => {
              
                  const {id,  title, duration, description } = leave || {};
                  return (
                    <>
                      <tr className={styles.tr} key={id}>
                        <td className={styles.td}>{title}</td>
                        <td className={styles.td}>{duration}</td>
                        <td className={styles.td}>{description}</td>
                        <td>
                          <FaEdit className={styles.edit} />
                          
                          <FaRegTrashAlt
                            className={styles.delete}
                            onClick={() => deleteLeave(id)}
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

      <div className={styles.createBtnContainer}>
          <button className = {styles.createButton} type="button" 
          // the onclick function is called here
           onClick={clickFunction}>
            Create Leave Policy
          </button>
        </div>
    </>
  );
};

export default LeaveManagementTable;

