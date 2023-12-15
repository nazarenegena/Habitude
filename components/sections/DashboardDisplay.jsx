import React from "react";
import MiddleDashboardDisplay from "./MiddleDashboardDisplay";
import EndDashboardDisplay from "./EndDashboardDisplay";

const DashboardDisplay = () => {
  return (
    <div className=" flex flex-row justify-evenly  mt-0">
      <section className="pt-5">
        <MiddleDashboardDisplay />
      </section>
      <section className="pt-5">
        <EndDashboardDisplay />
      </section>
    </div>
  );
};

export default DashboardDisplay;
