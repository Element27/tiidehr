import React from 'react'
import SideNav from '../../Components/Dashboard/SideNav/SideNav'
import TopBar from '../../Components/Dashboard/TopBar/TopBar'
import Levels from './levels'
import styles from './levelmanagement.module.css'

function ManagementLevel() {

  
    return (
        <>
          <TopBar />
    
          <div className={styles.mainContainer}>
          <SideNav />
          <Levels/>
          </div>
        </>
    )
}

export default ManagementLevel