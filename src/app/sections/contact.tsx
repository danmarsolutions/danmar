"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, CheckCircle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { ContactEmailBody } from "../api/email/contact/route";

// Define the form schema with zod
const FormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phoneNumber: z.string().optional(),
  contactTime: z.enum(["morning", "afternoon", "evening"]).optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof FormSchema>;

export default function Contact() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      contactTime: undefined,
      message: "",
    },
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", data);
      const body: ContactEmailBody = {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        preferredContactTime: data.contactTime,
        message: data.message,
      };
      await fetch("/api/email/contact", {
        body: JSON.stringify(body),
        method: "POST",
      });

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-[60vh] rounded-xl bg-[url('/vrguyoutside.jpg')] bg-container bg-no-repeat bg-cover relative mb-32"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-8 h-full p-10">
        <div className="col-span-2 flex flex-col gap-8 justify-center h-full">
          <h2 className="text-2xl lg:text-5xl font-bold">
            Let&apos;s Build Something Great
          </h2>
          <p className="text-sm lg:text-base">
            Ready to elevate your business? Contact us today and
            discover how Danmar Software Solutions can accelerate your
            journey into the digital future.
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="rounded-full">
              <FaLinkedin />
              LinkedIn
            </Button>
          </div>
        </div>
        <div className="col-span-3 h-full backdrop-blur-md bg-black/30 rounded-xl flex flex-col gap-4 p-8">
          {showSuccess ? (
            <div className="size-full flex flex-col justify-center items-center">
              <CheckCircle className="text-green-500 size-8" />
              <p className="text-2xl font-semibold">
                Message received!
              </p>
              <p>We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="grid w-full items-center gap-3">
                        <FormLabel>Name*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name..."
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="grid w-full items-center gap-3">
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your name..."
                            type="email"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem className="grid w-full items-center gap-3">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number..."
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
                  name="contactTime"
                  render={({ field }) => (
                    <FormItem className="grid w-full items-center gap-3">
                      <FormLabel>Best Time To Contact You?</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a time" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="morning">
                            Morning
                          </SelectItem>
                          <SelectItem value="afternoon">
                            Afternoon
                          </SelectItem>
                          <SelectItem value="evening">
                            Evening
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid w-full items-center gap-3">
                      <FormLabel>Your Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ask us anything about your digital experience!"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  variant="pill-secondary"
                  className="w-fit font-medium hover:[&_svg]:rotate-45 [&_svg]:transition-all"
                  size="pill"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? "Submitting..."
                    : "Submit"}{" "}
                  <ArrowUpRight />
                </Button>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
