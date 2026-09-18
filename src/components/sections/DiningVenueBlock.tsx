import type { DiningVenue } from "@/types/content";
import { SmartImage } from "@/components/ui/SmartImage";
import { CtaButton } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function DiningVenueBlock({ venue, reverse = false }: { venue: DiningVenue; reverse?: boolean }) {
  const [main, ...rest] = venue.images;

  return (
    <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <Reveal className="grid grid-cols-3 gap-3">
        {main && <div className="col-span-2 aspect-[4/5] overflow-hidden"><SmartImage image={main} className="h-full w-full object-cover" /></div>}
        <div className="flex flex-col gap-3">
          {rest.slice(0, 2).map((img) => (
            <div key={img.id} className="aspect-square overflow-hidden">
              <SmartImage image={img} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delayMs={100}>
        <p className="text-xs font-semibold uppercase tracking-widest2 text-brass-500">{venue.tagline}</p>
        <h3 className="mt-2 font-display text-3xl text-ink sm:text-4xl">{venue.name}</h3>
        <p className="mt-4 text-base leading-relaxed text-ink-500">{venue.description}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {venue.cuisine.map((c) => (
            <li key={c} className="border border-ink/15 px-3 py-1 text-xs uppercase tracking-wide text-ink-600">
              {c}
            </li>
          ))}
        </ul>

        {venue.openingHours && venue.openingHours.length > 0 && (
          <dl className="mt-6 space-y-1.5 border-t border-ink/10 pt-5">
            {venue.openingHours.map((oh) => (
              <div key={oh.label} className="flex items-center gap-2 text-sm text-ink-600">
                <Icon name="clock" className="h-4 w-4 text-brass-400" />
                <dt className="font-medium text-ink">{oh.label}:</dt>
                <dd>{oh.hours}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-7">
          <CtaButton action={venue.cta} variant="secondary" />
        </div>
      </Reveal>
    </div>
  );
}
