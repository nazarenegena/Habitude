import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'task 1', value: 400 },
  { name: 'task 2', value: 300 },
  { name: 'task 3', value: 300 },
  { name: 'task 4', value: 200 }
];

const COLORS = ['#25c540', '#E11D48', '#6225C5', '#3979A8'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ProgressPieChart = ({ stats }) => {
  return (
    <PieChart width={500} height={250}>
      <Pie
        data={stats}
        // cx='50%'
        // cy='50%'
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={100}
        fill='#8884d8'
        dataKey='value'
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${entry.title}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default ProgressPieChart;
