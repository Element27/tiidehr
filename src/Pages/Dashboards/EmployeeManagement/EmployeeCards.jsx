import React from 'react'
import { useSelector } from 'react-redux';
import emgCss from './employeeMgt.module.css';


import EmployeeTR from './EmployeeTR';

function EmployeeCards({ openForm }) {
  const { employeeData } = useSelector((state) => state.EmployeeManagementStore)

  return (
    <div className={emgCss.employeeDisplay}>
      <div className={emgCss.cardsTop}>
        <h2 className={emgCss.tableTitle}>Employee Management</h2>
        <button className='primary-button' onClick={openForm}>Add New Employee</button>
      </div>
      <table className={emgCss.employeeTable}>
        <thead>
          <tr>
            {/* <td></td> */}
            <td>Full Name</td>
            <td>Position</td>
            <td>Email</td>
            <td>Phone Number</td>
            <td>Resumption</td>
            <td></td>
          </tr>
        </thead>
        <tbody>

          {employeeData ? employeeData.map((data, index) => {
            const { firstName, lastName, roleId, email } = data;
            //{/* const { startDate, id, dob } = staff; */ }
            return <EmployeeTR
              key={index}
              firstName={firstName ? firstName :"no fName"}
              lastName={lastName ? lastName: "no lName"}
              roleId={roleId ? roleId : "no role id"}
              // startDate={startDate}
              email={email ? email : "no email"}
            // dob={dob}
            />
          }) : "No data to display"}

        </tbody>
      </table>
    </div>)
}

export default EmployeeCards