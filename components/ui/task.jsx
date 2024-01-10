"use client";
import React from "react";
import { useState } from "react";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "./badge";
import { toast } from "@/components/ui/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { DeleteTask, GetTasks, UpdateTaskStatus } from "@/actions/task";
import { useTaskContext } from "@/lib/context/taskContext";
import AddTask from "../AddTask";

export const colors = {
  high: "destructive",
  low: "default",
  medium: "secondary",
};

const Task = ({ task }) => {
  const [open, setOpen] = useState(false);
  const { tasks, setTasks } = useTaskContext();
  const { editTask, setEditTask } = useTaskContext();

  const handleUpdateTaskStatus = async (status) => {
    await UpdateTaskStatus(task.id, status);
    const updatedTasks = await GetTasks();
    setTasks(updatedTasks);
  };

  const handleDeleteTask = async () => {
    await DeleteTask(task.id);
    const deletedTask = await GetTasks();
    setTasks(deletedTask);
    toast({
      title: "Success",
      description: "Task Deleted",
      variant: "default",
    });
    console.log("task deleted", task);
  };
  return (
    <TableRow>
      <TableCell>{task.name}</TableCell>
      <TableCell>{task?.Plan?.title}</TableCell>
      <TableCell>{task.description}</TableCell>
      <TableCell>
        <Badge variant={colors[task?.priority?.toLowerCase()]}>
          {task.priority}
        </Badge>{" "}
      </TableCell>
      <TableCell>
        {(() => {
          switch (task.status) {
            case "COMPLETED":
              return (
                <Badge
                  variant={colors[task.status.toLowerCase()]}
                  className="bg-green-500"
                >
                  {task.status}
                </Badge>
              );

            case "PENDING":
              return (
                <Badge
                  variant={colors[task.status.toLowerCase()]}
                  className="bg-red-500"
                >
                  {task.status}
                </Badge>
              );

            case "INPROGRESS":
              return (
                <Badge
                  variant={colors[task.status.toLowerCase()]}
                  className="bg-purple-500"
                >
                  {task.status}
                </Badge>
              );

            default:
              return null; // or any default JSX element or message
          }
        })()}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            >
              <BsThreeDots />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 ">
            <DropdownMenuLabel className="flex justify-center">
              Task Status
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup className="flex flex-col items-center">
              <DropdownMenuItem
                className="my-2 px-4 py-2"
                onClick={() => handleUpdateTaskStatus("COMPLETED")}
              >
                Completed
              </DropdownMenuItem>
              <DropdownMenuItem
                className="my-2 px-4 py-2"
                onClick={() => handleUpdateTaskStatus("PENDING")}
              >
                Pending
              </DropdownMenuItem>
              <DropdownMenuItem
                className="my-2 px-4 py-2"
                onClick={() => handleUpdateTaskStatus("INPROGRESS")}
              >
                In Progress
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <div className="flex justify-around py-6">
              <AddTask task={task} />
              <RiDeleteBin6Line
                className="cursor-pointer"
                onClick={() => handleDeleteTask()}
                size={22}
                fill="#EF4444"
              />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

export default Task;
