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
import { useTaskContext } from "@/lib/context/taskContext";

const TodoList = () => {
  const { tasks } = useTaskContext();

  return (
    <Table className="mt-6">
      <TableHeader>
        <TableRow>
          <TableHead>Task</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Priority</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task, item) => (
          <Task key={item} task={task} />
        ))}
      </TableBody>
    </Table>
  );
};

export default TodoList;
