"use client";
import React, { useState } from "react";
import ProgressLineChart from "../charts/lineCharts";
import { Card, CardContent, CardTitle, CardDescription } from "../ui/card";
import Link from "next/link";

const sidebarNav = [
  {
    link: "/dashboard/progress",
    title: "Your Highlights",
    description: "Checkout your daily activities",
  },
  {
    link: "/dashboard/progress",
    title: "Assessments",
    description: "Get to assess your progress",
  },
  {
    link: "/dashboard/planner",
    title: "Goals",
    description: "Plan your goals and daily intentions",
  },
  {
    link: "/dashboard/planner",
    title: "News",
    description: "Subscribe to get tips on healthy habits",
  },
];

const MiddleDashboardDisplay = () => {
  return (
    <div>
      <div>
        <p className="text-muted-foreground text-lg tracking-widest ">
          Monitor your progress
        </p>
      </div>
      <div className="mt-5 ">
        <ProgressLineChart />
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-12 mt-16">
        {sidebarNav.map((sidebarNavItem, index) => (
          <Card className=" h-32 hover:border-primary" key={index}>
            <CardContent className="flex flex-row justify-center items-center py-6">
              <Link href={sidebarNavItem.link}>
                <p className="text-lg font-semibold tracking-widest ">
                  {sidebarNavItem.title}
                </p>
                <p className="mt-2 text-muted-foreground text-medium tracking-widest">
                  {sidebarNavItem.description}
                </p>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MiddleDashboardDisplay;
