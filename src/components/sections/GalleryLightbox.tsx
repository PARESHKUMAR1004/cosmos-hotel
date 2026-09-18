import { useEffect } from "react";
import type { GalleryImage } from "@/types/content";
import { Icon } from "@/components/ui/Icon";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

export function GalleryLightbox({
  images,
  index,
  onClose,
  onNavigate,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}) {
  useLockBodyScroll(true);
  const image = images[index];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % images.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onNavigate]);

  if (!image) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${images.length}: ${image.alt}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 animate-fadeIn"
    >
      <button
        type="button"
        aria-label="Close gallery"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full p-2 text-ivory/80 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 sm:right-8 sm:top-8"
      >
        <Icon name="close" className="h-7 w-7" />
      </button>

      <button
        type="button"
        aria-label="Previous image"
        onClick={() => onNavigate((index - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-ivory/80 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 sm:left-6"
      >
        <Icon name="chevronLeft" className="h-8 w-8" />
      </button>

      <figure className="max-h-[85vh] max-w-[90vw]">
        <img src={image.src} alt={image.alt} className="max-h-[80vh] w-auto max-w-full object-contain" />
        <figcaption className="mt-3 text-center text-sm text-ivory-200/80">
          {image.category} · {index + 1} / {images.length}
        </figcaption>
      </figure>

      <button
        type="button"
        aria-label="Next image"
        onClick={() => onNavigate((index + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-ivory/80 hover:text-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-400 sm:right-6"
      >
        <Icon name="chevronRight" className="h-8 w-8" />
      </button>
    </div>
  );
}
