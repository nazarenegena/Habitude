"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { IoIosAdd } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { useTaskContext } from "@/lib/context/taskContext";
import { useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { CiEdit } from "react-icons/ci";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "./ui/textarea";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, CheckCircle, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePlannerContext } from "@/lib/context/plannerContext";
import { format } from "date-fns";
import { CreateTask, GetTasks, UpdateTask } from "@/actions/task";

const AddTask = ({ title, task }) => {
  const [open, setOpen] = useState(false);
  console.log(task, "add task ");
  const { tasks, setTasks } = useTaskContext();
  const { schedules } = usePlannerContext();
  const form = useForm({
    defaultValues: {
      name: task?.name || "",
      planId: task?.Plan?.id || "",
      start_date: task?.start_date || null,
      end_date: task?.end_date || null,
      description: task?.description || "",
      priority: task?.priority || "",
      submit_button: task?.submit_button,
    },
  });

  const handleSubmitNewTodo = async (data) => {
    if (task) {
      await handleUpdateTask(data);
    } else {
      await handleAddTask(data);
    }
  };

  const handleAddTask = async (data) => {
    const payload = {
      ...data,
      id: uuid(),
    };
    const { task } = await CreateTask(payload);
    setTasks([task, ...tasks]);

    setOpen(false);
    form.reset();
  };

  const handleUpdateTask = async (data) => {
    await UpdateTask(task.id, data);
    const updatedTasks = await GetTasks();

    setTasks(updatedTasks);
    setOpen(false);
    form.reset();
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        {task ? (
          <CiEdit size={24} fill="#5223A5" className="cursor-pointer" />
        ) : (
          <Button className="bg-muted text-foreground">
            <IoIosAdd className="mr-3" size={20} /> Add Task
          </Button>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent className="mt-0 ml-12 border-primary px-10 py-10">
        <Form {...form}>
          <form className="" onSubmit={form.handleSubmit(handleSubmitNewTodo)}>
            <AlertDialogHeader>
              <AlertDialogDescription>
                <div>
                  <div className="items-center py-4">
                    <Label htmlFor="name">New Task</Label>
                    <Input id="name" type="text" {...form.register("name")} />
                  </div>

                  <FormField
                    control={form.control}
                    name="planId"
                    className="w-full"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Category</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          className="grid w-full my-6"
                        >
                          <FormControl>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select ..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {schedules?.map((schedule) => (
                              <SelectItem key={schedule.id} value={schedule.id}>
                                {schedule.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    className="mt-3"
                    name="start_date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col mt-3">
                        <FormLabel>Start Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    className="mt-3"
                    name="end_date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col mt-3">
                        <FormLabel>End Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="items-center py-4">
                    <Label htmlFor="notes">Notes</Label>
                    <Textarea
                      id="description"
                      type="text"
                      {...form.register("description")}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="priority"
                    render={({ field }) => (
                      <FormItem>
                        <Select
                          onValueChange={field.onChange}
                          className="grid grid-cols-2 gap-4 my-6"
                        >
                          <FormControl>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="---Task Priority---" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem
                              value="HIGH"
                              className="hover: text-red-600 font-semibold"
                            >
                              High
                            </SelectItem>

                            <SelectItem
                              value="MEDIUM"
                              className="text-orange-500 font-semibold"
                            >
                              Medium
                            </SelectItem>
                            <SelectItem
                              value="LOW"
                              className="text-primary font-semibold"
                            >
                              Low
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>
                <Button
                  type="submit"
                  onClick={form.handleSubmit(handleSubmitNewTodo)}
                >
                  {task ? "Update Task" : "Add Task"}
                </Button>
              </AlertDialogAction>

              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AddTask;
