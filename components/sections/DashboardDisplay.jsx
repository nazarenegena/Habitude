import React from "react";
import MiddleDashboardDisplay from "./MiddleDashboardDisplay";
import EndDashboardDisplay from "./EndDashboardDisplay";

const DashboardDisplay = () => {
  return (
    <div className="grid grid-flow-col h-full mt-0">
      <section className="col-span-4 px-10 pt-5">
        <MiddleDashboardDisplay />
      </section>
      <section className="border border-muted col-span-2 px-10 pt-5">
        <EndDashboardDisplay />
      </section>
    </div>
  );
};

export default DashboardDisplay;
