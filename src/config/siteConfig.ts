/**
 * Aggregator — re-exports every config module from one place so components
 * can do `import { hotelInfo, contactInfo, navItems } from "@/config/siteConfig"`.
 * Individual config files remain importable directly when only one is needed.
 */
export { hotelInfo } from "./hotelConfig";
export { contactInfo } from "./contactConfig";
export { heroContent } from "./heroConfig";
export { aboutContent } from "./aboutConfig";
export { rooms, getRoomBySlug } from "./roomsConfig";
export { amenities, getAmenityById } from "./amenitiesConfig";
export { diningVenues } from "./diningConfig";
export { galleryContent } from "./galleryConfig";
export { navItems } from "./navConfig";
export { seoConfig } from "./seoConfig";
