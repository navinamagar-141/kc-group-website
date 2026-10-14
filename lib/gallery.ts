const EXT = ".jpg.PNG"; 

const img = (name: string) => `/gallery/${name}${EXT}`;

export type GalleryPhoto = {
  src: string;
  alt: string;
  title: string;
  href: string;
  position?: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: img("office-desk-cleaning"),
    alt: "KC Group team member cleaning an office desk",
    title: "Office Cleaning",
    href: "/office-cleaning",
  },
  {
    src: img("gym-equipment-cleaning"),
    alt: "KC Group team member cleaning gym equipment",
    title: "Gym & Fitness Cleaning",
    href: "/gym-cleaning",
  },
  {
    src: img("window-cleaning"),
    alt: "KC Group team member cleaning exterior windows",
    title: "Window Cleaning",
    href: "/window-cleaning",
    position: "35% center",
  },
  {
    src: img("carpet-cleaning"),
    alt: "KC Group team member cleaning an office carpet",
    title: "Carpet Cleaning",
    href: "/carpet-cleaning",
  },
  {
    src: img("facility-floor-scrubbing"),
    alt: "KC Group team member scrubbing a facility floor",
    title: "Floor Care",
    href: "/cleaning#specialised",
  },
  {
    src: img("exterior-pressure-washing"),
    alt: "KC Group team member pressure washing an outdoor area",
    title: "Pressure Cleaning",
    href: "/cleaning#specialised",
  },
  {
    src: img("commercial-kitchen-cleaning"), // Fixed trailing dot issue
    alt: "KC Group team member cleaning a commercial kitchen",
    title: "Kitchen & Hospitality",
    href: "/commercial-cleaning",
  },
  {
    src: img("residential-floor-cleaning"),
    alt: "KC Group team member cleaning a residential floor",
    title: "Residential Cleaning",
    href: "/cleaning#residential",
  },
  {
    src: img("upholstery-cleaning"),
    alt: "KC Group team member deep cleaning a sofa",
    title: "Deep Cleaning",
    href: "/deep-cleaning",
  },
  {
    src: img("bathroom-cleaning"),
    alt: "KC Group team member cleaning a commercial washroom",
    title: "Washroom Cleaning",
    href: "/commercial-cleaning",
  },
];