import React from 'react'
import SideNav from '../../Components/Dashboard/SideNav/SideNav'
import TopBar from '../../Components/Dashboard/TopBar/TopBar'
import Employercard from './Employercard'
import emdash from "./employerdash.module.css"
import EmployerTable from './EmployerTable'






const Employerdashboard = () => {
  return (
    <>
      <TopBar />
      <section className={emdash.Employerdash}>
        <SideNav />
        <section className={emdash.employerdashboard}>
          <div className={emdash.employercardbox}>
            {/* WHAT RENDERS IN THE BROWSER */}
            <Employercard
              title="Number of Employees"
              count={0}
            />

            <Employercard
              title="Number of Departments"
              count={0} />


            <Employercard
              title="Number of Roles"
              count={0} />


            <Employercard
              title="Number of Levels"
              count={0} />
          </div>
          <EmployerTable />

        </section>

      </section>

    </>
  )
}

export default Employerdashboard