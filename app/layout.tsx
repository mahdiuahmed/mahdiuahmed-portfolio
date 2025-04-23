import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "./globals.css";
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
// const nexus = localFont({
//   src: "./fonts/Nexusbold-Regular.otf",
//   variable: "--font-nexus",
// });

import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahdi Ahmed",
  description: "This is me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.className}  antialiased`}>
        {/* <Navbar /> */}
        <main className="">{children}</main>
      </body>
    </html>
  );
}
