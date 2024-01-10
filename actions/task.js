"use server";
import { prisma } from "@/lib/prisma";
import { getUser } from "./planner";

export async function CreateTask(data) {
  const user = await getUser();

  const task = await prisma.task.create({
    data: {
      userId: user.id,
      ...data,
    },
  });

  if (!task) throw new Error("Something went wrong");

  return { message: "success", task };
}

// deleting tasks
// deleting a specific task by ID
export async function DeleteTask(taskId) {
  const user = await getUser();

  const task = await prisma.task.delete({
    where: {
      id: taskId,
      userId: user.id,
    },
  });

  if (!task) throw new Error("Something went wrong");

  return { message: "task deleted", task };
}

// updating task status
export async function UpdateTaskStatus(id, status) {
  const user = await getUser();

  const task = await prisma.task.update({
    where: {
      id: id,
      userId: user.id,
    },
    data: {
      status: status,
    },
  });

  if (!task) throw new Error("not updated status");

  return task;
}

export async function UpdateTask(id, data) {
  const user = await getUser();

  const updatedTask = await prisma.task.update({
    where: {
      id,
      userId: user.id,
    },
    data: {
      userId: user.id,
      ...data,
    },
  });

  if (!updatedTask) {
    throw new Error("Task not updated");
  }

  return updatedTask;
}

export async function GetTaskStats() {
  const user = await getUser();

  const completedTasks = await prisma.task.findMany({
    where: {
      userId: user.id,
      status: "COMPLETED",
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const pendingTasks = await prisma.task.findMany({
    where: {
      userId: user.id,
      status: "PENDING",
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const progressTasks = await prisma.task.findMany({
    where: {
      userId: user.id,
      status: "INPROGRESS",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return [
    { value: completedTasks.length, title: "Completed Tasks" },
    { value: pendingTasks.length, title: "Pending Tasks" },
    { value: progressTasks.length, title: "Inprogress Tasks" },
  ];
}

export async function GetTasks() {
  const user = await getUser();

  const tasks = await prisma.task.findMany({
    where: {
      userId: user.id,
    },
    include: { Plan: true },
    orderBy: {
      createdAt: "desc",
    },
  });
  if (!tasks) return [];

  return tasks;
}
