import { HomeAbout } from "@/app/(home)/about";
import { HomeCatering } from "@/app/(home)/catering";
import { HomeFooter } from "@/app/(home)/footer";
import { HomeHero } from "@/app/(home)/hero";
import { HomeLocations } from "@/app/(home)/locations";
import { HomeNavbar } from "@/app/(home)/navbar";
import { HomeReviews } from "@/app/(home)/reviews";

export default async function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col bg-background text-primary">
        <HomeNavbar />
        <HomeHero />
        <HomeLocations />
        <HomeAbout />
        <HomeReviews />
        <HomeCatering />
      </main>
      <HomeFooter />
    </>
  );
}
