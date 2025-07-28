"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Send, Loader2, CheckCircle2, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(1, {
    message: "Please select a subject.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  phone: z.string().optional(),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Send data to our API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Show success state
      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold">Contact Me</h2>
          <p className="text-muted-foreground mt-1">
            Fill out the form below and I'll get back to you as soon as
            possible.
          </p>
        </div>

        {/* Status messages */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 dark:bg-green-950/30 dark:border-green-900">
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
            <div>
              <h3 className="font-medium text-green-800 dark:text-green-300">
                Message sent successfully!
              </h3>
              <p className="text-green-700 dark:text-green-400 text-sm mt-1">
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3 dark:bg-red-950/30 dark:border-red-900">
            <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
            <div>
              <h3 className="font-medium text-red-800 dark:text-red-300">
                Something went wrong
              </h3>
              <p className="text-red-700 dark:text-red-400 text-sm mt-1">
                {errorMessage ||
                  "There was an error sending your message. Please try again or contact me directly."}
              </p>
            </div>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="john.doe@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Phone Number{" "}
                      <span className="text-muted-foreground text-sm">
                        (Optional)
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+1 (555) 123-4567"
                        type="tel"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Subject</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="project">
                          Project Opportunity
                        </SelectItem>
                        <SelectItem value="job">Job Offer</SelectItem>
                        <SelectItem value="collaboration">
                          Collaboration
                        </SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please describe how I can help you..."
                      className="min-h-32 resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
