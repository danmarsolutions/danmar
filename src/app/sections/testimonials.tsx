"use client";
import CustomCarousel from "@/components/custom-carousel";
import { TextAnimate } from "@/components/magicui/text-animate";
import { Badge } from "@/components/ui/badge";

type Testimonial = {
  testimonial: string;
  name: string;
  position: string;
};

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      testimonial:
        "Incredible service! The team at Danmar Solutions delivered a beautifully designed and exceptionally developed website that exceeded our expectations. Would highly recommend them to anyone looking for top-notch web development.",
      name: "Zaid Marfatia",
      position: "Founder, Z Squared",
    },
    {
      testimonial:
        "Danmar Solutions transformed our online presence with their exceptional web development skills. The team was professional, responsive, and delivered a stunning website that has significantly improved our user engagement.",
      name: "Muhammad Afzal",
      position: "Founder, Ar Rahah",
    },
    {
      testimonial:
        "Working with Danmar Solutions was a game-changer for my practice. Their attention to detail and commitment to quality resulted in a website that not only looks great but also performs flawlessly. Highly recommend!",
      name: "Ittefak Pathan",
      position: "Real Estate Agent",
    },
  ];
  return (
    <section
      id="testimonials"
      className="min-h-screen flex flex-col gap-24 items-center mb-32"
    >
      <div className="w-full lg:w-2/3 flex flex-col gap-8 items-center text-center">
        <Badge
          variant="secondary"
          className="rounded-full font-semibold px-4 py-1"
        >
          Client Voices
        </Badge>
        <TextAnimate
          as="h2"
          animation="slideUp"
          by="word"
          duration={0.5}
          className="font-bold text-4xl lg:text-6xl"
        >
          Trusted by Visionaries
        </TextAnimate>
      </div>
      <CustomCarousel controlPosition="bottom">
        {testimonials.map((t, index) => {
          return (
            <div
              key={index}
              className="p-10 border border-foreground/20 rounded-lg"
            >
              <p className="text-lg lg:text-2xl mb-12 lg:mb-24">
                &quot;{t.testimonial}&quot;
              </p>
              <div className="text-sm lg:text-base">
                <p className="font-semibold">{t.name}</p>
                <p>{t.position}</p>
              </div>
            </div>
          );
        })}
      </CustomCarousel>
    </section>
  );
}
