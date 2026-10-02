export type GalleryPhoto = {
  src: string;
  alt: string;
  category: string;
};

export const galleryPhotos: GalleryPhoto[] = [
  { src: "/gallery/residential-floor-cleaning.jpg.PNG", alt: "KC Group team member cleaning a residential floor", category: "Residential" },
  { src: "/gallery/gym-equipment-cleaning.jpg.PNG", alt: "KC Group team member cleaning gym equipment", category: "Gym & Fitness" },
  { src: "/gallery/upholstery-cleaning.jpg.PNG", alt: "KC Group team member cleaning a sofa", category: "Residential" },
  { src: "/gallery/office-desk-cleaning.jpg.PNG", alt: "KC Group team member cleaning an office desk", category: "Office" },
  { src: "/gallery/bathroom-cleaning.jpg.PNG", alt: "KC Group team member cleaning a commercial bathroom", category: "Commercial" },
  { src: "/gallery/exterior-pressure-washing.jpg.PNG", alt: "KC Group team member pressure washing an outdoor area", category: "Exterior" },
  { src: "/gallery/commercial-kitchen-cleaning.jpg.PNG", alt: "KC Group team member cleaning a commercial kitchen", category: "Hospitality" },
  { src: "/gallery/carpet-cleaning.jpg.PNG", alt: "KC Group team member cleaning an office carpet", category: "Office" },
  { src: "/gallery/window-cleaning.jpg.PNG", alt: "KC Group team member cleaning exterior windows", category: "Commercial" },
  { src: "/gallery/facility-floor-scrubbing.jpg.PNG", alt: "KC Group team member scrubbing a sports facility floor", category: "Facilities" },
];