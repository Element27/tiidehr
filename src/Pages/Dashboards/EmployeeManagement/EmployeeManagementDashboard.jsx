import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import SideNav from '../../../Components/Dashboard/SideNav/SideNav';
import TopBar from '../../../Components/Dashboard/TopBar/TopBar';
import AddNewEmployeeFormik from './AddNewEmployeeFormik';
// import AddEmployeeModal from './AddEmployeeModal';
import EmployeeCards from './EmployeeCards';

import emgCss from './employeeMgt.module.css';
import EmployeeMgtTop from './EmployeeMgtComponents';
import fetchEmployeeData from './FetchEmployeeMgtData';

function EmployeeManagementDashboard({ localToken }) {

  const [employeeData, setEmployeeData] = useState([])

  useEffect(() => {
    fetchEmployeeData(localToken, setEmployeeData)
  }, [])

  console.log("employeeData:", employeeData);

  const [modalState, setModalState] = useState(false)

  const openModal = () => {
    setModalState(true)
  }

  const closeModal = () => {
    setModalState(false)
  }

  return (
    <>
      <TopBar />
      <section className={emgCss.employeeMgt} >
        {modalState ?
          <><div className={emgCss.blur} onClick={closeModal}></div>
            <div className={emgCss.emgformpopup}>
              <FaTimes className={emgCss.close} onClick={closeModal} />
              <AddNewEmployeeFormik />
            </div> </> : null}


        <SideNav />
        <section className={emgCss.employeeMgtDashboard}>
          <EmployeeMgtTop openmodal={openModal} />
          <EmployeeCards employeeData={employeeData} />
          <div className={emgCss.buttonstyle}>
            <button className='primary-button' onClick={openModal}>Add New</button>
          </div>
          <EmployeeMgtTop openmodal={openModal} />
          {/*  */}

          {/*  */}
        </section>
      </section>
      {/* <AddEmployeeModal /> */}
    </>
  );
};

export default EmployeeManagementDashboard

