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

const AddTask = () => {
  const { tasks, setTasks } = useTaskContext();
  const form = useForm();
  const handleSubmitNewTodo = (data) => {
    setTasks((prevTasks) => [...prevTasks, data]);
    form.reset();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <IoIosAdd className="mr-3" size={20} />
          Add New Task
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="mt-0 ml-12 border-primary px-10 py-10">
        <Form {...form}>
          <form className="" onSubmit={form.handleSubmit(handleSubmitNewTodo)}>
            <AlertDialogHeader>
              <AlertDialogDescription>
                <div>
                  <div className="items-center py-4">
                    <Label htmlFor="title">New Task</Label>
                    <Input
                      id="title"
                      type="text"
                      {...form.register("title")}
                      className=" h-14 mt-4"
                    />
                  </div>
                  <div className="items-center py-4">
                    <Label htmlFor="notes">Notes</Label>
                    <Input
                      id="notes"
                      type="text"
                      {...form.register("notes")}
                      className=" h-28 mt-4"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4 my-6">
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
                                value="high"
                                className="hover: text-red-600 font-semibold"
                              >
                                High
                              </SelectItem>

                              <SelectItem
                                value="medium"
                                className="text-orange-500 font-semibold"
                              >
                                Medium
                              </SelectItem>
                              <SelectItem
                                value="low"
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
                </div>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>
                {" "}
                <Button
                  type="submit"
                  onClick={form.handleSubmit(handleSubmitNewTodo)}
                >
                  Add Task
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
