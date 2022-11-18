import React from 'react'
import emgCss from './employeeMgt.module.css';


import EmployeeCard from './EmployeeCard'

function EmployeeCards({ employeeData }) {

  const displayAllEmployee = employeeData.map((employee) => {
    const { firstName, lastName, roleId, staff, email } = employee;
    const { startDate, id, dob } = staff;
    console.log(firstName, lastName, roleId, startDate)
    return < EmployeeCard
      key={id}
      firstName={firstName}
      lastName={lastName}
      roleId={roleId}
      startDate={startDate}
      email={email}
      dob={dob}
    />

  })

  // console.log(displayAllEmployee)

  return (
    <section className={emgCss.employeeCards} >
      {displayAllEmployee}

      {/* <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard />
      <EmployeeCard /> */}
    </section>
  )
}

export default EmployeeCards