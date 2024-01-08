'use client';
import React, { useState } from 'react';
import Lottie from 'lottie-react';
import checklist from '@/public/images/checklistboard.json';
import { MdMoreHoriz } from 'react-icons/md';
import { Progress } from '../ui/progress';
import { Calendar } from '../ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { useTaskContext } from '@/lib/context/taskContext';
import { Clock10Icon } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';

const EndDashboardDisplay = () => {
  const { tasks } = useTaskContext();

  return (
    <Card className='w-[30rem]'>
      <CardHeader>
        <CardTitle>Today`s Tasks</CardTitle>
        <CardDescription>Aim to complete your task`s today.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='h-full'>
          {/* <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border w-fit"
        /> */}
          {tasks.map(task => (
            <div
              key={task.id}
              className='hover:cursor-pointer flex items-center hover:bg-muted hover:rounded-md py-2 relative'
            >
              <div className='h-10 w-10 bg-primary/10 rounded-sm'>
                <Lottie
                  animationData={checklist}
                  loop={true}
                  // className='w-10 h-10'
                />
              </div>

              <div className='ml-8'>
                <p className='text-sm font-medium mb-1'>{task.name}</p>
                <div className='flex items-center text-muted-foreground'>
                  <Clock10Icon size={14} />
                  <p className='text-xs font-semibold text-muted-foreground mx-2'>
                    {task.start_time}
                  </p>
                </div>
              </div>
              <div className='absolute right-6'>
                <Checkbox />
                <MdMoreHoriz size={20} />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default EndDashboardDisplay;
