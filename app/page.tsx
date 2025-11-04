import { ArrowDownFromLine, Asterisk, Code, PenTool, User } from "lucide-react";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { Button } from "@/components/ui/button";
import FadeContent from "@/components/FadeContent/FadeContent";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";
import AboutMe from "@/components/about-me";
import Programming from "@/components/programming";

import ContactMe from "@/components/contact-me";
import GraphicsPage from "@/components/graphics";
import Image from "next/image";
import bgImg from "@/public/arabic-calligraphy-wallpaper-wall-with-brown-background-old-paper-interlacing-translate-arabic-letters.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BackgroundBeams } from "@/components/ui/shadcn-io/background-beams";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="px-8 md:px-12 lg:px-24 mx-auto">
        <main className=" min-h-screen flex items-center justify-center ">
          <FadeContent
            blur={true}
            duration={900}
            easing="ease-out"
            initialOpacity={0}
          >
            <header className="flex ">
              <div className="flex flex-col">
                <AnimatedContent
                  distance={80}
                  direction="vertical"
                  reverse={false}
                  duration={1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0.2}
                >
                  <div className="flex flex-col w-fit mx-auto">
                    <div className="min-[660px]:-mb-1 p-3 min-[660px]:p-6 bg-primary w-fit self-end ">
                      <h1 className="font-bold font-changa text-end min-[660px]:text-3xl text-lg text-background ">
                        مهدي أحمد
                      </h1>
                    </div>
                    <h1 className="text-6xl min-[350px]:text-7xl min-[446px]:text-8xl min-[660px]:text-[150px] lg:text-[200px] leading-none text-center tracking-tight font-bebas-neue ">
                      Mahdi Ahmed
                    </h1>
                    <AnimatedContent
                      distance={80}
                      direction="vertical"
                      reverse={false}
                      duration={1}
                      ease="power3.out"
                      initialOpacity={0}
                      animateOpacity
                      scale={1}
                      threshold={0.2}
                      delay={0.4}
                    >
                      <h3 className="min-[660px]:-mt-2 text-center lg:max-w-[794px] min-[660px]:max-w-[593px] max-w-[237px] min-[350px]:max-w-[284px] min-[446px]:max-w-[380px] mt-2 text-lg min-[660px]:text-2xl tracking-tighter font-sans mx-auto  ">
                        Hi, I’m Mahdi — a multimedia designer and full-stack
                        developer. I specialise in modern JavaScript frameworks,
                        QA testing and DevOps practices. Feel free to check the
                        rest of my portfolio below.
                      </h3>
                    </AnimatedContent>
                  </div>
                </AnimatedContent>
                <AnimatedContent
                  distance={40}
                  direction="vertical"
                  reverse={false}
                  duration={1}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1}
                  threshold={0.2}
                  delay={0.8}
                >
                  <div className="lg:max-w-[794px] min-[660px]:max-w-[593px] max-w-[386px] flex items-center mt-6 justify-end space-x-6 ">
                    <div className="p-1 w-full bg-primary"></div>
                    <Button
                      className="flex font-bold w-fit self-end animate"
                      variant="outline"
                      asChild
                    >
                      <Link href="#about" className="relative">
                        <ArrowDownFromLine />
                        Explore Portfolio
                        <div className="p-2 rounded-full opacity-75 animate-ping bg-primary absolute -top-1 -right-1"></div>
                        <div className="p-2 rounded-full bg-primary absolute -top-1 -right-1"></div>
                      </Link>
                    </Button>
                  </div>
                </AnimatedContent>
              </div>
            </header>
          </FadeContent>
        </main>

        {/* ABOUT ME */}
        <FadeContent
          blur={true}
          duration={900}
          easing="ease-out"
          initialOpacity={0}
        >
          <AboutMe />
        </FadeContent>
        <div className="space-y-40 mt-40">
          {/* PROGRAMMING */}
          <FadeContent
            blur={true}
            duration={900}
            easing="ease-out"
            initialOpacity={0}
          >
            <Programming />
          </FadeContent>

          {/* GRAPHICS */}

          <GraphicsPage />

          {/* CONTACT ME */}
          <FadeContent
            blur={true}
            duration={900}
            easing="ease-out"
            initialOpacity={0}
          >
            <ContactMe />
          </FadeContent>
        </div>
      </main>
      <Footer />
    </>
  );
}
