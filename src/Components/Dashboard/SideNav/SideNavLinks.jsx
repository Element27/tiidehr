import React from 'react'
import SideNavLink from './SideNavLink'
import {
  FaAddressCard,
  FaBed,
  FaBell,
  FaLayerGroup,
  FaSignOutAlt,
  FaTable,
  FaToolbox,
} from 'react-icons/fa'


function SideNavLinks({ navstate }) {

  const singOutFunc = () => {
    console.log("sign out");
  }

  const navItems = [
    {
      title: "Dashboard",
      icon: <FaTable />,
      link: '/employer'
    },
    {
      title: "Role",
      icon: <FaToolbox />,
      link: '/rolemgtdashb'
    },
    {
      title: "Level",
      icon: <FaLayerGroup />,
      link: '/levelmanagement'
    },
    {
      title: "Leave",
      icon: <FaBed />,
      link: '/leavemanagement'
    },
    {
      title: "Employee",
      icon: <FaAddressCard />,
      link: '/emd'
    },
    {
      title: "Notification",
      icon: <FaBell />,
      link: '/notifications'
    },
    {
      title: "Signout",
      icon: <FaSignOutAlt />,
      link: '/',
      func: singOutFunc,
    },

  ]



  return (
    navItems.map((item, index) => {
      const { icon, title, navstate, link, func } = item
      return <SideNavLink
        key={index}
        icon={icon}
        title={title}
        navstate={navstate}
        link={link}
        func={func}

      />
    })
  )

}

export default SideNavLinks
