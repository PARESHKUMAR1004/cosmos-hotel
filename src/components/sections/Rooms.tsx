import { rooms } from "@/config/roomsConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomCard } from "./RoomCard";

export function Rooms() {
  return (
    <section id="rooms" className="bg-ivory-100 py-24 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Rooms & Suites"
          heading="Rooms built for the way you actually travel"
          description="Four categories, each designed around a different kind of stay. No hidden charges, no fine print — just the details that matter before you enquire."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {rooms.map((room, i) => (
            <RoomCard key={room.id} room={room} delayMs={i * 80} />
          ))}
        </div>
      </Container>
    </section>
  );
}
