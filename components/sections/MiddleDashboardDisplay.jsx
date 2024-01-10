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
import { getRandomQuotes } from '@/actions/quotes';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Image from 'next/image';
import ProgressPieChart from '../charts/pieChart';

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
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    async function fetchStats() {
      const data = await GetTaskStats();
      const quotes = await getRandomQuotes();
      setQuotes(quotes);
      setStats(data);
    }
    fetchStats();
  }, []);

  console.log(quotes, 'ststa');

  return (
    <div>
      <div className='grid grid-cols-3 gap-2'>
        {stats?.map((stat, index) => {
          return (
            <Card key={stat.title}>
              <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                <CardTitle className='text-sm font-medium'>
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className='text-2xl font-bold'>{stat.value}</div>
                <p className='text-xs text-muted-foreground'>
                  {quotes[index].q}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className='my-3'>
        <p className='text-muted-foreground text-lg font-semibold'>
          Your Daily dose of motivation
        </p>
      </div>

      <div className='grid grid-cols-2 gap-1'>
        <Carousel
          opts={{
            loop: true,
            auto: true
          }}
        >
          <CarouselContent>
            {quotes.map(quote => {
              const url = quote?.image_url;
              return (
                <CarouselItem
                  className='h-300 flex justify-center items-center'
                  key={quote.q}
                >
                  <Card
                    className={`flex justify-center items-center text-center h-[300px] bg-no-repeat bg-transparent	bg-cover bg-blend-darken`}
                    style={{ backgroundImage: `url(${url})` }}
                  >
                    <CardContent className='h-full rounded-sm flex justify-center items-center w-[100%] backdrop-brightness-50'>
                      <CardDescription className=' px-20 text-lg font-semibold'>
                        <blockquote className='p-4 my-4 bg-gray-50 border-l-4 border-gray-300 bg-opacity-20'>
                          <p className='text-xl italic font-medium leading-relaxed text-white'>
                            {quote.q}
                          </p>
                        </blockquote>
                        <p className='text-md italic font-medium leading-relaxed text-white'>
                          {quote.a}
                        </p>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <ProgressLineChart stats={stats} /> */}
        <Card>
          <CardContent>
            <ProgressPieChart
              stats={stats?.map(stat => ({ ...stat, name: stat.title }))}
            />
          </CardContent>
        </Card>
      </div>

      {/* <div className='grid grid-cols-2 gap-x-8 gap-y-12 mt-16'>
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
      </div> */}
    </div>
  );
};

export default MiddleDashboardDisplay;
