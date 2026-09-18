import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

/**
 * Fade-up scroll-reveal wrapper. Respects `prefers-reduced-motion` (renders
 * content immediately, no transform) via `useReveal`.
 */
export function Reveal({
  children,
  className = "",
  delayMs = 0,
  as: Comp = "div",
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: ElementType;
}) {
  const { ref, visible, reducedMotion } = useReveal();

  return (
    <Comp
      ref={ref}
      className={className}
      style={
        reducedMotion
          ? undefined
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delayMs}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delayMs}ms`,
            }
      }
    >
      {children}
    </Comp>
  );
}
