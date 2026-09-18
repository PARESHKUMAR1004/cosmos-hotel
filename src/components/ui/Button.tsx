import type { AnchorHTMLAttributes, ReactNode } from "react";
import type { CtaAction } from "@/types/content";
import { Icon } from "./Icon";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-ink text-ivory hover:bg-ink-700 border border-ink",
  secondary: "bg-transparent text-ink border border-ink/70 hover:bg-ink hover:text-ivory",
  ghost: "bg-white/10 text-ivory border border-ivory/60 hover:bg-white/20 backdrop-blur-sm",
};

/** Generic styled CTA button/link. Prefer `CtaButton` when rendering a `CtaAction` from config. */
export function Button({ variant = "primary", className = "", children, ...rest }: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide uppercase transition-colors duration-300 ease-editorial focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 focus-visible:ring-offset-2 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

/**
 * Renders a `CtaAction` from config with the right icon + href semantics
 * (tel:, mailto:/anchor, wa.me). Centralizing this means every "Enquire /
 * Call / WhatsApp" button behaves consistently, and swapping in a future
 * "book" action type only means adding a case here.
 */
export function CtaButton({ action, variant = "primary", className = "" }: { action: CtaAction; variant?: Variant; className?: string }) {
  const icon = action.type === "call" ? "phone" : action.type === "whatsapp" ? "whatsapp" : undefined;
  const isExternal = action.href.startsWith("http");
  return (
    <Button
      variant={variant}
      className={className}
      href={action.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {icon && <Icon name={icon} className="h-4 w-4" />}
      {action.label}
    </Button>
  );
}
