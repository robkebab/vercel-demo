import * as React from "react";
import { Button } from "@/components/atoms/button";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between gap-8 py-12 px-4 md:px-16 bg-background">
      <div className="flex-1 flex flex-col items-center md:items-start gap-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary font-sans text-center md:text-left">
          It&apos;ll be our pleasure to serve you the best wings in town
        </h1>
        <p className="text-lg text-muted-foreground font-sans text-center md:text-left">
          Crispy, saucy, and unforgettable. Try our famous chicken wings and
          appetizers today!
        </p>
        <Button className="mt-4 w-full md:w-auto" variant="default">
          Order Now
        </Button>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/images/hero-wings.jpg"
          alt="Plate of chicken wings"
          width={400}
          height={300}
          className="rounded-xl object-cover shadow-lg"
          style={{ background: "var(--color-muted)" }}
        />
      </div>
    </section>
  );
}
