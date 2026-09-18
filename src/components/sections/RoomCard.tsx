import { Link } from "react-router-dom";
import type { RoomType } from "@/types/content";
import { SmartImage } from "@/components/ui/SmartImage";
import { Icon } from "@/components/ui/Icon";
import { CtaButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function RoomCard({ room, delayMs = 0 }: { room: RoomType; delayMs?: number }) {
  return (
    <Reveal delayMs={delayMs} className="group flex flex-col bg-white">
      <Link to={`/rooms/${room.slug}`} className="relative block aspect-[5/4] overflow-hidden">
        <SmartImage
          image={room.featuredImage}
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
        />
        {room.priceFrom && (
          <span className="absolute bottom-3 left-3 bg-ivory px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-ink">
            From {room.priceFrom.currency} {room.priceFrom.amount.toLocaleString("en-IN")}
            {room.priceFrom.perNight ? " / night" : ""}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl text-ink">
          <Link to={`/rooms/${room.slug}`} className="hover:text-brass-500">
            {room.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{room.shortDescription}</p>

        <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/10 pt-4 text-xs text-ink-500">
          <div className="flex items-center gap-1.5">
            <Icon name="users" className="h-4 w-4 text-brass-400" />
            <span>
              {room.occupancy.adults} Adults{room.occupancy.children ? ` · ${room.occupancy.children} Child` : ""}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="bed" className="h-4 w-4 text-brass-400" />
            <span>{room.bedType}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="expand" className="h-4 w-4 text-brass-400" />
            <span>
              {room.size.value} {room.size.unit}
            </span>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-3">
          <Link
            to={`/rooms/${room.slug}`}
            className="text-sm font-medium uppercase tracking-wide text-ink underline-offset-4 hover:text-brass-500 hover:underline"
          >
            View Details
          </Link>
          <span className="text-ink-300">·</span>
          <CtaButton action={room.cta} variant="ghost" className="!border-ink/30 !bg-transparent !text-ink !px-4 !py-2 text-xs hover:!bg-ink hover:!text-ivory" />
        </div>
      </div>
    </Reveal>
  );
}
