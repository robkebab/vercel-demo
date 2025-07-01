import { Icon } from "@/components/ui/icon";
import React from "react";

const socials = [
  {
    href: "https://facebook.com",
    icon: <Icon.Facebook />,
    label: "Facebook",
  },
  {
    href: "https://instagram.com",
    icon: <Icon.Instagram />,
    label: "Instagram",
  },
  {
    href: "https://x.com",
    icon: <Icon.Twitter />,
    label: "X",
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-background text-primary py-10 flex flex-col items-center justify-center gap-4">
      <div className="flex items-center gap-8 mb-2">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="hover:text-orange-500 transition-colors"
          >
            {social.icon}
          </a>
        ))}
      </div>
      <div className="text-sm text-muted-foreground">
        © 2024 Tommy Want Wingy
      </div>
    </footer>
  );
}
