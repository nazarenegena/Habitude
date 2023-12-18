import React from "react";
import { TableCell, TableRow } from "@/components/ui/table";
const Task = ({ task }) => {
  return (
    <TableRow>
      <TableCell>{task.title}</TableCell>
      <TableCell>{task.notes}</TableCell>
      <TableCell>{task.priority}</TableCell>
    </TableRow>
  );
};

export default Task;
