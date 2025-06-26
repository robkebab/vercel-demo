import * as React from "react";
import { Button } from "@/components/atoms/button";
import Link from "next/link";

export function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-background border-b border-border">
      <div className="flex items-center gap-2">
        <Link href="/">
          <span className="text-2xl font-bold text-primary font-sans">
            🍗 Wing Bada Bing
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-6 items-center">
        <Link
          href="#menu"
          className="text-foreground font-medium hover:underline"
        >
          Menu
        </Link>
        <Link
          href="#about"
          className="text-foreground font-medium hover:underline"
        >
          About
        </Link>
        <Link
          href="#catering"
          className="text-foreground font-medium hover:underline"
        >
          Catering
        </Link>
      </div>
      <Link href="#order">
        <Button variant="default" className="ml-4">
          Order Now
        </Button>
      </Link>
    </nav>
  );
}
