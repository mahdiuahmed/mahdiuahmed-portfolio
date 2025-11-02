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
  title: "Mahdi - Designer & Developer",
  description: "Coming Soon",
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

        <main className="">{children}</main>

        {/* <div className="fixed top-0 left-0 right-0 opacity-20 mx-auto h-screen w-[1440px] bg-red-300" /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
