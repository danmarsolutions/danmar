"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubscribe = async () => {
    try {
      setLoading(true);
      await fetch("/api/email/newsletter", {
        body: JSON.stringify({
          email,
        }),
        method: "POST",
      });
      setLoading(false);
      setEmail("");
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
    }
  };
  return (
    <footer id="footer">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
        <div className="flex flex-col gap-4">
          <Image
            src="/white-wordmark.png"
            width={1040}
            height={280}
            alt="Wordmark for Danmar Software Solutions"
            className="w-60 lg:w-80 h-auto"
          />
          <p className="max-w-none lg:max-w-80">
            Effortless design, seamless development, and reliable
            hosting—all in one place.{" "}
          </p>
          <div className="flex items-center gap-4">
            <Button
              asChild
              variant="outline"
              className="rounded-full"
            >
              <Link href="#">
                <FaLinkedin /> LinkedIn
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="grid w-full gap-3">
            <Label htmlFor="newsletter" className="font-bold text-lg">
              Subscribe to Our Newsletter
            </Label>
            <Input
              value={email}
              id="newsletter"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
          <Button
            variant="pill-secondary"
            size="pill"
            className="w-fit"
            onClick={handleSubscribe}
            disabled={loading || !email}
          >
            {loading ? "Submitting..." : "Submit"} <ArrowUpRight />
          </Button>
        </div>
      </div>
      <div className="text-center text-muted-foreground p-4 text-sm">
        © 2025 Danmar Software Solutions. All rights reserved.
      </div>
    </footer>
  );
}
