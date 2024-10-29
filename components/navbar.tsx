"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-screen">
      <div className="container flex h-16 items-center justify-between mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <span className="sr-only">Your Company Logo</span>
          <img
            src="/placeholder.svg?height=32&width=32"
            alt=""
            className="h-8 w-8"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold">YourBrand</span>
        </Link>
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/projects">Projects</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
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
                About
              </Link>
              <Link
                href="/projects"
                className="block px-2 py-1 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="block px-2 py-1 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
