import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "@/config/navConfig";
import { contactInfo } from "@/config/contactConfig";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { CtaButton } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

/**
 * Sticky header. Transparent-over-hero on the homepage until the user
 * scrolls, solid everywhere else (e.g. a room details page).
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled;

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("#")) return;
    if (!isHome) {
      e.preventDefault();
      navigate(`/${href}`);
      return;
    }
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-editorial ${
          transparent ? "bg-transparent py-6" : "bg-ivory/95 py-3 shadow-[0_1px_0_0_rgba(18,24,27,0.08)] backdrop-blur-sm"
        }`}
      >
        <Container className="flex items-center justify-between">
          <Link to="/" aria-label="COSMOS home" className="shrink-0">
            <Logo tone={transparent ? "light" : "dark"} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={isHome ? item.href : `/${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium uppercase tracking-wide transition-colors duration-200 hover:text-brass-400 ${
                  transparent ? "text-ivory" : "text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <CtaButton
              action={{ label: "Enquire Now", type: "enquire", href: isHome ? "#contact" : "/#contact" }}
              variant={transparent ? "ghost" : "primary"}
              className="!px-5 !py-2.5 text-xs"
            />
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
            className={`-mr-2 rounded-md p-2 lg:hidden ${transparent ? "text-ivory" : "text-ink"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400`}
          >
            <Icon name="menu" className="h-6 w-6" />
          </button>
        </Container>
      </header>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        isHome={isHome}
        phoneHref={`tel:${contactInfo.phone}`}
      />
    </>
  );
}
