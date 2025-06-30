import React from "react";

const socials = [
  {
    href: "https://facebook.com",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="text-primary"
      >
        <path
          d="M17 2.5h-2.5A4.5 4.5 0 0 0 10 7v2H7v3h3v7h3v-7h2.5l.5-3H13V7a1.5 1.5 0 0 1 1.5-1.5H17v-3z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Facebook",
  },
  {
    href: "https://instagram.com",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="text-primary"
      >
        <rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    label: "Instagram",
  },
  {
    href: "https://x.com",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="text-primary"
      >
        <path
          d="M17.53 2H21.5l-7.06 8.06L23 22h-7.19l-5.7-7.6L2.47 22H-1.5l7.61-8.7L1 2h7.31l5.18 7.09L17.53 2zm-2.02 17.3h2.01L7.01 4.59H5.13l10.38 14.71z"
          fill="currentColor"
        />
      </svg>
    ),
    label: "X",
  },
];

export function HomeFooter() {
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
