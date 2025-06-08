"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Calendar, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            className="h-16 w-auto hidden lg:block"
          />
          <Image
            src="/color-logo.png"
            alt="Logo for Danmar Software Solutions"
            height={400}
            width={400}
            className="size-16 lg:hidden block"
          />
          <div className="items-center gap-12 hidden lg:flex">
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
          <div className="flex gap-4">
            <Button variant="pill-outline" asChild>
              <Link
                href="https://cal.com/danmarsolutions/30min"
                target="_blank"
              >
                <Calendar className="size-4" />
                Book Now
              </Link>
            </Button>
            <Sheet
              open={mobileMenuOpen}
              onOpenChange={setMobileMenuOpen}
            >
              <SheetTrigger asChild>
                <Button variant="ghost" className="flex lg:hidden">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-screen">
                <SheetHeader>
                  <SheetTitle className="sr-only">
                    Navigation Menu
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-8 p-4 size-full items-center justify-center">
                  {links.map((link) => {
                    return (
                      <Link
                        key={link.id}
                        href={"#" + link.id}
                        className={cn(
                          "text-foreground/90 hover:text-foreground text-4xl",
                          active === link.id &&
                            "text-foreground font-bold",
                        )}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setActive(link.id);
                        }}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
