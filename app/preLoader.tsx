"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/Mahdiuahmed logo svg.svg";
import FadeContent from "@/components/FadeContent/FadeContent";
import AnimatedContent from "@/components/AnimatedContent/AnimatedContent";

export default function PreLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5500); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <>
        {/* {loading2 && (
        <FadeContent
          blur={true}
          duration={1500}
          easing="ease-out"
          initialOpacity={0}
          reverse
        >

      )} */}
        <FadeContent
          blur={true}
          duration={1500}
          easing="ease-out"
          initialOpacity={0}
          delay={3000}
        >
          <div className="flex items-center justify-center h-screen w-screen bg-background">
            <FadeContent
              blur={true}
              duration={1500}
              easing="ease-out"
              initialOpacity={0}
            >
              {/* Replace with your actual logo */}
              <AnimatedContent
                distance={80}
                direction="vertical"
                reverse={false}
                duration={3}
                ease="power3.out"
                initialOpacity={0}
                animateOpacity
                scale={1}
                threshold={0.2}
                delay={0.2}
              >
                <div className="w-[300px] ">
                  <Image src={logo} alt="Logo" className="invert" priority />
                  <p className="text-center ">Welcome to my portfolio.</p>
                </div>
              </AnimatedContent>
            </FadeContent>
          </div>
        </FadeContent>
      </>
    );
  }

  return <>{children}</>;
}
