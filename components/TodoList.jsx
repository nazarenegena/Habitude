import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Task from "./ui/task";
import { Input } from "@/components/ui/input";

import { useTaskContext } from "@/lib/context/taskContext";

const TodoList = () => {
  const { tasks } = useTaskContext();

  return (
    <Table className="mt-6">
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Schedule</TableHead>
          <TableHead>Priority</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Edit</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoList;
