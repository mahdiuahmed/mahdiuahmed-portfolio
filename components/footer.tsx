// "use client";

// import * as React from "react";
// import Link from "next/link";
// import {
//   Code,
//   Github,
//   Instagram,
//   Linkedin,
//   Mail,
//   Menu,
//   PenTool,
//   User,
// } from "lucide-react";
// import logo from "../public/mahdi logo png.png";

// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import Image from "next/image";

// export default function Footer() {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <footer className="mt-36 z-50 w-screen border-t-2 backdrop-blur-sm light">
//       <div className="flex items-center justify-center gap-4 p-4 ">
//         <h4 className=" font-medium">@mahdiuahmed</h4>
//         <div>
//           <Button variant="ghost" asChild size="sm">
//             <Link
//               href="https://github.com/mahdiuahmed"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Github />
//             </Link>
//           </Button>
//           <Button variant="ghost" asChild size="sm">
//             <Link
//               href="https://www.linkedin.com/in/mahmed01"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Linkedin className="w-6 h-6 hover:text-primary hover:scale-150 transition-transform" />
//             </Link>
//           </Button>
//           <Button variant="ghost" asChild size="sm">
//             <Link
//               href="https://instagram.com/mahdiuahmed"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Instagram className="w-6 h-6 hover:text-primary hover:scale-150 transition-transform" />
//             </Link>
//           </Button>
//           <Button variant="ghost" asChild size="sm">
//             <Link href="mailto:imahdiahmed01@gmail.com">
//               <Mail className="w-6 h-6 hover:text-primary hover:scale-150 transition-transform" />
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";
import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  ArrowUp,
  Heart,
  Coffee,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import FadeContent from "./FadeContent/FadeContent";
import { SiMedium } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FadeContent
      blur={true}
      duration={1300}
      easing="ease-out"
      initialOpacity={0}
    >
      <footer className="relative mt-36 bg-gradient-to-t from-muted/50 to-background border-t">
        {/* Compelling CTA Section */}
        <div className="container mx-auto px-4 py-12">
          <Card className="p-8 mb-8 text-center bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 ">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Have a project in mind? I'm always excited to collaborate on
                innovative ideas and bring creative visions to life. Let's
                connect and make it happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToTop}
                  className="group bg-transparent"
                >
                  <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
                  Back to Top
                </Button>
              </div>
            </div>
          </Card>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">@mahdiuahmed</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Crafting digital experiences with passion and precision. Always
                learning, always building.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 fill-current" />
                <span>and</span>
                <Coffee className="w-4 h-4 text-amber-600" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h5 className="font-medium">Quick Links</h5>
              <nav className="flex flex-col space-y-2">
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  href="#programming"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Programming
                </Link>
                <Link
                  href="/#graphics"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Graphics
                </Link>
                <Link
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </nav>
            </div>

            {/* Connect Section */}
            <div className="space-y-4">
              <h5 className="font-medium">Let's Connect</h5>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group bg-transparent"
                >
                  <Link
                    href="https://github.com/mahdiuahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group bg-transparent"
                >
                  <Link
                    href="https://www.linkedin.com/in/mahmed01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group bg-transparent"
                >
                  <Link
                    href="https://instagram.com/mahdiuahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group bg-transparent"
                >
                  <Link href="mailto:imahdiahmed01@gmail.com">
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group bg-transparent"
                >
                  <Link
                    href="https://medium.com/@imahdiahmed01"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiMedium className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Always open to interesting conversations and opportunities
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-border/50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} Mahdi Ahmed. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground">
                Built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </footer>
    </FadeContent>
  );
}
