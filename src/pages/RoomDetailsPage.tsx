import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getRoomBySlug, rooms } from "@/config/roomsConfig";
import { getAmenityById } from "@/config/amenitiesConfig";
import { Container } from "@/components/ui/Container";
import { SmartImage } from "@/components/ui/SmartImage";
import { Icon } from "@/components/ui/Icon";
import { CtaButton } from "@/components/ui/Button";
import { RoomCard } from "@/components/sections/RoomCard";
import { useSeo } from "@/hooks/useSeo";

/**
 * Reusable room-details view. Any room in roomsConfig.ts automatically gets
 * a page here at /rooms/:slug — nothing needs registering by hand.
 */
export function RoomDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const room = slug ? getRoomBySlug(slug) : undefined;
  const [activeImage, setActiveImage] = useState(0);

  useSeo(
    room
      ? { title: room.name, description: room.shortDescription, path: `/rooms/${room.slug}` }
      : { title: "Room not found" }
  );

  if (!room) return <Navigate to="/" replace />;

  const otherRooms = rooms.filter((r) => r.id !== room.id).slice(0, 3);

  return (
    <main className="pt-24">
      <Container className="py-10">
        <Link to="/#rooms" className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-brass-500">
          <Icon name="chevronLeft" className="h-4 w-4" /> All Rooms
        </Link>
      </Container>

      <Container className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
        <div>
          <div className="aspect-[4/3] overflow-hidden bg-ink-100">
            <SmartImage image={room.images[activeImage] ?? room.featuredImage} className="h-full w-full object-cover" />
          </div>
          {room.images.length > 1 && (
            <div className="mt-4 grid grid-cols-3 gap-4 sm:grid-cols-4">
              {room.images.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square overflow-hidden ring-2 transition-all ${
                    i === activeImage ? "ring-brass-400" : "ring-transparent opacity-80 hover:opacity-100"
                  }`}
                  aria-label={`Show image ${i + 1} of ${room.name}`}
                >
                  <SmartImage image={img} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <h1 className="font-display text-4xl text-ink sm:text-5xl">{room.name}</h1>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-500">
            {room.longDescription.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <dl className="mt-6 grid grid-cols-3 gap-4 border-y border-ink/10 py-5 text-center">
            <div>
              <Icon name="users" className="mx-auto h-5 w-5 text-brass-400" />
              <dd className="mt-2 text-sm text-ink-600">
                {room.occupancy.adults} Adults{room.occupancy.children ? ` + ${room.occupancy.children} Child` : ""}
              </dd>
            </div>
            <div>
              <Icon name="bed" className="mx-auto h-5 w-5 text-brass-400" />
              <dd className="mt-2 text-sm text-ink-600">{room.bedType}</dd>
            </div>
            <div>
              <Icon name="expand" className="mx-auto h-5 w-5 text-brass-400" />
              <dd className="mt-2 text-sm text-ink-600">
                {room.size.value} {room.size.unit}
              </dd>
            </div>
          </dl>

          {room.priceFrom && (
            <p className="mt-5 font-display text-2xl text-ink">
              From {room.priceFrom.currency} {room.priceFrom.amount.toLocaleString("en-IN")}
              <span className="text-sm text-ink-400">{room.priceFrom.perNight ? " / night" : ""}</span>
            </p>
          )}

          <h2 className="mt-8 text-xs font-semibold uppercase tracking-widest2 text-brass-500">In This Room</h2>
          <ul className="mt-3 grid grid-cols-2 gap-3">
            {room.amenities.map((id) => {
              const amenity = getAmenityById(id);
              return (
                <li key={id} className="flex items-center gap-2 text-sm text-ink-600">
                  <Icon name={amenity?.icon ?? "concierge"} className="h-4 w-4 shrink-0 text-brass-400" />
                  {amenity?.label ?? id}
                </li>
              );
            })}
          </ul>

          <div className="mt-8">
            <CtaButton action={room.cta} variant="primary" className="w-full sm:w-auto" />
          </div>
        </div>
      </Container>

      {otherRooms.length > 0 && (
        <Container className="mt-20 border-t border-ink/10 pb-24 pt-16">
          <h2 className="font-display text-3xl text-ink">Other Rooms You May Like</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {otherRooms.map((r) => (
              <RoomCard key={r.id} room={r} />
            ))}
          </div>
        </Container>
      )}
    </main>
  );
}
