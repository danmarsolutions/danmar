import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CustomCarouselProps = {
  className?: string;
  controlPosition?: "top" | "bottom";
  children: React.ReactElement[];
};

export default function CustomCarousel({
  className,
  controlPosition = "top",
  children,
}: CustomCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const controls = (
    <div className="w-full flex items-center justify-between">
      <div className="w-80 h-2 bg-card relative rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-foreground rounded-full transition-all duration-500"
          style={{
            width: `${(current / count) * 100}%`,
          }}
        />
      </div>
      <div className="flex items-center gap-4">
        <Button
          size="icon"
          className="rounded-full bg-foreground text-background hover:bg-foreground/80"
          onClick={() => {
            if (!api) return;
            api.scrollPrev();
          }}
        >
          <ChevronLeft />
        </Button>
        <Button
          size="icon"
          className="rounded-full bg-foreground text-background hover:bg-foreground/80"
          onClick={() => {
            if (!api) return;
            api.scrollNext();
          }}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-24 w-full">
      {controlPosition === "top" && controls}
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className={cn("w-full", className)}
      >
        <CarouselContent>
          {children.map((child, index) => {
            return (
              <CarouselItem key={index} className="basis-4/5">
                <div
                  className={cn("transition-transform duration-500", {
                    "scale-[0.9]": index !== current - 1,
                  })}
                >
                  {child}
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
      {controlPosition === "bottom" && controls}
    </div>
  );
}
