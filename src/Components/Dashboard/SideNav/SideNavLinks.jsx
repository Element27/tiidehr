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
      link: '/'
    },

  ]



  return (
    navItems.map((item, index) => {
      return <SideNavLink key={index} icon={item.icon} title={item.title} navstate={navstate} link={item.link} />
    })
  )

}

export default SideNavLinks
