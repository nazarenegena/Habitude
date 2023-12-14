import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MiddleDashboardDisplay = () => {
  return (
    <div>
      <p className="text-muted-foreground text-lg tracking-widest">
        Welcome back
      </p>
      <div className="mt-5 flex">
        <Card className="w-[100%] h-64 ">
          <CardTitle>The graph</CardTitle>
        </Card>
      </div>
      <div className="mt-14 flex justify-center">
        <Card className="w-[50%] h-80  border-4 border-muted">
          <CardTitle>The calender</CardTitle>
        </Card>
      </div>
      <div className="mt-10 flex">
        <Card className="w-[100%] h-40 ">
          <CardTitle>The news</CardTitle>
        </Card>
      </div>
    </div>
  );
};

export default MiddleDashboardDisplay;
