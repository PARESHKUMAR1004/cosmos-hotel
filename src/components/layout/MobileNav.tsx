import { useNavigate } from "react-router-dom";
import { navItems } from "@/config/navConfig";
import { Icon } from "@/components/ui/Icon";
import { CtaButton } from "@/components/ui/Button";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { Logo } from "./Logo";

export function MobileNav({
  open,
  onClose,
  isHome,
  phoneHref,
}: {
  open: boolean;
  onClose: () => void;
  isHome: boolean;
  phoneHref: string;
}) {
  useLockBodyScroll(open);
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onClose();
    if (!isHome) {
      navigate(`/${href}`);
      return;
    }
    // slight delay lets the panel close before the smooth scroll starts
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 150);
  };

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-ink/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
      />
      <div
        className={`absolute inset-y-0 right-0 flex h-full w-[85%] max-w-sm flex-col bg-ivory shadow-2xl transition-transform duration-300 ease-editorial ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between px-6 py-5">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="rounded-md p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400"
          >
            <Icon name="close" className="h-6 w-6" />
          </button>
        </div>

        <nav aria-label="Mobile primary" className="mt-4 flex flex-col px-6">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={isHome ? item.href : `/${item.href}`}
              onClick={(e) => handleClick(e, item.href)}
              className="border-b border-ink/10 py-4 font-display text-2xl text-ink transition-colors hover:text-brass-500"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-3 px-6 py-8">
          <CtaButton action={{ label: "Enquire Now", type: "enquire", href: isHome ? "#contact" : "/#contact" }} variant="primary" />
          <CtaButton action={{ label: "Call Us", type: "call", href: phoneHref }} variant="secondary" />
        </div>
      </div>
    </div>
  );
}
