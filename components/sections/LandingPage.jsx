"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { ImAccessibility } from "react-icons/im";
import { dashboardSection } from "../../public/images/dashboard.png";
// import SignIn from "../auth/SignIn";
// import SignUp from "../auth/SignUp";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModeToggle } from "../toggle-mode";

const LandingPage = () => {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
  };

  const handleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <div className="h-full w-full">
      <div>
        <div className="sticky top-0 z-40 bg-background flex justify-between px-8 py-4 font-mono shadow-lg">
          {/* Navbar section */}

          <div className="items-center text-2xl  flex tracking-widest font-semibold cursor-pointer">
            Hab <ImAccessibility className="mt-1" size={24} fill="#6937C8" />
            tude
          </div>

          <div className=" ml-40 flex items-center font-mono">
            <p className="mx-10 cursor-pointer p-2 transition hover:border-b hover:font-semibold">
              <a href="#about">About</a>
            </p>
            <p className=" cursor-pointer  p-2 transition hover:border-b hover:font-semibold ">
              <a href="#features">Features</a>
            </p>{" "}
            <Link
              href={"https://github.com/nazarenegena/Habitude"}
              target="_blank"
            >
              <p className=" mx-10 cursor-pointer  p-2 transition hover:border-b hover:font-medium hover:font-semibold ">
                Repository
              </p>
            </Link>
          </div>

          <div className="flex justify-center mt-4">
            <Button
              onClick={handleLogin}
              className={
                " text-bold w-30 mr-10 rounded-md border-2 border-primary px-8 py-2 font-medium  transition hover:border-muted hover:bg-muted  "
              }
              asChild
            >
              <Link href="/dashboard">Sign In</Link>
            </Button>
            <Button
              onClick={handleSignUp}
              className={
                " w-30 mr-8 rounded-md text-foreground border-2 border-muted bg-muted px-8 py-2 font-medium transition hover:border-primary hover:bg-primary "
              }
            >
              <Link href="/dashboard">Sign Up</Link>
            </Button>

            <ModeToggle />
          </div>
        </div>

        {/* content section */}
        <div className=" h-full w-full ">
          {/* hero section */}
          <div className="absolute left-[54rem] top-80 z-20">
            <p className="font-mono text-5xl font-bold ">Welcome to Habitude</p>
            <p className="pt-6 font-mono text-xl font-medium tracking-widest  ">
              Your Daily Nudge ...
            </p>
          </div>
          <div className="absolute left-80 top-48">
            <Image
              src={require("../../public/images/Checklist.svg")}
              height={400}
              width={400}
              alt="Habitude-banner"
              className=""
            />
          </div>
          <div className="absolute right-10 bottom-36">
            <Image
              src={require("../../public/images/habits.svg")}
              height={300}
              width={300}
              alt="Habitude-banner"
              className=""
            />
          </div>

          <div className="relative z-10 h-[38rem]  bg-accent opacity-20 "></div>

          {/* features section */}
          <div className="h-auto pb-24 pt-12" id="features">
            <div className=" mx-40  mb-32 mt-10 flex items-center">
              <Image
                src={require("../../public/images/dashboard.png")}
                alt="habitude-app"
                className="mx-12 h-96 w-1/2 rounded-lg object-contain shadow-lg shadow-muted"
              />
              <div className="ml-48">
                <p className="mb-8 text-4xl font-semibold tracking-widest">
                  Real Time Monitoring
                </p>
                <p className="text-lg font-medium tracking-widest text-muted-foreground">
                  Get to monitor your daily productive habits in real time{" "}
                  <br />
                  Watch your progress bar grow and nudge you to keep going.
                  <br />{" "}
                </p>
              </div>
            </div>

            <div className=" mx-40  my-20 flex items-center">
              <div className="ml-20">
                <p className="mb-8 text-4xl font-semibold tracking-widest">
                  Add a New Task
                </p>
                <p className="text-lg font-medium tracking-widest text-muted-foreground">
                  Add a new task and customize it however you want. <br />
                  Our dashboard gives you the chance to access tasks and add
                  them <br />
                </p>
              </div>
              <Image
                src={require("../../public/images/add-task.png")}
                alt="habitude_app"
                className="ml-56 h-96 w-1/2 rounded-lg object-contain shadow-lg shadow-muted"
              />
            </div>

            <div className=" mx-40  mb-32 mt-32 flex items-center rounded-lg">
              <Image
                src={require("../../public/images/todo-tasks.png")}
                alt="habitude_app"
                className="mx-12 h-96 w-1/2 rounded-lg object-contain shadow-lg shadow-muted"
              />
              <div className="ml-48">
                <p className="mb-8 text-4xl font-light">View your Tasks</p>
                <div className="text-lg font-medium tracking-widest text-muted-foreground">
                  You can step back and view your tasks and edit them
                  accordingly
                  <br />
                  Get to seamlessly customize your to-dos <br />
                  <Button className="mt-12 flex h-12 w-44 cursor-pointer items-center justify-center rounded-lg border-2 border-primary bg-primary  px-4 py-3 font-mono font-medium transition hover:bg-muted hover:border-muted active:border-primary">
                    <Link href="/dashboard">
                      <p>Get Started</p>
                    </Link>

                    {/* open the sidebar */}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* About section */}

          <div className="pb-20 absolute" id="about">
            <div className=" flex h-full ">
              <div className="mx-32 rounded-md p-7 shadow-lg">
                <p className="py-10 text-xl font-medium">Our Inspiration</p>
                <p className="text-md leading-8 font-mono">
                  As enthusiasts of habit tracking, our motivation stemmed from
                  the transformative experiences we have had with various
                  habit-tracking apps. Taking cues from the user-friendly design
                  of these apps, we embarked on this project inspired by the
                  seamless user experience of popular habit-tracking tools. Our
                  goal was to challenge ourselves in replicating and
                  interpreting the features of these tools, not only to enhance
                  our understanding of web development, front-end design, and
                  back-end functionality but also to build a valuable addition
                  to our portfolio. This endeavor reflects our unwavering
                  commitment to continuous learning and our dedication to
                  delivering polished, user-centric web applications in the
                  realm of habit tracking.
                </p>
              </div>
              <div className="mx-32 rounded-md  p-7 shadow-lg">
                <p className="py-10 text-xl font-medium">About</p>

                <p className="text-md leading-8 font-mono">
                  Welcome to Habitude, a habit-tracking app inspired by our
                  passion for personal development, fascination with
                  cutting-edge technology, and the opportunity to showcase our
                  development skills. HabitHub is not just a tracking tool; it
                  is a social platform designed to be your companion on the
                  journey to building positive habits. We offer a gateway to a
                  world of routines, progress, and personal growth. HabitHub
                  aims to provide a user-friendly interface, personalized habit
                  suggestions, and an extensive habit library. It is more than a
                  habit-tracking service; it is a social platform where users
                  can share their progress and support each other in their
                  habit-building endeavors. We hope you find exploring HabitHub
                  as enjoyable as we found creating it. Feel free to navigate
                  through the features, test the functionality, and experience
                  what we can contribute to the world of web development. Thank
                  you for visiting HabitHub, and we look forward to sharing more
                  of our development journey with you.
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10 h-[40rem]  bg-accent opacity-20 "></div>

          {/* contact section */}
          <div className="flex flex-col items-center justify-center py-6">
            <p className="text-lg font-medium">Contact Me</p>
            <p className="mt-6 font-normal">Nazarene Wanyaga</p>

            <div className=" flex flex-col items-center justify-center">
              <div className="mx-10 flex items-center px-40  shadow-md font-mono">
                <div className="mx-10 flex flex-row items-center justify-center">
                  <Link
                    href={"https://github.com/nazarenegena"}
                    target="_blank"
                  >
                    <p className="my-5 flex cursor-pointer items-center font-semibold text-muted-foreground p-2 transition hover:border-b hover:font-semibold">
                      <BsGithub className="mx-3" size={20} fill="#6326C5" />
                      Github
                    </p>
                  </Link>

                  <Link
                    href={
                      "https://www.linkedin.com/in/nazarene-wanyaga-426058180/"
                    }
                    target="_blank"
                  >
                    <p className="flex cursor-pointer ml-16 items-center font-semibold text-muted-foreground p-2 transition hover:border-b hover:font-semibold">
                      <BsLinkedin className="mx-3" size={20} fill="#6326C5" />
                      Linked in
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* the authentication modal */}
            {/* <Modal
              openModal={() => setIsSignUpOpen(!isSignUpOpen)}
              isOpen={isSignUpOpen}
            >
              <SignUp />
            </Modal>
            <Modal
              openModal={() => setIsLoginOpen(!isLoginOpen)}
              isOpen={isLoginOpen}
            >
              <SignIn />
            </Modal> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
