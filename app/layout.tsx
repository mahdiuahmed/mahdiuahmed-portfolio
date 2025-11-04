import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "./globals.css";
import { Space_Grotesk, Changa, Bebas_Neue } from "next/font/google";
import Footer from "@/components/footer";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Link, User, Code, PenTool } from "lucide-react";
import { Suspense } from "react";
import PreLoader from "./preLoader";

const space_grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

const changa = Changa({
  variable: "--font-changa",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  subsets: ["arabic"],
});

const bebas_neue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahdi - Developer & Designer",
  description: "Welcome To My World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="!scroll-smooth">
      {/* <link
        rel="icon"
        href="/icon?<generated>"
        type="image/png"
        sizes="32x32"
      /> */}
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${space_grotesk.variable} ${changa.variable} ${bebas_neue.variable} antialiased  overflow-x-hidden`}
      >
        {/* <Suspense fallback={<Spinner/>} /> */}
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        {/* <div className="turbulence-bg w-screen h-screen" /> */}

        <main className="">
          {children}
          {/* <svg
            className="fixed inset-0 w-screen mix-blend-overlay z-50 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 700 700"
          >
            <defs>
              <filter
                id="nnnoise-filter"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                color-interpolation-filters="linearRGB"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.182"
                  numOctaves="4"
                  seed="15"
                  stitchTiles="stitch"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  result="turbulence"
                ></feTurbulence>
                <feSpecularLighting
                  surfaceScale="40"
                  specularConstant="3"
                  specularExponent="20"
                  lighting-color="hsl(0, 0%, 100%)"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="turbulence"
                  result="specularLighting"
                >
                  <feDistantLight azimuth="3" elevation="1"></feDistantLight>
                </feSpecularLighting>
                <feColorMatrix
                  type="saturate"
                  values="0"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="specularLighting"
                  result="colormatrix"
                ></feColorMatrix>
              </filter>
            </defs>
            <rect width="700" height="700" fill="hsla(0, 0%, 50%, 1.00)"></rect>
            <rect
              width="700"
              height="700"
              fill="hsl(0, 0%, 100%)"
              filter="url(#nnnoise-filter)"
            ></rect>
          </svg> */}
          {/* <svg
            className="fixed inset-0 w-screen mix-blend-overlay z-50 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 700 700"
          >
            <defs>
              <filter
                id="nnnoise-filter"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                colorInterpolationFilters="linearRGB"
              >
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="0.102"
                  numOctaves="4"
                  seed="15"
                  stitchTiles="stitch"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  result="turbulence"
                ></feTurbulence>
                <feSpecularLighting
                  surfaceScale="15"
                  specularConstant="0.75"
                  specularExponent="20"
                  lightingColor="hsl(0, 0%, 100%)"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="turbulence"
                  result="specularLighting"
                >
                  <feDistantLight azimuth="3" elevation="100"></feDistantLight>
                </feSpecularLighting>
                <feColorMatrix
                  type="saturate"
                  values="0"
                  x="0%"
                  y="0%"
                  width="100%"
                  height="100%"
                  in="specularLighting"
                  result="colormatrix"
                ></feColorMatrix>
              </filter>
            </defs>
            <rect width="700" height="700" fill="hsla(0, 0%, 50%, 1.00)"></rect>
            <rect
              width="100%"
              height="100%"
              fill="hsl(0, 0%, 50%)"
              filter="url(#nnnoise-filter)"
            ></rect>
          </svg> */}
        </main>

        {/* <div className="fixed top-0 left-0 right-0 opacity-20 mx-auto h-screen w-[1440px] bg-red-300" /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
