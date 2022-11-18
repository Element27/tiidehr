import React from 'react'
// import oneImg from '../../Assets/images/abraham.jpg'

import './membercard.css'

function MemberCard({ imgSrc, memberName, stack }) {
  return (
    <div className='card'>
      <img
        src={imgSrc}
        alt={memberName}
        className='member-img'
      />
      <div className='text'>
        <h5>{memberName}</h5>
        <h6>{stack}</h6>
      </div>
    </div>
  )
}

export default MemberCard