import React from "react";
import { ModeToggle } from "../toggle-mode";
import Logout from "@/app/auth/logout/Logout";
import { getServerSession } from "next-auth";
import { format } from "date-fns";

const Navbar = async () => {
  const { user } = await getServerSession();
  const date = new Date();
  return (
    <div className="sticky top-0 z-40 bg-background flex justify-between px-8 py-4 font-mono shadow-sm items-center">
      <div>
        <p className="text-lg font-bold">Welcome, {user.name}</p>
        <p className="text-sm font-bold text-muted-foreground">
          {format(date, "EEEE, HH:mm a")}
        </p>
      </div>
      <div className="flex justify-between">
        <Logout />
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
