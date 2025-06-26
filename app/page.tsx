import { CallToAction } from "@/app/(home)/call-to-action";
import { Footer } from "@/app/(home)/footer";
import { HeroSection } from "@/app/(home)/hero-section";
import { MenuSection } from "@/app/(home)/menu-section";
import { NavBar } from "@/app/(home)/nav-bar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <NavBar />
      <main className="flex-1 flex flex-col gap-16">
        <HeroSection />
        <MenuSection />
        <section
          id="catering"
          className="flex justify-center py-12 px-4 md:px-0"
        >
          <CallToAction
            title="Schedule your catering order"
            description="Let us cater your next event with our delicious wings and appetizers."
            buttonLabel="Schedule Catering"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
