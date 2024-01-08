'use server';
import { prisma } from '@/lib/prisma';
import { getUser } from './planner';

export async function CreateTask(data) {
  const user = await getUser();

  const task = await prisma.task.create({
    data: {
      userId: user.id,
      ...data
    }
  });

  if (!task) throw new Error('Something went wrong');

  return { message: 'success', task };
}

export async function GetTaskStats() {
  const user = await getUser();

  const completedTasks = await prisma.task.findMany({
    where: {
      userId: user.id,
      status: 'COMPLETED'
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
  const pendingTasks = await prisma.task.findMany({
    where: {
      userId: user.id,
      status: 'PENDING'
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
  const progressTasks = await prisma.task.findMany({
    where: {
      userId: user.id,
      status: 'INPROGRESS'
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return [
    { value: completedTasks.length, title: 'Completed Tasks' },
    { value: pendingTasks.length, title: 'Pending Tasks' },
    { value: progressTasks.length, title: 'Inprogress Tasks' }
  ];
}

export async function GetTasks() {
  const user = await getUser();

  const tasks = await prisma.task.findMany({
    where: {
      userId: user.id
    },
    include: { Plan: true },
    orderBy: {
      createdAt: 'desc'
    }
  });
  if (!tasks) return [];

  return tasks;
}
