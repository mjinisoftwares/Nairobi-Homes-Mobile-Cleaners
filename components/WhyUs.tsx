    "use client";

import {
  ShieldCheck,
  Clock3,
  Sparkles,
  BadgeCheck,
  Users,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface WhyChooseUsProps {
  className?: string;
}

const features = [
  {
    icon: <ShieldCheck className="size-8 text-primary" />,
    title: "Trusted & Professional Team",
    description:
      "Our experienced cleaning professionals are trained to deliver reliable, high-quality, and detail-oriented cleaning services for homes and businesses.",
  },

  {
    icon: <Clock3 className="size-8 text-primary" />,
    title: "Fast & Reliable Service",
    description:
      "We value your time and always strive to provide timely, dependable, and efficient cleaning services across Nairobi.",
  },

  {
    icon: <Sparkles className="size-8 text-primary" />,
    title: "High Cleaning Standards",
    description:
      "We use effective cleaning techniques and quality products to ensure every space is left spotless, fresh, and hygienic.",
  },

  {
    icon: <BadgeCheck className="size-8 text-primary" />,
    title: "Affordable Pricing",
    description:
      "We offer competitive and transparent pricing with no hidden costs, making professional cleaning services accessible and affordable.",
  },

  {
    icon: <Users className="size-8 text-primary" />,
    title: "Customer Satisfaction",
    description:
      "Customer satisfaction is our priority, and we go the extra mile to exceed expectations with every cleaning service we provide.",
  },

  {
    icon: <ThumbsUp className="size-8 text-primary" />,
    title: "Flexible Cleaning Solutions",
    description:
      "We provide customized cleaning services tailored to your residential, office, commercial, or post-construction cleaning needs.",
  },
];

const WhyChooseUs = ({
  className,
}: WhyChooseUsProps) => {
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

      <div className="container">
        {/* HEADER */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge className="mb-5 border-primary bg-primary/10 px-4 py-2 text-primary hover:bg-primary/20">
            Why Choose Nairobi Homes Mobile Cleaners
          </Badge>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Professional Cleaning Services You Can Trust
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We are committed to delivering reliable, affordable, and
            high-quality cleaning services that leave your home,
            office, or commercial space spotless and refreshed.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={cn(
                "group rounded-3xl border bg-background p-8 shadow-sm transition-all duration-300",
                "hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl"
              )}
            >
              {/* ICON */}
              <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
                {feature.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold tracking-tight">
                {feature.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-20 grid gap-6 rounded-3xl border bg-secondary/10 p-10 md:grid-cols-3">
          <div className="text-center">
            <h3 className="text-5xl font-bold text-primary">
              500+
            </h3>

            <p className="mt-2 text-lg font-medium text-muted-foreground">
              Happy Clients
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-primary">
              5+
            </h3>

            <p className="mt-2 text-lg font-medium text-muted-foreground">
              Years Experience
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold text-primary">
              100%
            </h3>

            <p className="mt-2 text-lg font-medium text-muted-foreground">
              Customer Satisfaction
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">
              Book Professional Cleaning
              <ArrowRight className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { WhyChooseUs };