import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGES = [
  {
    alt: "Wings",
    className:
      "hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full object-cover border-4 border-background shadow-xl",
    src: "/images/hero/desktop-wings.png",
  },
  {
    alt: "Fries",
    className:
      "hidden md:block absolute left-8 bottom-8 w-36 h-36 rounded-full object-cover border-4 border-background shadow-lg",
    src: "/images/hero/desktop-wings-2.png",
  },
  {
    alt: "Tots",
    className:
      "hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full object-cover border-4 border-background shadow-xl",
    src: "/images/hero/mobile-tots.png",
  },
  {
    alt: "Beer and wings",
    className:
      "hidden md:block absolute right-8 bottom-8 w-32 h-32 rounded-full object-cover border-4 border-background shadow-lg",
    src: "/images/hero/desktop-beer-and-wings.png",
  },
  // Mobile images
  {
    alt: "Tots",
    className:
      "md:hidden absolute left-1/2 -translate-x-1/4 top-18 w-20 h-20 rounded-full object-cover border-2 border-background shadow",
    src: "/images/hero/mobile-tots.png",
    width: 128,
    height: 128,
  },
  {
    alt: "Wings",
    className:
      "md:hidden absolute right-[-1] top-144 w-32 h-32 rounded-full object-cover border-2 border-background shadow",
    src: "/images/hero/mobile-wings.png",
    width: 128,
    height: 128,
  },
  {
    alt: "Beer and wings",
    className:
      "md:hidden absolute left-1 top-154 w-32 h-32 rounded-full object-cover border-2 border-background shadow",
    src: "/images/hero/mobile-beer-and-wings.png",
    width: 128,
    height: 128,
  },
];

export function HomeHero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-[80vh] w-full px-4 md:px-0 overflow-hidden"
    >
      {/* Decorative Images */}
      {HERO_IMAGES.map((img, i) => (
        <Image
          key={i}
          src={img.src}
          alt={img.alt}
          width={img.width ?? 256}
          height={img.height ?? 256}
          className={img.className}
          priority={i === 0}
        />
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-4 md:py-32">
        <span className="text-lg md:text-xl text-muted-foreground mb-2 md:mb-4">
          Since 2012
        </span>
        <h1 className="font-accent text-6xl md:text-8xl font-extrabold text-primary tracking-tight mb-4 md:mb-6 leading-tight">
          TOMMY
          <br /> WANT
          <br /> WINGY
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-2 md:mb-4">
          We make chicken lollipops! We take all the fuss and mess out of the
          chicken wing for you! Our unique preparation and creative sauces make
          for a fantastic eating experience!
        </p>
        <Button
          variant="gradient"
          size="lg"
          className="hidden md:inline-block rounded-full px-12 py-4 text-lg font-bold text-primary shadow-lg transition hover:scale-105"
          asChild
        >
          <Link href="/order/menu/combos">ORDER ONLINE</Link>
        </Button>
      </div>
      {/* Mobile CTA */}
      <Button variant="gradient" className="md:hidden mt-6 mb-2" asChild>
        <Link href="/#order">ORDER ONLINE</Link>
      </Button>
    </section>
  );
}
