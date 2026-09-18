/**
 * CONTACT & LOCATION
 * All values below are clearly-marked placeholders — replace with the
 * client's real address, phone/WhatsApp numbers, email, map link and social
 * handles before launch. Every contact affordance on the site (tel:, mailto:,
 * wa.me, map embed/link, social icons) is generated from this single object.
 */
import type { ContactInfo } from "@/types/content";

export const contactInfo: ContactInfo = {
  address: {
    line1: "1 Placeholder Avenue",
    line2: "Near City Centre",
    city: "Bhubaneswar",
    state: "Odisha",
    postalCode: "751001",
    country: "India",
  },
  phone: "+911234567890",
  phoneDisplay: "+91 12345 67890",
  whatsapp: "+911234567890",
  email: "stay@cosmoshotel.example",
  // Replace with a real Google Maps embed src for the property.
  mapEmbedUrl: "https://www.google.com/maps?q=Bhubaneswar,Odisha,India&output=embed",
  mapLinkUrl: "https://maps.google.com/?q=Bhubaneswar,Odisha,India",
  reception: [{ label: "Front desk", hours: "Open 24 hours" }],
  social: [
    { platform: "instagram", href: "https://instagram.com/", label: "COSMOS on Instagram" },
    { platform: "facebook", href: "https://facebook.com/", label: "COSMOS on Facebook" },
    { platform: "youtube", href: "https://youtube.com/", label: "COSMOS on YouTube" },
  ],
};
