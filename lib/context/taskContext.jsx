"use client";

import { createContext, useContext, useState } from "react";

const TaskContext = createContext([]);

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
