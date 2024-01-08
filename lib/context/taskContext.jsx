'use client';

import { GetTasks } from '@/actions/task';
import { createContext, useContext, useState, useEffect } from 'react';

const TaskContext = createContext([]);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function fetchTasks() {
      const tasks = await GetTasks();
      setTasks(tasks);
    }
    fetchTasks();
  }, []);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
