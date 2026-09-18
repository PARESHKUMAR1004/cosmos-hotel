import { aboutContent } from "@/config/aboutConfig";
import { Container } from "@/components/ui/Container";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="bg-ivory py-24 lg:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-ink-100">
            <SmartImage image={aboutContent.image} className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden border border-brass-300/60 bg-ivory p-6 shadow-xl sm:block">
            <dl className="grid grid-cols-3 gap-6">
              {aboutContent.stats?.map((s) => (
                <div key={s.label}>
                  <dt className="text-[0.65rem] uppercase tracking-widest2 text-ink-400">{s.label}</dt>
                  <dd className="mt-1 font-display text-2xl text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest2 text-brass-500">{aboutContent.eyebrow}</p>
          <h2 className="font-display text-4xl leading-[1.1] text-ink sm:text-5xl">{aboutContent.heading}</h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-500">
            {aboutContent.story.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-8 space-y-4 border-t border-ink/10 pt-6">
            <p className="text-sm leading-relaxed text-ink-600">
              <span className="font-semibold text-ink">Location. </span>
              {aboutContent.locationNote}
            </p>
            <p className="text-sm leading-relaxed text-ink-600">
              <span className="font-semibold text-ink">Our philosophy. </span>
              {aboutContent.philosophy}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
