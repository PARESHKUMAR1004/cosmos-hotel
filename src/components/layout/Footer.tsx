import { hotelInfo } from "@/config/hotelConfig";
import { contactInfo } from "@/config/contactConfig";
import { navItems } from "@/config/navConfig";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-ivory-200">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory-300/80">{hotelInfo.positioningStatement}</p>
          <div className="mt-6 flex gap-4">
            {contactInfo.social.map((s) => (
              <a
                key={s.platform}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-ivory-300 transition-colors hover:text-brass-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
              >
                <Icon name={s.platform} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-brass-300">Explore</h3>
          <ul className="space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-ivory-300/90 transition-colors hover:text-ivory">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-brass-300">Contact</h3>
          <ul className="space-y-3 text-sm text-ivory-300/90">
            <li className="flex gap-2.5">
              <Icon name="map" className="mt-0.5 h-4 w-4 shrink-0 text-brass-300" />
              <span>
                {contactInfo.address.line1}
                {contactInfo.address.line2 ? `, ${contactInfo.address.line2}` : ""}, {contactInfo.address.city},{" "}
                {contactInfo.address.state} {contactInfo.address.postalCode}
              </span>
            </li>
            <li className="flex gap-2.5">
              <Icon name="phone" className="h-4 w-4 shrink-0 text-brass-300" />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-ivory">
                {contactInfo.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Icon name="mail" className="h-4 w-4 shrink-0 text-brass-300" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-ivory">
                {contactInfo.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest2 text-brass-300">Front Desk</h3>
          <ul className="space-y-2.5 text-sm text-ivory-300/90">
            {contactInfo.reception.map((r) => (
              <li key={r.label} className="flex justify-between gap-4">
                <span>{r.label}</span>
                <span className="text-ivory-300/60">{r.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-ivory/10">
        <Container className="flex flex-col gap-3 py-6 text-xs text-ivory-300/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {hotelInfo.legalName ?? hotelInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {/* Placeholder legal pages — link to real policy pages once drafted. */}
            <a href="#" className="hover:text-ivory">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-ivory">
              Terms &amp; Conditions
            </a>
          </div>
        </Container>
      </div>
    </footer>
  );
}
