"use client";
import React, { useState } from "react";
import Lottie from "lottie-react";
import checklist from "@/public/images/checklistboard.json";
import { MdMoreHoriz } from "react-icons/md";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Calendar } from "../ui/calendar";

const tasks = [
  {
    title: "Task 1",
    time: "12.00pm",
    valueRange: 30,
  },
  {
    title: "Task 2",
    time: "2.00pm",
    valueRange: 60,
  },
  {
    title: "Task 3",
    time: "4.00pm",
    valueRange: 90,
  },
  {
    title: "Task 3",
    time: "4.00pm",
    valueRange: 10,
  },
];
const EndDashboardDisplay = () => {
  const [date, setDate] = useState(Date | undefined);

  return (
    <div className="mt-20 w-[30rem]">
      <div className="ml-10 h-full">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-fit"
        />
        <div className="px-4 py-4 w-full">
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

              <div className="ml-8 w-60">
                <p className="text-xl tracking-widest"> {task.title}</p>
                <p className="mt-2 text-muted-foreground tracking-widest">
                  {task.time}
                </p>
                <Progress value={task.valueRange} />
              </div>
              <div className="absolute right-6">
                <MdMoreHoriz size={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EndDashboardDisplay;
