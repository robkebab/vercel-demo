import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Review {
  logos: { alt: string; src: string }[];
  text: string;
  title: string;
}

const REVIEWS: Review[] = [
  {
    logos: [
      { alt: "The Infatuation", src: "/images/the-infatuation.png" },
      { alt: "Keep Austin Eatin", src: "/images/keep-austin-eatin.png" },
      { alt: "KVUE", src: "/images/kvue.png" },
    ],
    text: "Tommy Want Wingy, from the name alone, brings the 'Keep Austin Weird' slogan to life. It's a favorite food truck in Austin. They serve up delicious Chicken with sauces such as 'Ranch on Fire' and 'Holy Schnikes'.",
    title: "KEEP AUSTIN EATIN",
  },
  {
    logos: [
      { alt: "DO512", src: "/images/do512.png" },
      { alt: "The Infatuation", src: "/images/the-infatuation.png" },
      { alt: "Keep Austin Eatin", src: "/images/keep-austin-eatin.png" },
    ],
    text: "The wings at Tommy Want Wingy have developed an almost cult-like following in Austin, with people clamoring for their distinct, frenched chicken wings. There's no debate about flats vs drums here - all the wings start as a drumette before being cleaned into a lollipop-like shape with a little bone handle.",
    title: "THE INFATUATION",
  },
  {
    logos: [
      { alt: "DO512", src: "/images/do512.png" },
      { alt: "The Infatuation", src: "/images/the-infatuation.png" },
      { alt: "Keep Austin Eatin", src: "/images/keep-austin-eatin.png" },
    ],
    text: "Tommy Want Wingy serves up some of the most craveable wings in Austin. Their signature lollipop-style drumettes are perfectly crispy, sauced to order, and easy to eat—ideal for sharing with friends or devouring solo. Whether you’re a spice lover or prefer something milder, there’s a flavor for everyone. Don’t miss them at your next food truck crawl. – DO512",
    title: "DO512",
  },
  // Add more reviews as needed
];

export function HomeReviews() {
  return (
    <section
      id="reviews"
      className="relative flex flex-col items-center justify-center w-full min-h-[60vh] py-8 md:py-12 bg-background/90 text-primary overflow-hidden px-4"
    >
      <Carousel
        className="w-full max-w-2xl mx-auto"
        opts={{ align: "center", loop: true }}
      >
        <CarouselContent>
          {REVIEWS.map((review, idx) => (
            <CarouselItem key={idx} className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                {review.logos.map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={90}
                    height={90}
                    className="rounded-full bg-background object-contain shadow-md w-16 h-16 md:w-24 md:h-24"
                  />
                ))}
              </div>
              <h3 className="font-accent text-2xl md:text-3xl font-extrabold text-orange-500 text-center mb-4 tracking-tight">
                {review.title}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground text-center max-w-xl mx-auto">
                {review.text}
              </p>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Carousel dots */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <span
              key={i}
              className="inline-block w-3 h-3 rounded-full bg-white/30 border border-white/60 transition-colors duration-200"
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
}
