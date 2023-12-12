"use client";
import Link from "next/link";
import React from "react";

const nav = [
  {
    link: "/",
    title: "home",
    icon: "icone"
  },
   {
    link: "/dashboard",
    title: "dashboard",
    icon: "icone"
  },
    {
    link: "/dashboard/progress",
    title: "progress",
    icon: "icone"
  },
     {
    link: "/dashboard/planner",
    title: "planner",
    icon: "icone"
  },
       {
    link: "/dashboard/tasks",
    title: "tasks",
    icon: "icone"
  }
]
const SidebarItem = ({ className, href, title }) => {
  return (
      
      <Link href={href} className={`${className} hover:bg-accent  px-5 py-5  mx-0 my-8 cursor-pointer flex flex-row `}>{title}</Link>
    
  )
}

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
        <div className="mt-4 ">Logo here</div>
        <div className="mt-20">
 {nav.map((navItem, index) => (
              <SidebarItem key={index} title={navItem.title} href={navItem.link} />

))}

        </div>

         
       
        {" "}
       
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Sidebar;
