import "./globals.css";
import { Roboto, Roboto_Mono, Rubik_Distressed } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

const robotoSans = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto-sans",
});

const rubikDistressed = Rubik_Distressed({
  subsets: ["latin"],
  variable: "--font-rubik-distressed",
  weight: "400",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  description: "The best wings in Austin!",
  title: "Tommy Want Wingy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${rubikDistressed.variable} ${robotoMono.variable} ${robotoSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
