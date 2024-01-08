'use client';

import { GetPlans } from '@/actions/planner';
import { createContext, useContext, useState, useEffect } from 'react';

const PlannerContext = createContext([]);

export const PlannerContextProvider = ({ children }) => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    async function fetchPlans() {
      const plans = await GetPlans();
      setSchedules(plans);
    }
    fetchPlans();
  }, []);

  return (
    <PlannerContext.Provider value={{ schedules, setSchedules }}>
      {children}
    </PlannerContext.Provider>
  );
};

export const usePlannerContext = () => useContext(PlannerContext);
