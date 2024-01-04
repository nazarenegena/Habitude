import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../toggle-mode";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-40 bg-background flex justify-end px-8 py-4 font-mono shadow-lg">
      <Button className=" w-30 rounded-md text-foreground border-2 border-muted bg-muted px-8 py-2 font-medium transition hover:border-primary hover:bg-primary  mr-10 active:border-muted">
        <Link href="/">Sign Out</Link>
      </Button>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
