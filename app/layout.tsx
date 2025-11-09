import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk, Changa, Bebas_Neue } from "next/font/google";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://tweakcn.com/live-preview.min.js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        suppressHydrationWarning
        className={`${space_grotesk.variable} ${changa.variable} ${bebas_neue.variable} antialiased  overflow-x-hidden`}
      >
        <main className="">{children}</main>
      </body>
    </html>
  );
}
