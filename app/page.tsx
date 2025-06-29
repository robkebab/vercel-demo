import { HomeHero } from "@/components/home/hero";
import { HomeNavbar } from "@/components/home/navbar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-primary">
      <HomeNavbar />
      <HomeHero />
    </main>
  );
}
