import * as React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-4 md:px-16 bg-background border-t border-border mt-12">
      <div className="flex gap-6 items-center">
        <Link href="#menu" className="text-muted-foreground hover:underline">
          Menu
        </Link>
        <Link href="#about" className="text-muted-foreground hover:underline">
          About
        </Link>
        <Link
          href="#catering"
          className="text-muted-foreground hover:underline"
        >
          Catering
        </Link>
      </div>
      <div className="text-sm text-muted-foreground font-sans">
        &copy; {new Date().getFullYear()} Wing Bada Bing. All rights reserved.
      </div>
    </footer>
  );
}
