import { HomeHero } from "@/components/home/hero";
import { HomeLocations } from "@/components/home/locations";
import { HomeNavbar } from "@/components/home/navbar";
import { HomeReviews } from "@/components/home/reviews";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background text-primary">
      <HomeNavbar />
      <HomeHero />
      <HomeLocations />
      <HomeReviews />
    </main>
  );
}
