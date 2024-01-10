"use client";
import { ChevronLeft, ChevronRightIcon, Divide } from "lucide-react";
import React, { useState } from "react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfDay,
  startOfWeek,
  sub,
  isWithinInterval,
} from "date-fns";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "../ui/popover";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

let COL_START_CLASSES = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-4",
  "col-start-6",
  "col-start-7",
];

const colorVariants = {
  green: "bg-green-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-400",
  blue: "bg-blue-500",
  red: "bg-red-500",
  rose: "bg-rose-500",
};

const CustomCalendar = ({ schedules }) => {
  console.log(schedules, "schedules");
  let today = startOfDay(new Date());
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));

  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const [selectedDay, setSelectedDay] = useState(today);

  let newdays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });
  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }
  function previousMonth() {
    let firstDayNextMonth = sub(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function checkIfWithinInterval(day, schedule) {
    return isWithinInterval(day, {
      start: sub(new Date(schedule.start_date), { days: 1 }),
      end: new Date(schedule.end_date),
    });
  }

  return (
    <div className="lg:flex lg:h-full lg:flex-col ">
      <header className="flex items-center justify-between border-b border-background px-6 py-4 lg:flex-none">
        <h1 className="text-base text-foreground font-semibold leading-6">
          <time dateTime="2022-01">
            {format(firstDayCurrentMonth, "MMMM yyyy")}
          </time>
        </h1>
        <div className="flex items-center">
          <div className="relative flex items-center rounded-md hover:bg-primary shadow-sm md:items-stretch">
            <div
              className="pointer-events-none absolute inset-0 rounded-md ring-1 ring-inset ring-muted"
              aria-hidden="true"
            />
            <button
              type="button"
              onClick={previousMonth}
              className="flex items-center justify-center rounded-l-md py-2 pl-3 pr-4 text-foreground  focus:relative md:w-9 md:px-2 md:hover:bg-primary"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="hidden px-3.5 text-sm font-semibold text-foreground  focus:relative md:block"
            >
              {format(firstDayCurrentMonth, "MMMM")}
            </button>
            <span className="relative -mx-px h-5 w-px  md:hidden" />
            <button
              type="button"
              onClick={nextMonth}
              className="flex items-center justify-center rounded-r-md py-2 pl-4 pr-3 text-foreground  focus:relative md:w-9 md:px-2 md:hover:bg-primary"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Select View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Month View <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>Week View</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Day View</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Year View</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </header>
      <div className="shadow rounded-t-sm ring-1 ring-muted ring-opacity-5 lg:flex lg:flex-auto lg:flex-col">
        <div className="grid rounded-t-sm grid-cols-7 gap-px border-b border-background bg-muted text-center text-xs font-semibold leading-6 text-foreground lg:flex-none">
          <div className="bg-muted py-2">
            S<span className="sr-only sm:not-sr-only">un</span>
          </div>
          <div className="bg-muted py-2">
            M<span className="sr-only sm:not-sr-only">on</span>
          </div>
          <div className="bg-muted py-2">
            T<span className="sr-only sm:not-sr-only">ue</span>
          </div>
          <div className="bg-muted py-2">
            W<span className="sr-only sm:not-sr-only">ed</span>
          </div>
          <div className="bg-muted py-2">
            T<span className="sr-only sm:not-sr-only">hu</span>
          </div>
          <div className="bg-muted py-2">
            F<span className="sr-only sm:not-sr-only">ri</span>
          </div>
          <div className="bg-muted py-2">
            S<span className="sr-only sm:not-sr-only">at</span>
          </div>
        </div>
        <div className="flex bg-background text-xs leading-6 text-foreground lg:flex-auto">
          <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px">
            {newdays.map((day, dayIdx) => (
              <div
                key={day.toString()}
                onClick={() => setSelectedDay(day)}
                className={classNames(
                  isSameMonth(day, firstDayCurrentMonth)
                    ? "bg-muted font-bold"
                    : "bg-muted text-foreground",
                  isEqual(day, selectedDay) ? "bg-primary-foreground/20" : "",
                  getDay(day) && dayIdx === 0
                    ? COL_START_CLASSES[getDay(day)]
                    : "",
                  "relative px-0 py-2 h-[8rem]"
                )}
              >
                <div className="px-2">
                  <time
                    dateTime={day.toString()}
                    className={
                      isToday(day)
                        ? "flex h-6 w-6  items-center justify-center rounded-full bg-primary font-semibold text-foreground"
                        : undefined
                    }
                  >
                    {format(day, "d")}
                  </time>
                </div>

                <Schedules
                  schedules={schedules.filter((schedule) =>
                    checkIfWithinInterval(day, schedule)
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCalendar;

function Schedules({ schedules }) {
  return (
    <ol className="mt-2">
      {schedules?.slice(0, 2).map((schedule) => (
        <Popover key={schedule.id}>
          <PopoverTrigger>
            <li
              key={schedule.id}
              className={cn(
                "bg-primary/25 my-1 hover:cursor-pointer hover:bg-primary/70 group flex px-2",
                schedule.color ? `${colorVariants[schedule.color]}` : ""
              )}
            >
              <p className="flex-auto truncate font-medium text-foreground group-hover:text-foreground overflow-hidden text-ellipsis">
                {schedule.title}
              </p>
              <time
                dateTime={schedule.start_time}
                className="ml-3 hidden flex-none text-muted group-hover:text-foreground xl:block"
              >
                {schedule.start_time}
              </time>
              <span className="font-bold px-2 group-hover:text-foreground">
                -
              </span>
              <time
                dateTime={schedule.end_time}
                className="ml-0 hidden flex-none text-muted group-hover:text-foreground xl:block"
              >
                {schedule.end_time}
              </time>
            </li>
          </PopoverTrigger>
          {schedule?.tasks?.length ? (
            <PopoverContent className="w-80">
              {schedule.tasks?.map((task) => {
                return <div key={task.id}>{task?.name}</div>;
              })}
            </PopoverContent>
          ) : (
            ""
          )}
        </Popover>
      ))}
      {schedules?.length > 2 && (
        <li className="text-muted">+ {schedules.length - 2} more</li>
      )}
    </ol>
  );
}
