"use client";
import Link from "next/link";
import React from "react";
import Box from "../ui/box";

const Sidebar = ({ children }) => {
  return (
    <div className="flex h-full">
      <div
        className="hidden
        bg-muted
            h-full
            w-[300px]
            flex-col
            gap-y-2
            p-2 md:flex"
        
      >
      
        {" "}
        <Box className="px-5 py-5">
            <Link href="/">home</Link>

        </Box>
        <Box className="px-5 py-5">
            <Link href="/dashboard">Dashboard</Link>

        </Box>
        <Box className="px-5 py-5">
            <Link href="/dashboard/progress">Progress</Link>

        </Box>
        <Box className="px-5 py-5">
            <Link href="/dashboard/planner">Planner</Link>

        </Box>
        <Box className="px-5 py-5">
            <Link href="/dashboard/tasks">To-do</Link>

        </Box>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
