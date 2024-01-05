"use client";

import React from "react";
import Lottie from "lottie-react";
import { signIn } from "next-auth/react";
import login from "@/public/images/todo-clip.json";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (!response?.error) {
      router.push("/dashboard");
      router.refresh();
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="w-30 mr-8 rounded-md text-foreground border-2 border-muted bg-muted
        px-8 py-2 font-medium transition hover:border-primary/50 hover:bg-primary/50 "
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[60rem] grid grid-cols-2">
        <Lottie animationData={login} loop={true} className="mt-12" />

        <div className="flex w-full flex-col py-5 pr-32">
          <DialogHeader className=" font-mono text-3xl font-bold text-foreground">
            Login
          </DialogHeader>

          <form
            onSubmit={handleLoginSubmit}
            className="flex w-80 flex-col justify-center "
          >
            <Label htmlFor="email" className="mt-12 text-lg font-semibold">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="email address"
              className="mt-6 h-12 w-full cursor-pointer rounded-md bg-muted/50 px-10 text-sm focus:outline-none"
            />
            <Label htmlFor="password" className="mt-12 text-lg font-semibold">
              Password
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="enter password"
              className="mt-6 h-12 w-full cursor-pointer rounded-md bg-muted/50 px-10 text-sm focus:outline-none"
            />
            <DialogFooter>
              <Button
                type="submit"
                className=" w-80 mt-14 pb-10 h-12 rounded-lg border-2 border-primary bg-primary px-8 py-2 font-semibold  text-foreground shadow-md transition hover:border-primary hover:bg-muted"
              >
                {" "}
                Welcome
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
