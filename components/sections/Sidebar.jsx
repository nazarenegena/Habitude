"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { HiHome } from "react-icons/hi";
import { GiProgression } from "react-icons/gi";
import { FcPlanner } from "react-icons/fc";
import Lottie from "lottie-react";
import todoClip from "@/public/images/todo-clip.json";
import { ImAccessibility } from "react-icons/im";
import AddTask from "../AddTask";

const nav = [
  {
    link: "/dashboard",
    title: "dashboard",
    icon: <HiHome />,
  },
  {
    link: "/dashboard/progress",
    title: "progress",
    icon: <GiProgression />,
  },
  {
    link: "/dashboard/tasks",
    title: "tasks",
    icon: <GiProgression />,
  },
  {
    link: "/dashboard/planner",
    title: "planner",
    icon: <FcPlanner />,
  },
];
const SidebarItem = ({ className, href, title, icon }) => {
  return (
    <Link
      href={href}
      className={`${className} hover:bg-muted active:bg-primary hover:rounded-md text-lg  px-5 py-5  mx-0 my-2 cursor-pointer flex flex-row transition ease-in-out delay-150 duration-300 items-center `}
    >
      <span className="mr-6">{icon}</span>
      {title}
    </Link>
  );
};

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex">
      <div
        className="hidden
        bg-background
        border
        border-muted
            w-[300px]
            flex-col
            gap-y-12
            h-screen
            md:flex
            "
      >
        <div className="flex py-6">
          <Link
            href="/"
            className="text-2xl ml-5 flex tracking-widest font-semibold cursor-pointer"
          >
            Hab <ImAccessibility className="mt-1" size={20} fill="#6937C8" />
            tude
          </Link>
        </div>
        <div className="">
          {nav.map((navItem, index) => (
            <SidebarItem
              // className={pathname == "/" ? "active" : ""}
              className={
                pathname === `${navItem.link}` ? "bg-primary text-white" : null
              }
              key={index}
              title={navItem.title}
              href={navItem.link}
              icon={navItem.icon}
            />
          ))}
        </div>
        <div className="flex flex-col px-2">
          <Lottie animationData={todoClip} loop={true} className="ml-10" />
          <AddTask title={"sidebar add"} />
        </div>
      </div>

      {/* <div>{children}</div> */}
    </div>
  );
};

export default Sidebar;
