'use client';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '../ui/card';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import AddEvent from '../calendar/AddEvent';
import { usePlannerContext } from '@/lib/context/plannerContext';
import CustomCalendar from '../calendar';
import { GetPlans } from '@/actions/planner';

const locales = {
  'en-US': enUS
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});

const PlannerDisplay = () => {
  const { schedules } = usePlannerContext();

  return (
    <div className='p-4'>
      <Card>
        <CardHeader>
          <CardTitle className='flex justify-between'>
            Welcome to your planner
            <AddEvent />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CustomCalendar schedules={schedules} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PlannerDisplay;
