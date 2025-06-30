import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NAV_ITEMS = [
  { href: "/#browse", label: "Browse Food" },
  { href: "/#about", label: "About Us" },
  { href: "/#catering", label: "Catering" },
];

export function HomeNavbar() {
  return (
    <nav className="w-full px-4 py-3 flex items-center justify-between bg-background border-b border-border">
      {/* Logo (left) */}
      <Link href="/" className="flex items-center z-20">
        <Image
          src="/images/logo.png"
          alt="Tommy Want Wingy Logo"
          width={56}
          height={38}
          priority
          className="h-10 w-auto"
        />
      </Link>
      {/* Desktop Nav */}
      <ul className="hidden md:flex flex-1 justify-center gap-12 text-lg font-medium text-foreground">
        {NAV_ITEMS.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* Mobile Hamburger */}
      <div className="md:hidden z-20">
        <Sheet>
          <SheetTrigger asChild>
            <button aria-label="Open menu" className="p-2 focus:outline-none">
              <svg
                width="32"
                height="32"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-primary"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetContent
            side="bottom"
            className="p-0 bg-background/95 backdrop-blur-sm flex flex-col min-h-screen"
          >
            <div className="flex flex-col items-center justify-center h-full py-12 gap-8">
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Tommy Want Wingy Logo"
                  width={80}
                  height={53}
                  className="mb-4"
                  priority
                />
              </Link>

              <ul className="flex flex-col gap-6 text-2xl font-semibold text-foreground text-center">
                {NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Button variant="gradient" asChild>
                <Link href="/order/menu/combos">Order Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
