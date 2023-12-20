'use client';

import { createContext, useContext, useState } from 'react';

const PlannerContext = createContext([]);

export const PlannerContextProvider = ({ children }) => {
  const [schedules, setSchedules] = useState([
    {
      start: new Date('2023-12-20T10:00:00'),
      end: new Date('2023-12-20T11:00:00'),
      title: 'Work',
      data: {
        appointment: {
          id: 1,
          status: 'P',
          location: 'New York',
          resource: 'Dr Alex',
          address: 'Building 5\nStreet 44\nNear Express Highway\nNew York'
        }
      },
      isDraggable: true
    },
    {
      start: new Date('2023-12-2`T12:00:00'),
      end: new Date('2023-12-21T13:00:00'),
      title: 'Work 1',
      data: {
        appointment: {
          id: 2,
          status: 'CI',
          location: 'Washington',
          resource: 'Dr David',
          address: 'Block 1\nSStreet 32\nLong Island\nNew York'
        }
      },
      isDraggable: false
    },
    {
      start: new Date('2023-12-20T09:00:00'),
      end: new Date('2023-12-20T14:59:59'),
      title: 'Work 3',
      data: {
        blockout: {
          id: 1,
          name: 'Christmas Holidays'
        }
      }
    }
  ]);
  return (
    <PlannerContext.Provider value={{ schedules, setSchedules }}>
      {children}
    </PlannerContext.Provider>
  );
};

export const usePlannerContext = () => useContext(PlannerContext);
