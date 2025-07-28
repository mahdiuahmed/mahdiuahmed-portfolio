"use client";

import * as React from "react";
import Link from "next/link";
import { Code, Menu, PenTool, User } from "lucide-react";
import logo from "../public/mahdi logo png.png";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-screen border-b-2 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <Link href="/" className="dark:invert h-full flex items-center ">
          <Image src={logo} alt="" height={64} width={64} />
        </Link>
        <div className="hidden md:flex md:items-center md:space-x-4 ">
          <Button className="flex font-bold" variant="ghost" asChild>
            <Link href="/about">
              <User size="icon" />
              About Me
            </Link>
          </Button>
          <Button className="font-bold" variant="ghost" asChild>
            <Link href="/programming">
              <Code size="icon" />
              Programming Projects
            </Link>
          </Button>
          <Button className="font-bold" variant="ghost" asChild>
            <Link href="/graphics">
              <PenTool size="icon" />
              Graphics Projects
            </Link>
          </Button>
        </div>
        <Button asChild className="hidden md:block font-bold uppercase">
          <Link href="/contact" className="">
            Contact
          </Link>
        </Button>
        {/* <ModeToggle /> */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open Menu"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/about"
                className="block px-2 py-1 text-lg"
                onClick={() => setIsOpen(false)}
              >
                About Me
              </Link>
              <Link
                href="/projects"
                className="block px-2 py-1 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Programming Projects
              </Link>
              <Link
                href="/contact"
                className="block px-2 py-1 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Graphics Projects
              </Link>
              <Button asChild className=" font-bold uppercase">
                <Link
                  href="/contact"
                  className="block px-2 py-1 text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </Button>
              {/* <ModeToggle /> */}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
