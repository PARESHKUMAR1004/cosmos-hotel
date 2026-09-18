import { contactInfo } from "@/config/contactConfig";
import { hotelInfo } from "@/config/hotelConfig";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { CtaButton } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

const whatsappHref = (num: string) => `https://wa.me/${num.replace(/[^0-9]/g, "")}`;

export function Contact() {
  return (
    <section id="contact" className="bg-ink py-24 text-ivory lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Get In Touch"
          heading={`Speak with ${hotelInfo.name} directly`}
          description="No booking engine yet — reach us directly and our front desk will take care of the rest."
          tone="light"
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal delayMs={80} className="space-y-8">
            <div className="flex gap-4">
              <Icon name="map" className="mt-1 h-5 w-5 shrink-0 text-brass-300" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest2 text-brass-300">Address</h3>
                <p className="mt-1.5 text-base text-ivory-200/90">
                  {contactInfo.address.line1}
                  {contactInfo.address.line2 ? `, ${contactInfo.address.line2}` : ""}
                  <br />
                  {contactInfo.address.city}, {contactInfo.address.state} {contactInfo.address.postalCode}
                  <br />
                  {contactInfo.address.country}
                </p>
                <a
                  href={contactInfo.mapLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-brass-200 underline-offset-4 hover:underline"
                >
                  Get directions
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Icon name="phone" className="mt-1 h-5 w-5 shrink-0 text-brass-300" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest2 text-brass-300">Phone</h3>
                <a href={`tel:${contactInfo.phone}`} className="mt-1.5 block text-base text-ivory-200/90 hover:text-ivory">
                  {contactInfo.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Icon name="mail" className="mt-1 h-5 w-5 shrink-0 text-brass-300" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest2 text-brass-300">Email</h3>
                <a href={`mailto:${contactInfo.email}`} className="mt-1.5 block text-base text-ivory-200/90 hover:text-ivory">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Icon name="clock" className="mt-1 h-5 w-5 shrink-0 text-brass-300" />
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest2 text-brass-300">Front Desk</h3>
                {contactInfo.reception.map((r) => (
                  <p key={r.label} className="mt-1.5 text-base text-ivory-200/90">
                    {r.label}: {r.hours}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <CtaButton
                action={{ label: "Call Us", type: "call", href: `tel:${contactInfo.phone}` }}
                variant="ghost"
              />
              <CtaButton
                action={{ label: "WhatsApp", type: "whatsapp", href: whatsappHref(contactInfo.whatsapp) }}
                variant="ghost"
              />
              <CtaButton action={{ label: "Email Us", type: "link", href: `mailto:${contactInfo.email}` }} variant="ghost" />
            </div>
          </Reveal>

          <Reveal delayMs={160} className="aspect-[4/3] overflow-hidden border border-ivory/10 lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <iframe
              title={`${hotelInfo.name} location map`}
              src={contactInfo.mapEmbedUrl}
              className="h-full w-full grayscale invert-[0.92] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
