'use client';
import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
import { Card } from '../ui/card';

const data = [
  {
    day: 'Monday',
    daytime: 4,
    night: 2,
    activity: 25
  },
  {
    day: 'Tuesday',
    daytime: 3,
    pv: 1,
    activity: 28
  },
  {
    day: 'Wednesday',
    daytime: 2,
    night: 9,
    activity: 29
  },
  {
    day: 'Thursday',
    daytime: 2,
    night: 3,
    activity: 20
  },
  {
    day: 'Friday',
    daytime: 10,
    night: 8,
    activity: 18
  },
  {
    day: 'Saturday',
    daytime: 2,
    night: 3,
    activity: 25
  },
  {
    day: 'Sunday',
    daytime: 3,
    night: 4,
    activity: 21
  }
];

const ProgressLineChart = ({ stats }) => (
  <Card className='w-[100%] h-300'>
    <LineChart
      width={500}
      height={300}
      data={stats}
      margin={{
        top: 5,
        right: 0,
        left: 2,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray='2 2' stroke='#52525B' />
      <XAxis dataKey='title' stroke='#52525B' strokeWidth={1} />
      <YAxis stroke='#151516' strokeWidth={1} />
      <Tooltip />
      <Legend />
      <Line
        type='monotone'
        dataKey='value'
        stroke='#6225C5'
        activeDot={{ r: 8 }}
      />
      <Line type='monotone' dataKey='daytime' stroke='#E11D48' />
    </LineChart>
  </Card>
);

export default ProgressLineChart;
