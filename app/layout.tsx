import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import "./globals.css";
import { Space_Grotesk, Changa } from "next/font/google";
import Footer from "@/components/footer";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme-provider";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
});

const changa = Changa({
  subsets: ["arabic"],
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
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/png"
        sizes="32x32"
      />
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <body
        className={`${space_grotesk.className}  antialiased  overflow-x-hidden`}
      >
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > */}
        {/* <div className="turbulence-bg w-screen h-screen" /> */}
        <Navbar />
        <main className="">{children}</main>
        <Footer />
        {/* <div className="fixed top-0 left-0 right-0 opacity-20 mx-auto h-screen w-[1440px] bg-red-300" /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
