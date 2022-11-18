import React from "react";
import TopBar from "../../Components/Dashboard/TopBar/TopBar";
import EmployeeSideNav from "./EmployeeSideNav";
import edsh from "./employeedashboard.module.css";
import EmployeedashboardHeader from "./EmployeedashboardHeader";
import EmpActivitiesContainer from "./EmpActivitiesContainer";
import EmpNotificationsContainer from "./EmpNotificationsContainer";

const Employeedashboard = () => {
  return (
    <>
      <TopBar />
      <section className={edsh.employeedashboardcontent}>
        <EmployeeSideNav />

        <div className={edsh.employeesectioncontainer}>
          <div className={edsh.employeesectionsubcontainer}>
            <section className={edsh.subsubcontainer}>
              <EmployeedashboardHeader title="Activities" />
              <div className={edsh.subsubcontainerbody}>
                <EmpActivitiesContainer />
              </div>
            </section>

            {/* NOTIFICATION  */}
            <section className={edsh.subsubcontainer}>
              <EmployeedashboardHeader title="Notifications" />
              <div className={edsh.subsubcontainerbody}>
                <EmpNotificationsContainer />
              </div>
            </section>
          </div>

          <section className={edsh.subsubcontainer}>
            <EmployeedashboardHeader title="Todo" />
          </section>
        </div>
      </section>
    </>
  );
};

export default Employeedashboard;
