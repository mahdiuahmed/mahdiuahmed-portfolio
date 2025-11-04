import { PortfolioCard } from "@/components/PortfolioCard";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Programming({ className }: { className?: string }) {
  const projectInfo = [
    {
      title: "Notavox - AI Transcription Service",
      description:
        "A full-stack SaaS web application that enables users to upload and transcribe audio or video files in multiple languages using OpenAI’s Whisper model. Users can securely log in, upload files, and view their transcription results in a modern, responsive dashboard. The app automates file handling, transcription, and result delivery using AWS Lambda, S3, and DynamoDB, creating a completely serverless and cost-efficient workflow.",
      technologies: [
        "Next.js",
        "Python",
        "Clerk",
        "Docker",
        "AWS - S3, Lambda, DynamoDB, ECR",
        "OpenAI Whisper",
      ],
      imageUrl: "/image.png",
      projectUrl: "https://notavox.vercel.app/",
    },
    {
      title: "Software Quality Engineering & Observability Platform",
      description:
        "A multi-service application using Docker Compose, orchestrating frontend (Next.js), backend (FastAPI + SQLAlchemy), and PostgreSQL. This project is heavily focused on software quality engineering, incorporating robust testing strategies, CI/CD pipelines, and observability tools like Prometheus and Grafana to monitor application performance and reliability.",
      technologies: [
        "Next.js",
        "Mocha",
        "Pytest",
        "Pandas",
        "SQLAlchemy",
        "Selenium Grid",
        "noVNC",
        "Firebase",
        "FastAPI",
        "PostgreSQL",
        "Docker",
        "Prometheus",
        "Grafana",
        "Jenkins",
      ],
      imageUrl: "/image copy 2.png",
      githubUrl:
        "https://github.com/mahdiuahmed/Software-Quality-Engineering-Observability-Platform",
    },
    {
      title: "Uptime Monitor - Website Monitoring Service",
      description:
        "A real-time uptime monitoring platform that allows users to track the availability and performance of their websites. Built with a focus on reliability and user experience incorporating detailed performance analytics through an intuitive dashboard.",
      technologies: ["Next.js", "TailwindCSS", "Firebase"],
      imageUrl: "/image copy.png",
      projectUrl: "https://uptime-monitor-weld.vercel.app/",
      // githubUrl: "https://github.com/mahdiuahmed/uptime-monitor",
    },
  ];

  return (
    <main id="programming" className="max-w-7xl mx-auto scroll-mt-32">
      <section className="flex flex-col items-center justify-between mx-auto max-w-screen-lg gap-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Content */}
          <div className="text-center space-y-4">
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl  tracking-tight">
                Programming
                <span className="block text-primary">Projects</span>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-muted-foreground tracking-tighter">
                A curated collection of my programming projects and technical
                solutions. Each project represents a unique challenge, a
                problem-solving journey, and an exploration of efficient,
                elegant, and scalable software development.
              </p>
            </div>
          </div>
        </div>

        <div
          id="gallery"
          className="grid gap-6 min-[1162px]:grid-cols-2 grid-cols-2 max-[703px]:grid-cols-1"
        >
          {projectInfo.map((project, index) => (
            <PortfolioCard
              className=""
              key={index}
              title={project.title}
              description={project.description}
              imageURL={project.imageUrl}
              technologies={project.technologies}
              projectUrl={project.projectUrl}
              githubUrl={project.githubUrl}
            />
          ))}
          <Card
            className={cn(
              "overflow-hidden transition-all hover:shadow-lg grid grid-rows-[auto_auto_1fr_auto] ",
              className
            )}
          >
            <CardHeader className="">
              <CardTitle className="font-bold">
                Don't worry, there's more!
              </CardTitle>
              <CardDescription className="">
                Check out my github page for more projects and how I tackled
                them with detailed documentation
              </CardDescription>
            </CardHeader>
            <CardFooter className="">
              <Button asChild variant="outline" className="gap-1">
                <Link href="https://www.github.com/mahdiuahmed" target="_blank">
                  <Github className="h-4 w-4" />
                  <span className="sm:ml-1">View My Github</span>
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
