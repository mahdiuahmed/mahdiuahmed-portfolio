import { Asterisk, CircleArrowDown, Code, PenTool, User } from "lucide-react";
import Link from "next/link";
// import { RiNextjsFill } from '@react-icons/all-files/ri/RiNetflixFill';

import { Bebas_Neue } from "next/font/google";
import Image from "next/image";
import { PortfolioCard } from "@/components/card";
import ContactForm from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { FirebaseMasonryGallery } from "@/components/firebase-masonry-gallery";

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Home() {
  return (
    <main className="mt-36 min-h-screen flex flex-col items-center justify-center px-8 max-sm:px-4 space-y-36">
      <header className=" flex flex-col items-center">
        <div className="flex flex-col">
          <div className="-mb-1 max-sm:mb-1 p-6 bg-primary text-black self-end max-sm:p-4">
            <h1 className="font-bold font-changa text-end max-sm:text-3xl ">
              مهدي أحمد
            </h1>
          </div>
          <h1
            className={`text-[200px] max-sm:text-[90px] leading-none text-center font-bold tracking-tight uppercase ${bebas_neue.className}`}
          >
            Mahdi Ahmed
          </h1>
        </div>
        <div className="flex mb-7 items-center space-x-2">
          <Asterisk size={40} className="max-sm:w-8" />
          <h1 className="border-b-4 font-medium max-sm:text-2xl">
            Designer & Developer
          </h1>
          <Asterisk size={40} className="max-sm:w-8" />
        </div>
        <h3 className="mb-12 text-center max-w-screen-md tracking-tighter max-sm:text-lg ">
          Hi, I’m Mahdi — a full-stack developer. With over six years of
          experience building web and mobile applications, I specialise in
          modern JavaScript frameworks, UI/UX design, testing and DevOps
          practices.
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* <h3>Explore</h3> */}
          <Button className="flex font-bold" asChild>
            <Link href="/about">
              <User size="icon" />
              About Me
            </Link>
          </Button>
          <Button className="font-bold" asChild>
            <Link href="/programming">
              <Code size="icon" />
              Programming Projects
            </Link>
          </Button>
          <Button className="font-bold" asChild>
            <Link href="/graphics">
              <PenTool size="icon" />
              Graphics Projects
            </Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
              Get in Touch
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Have a question or want to work together? Fill out the form below
              and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="font-medium">Phone</h3>
              <p className="text-sm text-muted-foreground mt-1">
                +44 7305 682459
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="font-medium">Email</h3>
              <p className="text-sm text-muted-foreground mt-1">
                imahdiahmed01@gmail.com
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
              <div className="bg-primary/10 p-3 rounded-full mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-6 w-6"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3 className="font-medium">Location</h3>
              <p className="text-sm text-muted-foreground mt-1">London, UK</p>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </main>
    </main>
  );
}
