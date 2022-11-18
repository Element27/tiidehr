import React from 'react'
import { FaBackward, FaForward } from 'react-icons/fa'
import { FaPlusCircle } from 'react-icons/fa'


import emgCss from './employeeMgt.module.css';


const EmployeeMgtTop = ({ openmodal }) => {
  return (
    <div className={emgCss.top}>
      <FaPlusCircle className={emgCss.icon} onClick={openmodal} />
      <div className={emgCss.topscroll}>

        <FaBackward className={emgCss.icon} />

        <FaForward className={emgCss.icon} />

      </div>
      <p>Showing: <span>0</span> - <span>0</span> of <span>0</span> </p>
    </div>
  )
}

export default EmployeeMgtTop 