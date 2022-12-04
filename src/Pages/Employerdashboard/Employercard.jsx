import React from 'react'
import emdash from "./employerdash.module.css"


// DESTRUCTURING
const Employercard = ({ title, count }) => {
  return (
    <section className={emdash.contentboxes}>
      <h5 className={emdash.title}>{title}</h5>

      <div className={emdash.leavecounter}>
        <div className={emdash.leavecount}>{count}</div>
      </div>
    </section>

  )
}

export default Employercard