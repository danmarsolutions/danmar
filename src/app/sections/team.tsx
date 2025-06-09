import * as motion from "motion/react-client";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaBehance, FaGithub, FaLinkedin } from "react-icons/fa";
import { Quote } from "lucide-react";
import { useMediaQuery } from "@uidotdev/usehooks";

export type TeamMember = {
  role: string;
  name: string;
  description: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
  github?: string;
  linkedin?: string;
  behance?: string;
};

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      role: "Founder, Software Engineer",
      name: "Muhammad Danyal Afzal",
      description:
        "Engineering graduate from McMaster University and currently a Software Engineer at Amazon, Danyal brings industry-grade expertise in full-stack web development and scalable systems.",
      image: { src: "/danyal.png", width: 200, height: 200 },
      github: "https://github.com/dafzal231",
      linkedin: "https://www.linkedin.com/in/dafzal/",
    },
    {
      role: "Founder, Software Engineer",
      name: "Ammar Ahmed",
      description:
        "An Engineering student at the University of Waterloo with extensive experience in full-stack web development, Ammar specializes in building robust, user-focused software solutions.",
      image: { src: "/ammar.png", width: 1280, height: 1210 },
      github: "https://github.com/ammar-ahmed22",
      linkedin: "https://www.linkedin.com/in/ammarahmed2203/",
    },
    {
      role: "UI/UX Designer",
      name: "Muhammad Abubaker",
      description:
        "A skilled UI/UX designer with extensive freelance and in-house experience, Abubaker specializes in clean, modern designs that elevate user experience.",
      image: { src: "/abubaker.jpg", width: 115, height: 115 },
      behance: "https://www.behance.net/abubakershykh",
    },
  ];
  const isLg = useMediaQuery("only screen and (min-width: 64rem)");
  return (
    <section
      id="team"
      className="min-h-screen mb-32 flex flex-col gap-24"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <Badge
          variant="secondary"
          className="rounded-full font-semibold px-4 py-1"
        >
          Our Team
        </Badge>
        <TextAnimate
          as="h2"
          animation="slideUp"
          by="word"
          duration={0.5}
          className="font-bold text-4xl lg:text-6xl"
        >
          Built by the Best
        </TextAnimate>
        <TextAnimate
          as="p"
          animation="fadeIn"
          delay={0.6}
          duration={1}
          by="word"
          className="text-base lg:text-lg tracking-tight"
        >
          At Danmar, our strength lies in our people. Our team
          comprises exceptional software engineers from Canada’s
          premier universities—including the University of Waterloo
          and McMaster University—and visionary designers who bring
          creativity and precision to every project.
        </TextAnimate>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => {
          return (
            <motion.div
              key={index}
              className="p-10 border border-foreground/20 rounded-lg flex flex-col justify-between"
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
              <div className="flex flex-col gap-6 pb-12">
                <div className="text-sm rounded-md w-fit italic px-4 py-2 border border-foreground">
                  {member.role}
                </div>
                <div className="flex gap-4 items-center">
                  {member.image && (
                    <Image
                      src={member.image.src}
                      alt={"Profile picture of " + member.name}
                      width={member.image.width}
                      height={member.image.height}
                      className="size-16 rounded-full"
                    />
                  )}
                  <h4 className="font-semibold text-xl">
                    {member.name}
                  </h4>
                </div>
                <p className="text-sm">{member.description}</p>
              </div>
              <div className="flex items-center">
                {member.github && (
                  <Button
                    asChild
                    size="icon"
                    className="size-12"
                    variant="ghost"
                  >
                    <Link href={member.github} target="_blank">
                      <FaGithub className="size-8" />
                    </Link>
                  </Button>
                )}
                {member.linkedin && (
                  <Button
                    asChild
                    size="icon"
                    className="size-12"
                    variant="ghost"
                  >
                    <Link href={member.linkedin} target="_blank">
                      <FaLinkedin className="size-8" />
                    </Link>
                  </Button>
                )}
                {member.behance && (
                  <Button
                    asChild
                    size="icon"
                    className="size-12"
                    variant="ghost"
                  >
                    <Link href={member.behance} target="_blank">
                      <FaBehance className="size-8" />
                    </Link>
                  </Button>
                )}
              </div>
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
            transition: { duration: 0.3, delay: 0.5 },
          }}
          viewport={{ amount: 0.8 }}
        >
          <Quote className="size-6 lg:size-8 fill-foreground rotate-180" />
        </motion.div>
        <TextAnimate
          as="h3"
          by="word"
          animation="blurIn"
          className="font-semibold text-2xl lg:text-4xl text-center"
          delay={0.8}
          duration={0.8}
        >
          Togeter, we turn ideas into reality, shaping the future of
          digital experiences
        </TextAnimate>
        <motion.div
          className="absolute bottom-0 right-0"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.3, delay: 1.2 },
          }}
          viewport={{ amount: 0.8 }}
        >
          <Quote className="size-6 lg:size-8 fill-foreground" />
        </motion.div>
      </div>
    </section>
  );
}
