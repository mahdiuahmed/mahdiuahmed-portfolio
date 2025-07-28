import Image, { StaticImageData } from "next/image";
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

interface PortfolioCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string | StaticImageData;
  projectUrl?: string;
  githubUrl?: string;
  className?: string;
}

export function PortfolioCard({
  title,
  description,
  technologies,
  imageUrl,
  projectUrl,
  githubUrl,
  className,
}: PortfolioCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden transition-all hover:shadow-lg ",
        className
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={
            imageUrl ||
            "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
          }
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1 font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} className="font-medium">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        {projectUrl && (
          <Button asChild variant="outline" size="sm" className="gap-1">
            <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only sm:ml-1">
                View Project
              </span>
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button asChild variant="outline" size="sm" className="gap-1">
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only sm:not-sr-only sm:ml-1">View Code</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
