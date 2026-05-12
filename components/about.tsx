"use client";

import Image from "next/image";
import Link from "next/link";

import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Users,
  Clock3,
  ArrowRight,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  className?: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
  return (
    <section
      className={cn(
        "relative overflow-hidden py-20 lg:py-28",
        className
      )}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* IMAGE SIDE */}
          <div className="relative order-2 lg:order-1">
            {/* Main Image */}
            <div className="overflow-hidden rounded-3xl border-4 border-secondary shadow-2xl">
              <Image
                src="/about.webp"
                alt="Cleaning team at Nairobi Homes Mobile Cleaners"
                width={700}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border bg-background p-6 shadow-2xl lg:block">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-3">
                  <Sparkles className="size-6 text-primary" />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Professional Cleaning
                  </p>
                  <h4 className="text-lg font-bold">
                    Trusted Across Nairobi
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT SIDE */}
          <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:items-start lg:text-left">
           

            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Reliable Cleaning Services You Can Trust
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Nairobi Homes Mobile Cleaners is a trusted cleaning company
              based in Nairobi, Kenya, dedicated to delivering high-quality
              residential and commercial cleaning services.
            </p>

            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              We help homeowners, offices, Airbnb hosts, and businesses
              maintain clean, healthy, and comfortable spaces through
              professional cleaning solutions tailored to every client’s needs.
            </p>


            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact">
                  Book a Cleaning
                  <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-secondary hover:bg-secondary/20"
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>

        
            {/* FEATURES */}
            <div className="mt-12 lg:mt-16 grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <ShieldCheck className="mb-3 size-8 text-primary" />

                <h3 className="text-lg font-bold">
                  Trusted Professionals
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Our trained cleaning team delivers reliable and
                  detail-oriented services every time.
                </p>
              </div>

              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <Clock3 className="mb-3 size-8 text-primary" />

                <h3 className="text-lg font-bold">
                  Flexible Scheduling
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We provide convenient cleaning schedules that fit your
                  home or business routine.
                </p>
              </div>

              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <Users className="mb-3 size-8 text-primary" />

                <h3 className="text-lg font-bold">
                  Customer Focused
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Your satisfaction is our priority, and we always go the
                  extra mile to exceed expectations.
                </p>
              </div>

              <div className="rounded-2xl border bg-background p-5 shadow-sm">
                <CheckCircle2 className="mb-3 size-8 text-primary" />

                <h3 className="text-lg font-bold">
                  Quality Guaranteed
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  We use effective cleaning techniques and quality products
                  to achieve spotless results.
                </p>
              </div>
            </div>
      </div>
    </section>
  );
};

export { AboutSection };