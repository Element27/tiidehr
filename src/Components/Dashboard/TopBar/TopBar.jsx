import React from 'react'
import tiidehrlogo from '../../../Assets/images/logo.png'
import { FaSearch, FaUserAlt } from "react-icons/fa"

// css import
import topbarstyling from './topbar.module.css'
import TopBarDate from './TopBarDate'
import TopBarTime from './TopBarTime'

function TopBar() {


  return (
    <section className={topbarstyling.topbar}>
      {/* <!-- logo --> */}
      <img src={tiidehrlogo} alt="biz logo" className={topbarstyling.comlogo} />

      {/* <!-- Search --> */}
      <div className={topbarstyling.searchbar}>
        <input type="search" name="" id="" className={topbarstyling.input} />
        <div className={topbarstyling.searchicondiv}>
          <FaSearch className={topbarstyling.searchicon} />
        </div>

      </div>

      {/* <!-- time and date --> */}
      <div className={topbarstyling.topbarinfo}>
        <div className={topbarstyling.timedate}>
          <TopBarDate />
          <TopBarTime />
        </div>

        {/* <!-- topbar profile --> */}

        <div className={topbarstyling.profilediv} >
          <FaUserAlt className={topbarstyling.userdp} />
          <div className={topbarstyling.profiledetials}>
            <h5 className="small-text-bold" id="userFullName">
              Olaseni Sanyaolu
            </h5>
            <h5 className="small-text-italic" id="dept">BackEnd</h5>
          </div>
        </div>
      </div>

    </section>
  )
}

export default TopBar
