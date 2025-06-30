import { Input } from "@/components/ui/input";
import React from "react";

async function submitCatering(formData: FormData) {
  "use server";
  console.log(formData);
  // Here you would handle the form submission, e.g., send an email or store in DB
  // For now, just simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 500));
}

export function HomeCatering() {
  return (
    <section
      id="catering"
      className="w-full flex flex-col items-center py-16 md:py-28 bg-background text-primary"
    >
      <div className="w-full max-w-2xl flex flex-col items-center px-4 mx-auto">
        <span className="text-base md:text-lg text-orange-500 font-medium mb-4 tracking-widest uppercase text-center">
          CATERING
        </span>
        <h2 className="font-accent text-3xl md:text-5xl font-extrabold text-white text-center mb-6 md:mb-8 leading-tight md:leading-tight">
          LOOKING TO CATER YOUR NEXT EVENT? WE&apos;VE GOT YOU COVERED!
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-lg">
          Fill out your details, and we&apos;ll reach out to plan your perfect
          catering experience.
        </p>
        <form action={submitCatering} className="w-full flex flex-col gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold mb-2 uppercase tracking-wide text-muted-foreground"
            >
              YOUR NAME
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold mb-2 uppercase tracking-wide text-muted-foreground"
            >
              YOUR EMAIL
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold mb-2 uppercase tracking-wide text-muted-foreground"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-md border border-input bg-transparent px-3 py-2 text-base text-primary shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] placeholder:text-muted-foreground"
            />
          </div>
          <button
            type="submit"
            className="mt-2 rounded-full px-10 py-3 font-bold text-white text-base bg-gradient-to-r from-orange-500 to-pink-500 shadow-lg transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            SEND INQUIRY
          </button>
        </form>
      </div>
    </section>
  );
}
