import { PortfolioCard } from "@/components/card";
import React from "react";
import zenithPNG from "../../public/screencapture-zenith-neon-vercel-app-dashboard-2025-05-06-15_06_59.png";

export default function page() {
  return (
    <main className="mt-36  flex flex-col items-center justify-center px-8 max-sm:px-4">
      <section className="flex flex-col items-center justify-between  max-w-screen-xl px-8 gap-16">
        <h1 className=" text-center font-bebas text-[140px]/none underline decoration-lime-300">
          Programming Projects
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PortfolioCard
            title={"Zenith"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            }
            technologies={["Next.js", "TailwindCSS", "Firebase"]}
            // imageUrl={"project.imageUrl"}
            projectUrl={"project.projectUrl"}
            githubUrl={"project.githubUrl"}
            imageUrl={zenithPNG}
          />
          <PortfolioCard
            title={"Zenith"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            }
            technologies={["Next.js", "TailwindCSS", "Firebase"]}
            // imageUrl={"project.imageUrl"}
            projectUrl={"project.projectUrl"}
            githubUrl={"project.githubUrl"}
          />
          <PortfolioCard
            title={"Zenith"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            }
            technologies={["Next.js", "TailwindCSS", "Firebase"]}
            // imageUrl={"project.imageUrl"}
            projectUrl={"project.projectUrl"}
            githubUrl={"project.githubUrl"}
          />
          <PortfolioCard
            title={"Zenith"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            }
            technologies={["Next.js", "TailwindCSS", "Firebase"]}
            // imageUrl={"project.imageUrl"}
            projectUrl={"project.projectUrl"}
            githubUrl={"project.githubUrl"}
          />
          <PortfolioCard
            title={"Zenith"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            }
            technologies={["Next.js", "TailwindCSS", "Firebase"]}
            // imageUrl={"project.imageUrl"}
            projectUrl={"project.projectUrl"}
            githubUrl={"project.githubUrl"}
          />
          <PortfolioCard
            title={"Zenith"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
            }
            technologies={["Next.js", "TailwindCSS", "Firebase"]}
            // imageUrl={"project.imageUrl"}
            projectUrl={"project.projectUrl"}
            githubUrl={"project.githubUrl"}
          />
        </div>
      </section>
    </main>
  );
}
