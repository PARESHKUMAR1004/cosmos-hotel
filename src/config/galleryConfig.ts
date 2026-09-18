/**
 * GALLERY
 * `categories` controls the filter chips (in display order); "All" is added
 * automatically by the Gallery component. Add images by pushing into the
 * `galleryImages` array in mediaConfig.ts with a matching `category`.
 */
import type { GalleryContent } from "@/types/content";
import { galleryImages } from "./mediaConfig";

export const galleryContent: GalleryContent = {
  categories: ["Exterior", "Rooms", "Dining", "Events", "Amenities"],
  images: galleryImages,
};
