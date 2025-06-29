"use client";
import * as motion from "motion/react-client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useMediaQuery } from "@uidotdev/usehooks";

type Service = {
  title: string;
  description: string;
  imageSrc: string;
};

const services: Service[] = [
  {
    title: "Custom Web Design",
    description:
      "Tailored, user-centric designs built by world-class creatives.",
    imageSrc: "/design-icon.svg",
  },
  {
    title: "Full-Stack Development",
    description:
      "Robust, scalable solutions engineered by software talent from Canada's leading tech institutions.",
    imageSrc: "/dev-icon.svg",
  },
  {
    title: "Secure & Scalable Hosting",
    description:
      "Fast, reliable hosting ensuring your site runs flawlessly around the clock.",
    imageSrc: "/hosting-icon.svg",
  },
];

export default function Services() {
  const isLg = useMediaQuery("only screen and (min-width: 64rem)");
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col gap-32 mb-32"
    >
      <div className="flex flex-col gap-8">
        <Badge
          variant="secondary"
          className="rounded-full font-semibold px-4 py-1"
        >
          Services
        </Badge>
        <TextAnimate
          as="h2"
          animation="slideUp"
          by="word"
          duration={0.5}
          className="font-bold text-4xl lg:text-6xl"
        >
          Design. Develop. Deploy.
        </TextAnimate>
        <TextAnimate
          as="p"
          animation="fadeIn"
          delay={0.6}
          duration={1}
          by="word"
          className="text-base lg:text-lg tracking-tight w-2/3"
        >
          From stunning visuals that captivate your audience to
          powerful, responsive websites engineered for peak
          performance—Danmar handles it all. Our integrated approach
          includes:
        </TextAnimate>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          return (
            <motion.div
              key={index}
              className="rounded-lg border border-foreground/20 p-10 flex flex-col justify-between min-h-80 lg:min-h-[412px]"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.5,
                  delay: isLg ? index * 0.5 : 0,
                },
              }}
              viewport={{ amount: 0.8, once: true }}
            >
              <div>
                <h3 className="mb-6 font-semibold text-3xl lg:text-4xl">
                  {service.title}
                </h3>
                <p className="text-base lg:text-lg">
                  {service.description}
                </p>
              </div>
              <Image
                src={service.imageSrc}
                height={80}
                width={80}
                className="lg:size-20 size-16"
                alt="Icon"
              />
            </motion.div>
          );
        })}
      </div>
      <div className="relative p-8">
        <motion.div
          className="absolute top-0 left-0"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          viewport={{ amount: 0.8, once: true }}
        >
          <Quote className="size-6 lg:size-8 fill-foreground rotate-180" />
        </motion.div>
        <TextAnimate
          as="h3"
          by="word"
          animation="blurIn"
          className="font-semibold text-2xl lg:text-4xl text-center"
          delay={0.4}
          duration={0.8}
          once
        >
          Experience the simplicity of having your web solutions
          expertly managed, end-to-end.
        </TextAnimate>
        <motion.div
          className="absolute bottom-0 right-0"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.3, delay: 1.2 },
          }}
          viewport={{ amount: 0.8, once: true }}
        >
          <Quote className="size-6 lg:size-8 fill-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
