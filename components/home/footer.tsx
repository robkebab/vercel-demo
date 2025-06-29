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
        className="text-white"
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
        className="text-white"
      >
        <rect x="2" y="2" width="20" height="20" rx="6" strokeWidth="2" />
        <circle cx="12" cy="12" r="5" strokeWidth="2" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
      </svg>
    ),
    label: "Instagram",
  },
  {
    href: "https://twitter.com",
    icon: (
      <svg
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="text-white"
      >
        <path
          d="M22 5.92a8.38 8.38 0 0 1-2.36.65A4.13 4.13 0 0 0 21.4 4.1a8.19 8.19 0 0 1-2.6 1A4.11 4.11 0 0 0 12 8.09c0 .32.04.64.1.94A11.65 11.65 0 0 1 3 4.89a4.11 4.11 0 0 0 1.27 5.48A4.07 4.07 0 0 1 2.8 9.5v.05a4.11 4.11 0 0 0 3.3 4.03c-.3.08-.62.13-.95.13-.23 0-.45-.02-.67-.06a4.13 4.13 0 0 0 3.84 2.85A8.24 8.24 0 0 1 2 19.54a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 22 5.92z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Twitter",
  },
];

export function HomeFooter() {
  return (
    <footer className="w-full bg-background text-white py-10 flex flex-col items-center justify-center gap-4">
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
