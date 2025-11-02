"use client";

import React from "react";
import Image from "next/image";
import heroimage from "../public/me image.jpeg";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import {
  Mail,
  Github,
  Linkedin,
  Palette,
  Twitter,
  Sun,
  Car,
  Star,
  ArrowDownRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import FadeContent from "@/components/FadeContent/FadeContent";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
  SiAmazonwebservices,
  SiDocker,
  SiGit,
  SiShadcnui,
} from "react-icons/si";
import { Button } from "./ui/button";

interface AboutMeProps {
  heading?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  reviews?: {
    count: number;
    avatars: {
      src: string;
      alt: string;
    }[];
    rating?: number;
  };
}

export default function AboutMe({
  heading = "About Me",
  description = "Hi, I'm Mahdi — a multimedia designer and full-stack developer. I specialise in modern JavaScript frameworks, QA testing and DevOps practices. Feel free to check the rest of my portfolio below. I bridge the gap between beautiful design and robust engineering.",
  buttons = {
    primary: {
      text: "Sign Up",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
  },
  reviews = {
    count: 200,
    rating: 5.0,
    avatars: [
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
        alt: "Avatar 1",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
        alt: "Avatar 2",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
        alt: "Avatar 3",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
        alt: "Avatar 4",
      },
      {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
        alt: "Avatar 5",
      },
    ],
  },
}: AboutMeProps) {
  const features = [
    {
      icon: <Sun className="h-auto w-5" />,
      title: "Programming Languages",
      description: "Python, Java, TypeScript, JavaScript, HTML, CSS, SQL, PHP",
    },
    {
      icon: <Sun className="h-auto w-5" />,
      title: "Libraries / Frameworks",
      description:
        "Node.js, React.js, Next.js, React Native, Flask, Tailwind CSS, FastAPI",
    },
    {
      icon: <Sun className="h-auto w-5" />,
      title: "Database Systems",
      description: "PostgreSQL, Supabase, DynamoDB, Firebase Firestore, MySQL",
    },
    {
      icon: <Sun className="h-auto w-5" />,
      title: "QA Testing",
      description:
        "BDD, TDD, E2E, Selenium Grid, noVNC, Pytest, Mocha, Chai, Sinon, Vitest, Cypress, Jest, Cucumber, Gherkin",
    },
    {
      icon: <Sun className="h-auto w-5" />,
      title: "Cloud & DevOps",
      description:
        "AWS: IAM EC2, S3, Lambda, ECR Google Cloud: Firebase (Auth, Hosting, Storage) Tools: Docker, Git, GitHub Actions, Linux, Jenkins, Prometheus, Jira, Confluence, Checkov, Grafana, REST API",
    },
  ];

  return (
    <main id="about" className="scroll-mt-32 gap-16">
      {/* <main className="mt-36 min-h-screen"> */}
      {/* Anything placed inside this container will be fade into view */}

      {/* <section className="mb-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <div className="space-y-4">
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
                About
                <span className="block text-primary">Myself</span>
              </h1>
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20 mx-auto">
          <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
            <h1 className="my-6 text-primary text-pretty md:text-6xl font-bold lg:text-7xl xl:text-8xl tracking-tight">
              {heading}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row"></div>
          </div>
          <div className="flex max-h-[600px] lg:max-h-[800px] overflow-hidden">
            <img
              src="/me image.jpeg"
              alt="placeholder hero"
              className="grayscale-100 -mt-60 w-full rounded-md object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function TechIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="p-3 bg-muted rounded-2xl shadow-sm">{icon}</div>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </div>
  );
}
