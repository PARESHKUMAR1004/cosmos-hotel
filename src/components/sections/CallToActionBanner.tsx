import { hotelInfo } from "@/config/hotelConfig";
import { Container } from "@/components/ui/Container";
import { CtaButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import type { CtaAction } from "@/types/content";

/**
 * Slim, config-driven promotional banner reused between sections (e.g.
 * between Amenities and Gallery) — a common pattern on premium hotel sites
 * to break up long scrolls with a direct call-to-action.
 */
export function CallToActionBanner({
  heading = `Planning a stay at ${hotelInfo.name}?`,
  description = "Our team responds quickly to calls, WhatsApp messages and enquiry forms alike.",
  cta = { label: "Enquire Now", type: "enquire", href: "#contact" },
}: {
  heading?: string;
  description?: string;
  cta?: CtaAction;
}) {
  return (
    <section className="bg-brass-50 py-14">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <Reveal>
          <h3 className="font-display text-2xl text-ink sm:text-3xl">{heading}</h3>
          <p className="mt-1.5 text-sm text-ink-500">{description}</p>
        </Reveal>
        <Reveal delayMs={80}>
          <CtaButton action={cta} variant="primary" />
        </Reveal>
      </Container>
    </section>
  );
}
