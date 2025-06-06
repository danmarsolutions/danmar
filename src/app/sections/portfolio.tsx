"use client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Badge } from "@/components/ui/badge";
import CustomCarousel from "@/components/custom-carousel";
import { Safari } from "@/components/magicui/safari";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type ShowcaseItem = {
  title: string;
  description: string;
  link?: string;
  imageSrc: string;
  mobileImageSrc: string;
};

export default function Portfolio() {
  const showcaseItems: ShowcaseItem[] = [
    {
      title: "Ar Rahah",
      description:
        "Islamic travel agency offering halal-certified travel packages and tours.",
      imageSrc: "/arrahah_desktop.png",
      mobileImageSrc: "/arrahah_mobile.png",
    },
    {
      title: "Green Energy",
      description:
        "Energy-efficient renovation company specializing in thermal insulation and heat pump installation.",
      imageSrc: "/moverlogs_desktop.png",
      mobileImageSrc: "/moverlogs_mobile.png",
    },
    {
      title: "Z Squared",
      description:
        "Personal blog website for two friends and business partners.",
      imageSrc: "/zsquared_desktop.png",
      mobileImageSrc: "/zsquared_mobile.png",
      link: "https://zsquared.ca",
    },
    // Add more items as needed
  ];
  return (
    <section
      id="portfolio"
      className="min-h-screen flex flex-col gap-24 items-center"
    >
      <div className="w-2/3 flex flex-col gap-8 items-center text-center">
        <Badge
          variant="secondary"
          className="rounded-full font-semibold px-4 py-1"
        >
          Our Portfolio
        </Badge>
        <TextAnimate
          as="h2"
          animation="slideUp"
          by="word"
          duration={0.5}
          className="font-bold text-6xl"
        >
          Innovation in Action
        </TextAnimate>
        <TextAnimate
          as="p"
          animation="fadeIn"
          delay={0.6}
          duration={1}
          by="word"
          className="text-lg tracking-tight"
        >
          Explore a selection of projects we&apos;ve proudly brought
          to life—each site meticulously designed and strategically
          built to surpass expectations. See firsthand how we help
          businesses thrive in the digital landscape.
        </TextAnimate>
      </div>
      <CustomCarousel controlPosition="top">
        {showcaseItems.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-3 gap-10 bg-card rounded-lg p-10"
            >
              <div className="col-span-2 relative">
                <div className="relative">
                  <Safari
                    url="danmarsolutions.ca"
                    className="size-full"
                    imageSrc={item.imageSrc}
                    mode="simple"
                  />
                </div>
                <div className="absolute w-1/5 bottom-0 right-0">
                  <Iphone15Pro
                    height={880}
                    width={430}
                    className="size-full"
                    src={item.mobileImageSrc}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-3xl mb-6">
                    {item.title}
                  </h4>
                  <p className="text-base tracking-tight">
                    {item.description}
                  </p>
                </div>
                {item.link && (
                  <Button
                    variant="pill-secondary"
                    asChild
                    className="w-fit"
                  >
                    <Link href={item.link} target="_blank">
                      Check it out <ArrowUpRight />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </CustomCarousel>
    </section>
  );
}
