"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface GalleryImage {
  image: string;
  alt: string;
}

interface ProjectsGalleryProps {
  className?: string;
}

const galleryImages: GalleryImage[] = [
  {
    image: "/sofa-2.webp",
    alt: "Sofa Cleaning",
  },
  {
    image: "/mattress-2.webp",
    alt: "Mattress Cleaning",
  },
  {
    image: "/carpet-cleaning.webp",
    alt: "Carpet Cleaning",
  },
  {
    image: "/office-2.webp",
    alt: "Office Cleaning",
  },
  {
    image: "/post-construction.webp",
    alt: "Post Construction Cleaning",
  },
  {
    image: "/floor.webp",
    alt: "Floor Scrubbing",
  },
  {
    image: "/curtain.webp",
    alt: "Curtain Cleaning",
  },
  {
    image: "/residential.webp",
    alt: "Residential Cleaning",
  },
  {
    image: "/landscaping-2.webp",
    alt: "Landscaping and Gardening",
  },
];

const ProjectsGallery = ({
  className,
}: ProjectsGalleryProps) => {
  return (
    <section
      className={cn(
        "py-20 lg:py-28",
        className
      )}
    >
      <div className="container">
        {/* HEADER */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Our Recent Projects
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Professional cleaning and fumigation services delivered across Nairobi.
          </p>
        </div>

        {/* IMAGE GRID */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={cn(
                "group overflow-hidden rounded-3xl border bg-background shadow-sm transition-all duration-300",
                "hover:-translate-y-2 hover:shadow-2xl"
              )}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={700}
                  height={700}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectsGallery };