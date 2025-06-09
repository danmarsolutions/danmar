"use client";
import Hero from "./sections/hero";
import Portfolio from "./sections/portfolio";
import Testimonials from "./sections/testimonials";
import Contact from "./sections/contact";
import Footer from "./sections/footer";
import dynamic from "next/dynamic";

// Dynamic imports to avoid SSR with media query hooks
const Services = dynamic(() => import("./sections/services"), {
  ssr: false,
});
const Team = dynamic(() => import("./sections/team"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
