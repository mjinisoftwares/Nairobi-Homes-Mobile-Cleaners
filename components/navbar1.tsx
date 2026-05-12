"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Book,
  Menu,
  Sunset,
  Trees,
  Zap,
} from "lucide-react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar1 = ({
  className,
  logo = {
    url: "/",
    src: "/logo.webp",
    alt: "Logo",
    title: "Brand",
  },
  menu = [
    { title: "Home", url: "/" },

        {
      title: "About",
      url: "/about",
    },  

    {
      title: "Services",
      url: "/services",
     
    },

    {
      title: "Projects",
      url: "/projects",
    },

   
  ],
}: Navbar1Props) => {
  return (
   <header
  className={cn(
    "sticky top-0 z-50 w-full bg-secondary/10 backdrop-blur",
    className
  )}
>
  <div className="container flex h-24 items-center">

    {/* LEFT - LOGO */}
    <div className="flex flex-1 items-center">
      <Link href={logo.url} className="flex items-center">
        <Image
          src={logo.src}
          width={250}
          height={120}
          priority
          className="h-auto w-auto max-h-20 object-contain"
          alt={logo.alt}
        />
      </Link>
    </div>

    {/* CENTER - NAV LINKS */}
    <div className="hidden flex-1 justify-center lg:flex">
      <NavigationMenu>
        <NavigationMenuList className="flex items-center gap-2">
          {menu.map((item) => renderDesktopMenu(item))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>

    {/* RIGHT - BUTTONS */}
    <div className="hidden flex-1 justify-end items-center gap-3 lg:flex">
      

      <Button
        asChild
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Link href="/contact">Free Quote</Link>
      </Button>
    </div>

    {/* MOBILE */}
    <div className="lg:hidden ml-auto">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="right" className="p-4">
          <SheetHeader className="border-b pb-4">
            <SheetTitle>
              <Link href={logo.url}>
                <Image
                  src={logo.src}
                  width={220}
                  height={80}
                  className="h-auto w-auto max-h-16 object-contain"
                  alt={logo.alt}
                />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <div className="mt-6 flex flex-col gap-6">
            <Accordion type="single" collapsible>
              {menu.map((item) => renderMobileMenu(item))}
            </Accordion>

            <div className="flex flex-col gap-3">
             
              <Button asChild className="bg-primary">
                <Link href="/contact">Free Quote</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>

  </div>
</header>
  );
};

/* -------------------------------- */
/* DESKTOP MENU */
/* -------------------------------- */

const renderDesktopMenu = (item: MenuItem) => {
  if (item.items?.length) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="bg-transparent">
          {item.title}
        </NavigationMenuTrigger>

        <NavigationMenuContent>
          <div className="grid w-[420px] gap-2 p-3">
            {item.items.map((subItem) => (
              <NavigationMenuLink asChild key={subItem.title}>
                <SubMenuLink item={subItem} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink asChild>
        <Link
          href={item.url}
          className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
            "hover:bg-secondary hover:text-secondary-foreground",
            "focus:bg-secondary focus:text-secondary-foreground"
          )}
        >
          {item.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

/* -------------------------------- */
/* MOBILE MENU */
/* -------------------------------- */

const renderMobileMenu = (item: MenuItem) => {
  if (item.items?.length) {
    return (
      <AccordionItem
        key={item.title}
        value={item.title}
        className="border-b"
      >
        <AccordionTrigger className="text-base font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>

        <AccordionContent>
          <div className="mt-2 flex flex-col gap-2">
            {item.items.map((subItem) => (
              <SubMenuLink key={subItem.title} item={subItem} />
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <div key={item.title} className="py-2">
      <Link
        href={item.url}
        className="text-base font-semibold transition-colors hover:text-primary"
      >
        {item.title}
      </Link>
    </div>
  );
};

/* -------------------------------- */
/* SUB MENU LINK */
/* -------------------------------- */

const SubMenuLink = ({
  item,
}: {
  item: MenuItem;
}) => {
  return (
    <Link
      href={item.url}
      className={cn(
        "flex gap-4 rounded-xl p-3 transition-colors",
        "hover:bg-secondary/20"
      )}
    >
      <div className="mt-0.5 text-primary">
        {item.icon}
      </div>

      <div className="space-y-1">
        <div className="text-sm font-semibold leading-none">
          {item.title}
        </div>

        {item.description && (
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </Link>
  );
};

export { Navbar1 };