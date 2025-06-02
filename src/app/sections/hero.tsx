import { BlurFade } from "@/components/magicui/blur-fade";
import { BorderBeam } from "@/components/magicui/border-beam";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex items-center bg-transparent relative w-screen left-1/2 right-1/2 -mx-[50vw]"
    >
      <div className="grid grid-cols-2 max-w-7xl mx-auto w-full px-8">
        <div className="col-span-2 xl:col-span-1 z-10">
          <div className="mb-16">
            <TextAnimate
              className="text-7xl font-bold mb-8"
              animation="slideUp"
              by="word"
              as="h1"
              duration={0.5}
            >
              Transform Your Vision into Digital Reality
            </TextAnimate>
            <TextAnimate
              className="text-lg tracking-tight mb-8"
              as="p"
              animation="fadeIn"
              by="word"
              delay={0.6}
              duration={1}
            >
              Effortless design, seamless development, and reliable
              hosting—all in one place. Danmar Software Solutions
              delivers sleek, high-performance websites crafted
              specifically to elevate your business. Focus on growth;
              leave the tech to us.
            </TextAnimate>
            <p className="text-lg tracking-tight"></p>
          </div>
          <BlurFade delay={1.5} inView>
            <Button
              variant="pill-primary"
              size="pill"
              className="relative overflow-hidden hover:[&_svg]:rotate-45 [&_svg]:transition-all"
              asChild
            >
              <Link
                href="https://cal.com/danmarsolutions/30min"
                target="_blank"
              >
                Book Your Free Consultation Call <ArrowUpRight />
                <BorderBeam
                  duration={8}
                  size={70}
                  colorFrom="var(--primary)"
                  colorTo="var(--secondary)"
                />
              </Link>
            </Button>
          </BlurFade>
        </div>
      </div>
      <Image
        src="/vrguy.png"
        alt="young man wearing vr googles"
        priority
        className="absolute right-0 xl:top-0 bottom-0 z-0 xl:mask-l-from-50% xl:mask-l-to-100% mask-y-from-50% opacity-50 xl:opacity-100"
        width={1048}
        height={1190}
      />
    </section>
  );
}
