import Image from "next/image";
import Link from "next/link";

const HERO_IMAGES = [
  {
    alt: "Wings",
    className:
      "hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-56 h-56 rounded-full object-cover border-4 border-background shadow-xl",
    src: "/images/wings.png",
  },
  {
    alt: "Fries",
    className:
      "hidden md:block absolute left-8 bottom-8 w-36 h-36 rounded-full object-cover border-4 border-background shadow-lg",
    src: "/images/fries.png",
  },
  {
    alt: "Combo",
    className:
      "hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full object-cover border-4 border-background shadow-xl",
    src: "/images/combo.png",
  },
  {
    alt: "Beer and wings",
    className:
      "hidden md:block absolute right-8 bottom-8 w-32 h-32 rounded-full object-cover border-4 border-background shadow-lg",
    src: "/images/beer-n-wings.png",
  },
  {
    alt: "Sauce",
    className:
      "hidden md:block absolute left-1/4 top-8 w-24 h-24 rounded-full object-cover border-4 border-background shadow-md",
    src: "/images/sauce.png",
  },
  // Mobile images
  {
    alt: "Wings",
    className:
      "md:hidden absolute left-1/2 -translate-x-1/2 top-24 w-20 h-20 rounded-full object-cover border-2 border-background shadow",
    src: "/images/wings.png",
  },
  {
    alt: "Combo",
    className:
      "md:hidden absolute right-2 bottom-20 w-16 h-16 rounded-full object-cover border-2 border-background shadow",
    src: "/images/combo.png",
  },
  {
    alt: "Beer and wings",
    className:
      "md:hidden absolute left-2 bottom-8 w-14 h-14 rounded-full object-cover border-2 border-background shadow",
    src: "/images/beer-n-wings.png",
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
          width={256}
          height={256}
          className={img.className}
          priority={i === 0}
        />
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-2xl mx-auto py-16 md:py-32">
        <span className="text-lg md:text-xl text-muted-foreground mb-2 md:mb-4">
          Since 2012
        </span>
        <h1 className="font-accent text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6 leading-tight md:leading-tight">
          TOMMY
          <br className="md:hidden" /> WANT
          <br className="md:hidden" /> WINGY
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10">
          We make chicken lollipops! We take all the fuss and mess out of the
          chicken wing for you! Our unique preparation and creative sauces make
          for a fantastic eating experience!
        </p>
        <Link
          href="/#order"
          className="hidden md:inline-block rounded-full px-12 py-4 text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          ORDER ONLINE
        </Link>
      </div>
      {/* Mobile CTA */}
      <Link
        href="/#order"
        className="md:hidden mt-6 mb-2 rounded-full px-8 py-3 text-base font-bold text-white bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        ORDER ONLINE
      </Link>
    </section>
  );
}
