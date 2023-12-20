'use client';
import Link from 'next/link';
import React from 'react';
import { HiHome } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { GiProgression } from 'react-icons/gi';
import { FcPlanner } from 'react-icons/fc';
import Lottie from 'lottie-react';
import todoClip from '@/public/images/todo-clip.json';
import { IoIosAdd } from 'react-icons/io';
import { ImAccessibility } from 'react-icons/im';
import { ModeToggle } from '../toggle-mode';

const nav = [
  {
    link: '/dashboard',
    title: 'Dashboard',
    icon: <HiHome />
  },
  // {
  //   link: '/dashboard',
  //   title: 'dashboard',
  //   icon: <MdDashboard />
  // },
  {
    link: '/dashboard/progress',
    title: 'progress',
    icon: <GiProgression />
  },
  {
    link: '/dashboard/tasks',
    title: 'tasks',
    icon: <GiProgression />
  },
  {
    link: '/dashboard/planner',
    title: 'planner',
    icon: <FcPlanner />
  }
];
const SidebarItem = ({ className, href, title, icon }) => {
  return (
    <Link
      href={href}
      className={`${className} hover:bg-primary hover:rounded-md text-lg  px-5 py-5  mx-0 my-8 cursor-pointer flex flex-row transition ease-in-out delay-150 duration-300 items-center `}
    >
      <span className='mr-6'>{icon}</span>
      {title}
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className='flex'>
      <div
        className='hidden
        bg-background
        border
        border-muted
            w-[300px]
            flex-col
            gap-y-2
            p-2 md:flex
            '
      >
        <div className='flex mt-10'>
          <p className='text-2xl ml-5 flex tracking-widest font-semibold'>
            Hab <ImAccessibility className='mt-1' size={20} fill='#6937C8' />
            tude
          </p>
        </div>
        <div className='mt-5'>
          {nav.map((navItem, index) => (
            <SidebarItem
              key={index}
              title={navItem.title}
              href={navItem.link}
              icon={navItem.icon}
            />
          ))}
        </div>
        <div className=''>
          <Lottie animationData={todoClip} loop={true} className='ml-10' />
          <div className='flex items-center justify-center bg-muted font-semibold cursor-pointer ml-10 py-2 w-44 rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 hover:bg-primary duration-300'>
            <IoIosAdd className='mr-3' size={20} />
            <Link href='/dashboard/tasks'>Add Task</Link>
          </div>
        </div>
        <div className='mt-12 ml-56'>
          <ModeToggle />
        </div>
      </div>

      {/* <div>{children}</div> */}
    </div>
  );
};

export default Sidebar;
