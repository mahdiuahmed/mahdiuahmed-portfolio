"use client";

import * as React from "react";
import Link from "next/link";
import { Code, Menu, PenTool, User } from "lucide-react";
import logo from "../public/mahdi logo png.png";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";
import FadeContent from "./FadeContent/FadeContent";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme } = useTheme();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 w-screen border-b-2 backdrop-blur-sm px-4">
        <FadeContent
          blur={true}
          duration={900}
          easing="ease-out"
          initialOpacity={0}
          delay={1500}
          threshold={1}
        >
          <div className="container flex h-18 items-center justify-between mx-auto  ">
            <div
              className=" h-16 w-16 z-50 cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              <Image src={logo} alt="" className="h-full w-full invert" />
            </div>
            {/* <Link
          href="/"
          className={`${
            theme == "light" ? "" : "invert"
            } h-full flex items-center `}
            >
            <Image src={logo} alt="" height={64} width={64} />
            </Link> */}
            <div className="absolute left-0 right-0 ">
              <div className="hidden lg:flex items-center justify-center">
                <Button className="flex font-bold" variant="ghost" asChild>
                  <Link href="#about">
                    <User size="icon" />
                    About
                  </Link>
                </Button>
                <Button className="font-bold" variant="ghost" asChild>
                  <Link href="#programming">
                    <Code size="icon" />
                    Programming
                  </Link>
                </Button>
                <Button className="font-bold" variant="ghost" asChild>
                  <Link href="#graphics">
                    <PenTool size="icon" />
                    Graphics
                  </Link>
                </Button>
              </div>
            </div>
            <div className="space-x-4 items-center hidden lg:flex">
              <Button
                asChild
                className="hidden md:flex font-bold uppercase z-50"
              >
                <Link href="#contact" className="">
                  Contact
                </Link>
              </Button>
              <Button
                asChild
                className="hidden md:flex font-bold uppercase z-50"
                variant="outline"
              >
                <Link
                  href="/Mahdi Ahmed - Developer Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  Resume
                </Link>
              </Button>
              {/* <ModeToggle /> */}
            </div>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open Menu"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="">
                <nav className="flex flex-col gap-4 h-full justify-center items-center space-y-8">
                  <Link
                    href="#about"
                    className=" text-lg border-b-2"
                    onClick={() => setIsOpen(false)}
                  >
                    About Me
                  </Link>
                  <Link
                    href="#programming"
                    className=" text-lg border-b-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Programming Projects
                  </Link>
                  <Link
                    href="#contact"
                    className=" text-lg border-b-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Graphics Projects
                  </Link>
                  <Button
                    asChild
                    className="max-w-sm font-bold uppercase w-1/2"
                  >
                    <Link
                      href="#contact"
                      className=" text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="font-bold uppercase z-50 w-1/2 -mt-6"
                    variant="destructive"
                  >
                    <Link
                      href="/Mahdi Ahmed - Developer Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" p-3 text-lg"
                    >
                      Resume
                    </Link>
                  </Button>
                  {/* <ModeToggle /> */}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </FadeContent>
      </nav>
    </>
  );
}
