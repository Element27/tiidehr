import React from 'react'
import dp from '../../../Assets/images/abraham.jpg'
import emgCss from './employeeMgt.module.css';

const EmployeeTR = ({ firstName, lastName, roleId, email, phoneNumber }) => {
  //staff sub ibjct has been removed until fix is done
  return (
    <tr className={emgCss.tablerow}>
      {/* // <td> <img src={pics ? pics : dp} alt="" /> </td> */}
      <td>{`${firstName} ${lastName}`}</td>
      <td>{roleId}</td>
      <td>{email ? email : 'abrahamsolabi@tiidehr.io'}</td>
      <td>{phoneNumber ? phoneNumber : "081-2340-5678"}</td>
      <td>startDate</td>
      <td><button className="primary-button">Edit</button></td>
    </tr>
  )
}

export default EmployeeTR