import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Rooms } from "@/components/sections/Rooms";
import { Dining } from "@/components/sections/Dining";
import { Amenities } from "@/components/sections/Amenities";
import { CallToActionBanner } from "@/components/sections/CallToActionBanner";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { useSeo } from "@/hooks/useSeo";

export function HomePage() {
  useSeo({ path: "/" });

  return (
    <main>
      <Hero />
      <About />
      <Rooms />
      <Dining />
      <Amenities />
      <CallToActionBanner />
      <Gallery />
      <Contact />
    </main>
  );
}
