"use client";

import * as React from "react";
import Link from "next/link";
import {
  Code,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  PenTool,
  User,
} from "lucide-react";
import logo from "../public/mahdi logo png.png";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Footer() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <footer className="mt-36 z-50 w-screen border-t-2 backdrop-blur-sm light">
      <div className="flex items-center justify-center gap-4 p-4 ">
        <h4 className=" font-medium">@mahdiuahmed</h4>
        <div>
          <Button variant="ghost" asChild size="sm">
            <Link
              href="https://github.com/mahdiuahmed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </Link>
          </Button>
          <Button variant="ghost" asChild size="sm">
            <Link
              href="https://www.linkedin.com/in/mahmed01"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 hover:text-primary hover:scale-150 transition-transform" />
            </Link>
          </Button>
          <Button variant="ghost" asChild size="sm">
            <Link
              href="https://instagram.com/mahdiuahmed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 hover:text-primary hover:scale-150 transition-transform" />
            </Link>
          </Button>
          <Button variant="ghost" asChild size="sm">
            <Link href="mailto:imahdiahmed01@gmail.com">
              <Mail className="w-6 h-6 hover:text-primary hover:scale-150 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
