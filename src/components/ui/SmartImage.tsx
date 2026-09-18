import { useState } from "react";
import type { MediaImage } from "@/types/content";

/**
 * Renders a MediaImage with lazy-loading and a graceful fallback: if the
 * configured URL ever fails to load (e.g. a placeholder swapped out
 * incorrectly), it degrades to a soft branded gradient instead of a broken
 * image icon, so a bad config value never looks like a bug to a visitor.
 */
export function SmartImage({
  image,
  className = "",
  loading = "lazy",
  sizes,
}: {
  image: MediaImage;
  className?: string;
  loading?: "lazy" | "eager";
  sizes?: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-ink-700 to-ink-900 text-ivory-200 ${className}`}
        role="img"
        aria-label={image.alt}
      >
        <span className="px-4 text-center font-display text-sm italic tracking-wide opacity-70">{image.alt}</span>
      </div>
    );
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      loading={loading}
      decoding="async"
      sizes={sizes}
      className={className}
      onError={() => setErrored(true)}
    />
  );
}
