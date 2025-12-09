"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "../ui/button";
import { ChevronDown, MenuIcon } from "lucide-react";
import Link from "next/link";
import Logo from "../app/logo";
import { headerLinks } from "@/data/global-links";
import NextLink from "../custom/next-link";

export default function HeaderNavigationMobile() {
  const isMobile = useIsMobile();

  return isMobile ? (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <div className="flex gap-x-2">
            <Link href="/">
              <Logo />
            </Link>

            <div>
              <SheetTitle>Ofriend</SheetTitle>

              <SheetDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <div className="flex-1 gap-6 grid auto-rows-min px-4">
          <div className="gap-2 grid">
            {headerLinks.map((link) =>
              link.children ? (
                <Collapsible key={link.label}>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="justify-between w-full">
                      {link.label} <ChevronDown />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className="gap-2 grid ml-5">
                      {link.children.map((child) => (
                        <SheetClose asChild key={child.label}>
                          <Button
                            asChild
                            variant="ghost"
                            className="justify-start"
                          >
                            <NextLink
                              href={child.href ?? "#"}
                              exactActiveClass="font-semibold text-electric-600 dark:text-electric"
                            >
                              {child.label}
                            </NextLink>
                          </Button>
                        </SheetClose>
                      ))}
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              ) : (
                <SheetClose asChild key={link.label}>
                  <Button asChild variant="ghost" className="justify-start">
                    <NextLink
                      href={link.href ?? "#"}
                      exactActiveClass="font-semibold text-electric-600 dark:text-electric"
                    >
                      {link.label}
                    </NextLink>
                  </Button>
                </SheetClose>
              ),
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  ) : null;
}
