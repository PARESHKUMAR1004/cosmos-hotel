import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  tone = "dark",
  children,
}: {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  /** "dark" = dark text for light backgrounds (default); "light" = light text for dark section backgrounds. */
  tone?: "dark" | "light";
  children?: ReactNode;
}) {
  const headingColor = tone === "light" ? "text-ivory" : "text-ink";
  const descriptionColor = tone === "light" ? "text-ivory-200/80" : "text-ink-500";

  return (
    <Reveal className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-3 text-xs font-semibold uppercase tracking-widest2 ${tone === "light" ? "text-brass-300" : "text-brass-500"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl leading-[1.1] sm:text-5xl ${headingColor}`}>{heading}</h2>
      {description && <p className={`mt-4 text-base leading-relaxed ${descriptionColor}`}>{description}</p>}
      {children}
    </Reveal>
  );
}
