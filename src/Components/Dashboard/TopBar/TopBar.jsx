import React from 'react'
import tiidehrlogo from '../../../Assets/images/logo.png'
import { FaUserAlt } from "react-icons/fa"

// css import
import topbarstyling from './topbar.module.css'
import TopBarDate from './TopBarDate'
import TopBarTime from './TopBarTime'

function TopBar() {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const firstName = currentUser[0].firstName;
  const lastName = currentUser[1].lastName;

  return (
    <section className={topbarstyling.topbar}>
      {/* <!-- logo --> */}
      <img src={tiidehrlogo} alt="biz logo" className={topbarstyling.comlogo} />

      {/* <!-- Search --> */}
      {/* <div className={topbarstyling.searchbar}>
        <input type="search" name="" id="" className={topbarstyling.input} />
        <div className={topbarstyling.searchicondiv}>
          <FaSearch className={topbarstyling.searchicon} />
        </div>

      </div> */}

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
            <p className={topbarstyling.smallTextBold} id="userFullName">
              {`${firstName} ${lastName}`}
            </p>
            {/* <h5 className="small-text-italic" id="dept">BackEnd</h5> */}
          </div>
        </div>
      </div>

    </section>
  )
}

export default TopBar
