'use client';
import React from 'react';
import AddTask from '../AddTask';
import TodoList from '../TodoList';

const TasksDisplay = () => {
  return (
    <main className='mx-auto  p-5'>
      <div className='text-center my-5 flex gap-4 items-center justify-between'>
        <h1 className='text-2xl font-bold my-6'>Tasks</h1>
        <AddTask />
      </div>
      <TodoList />
    </main>
  );
};

export default TasksDisplay;
