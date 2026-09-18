import type { IconName } from "@/types/content";

/**
 * Small, dependency-free inline-SVG icon set. Keeping icons hand-rolled
 * avoids pulling in an icon library dependency for what is a fixed, known
 * set of amenity/contact/UI glyphs.
 */
const paths: Record<IconName, React.ReactNode> = {
  wifi: (
    <>
      <path d="M5 12.5a10 10 0 0 1 14 0" />
      <path d="M7.8 15.6a6.2 6.2 0 0 1 8.4 0" />
      <path d="M10.6 18.6a2.4 2.4 0 0 1 2.8 0" />
      <circle cx="12" cy="21" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  parking: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="1.5" />
      <path d="M9.5 16V8h3.2a2.5 2.5 0 1 1 0 5H9.5" />
    </>
  ),
  pool: (
    <>
      <path d="M3 17c1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0" />
      <path d="M3 21c1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0 1.2-1 2.4-1 3.6 0 1.2 1 2.4 1 3.6 0" />
      <path d="M8 13V4l9 4.5L8 13" />
    </>
  ),
  restaurant: (
    <>
      <path d="M6 3v7a2 2 0 0 0 4 0V3" />
      <path d="M8 10v11" />
      <path d="M17 3c-1.7 0-3 2-3 5s1.3 5 3 5 3-2 3-5-1.3-5-3-5Z" />
      <path d="M17 13v8" />
    </>
  ),
  roomService: (
    <>
      <path d="M4 15h16" />
      <path d="M6 15a6 6 0 0 1 12 0" />
      <path d="M12 15V8" />
      <circle cx="12" cy="6" r="1.6" />
      <path d="M4 18.5h16" />
    </>
  ),
  housekeeping: (
    <>
      <path d="M12 3 4 9v10a1 1 0 0 0 1 1h5v-6h4v6h5a1 1 0 0 0 1-1V9z" />
    </>
  ),
  ac: (
    <>
      <rect x="3" y="6" width="18" height="6" rx="1.5" />
      <path d="M6 15v3M10 15v4M14 15v3M18 15v4" />
    </>
  ),
  conference: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8" />
      <path d="M7 10h10M7 13h6" />
    </>
  ),
  gym: (
    <>
      <path d="M4 9v6M2 11v2M22 11v2M20 9v6" />
      <path d="M6 12h12" />
      <rect x="4" y="9" width="2" height="6" />
      <rect x="18" y="9" width="2" height="6" />
    </>
  ),
  spa: (
    <>
      <path d="M12 21c-3.5 0-6-2.4-6-5.6C6 12 9 8 12 4c3 4 6 8 6 11.4 0 3.2-2.5 5.6-6 5.6Z" />
    </>
  ),
  laundry: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="13" r="4.2" />
      <circle cx="8" cy="6" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  bar: (
    <>
      <path d="M5 4h14l-7 8v7" />
      <path d="M9 19h6" />
    </>
  ),
  concierge: (
    <>
      <path d="M4 19a8 8 0 0 1 16 0" />
      <path d="M12 19V9" />
      <circle cx="12" cy="6" r="3" />
    </>
  ),
  petFriendly: (
    <>
      <circle cx="12" cy="15" r="5" />
      <circle cx="7" cy="7" r="1.6" />
      <circle cx="17" cy="7" r="1.6" />
      <circle cx="4.5" cy="11" r="1.4" />
      <circle cx="19.5" cy="11" r="1.4" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s-7-6.1-7-11.4A7 7 0 0 1 19 9.6C19 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.6" r="2.4" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h4l1.5 4.5L8 10.5a12 12 0 0 0 5.5 5.5l1.9-2.5L20 15v4a1 1 0 0 1-1 1c-8.3 0-15-6.7-15-15a1 1 0 0 1 1-1Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1.5" />
      <path d="M3.5 6.5 12 13l8.5-6.5" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12.04 3.5a8.5 8.5 0 0 0-7.36 12.76L3.5 20.5l4.4-1.15A8.5 8.5 0 1 0 12.04 3.5Z" />
      <path d="M8.7 9.3c.15-.5.7-.5 1-.4l.6.25c.25.1.4.35.35.6-.1.5-.35 1.1-.05 1.6.5.9 1.3 1.7 2.2 2.2.5.3 1.1.05 1.6-.05.25-.05.5.1.6.35l.25.6c.1.3.1.85-.4 1a3.7 3.7 0 0 1-3.6-.7 8 8 0 0 1-2.3-2.3 3.7 3.7 0 0 1-.7-3.6Z" fill="currentColor" stroke="none" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M14 21v-6.5h2.2l.4-2.8H14V9.9c0-.8.3-1.4 1.5-1.4h1.3V6a13 13 0 0 0-1.9-.1c-2.2 0-3.4 1.3-3.4 3.6v2.2H9.3v2.8h2.2V21" />
    </>
  ),
  twitter: (
    <>
      <path d="M21 5.3c-.7.4-1.5.6-2.3.8a3.6 3.6 0 0 0-6.1 3.3A10.2 10.2 0 0 1 4.3 5.6a3.6 3.6 0 0 0 1.1 4.8 3.6 3.6 0 0 1-1.6-.4 3.6 3.6 0 0 0 2.9 3.6c-.5.15-1 .2-1.6.1a3.6 3.6 0 0 0 3.4 2.5A7.2 7.2 0 0 1 3 17.7a10.2 10.2 0 0 0 5.5 1.6c6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.3-1.15 1.8-1.9-.6.3-1.3.5-2 .6.7-.5 1.3-1.2 1.5-2Z" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M7.5 10v6.5M7.5 7.2v.1M11.5 16.5V10M11.5 12.7c0-1.5 1-2.7 2.5-2.7s2.5 1.2 2.5 2.7v3.8" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6 6 18" />
    </>
  ),
  chevronLeft: <path d="M15 5 8 12l7 7" />,
  chevronRight: <path d="M9 5l7 7-7 7" />,
  bed: (
    <>
      <path d="M3 19v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" />
      <path d="M3 15h18" />
      <path d="M6 10V6M6 6h5v4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="17.5" cy="9" r="2.3" />
      <path d="M15.5 12.2a5 5 0 0 1 5.5 5.8" />
    </>
  ),
  expand: (
    <>
      <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
};

export function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
