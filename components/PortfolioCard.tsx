import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import Image, { StaticImageData } from "next/image";

interface PortfolioCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageURL: string;
  projectUrl?: string;
  githubUrl?: string;
  className?: string;
}

export function PortfolioCard({
  title,
  description,
  technologies,
  imageURL,
  projectUrl,
  githubUrl,
  className,
}: PortfolioCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-lg grid grid-rows-[auto_auto_1fr_auto] bg-background ",
        className
      )}
    >
      <div className="aspect-16/9 w-full">
        <Image
          alt=""
          src={imageURL}
          width={0}
          height={0}
          className="h-full w-full object-cover object-center -mt-6"
        />
      </div>
      <CardHeader className="">
        <CardTitle className="font-bold">{title}</CardTitle>
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 ">
          {technologies.map((tech) => (
            <Badge key={tech} className="font-medium brightness-125">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-1">
        {projectUrl?.trim() && (
          <Button asChild variant="outline" size="sm" className="gap-1">
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              <span className="sm:ml-1">View Project</span>
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button asChild variant="outline" size="sm" className="gap-1">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className=" sm:ml-1">View Code</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
