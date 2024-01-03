'use client';

import { createContext, useContext, useState } from 'react';

const PlannerContext = createContext([]);

export const PlannerContextProvider = ({ children }) => {
  const [schedules, setSchedules] = useState([
    {
      start: '2023-12-20',
      end: '2023-12-27',
      title: 'Work',
      isDraggable: true,
      id: '1',
      start_time: '10PM',
      end_time: '11PM',
      color: 'red'
    },
    {
      start: '2023-12-12',
      end: '2023-12-18',
      title: 'Work 1',
      isDraggable: false,
      id: '2',
      start_time: '10PM',
      end_time: '11PM',
      color: 'blue'
    },
    {
      start: '2023-12-23',
      end: '2023-12-26',
      title: 'Work 3',
      id: '3',
      end_time: '11PM',
      color: 'rose'
    }
  ]);
  return (
    <PlannerContext.Provider value={{ schedules, setSchedules }}>
      {children}
    </PlannerContext.Provider>
  );
};

export const usePlannerContext = () => useContext(PlannerContext);
