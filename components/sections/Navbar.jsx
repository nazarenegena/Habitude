"use client";
import React from "react";
import { ModeToggle } from "../toggle-mode";
import Logout from "@/app/auth/logout/Logout";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 bg-background flex justify-end px-8 py-4 font-mono shadow-lg">
      <Logout />
      <ModeToggle />
    </div>
  );
};

export default Navbar;
