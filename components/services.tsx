"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServicesSectionProps {
  className?: string;
}

const services: Service[] = [
  {
    title: "Sofa Cleaning",
    description:
      "We provide professional sofa cleaning services that remove dust, stains, dirt, bacteria, and bad odors from all types of sofas and upholstery. Our deep-cleaning process restores freshness, improves appearance, and helps extend the life of your furniture.",
    image: "/sofa-cleaning.webp",
  },

  {
    title: "Mattress Cleaning",
    description:
      "We provide deep mattress cleaning and sanitization services to remove dust mites, sweat stains, allergens, bacteria, and unpleasant odors. Our cleaning process helps create a healthier and more comfortable sleeping environment for your family.",
    image: "/mattress-cleaning.webp",
  },

  {
    title: "Car Interior Cleaning",
    description:
      "We provide complete car interior cleaning services including seat shampooing, carpet cleaning, dashboard detailing, stain removal, and odor treatment. We leave your vehicle fresh, clean, and comfortable.",
    image: "/car-cleaning.webp",
  },

  {
    title: "Carpet Cleaning",
    description:
      "We provide professional carpet cleaning services using deep-cleaning equipment to remove stains, dirt, dust, allergens, and odors. Our carpet cleaning solutions restore freshness and improve indoor hygiene for homes and offices.",
    image: "/carpet-cleaning.webp",
  },

  {
    title: "Duvet Cleaning",
    description:
      "We provide careful duvet cleaning and sanitization services that remove dirt, sweat, stains, and odors while maintaining the softness and quality of your bedding. Your duvets are cleaned, freshened, and professionally dried.",
    image: "/duvet.webp",
  },

  {
    title: "Curtain Cleaning",
    description:
      "We provide curtain cleaning services that remove dust, stains, smoke smells, and allergens from all types of curtains. Our process keeps your curtains fresh, clean, and looking beautiful without damaging the fabric.",
    image: "/curtain.webp",
  },

  {
    title: "Vacuum Cleaning",
    description:
      "We provide thorough vacuum cleaning services for homes, offices, apartments, and commercial spaces to remove dust, debris, pet hair, and allergens from floors, carpets, furniture, and hard-to-reach areas.",
    image: "/vacuum.webp",
  },

  {
    title: "Floor Scrubbing",
    description:
      "We provide machine floor scrubbing services for residential and commercial spaces. Our professional equipment removes dirt, stains, and grime while restoring cleanliness and shine to tiled, wooden, and concrete floors.",
    image: "/floor.webp",
  },

  {
    title: "Tile Scrubbing",
    description:
      "We provide professional tile and grout scrubbing services to remove stubborn stains, dirt buildup, mold, and discoloration. Our cleaning process restores the original shine and cleanliness of your floors and walls.",
    image: "/tiles.webp",
  },

  {
    title: "Post Construction Cleaning",
    description:
      "We provide detailed post-construction cleaning services to remove dust, paint marks, debris, cement residue, and dirt left after construction or renovation projects. We leave your property spotless, clean, and move-in ready.",
    image: "/post-construction.webp",
  },

  {
    title: "Residential Cleaning",
    description:
      "We provide reliable residential cleaning services for apartments, houses, and homes across Nairobi. Our team handles dusting, mopping, kitchen cleaning, bathroom cleaning, vacuuming, and complete home sanitation.",
    image: "/residential.webp",
  },

  {
    title: "Office Cleaning",
    description:
      "We provide professional office cleaning services designed to maintain clean, organized, and healthy working environments. Our services include workstation cleaning, floor care, washroom sanitation, trash removal, and dust control.",
    image: "/office.webp",
  },

  {
    title: "Fumigation & Pest Control",
    description:
      "We provide safe and effective fumigation and pest control services for homes, offices, apartments, and commercial buildings. We help eliminate cockroaches, bedbugs, termites, rodents, mosquitoes, and other pests.",
    image: "/fumigation.webp",
  },

  {
    title: "Landscaping & Gardening",
    description:
      "We provide landscaping and gardening services including lawn maintenance, hedge trimming, flower planting, compound cleaning, and garden design to keep your outdoor spaces clean, attractive, and well maintained.",
    image: "/landscaping.webp",
  },
];

const ServicesSection = ({
  className,
}: ServicesSectionProps) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 lg:py-28",
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-5 border-primary bg-primary/10 px-4 py-2 text-primary hover:bg-primary/20">
            <Sparkles className="mr-2 size-4" />
            Our Professional Services
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Cleaning Services for Homes & Businesses
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Nairobi Homes Mobile Cleaners provides professional,
            affordable, and reliable cleaning solutions across Nairobi,
            Kenya.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={cn(
                "group overflow-hidden rounded-3xl border bg-background shadow-sm transition-all duration-300",
                "hover:-translate-y-2 hover:shadow-2xl"
              )}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Badge */}
                <div className="absolute left-4 top-4">
                  <div className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary shadow">
                    Premium Service
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <div className="mb-4 flex items-center gap-2">
                  <ShieldCheck className="size-5 text-primary" />

                  <span className="text-sm font-semibold text-primary">
                    Trusted Cleaning
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* BUTTON */}
                <div className="mt-6">
                  <Button
                    asChild
                    variant="outline"
                    className="group/button border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Link href="/contact">
                      Book Service

                      <ArrowRight className="ml-2 size-4 transition-transform group-hover/button:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl border bg-secondary/10 p-10 text-center">
          <h3 className="text-3xl font-black tracking-tight">
            Need Professional Cleaning Services?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Contact Nairobi Homes Mobile Cleaners today for reliable,
            affordable, and high-quality cleaning services anywhere in
            Nairobi.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 size-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-secondary hover:bg-secondary/20"
            >
              <Link href="tel:+254700000000">
                Call Us Today
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };