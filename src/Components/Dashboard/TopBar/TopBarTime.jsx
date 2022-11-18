import React from 'react'

// css import
import topbarstyling from './topbar.module.css'

const TopBarTime = () => {

  let date = new Date();

  let hour = date.getHours()
  let minute = date.getMinutes()
  let seconds = date.getSeconds()
  console.log(hour, minute)

  const timer = () => {
    setTimeout(() => {
      let seconds = date.getSeconds()
    }, 1000);
  }


  return (
    <div className={topbarstyling.settime}>
      <p>
        <span className="hour">{hour > 12 ? hour - 12 : hour}</span>:
        <span className="minutes" onChange={timer}>{minute} </span>
        <span className="am-pm"> {hour < 12 ? " am" : " pm"}</span>
      </p>
    </div>
  )
}

export default TopBarTime