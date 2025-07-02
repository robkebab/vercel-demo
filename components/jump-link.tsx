"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";

interface JumpLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function JumpLink({
  href,
  children,
  className,
  onClick,
}: JumpLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only handle hash links
    if (href.startsWith("#") || href.includes("#")) {
      e.preventDefault();

      const targetId = href.includes("#") ? href.split("#")[1] : href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }

    // Call the onClick prop if provided
    onClick?.();
  };

  return (
    <Link
      href={href}
      className={cn("transition-colors hover:text-primary", className)}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
