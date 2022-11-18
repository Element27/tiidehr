import React from "react";
import edh from "./edh.module.css" 

const EmployeedashboardHeader = ({title}) => {
  return (
    <div className={edh.subcontainertopbar}>
      <h4 className={edh.h4}>{title}</h4>
      {/* <i className="fa-solid fa-bars-progress" /> */}
    </div>
  );
};

export default EmployeedashboardHeader;
