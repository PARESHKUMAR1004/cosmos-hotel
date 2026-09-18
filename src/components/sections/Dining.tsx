import { diningVenues } from "@/config/diningConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DiningVenueBlock } from "./DiningVenueBlock";

export function Dining() {
  return (
    <section id="dining" className="bg-ivory-100 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Dining"
          heading="Food that feels like it was made for you"
          description="From an early breakfast to a late-night drink — every venue at COSMOS, in one place."
        />

        <div className="mt-16 space-y-20 lg:space-y-28">
          {diningVenues.map((venue, i) => (
            <DiningVenueBlock key={venue.id} venue={venue} reverse={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
