import type { AmenityDefinition } from "@/types/content";
import { Icon } from "@/components/ui/Icon";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

export function AmenityCard({ amenity, delayMs = 0 }: { amenity: AmenityDefinition; delayMs?: number }) {
  if (amenity.image) {
    return (
      <Reveal delayMs={delayMs} className="group relative aspect-[4/5] overflow-hidden">
        <SmartImage
          image={amenity.image}
          className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
          <Icon name={amenity.icon} className="h-6 w-6 text-brass-200" />
          <h3 className="mt-2 font-display text-xl">{amenity.label}</h3>
          <p className="mt-1 text-xs leading-relaxed text-ivory-200/80">{amenity.description}</p>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal delayMs={delayMs} className="flex flex-col gap-3 border border-ink/10 bg-white p-6">
      <Icon name={amenity.icon} className="h-6 w-6 text-brass-400" />
      <h3 className="font-display text-lg text-ink">{amenity.label}</h3>
      <p className="text-sm leading-relaxed text-ink-500">{amenity.description}</p>
    </Reveal>
  );
}
