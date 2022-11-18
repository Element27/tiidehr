import React, { useState } from 'react'

import SideNavLinks from './SideNavLinks'
import sidenavstyle from './sidenav.module.css'
import { FaAngleDoubleLeft, FaBars, FaTimes } from 'react-icons/fa'


function SideNav() {

  // state for toggling side nav on full screen view
  const [openNav, setOpenNav] = useState(true)
  const handleClick = () => {
    setOpenNav(!openNav)
  }

  // state for toggling side nav in medium and small screen
  const [hideNav, setHideNav] = useState(false)
  const closeNav = () => {
    setHideNav(!hideNav)
  }

  return (
    <>
      {/* The fatimes icon closes the side nav while the fabars icon opens the side nav in medium and small screens */}
      {/* Both are placed in the same div container */}
      {/* onclick of the div containing both, toggle nav state on medium ad small screens  */}
      <div onClick={closeNav} className={sidenavstyle.opensidenavdiv}>

        {/* if hidenav is true, show the close button which is fatimes, otherwise if hidenav is false show the menu button which is fabars to open it */}
        {hideNav ? <FaTimes
          className={sidenavstyle.closesidenavbtn}
        /> : <FaBars
          className={sidenavstyle.opensidenavbtn} />
        }

      </div>

      <div className={hideNav ? sidenavstyle.sidebar : sidenavstyle.closesidebar}>

        {/* toggle side nav in large screens */}
        <FaAngleDoubleLeft onClick={handleClick}
          className={openNav ? sidenavstyle.togglenavbtn : sidenavstyle.togglenavbtnrotate} />
        <>
          <SideNavLinks navstate={openNav} />
        </>
      </div>
    </>
  )
}

export default SideNav