import React from 'react'
import tiidehrlogo from '../../../Assets/images/logo.png'
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa"

// css import
import topbarstyling from './topbar.module.css'
import TopBarDate from './TopBarDate'
import TopBarTime from './TopBarTime'

//Additional imports for logout functionality
import userServices from '../../../_Helper/_Redux/redux/User/user.services'
import { toast } from 'react-toastify'
import { useNavigate } from "react-router-dom";
// import { getToken } from '../../../_Helper/_Redux/Services/globalUtil'

function TopBar() {

  // const {access} = getToken()

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const firstName = currentUser[0].firstName;
  const lastName = currentUser[1].lastName;

  const navigate = useNavigate();

  const logOutIcon = (
    <FaSignOutAlt
      className={topbarstyling.signoutIcon}
      size="20px"
      color="#000080"
    />
  );

  const handleLogout = () => {
    userServices.logOut().then((response)=>{
     
      navigate("/");
      toast.success("Logout Successful", {position: "top-center"})
  }).catch((error)=>{
      toast.success("Logout failed, please try again", {position: "top-center"})
  })
  }

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
        <div className={topbarstyling.logooutBtnWrapper} onClick={()=>handleLogout()}>
            {logOutIcon}
        </div>
        </div>

      </div>

    </section>
  )
}

export default TopBar