import { amenities } from "@/config/amenitiesConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AmenityCard } from "./AmenityCard";

export function Amenities() {
  const featured = amenities.filter((a) => a.image);
  const rest = amenities.filter((a) => !a.image);

  return (
    <section id="amenities" className="bg-ivory py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Amenities"
          heading="Everything a comfortable stay needs"
          align="center"
          description="Listed here only if it's genuinely available at COSMOS — nothing more, nothing less."
        />

        {featured.length > 0 && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((a, i) => (
              <AmenityCard key={a.id} amenity={a} delayMs={i * 80} />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((a, i) => (
              <AmenityCard key={a.id} amenity={a} delayMs={i * 60} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
