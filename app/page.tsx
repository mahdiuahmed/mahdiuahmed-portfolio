import { Mail, Github, Linkedin, Instagram, Hammer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col space-y-6 items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">
      <h1 className="font-extrabold ">mahdiuahmed.com</h1>
      <Card className="w-full max-w-md text-center p-6 shadow-xl border-muted">
        <CardContent>
          <div className="flex flex-col items-center space-y-4">
            <Hammer className="w-12 h-12 text-primary animate-bounce" />
            <h1 className="text-2xl font-bold">Website Under Construction</h1>
            <p className="text-muted-foreground">
              I’m working on something awesome. In the meantime, you can reach
              me here:
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Link
                href="https://github.com/mahdiuahmed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 hover:text-primary hover:scale-150 transition-transform" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/mahmed01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 hover:text-primary hover:scale-150 transition-transform" />
              </Link>
              <Link
                href="https://instagram.com/mahdiuahmed"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 hover:text-primary hover:scale-150 transition-transform" />
              </Link>
              <Link href="mailto:imahdiahmed01@gmail.com">
                <Mail className="w-6 h-6 hover:text-primary hover:scale-150 transition-transform" />
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
