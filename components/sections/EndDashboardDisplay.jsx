"use client";
import React from "react";
import Lottie from "lottie-react";
import checklist from "@/public/images/checklistboard.json";
import { MdMoreHoriz } from "react-icons/md";
import { Card, CardDescription, CardTitle } from "../ui/card";

const tasks = [
  {
    title: "Task 1",
    time: "12.00pm",
  },
  {
    title: "Task 2",
    time: "2.00pm",
  },
  {
    title: "Task 3",
    time: "4.00pm",
  },
];
const EndDashboardDisplay = () => {
  return (
    <div>
      <p className="text-muted-foreground text-lg tracking-widest flex justify-center">
        Your Activities
      </p>
      <Card className="px-4 py-4 mt-5">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="mt-2 hover:cursor-pointer flex items-center hover:bg-muted hover:rounded-md py-4 relative"
          >
            <div>
              <Lottie
                animationData={checklist}
                loop={true}
                className="w-20 h-10"
              />
            </div>

            <div className="ml-8">
              <p className="text-xl tracking-widest"> {task.title}</p>
              <p className="mt-2 text-muted-foreground tracking-widest">
                {task.time}
              </p>
            </div>
            <div className="absolute right-6">
              <MdMoreHoriz size={20} />
            </div>
          </div>
        ))}
      </Card>
      <p className="text-muted-foreground text-lg tracking-widest flex justify-center mt-10">
        Your Progress
      </p>
    </div>
  );
};

export default EndDashboardDisplay;
