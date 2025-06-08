"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

type NavLink = {
  id: string;
  label: string;
};

const links: NavLink[] = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Our Services" },
  { id: "portfolio", label: "Clients" },
  { id: "team", label: "About Us" },
  { id: "footer", label: "Contact Us" },
];

export default function Navbar() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    links.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-background/70">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between p-4">
          <Image
            src="/color-wordmark.png"
            alt="Wordmark for Danmar Software Solutions"
            height={400}
            width={1200}
            className="h-16 w-auto"
          />
          <div className="flex items-center gap-12">
            {links.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={"#" + link.id}
                  className={cn(
                    "text-foreground/90 hover:text-foreground",
                    active === link.id && "text-foreground font-bold",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Button variant="pill-outline" asChild>
            <Link
              href="https://cal.com/danmarsolutions/30min"
              target="_blank"
            >
              <Calendar className="size-4" />
              Book Now
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
