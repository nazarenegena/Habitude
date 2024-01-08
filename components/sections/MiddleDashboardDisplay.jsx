'use client';
import React, { useEffect, useState } from 'react';
import ProgressLineChart from '../charts/lineCharts';
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader
} from '../ui/card';
import Link from 'next/link';
import { GetTaskStats } from '@/actions/task';

const sidebarNav = [
  {
    link: '/dashboard/progress',
    title: 'Your Highlights',
    description: 'Checkout your daily activities'
  },
  {
    link: '/dashboard/progress',
    title: 'Assessments',
    description: 'Get to assess your progress'
  },
  {
    link: '/dashboard/planner',
    title: 'Goals',
    description: 'Plan your goals and daily intentions'
  },
  {
    link: '/dashboard/planner',
    title: 'News',
    description: 'Subscribe to get tips on healthy habits'
  }
];

const MiddleDashboardDisplay = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    async function fetchStats() {
      const data = await GetTaskStats();
      setStats(data);
    }
    fetchStats();
  }, []);

  console.log(stats, 'ststa');

  return (
    <div>
      <div className='grid grid-cols-3 gap-2'>
        {stats?.map(stat => {
          return (
            <Card key={stat.title}>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  {stat.title}
                </CardTitle>
                {/* <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  className='h-4 w-4 text-muted-foreground'
                >
                  <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                </svg> */}
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>{stat.value}</div>
                <p className='text-xs text-muted-foreground'>
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div>
        <p className='text-muted-foreground text-lg tracking-widest '>
          Monitor your progress
        </p>
      </div>
      <div className='mt-5 '>
        <ProgressLineChart />
      </div>

      <div className='grid grid-cols-2 gap-x-8 gap-y-12 mt-16'>
        {sidebarNav.map((sidebarNavItem, index) => (
          <Card className=' h-32 hover:border-primary' key={index}>
            <CardContent className='flex flex-row justify-center items-center py-6'>
              <Link href={sidebarNavItem.link}>
                <p className='text-lg font-semibold tracking-widest '>
                  {sidebarNavItem.title}
                </p>
                <p className='mt-2 text-muted-foreground text-medium tracking-widest'>
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
