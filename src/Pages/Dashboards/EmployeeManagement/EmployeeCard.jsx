import React from 'react'
import dp from '../../../Assets/images/abraham.jpg'


import './employeecardcomponent.css'

function EmployeeCard({ firstName, lastName, roleId, startDate, email, phoneNumber, pics, dob }) {
  return (
    <div className='employeeCard'>
      <div>
        <img src={pics ? pics : dp} alt="" />

      </div>

      <div className="details">
        <h5 className="fullName">{`${firstName} ${lastName}`}</h5>
        <h6 className="role">Team Lead</h6>
      </div>

      <div className="details-hover">
        <div className="hover-details-group">
          <label> Email:</label>
          <h6>{email ? email : 'abrahamsolabi@tiidehr.io'}</h6>
        </div>

        <div className="hover-details-group">
          <label> phone no: </label>
          <h6>{phoneNumber ? phoneNumber : "081-2340-5678"}</h6>
        </div>

        <div className="hover-details-group">
          <label> Resumption: </label>
          <h6>{startDate}</h6>
        </div>


        <button className='primary-button'>Edit</button>
      </div>
    </div>
  )
}

export default EmployeeCard