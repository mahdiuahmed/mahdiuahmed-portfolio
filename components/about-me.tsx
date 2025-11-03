"use client";

import React from "react";
import { Blocks, Box, Bug, CloudCog, Code, Sun } from "lucide-react";
import { Badge } from "./ui/badge";

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
  heading = "About",
  description = "Hi, I'm Mahdi — a multimedia designer and full-stack developer. I specialise in modern JavaScript frameworks, QA testing and DevOps practices. Feel free to check the rest of my portfolio below. I bridge the gap between beautiful design and robust engineering. Check out the technologies I use often below:",
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
      icon: <Code className="h-auto w-5" />,
      title: "Programming Languages",
      description: [
        "Python",
        "Java",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
        "PHP",
      ],
    },
    {
      icon: <Blocks className="h-auto w-5" />,
      title: "Libraries / Frameworks",
      description: [
        "Node.js",
        "React.js",
        "Next.js",
        "React Native",
        "Flask",
        "Tailwind CSS",
        "FastAPI",
      ],
    },
    {
      icon: <Box className="h-auto w-5" />,
      title: "Database Systems",
      description: [
        "PostgreSQL",
        "Supabase",
        "DynamoDB",
        "Firebase Firestore",
        "MySQL",
      ],
    },
    {
      icon: <Bug className="h-auto w-5" />,
      title: "QA Testing",
      description: [
        "BDD",
        "TDD",
        "E2E",
        "Selenium Grid",
        "noVNC",
        "Pytest",
        "Mocha",
        "Chai",
        "Sinon",
        "Vitest",
        "Cypress",
        "Jest",
        "Cucumber",
        "Gherkin",
      ],
    },
    {
      icon: <CloudCog className="h-auto w-5" />,
      title: "Cloud & DevOps",
      description: [
        "AWS: IAM EC2, S3, Lambda, ECR Google Cloud",
        "Firebase (Auth, Hosting, Storage)",
        "Docker",
        "Git",
        "GitHub Actions",
        "Linux",
        "Jenkins",
        "Prometheus",
        "Jira",
        "Confluence",
        "Checkov",
        "Grafana",
        "REST API",
      ],
    },
  ];

  return (
    <main id="about" className="max-w-7xl mx-auto scroll-mt-32 gap-16">
      <section>
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20 mx-auto">
          <div className="space-y-4 mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
            <h1 className=" mt-6 font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight">
              {heading}
              <span className="text-primary"> Me</span>
            </h1>
            <p className="mb-8 max-w-xl">{description}</p>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li className="">
                  <p className="flex items-center gap-2">
                    {feature.icon} {feature.title}
                  </p>
                  {feature.description.map((desc) => (
                    <Badge className="mr-1">{desc}</Badge>
                  ))}
                </li>
              ))}
            </ul>
            <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row"></div>
          </div>
          <div className="flex max-h-[600px] lg:max-h-[800px] overflow-hidden rounded-xl shadow-2xl">
            <img
              src="/me image.jpeg"
              alt="placeholder hero"
              className="grayscale-100 w-full object-cover"
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
