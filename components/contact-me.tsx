import ContactForm from "@/components/contact-form";
import React from "react";
import FadeContent from "./FadeContent/FadeContent";
import { MailIcon, MapPin, Phone } from "lucide-react";

export default function ContactMe() {
  return (
    <main id="contact" className=" container flex flex-1 mx-auto scroll-mt-32">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl  font-bold tracking-tight mb-2">
            Get in Touch
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Have a question or want to work together? Fill out the form below
            and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <Phone size={24} className="text-primary" />
            </div>
            <h3 className="font-medium">Phone</h3>
            <p className="text-sm text-muted-foreground mt-1">
              +44 7305 682459
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <MailIcon size={24} className="text-primary" />
            </div>
            <h3 className="font-medium">Email</h3>
            <p className="text-sm text-muted-foreground mt-1">
              imahdiahmed01@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-4 rounded-lg border bg-card">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <MapPin size={24} className="text-primary" />
            </div>
            <h3 className="font-medium">Location</h3>
            <p className="text-sm text-muted-foreground mt-1">London, UK</p>
          </div>
        </div>

        <div className="bg-card border rounded-xl p-6 md:p-8 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
