import React from "react";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Logout = () => {
  return (
    <Button
      //   onClick={() => {
      //     signOut();
      //   }}
      className=" w-30 rounded-md text-foreground border-2 border-muted bg-muted px-8 py-2 font-medium transition hover:border-primary/50 hover:bg-primary/50  mr-10 active:border-muted"
    >
      <Link href={"/"}>Logout</Link>
    </Button>
  );
};

export default Logout;
