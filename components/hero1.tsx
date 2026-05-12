"use client";

import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroCleaningProps {
  className?: string;
}

const HeroCleaning = ({ className }: HeroCleaningProps) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-secondary/10 py-12",
        className
      )}
    >
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
           
            <h1 className="max-w-3xl text-4xl md:text-5xl font-bold leading-tight tracking-tight text-balance ">
              Professional Home & Office
              <span className="text-primary">  Cleaning </span>
              Services in Nairobi
            </h1>

            <p className="mt-6 max-w-xl  leading-relaxed text-muted-foreground ">
              Nairobi Homes Mobile Cleaners provides reliable, affordable,
              and professional cleaning services for homes, apartments,
              offices, Airbnb spaces, and commercial properties across Nairobi.
            </p>

            {/* BUTTONS */}
           {/* BUTTONS */}
<div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row lg:w-auto lg:justify-start lg:items-start">
  <Button
    asChild
    size="lg"
    className="h-12 bg-primary px-8 text-base text-primary-foreground hover:bg-primary/90"
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
    className="h-12 border-secondary bg-secondary/20 px-8 text-base hover:bg-secondary hover:text-secondary-foreground"
  >
    <Link href="tel:+254700000000">
      <PhoneCall className="mr-2 size-5" />
      Call Us Today
    </Link>
  </Button>
</div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* Decorative Card */}
            <div className="absolute z-50 -left-6 -top-6 hidden rounded-3xl border border-primary/20 bg-background/80 p-5 shadow-xl backdrop-blur lg:block">
              <div className="text-sm font-semibold text-muted-foreground">
                Customer Satisfaction
              </div>

              <div className="mt-1 text-3xl font-black text-primary">
                98%
              </div>
            </div>

            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl border-4 border-secondary bg-background shadow-2xl">
              <Image
                src="/hero-1.webp"
                alt="Professional cleaning services in Nairobi"
                width={700}
                height={700}
                priority
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 right-5 rounded-2xl border border-border bg-background px-5 py-4 shadow-xl">
              <div className="text-sm text-muted-foreground">
                Trusted by Nairobi Residents
              </div>

              <div className="text-xl font-bold">
                500+ Happy Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroCleaning };