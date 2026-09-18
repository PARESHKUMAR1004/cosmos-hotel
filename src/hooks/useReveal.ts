import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

/**
 * IntersectionObserver-based scroll-reveal. Returns a ref to attach and a
 * boolean for whether the element has entered the viewport. When the user
 * prefers reduced motion, `visible` is true immediately and no transform
 * animation should be applied by the consumer.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const reducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, threshold]);

  return { ref, visible, reducedMotion };
}
