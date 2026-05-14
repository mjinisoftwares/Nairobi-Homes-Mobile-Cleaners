"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={cn("border-t bg-secondary/10", className)}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-12 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* BRAND */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.webp"
                alt="Nairobi Homes Mobile Cleaners"
                width={250}
                height={80}
                className="h-auto w-auto max-h-24"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Nairobi Homes Mobile Cleaners provides professional,
              reliable, and affordable cleaning services for homes,
              offices, carpets, sofas, mattresses, and more across Nairobi.
            </p>

            <Button
              asChild
              className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">
                Book Cleaning
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/nairobihomecleaners"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-3 text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaInstagram className="h-5 w-5" />
              </a>

              <a
                href="https://www.facebook.com/Nairobihomecleaner/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-3 text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaFacebookF className="h-5 w-5" />
              </a>

              <a
                href="https://www.tiktok.com/@nairobihomecleaners0"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border p-3 text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <FaTiktok className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-bold">Our Services</h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>Sofa Cleaning</li>
              <li>Carpet Cleaning</li>
              <li>Mattress Cleaning</li>
              <li>Office Cleaning</li>
              <li>Post Construction Cleaning</li>
              <li>Fumigation & Pest Control</li>
              <li>Landscaping & Gardening</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-primary">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/projects" className="hover:text-primary">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>

            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-primary" />
                +254 718 601 976
              </li>

              <li className="flex items-center gap-3">
                <Mail className="size-4 text-primary" />                
            nairobimobilecleaners@gmail.com
              </li>

              <li className="flex items-center gap-3">
                <MapPin className="size-4 text-primary" />
                Nairobi, Kenya
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle className="size-4 text-primary" />
                WhatsApp Available 24/7
              </li>
            </ul>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/254718601976"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Chat on WhatsApp
              <MessageCircle className="size-4" />
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-14 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nairobi Homes Mobile Cleaners. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;