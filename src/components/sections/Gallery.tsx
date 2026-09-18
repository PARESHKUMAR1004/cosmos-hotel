import { useMemo, useState } from "react";
import { galleryContent } from "@/config/galleryConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { GalleryLightbox } from "./GalleryLightbox";

const ALL = "All";

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () => (activeCategory === ALL ? galleryContent.images : galleryContent.images.filter((img) => img.category === activeCategory)),
    [activeCategory]
  );

  return (
    <section id="gallery" className="bg-ivory py-24 lg:py-32">
      <Container>
        <SectionHeading eyebrow="Gallery" heading="A closer look at COSMOS" align="center" />

        <div className="mt-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Gallery categories">
          {[ALL, ...galleryContent.categories].map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 ${
                activeCategory === cat ? "bg-ink text-ivory" : "bg-transparent text-ink-500 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 [&>*:nth-child(5n+1)]:sm:row-span-2 [&>*:nth-child(5n+1)]:sm:aspect-[4/9]">
          {filtered.map((img, i) => (
            <Reveal key={img.id} delayMs={(i % 8) * 40} className="group relative aspect-[4/5] overflow-hidden bg-ink-100">
              <button
                type="button"
                onClick={() => setLightboxIndex(i)}
                aria-label={`Open image: ${img.alt}`}
                className="absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
              >
                <SmartImage image={img} className="h-full w-full object-cover transition-transform duration-700 ease-editorial group-hover:scale-105" />
                <span className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/30 group-hover:opacity-100">
                  <Icon name="expand" className="h-6 w-6 text-ivory" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && <p className="mt-10 text-center text-ink-400">No images in this category yet.</p>}
      </Container>

      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
