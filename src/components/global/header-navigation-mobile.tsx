"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Logo from "../app/logo";

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

            <SheetTitle>Ofriend</SheetTitle>

            <SheetDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              harum nobis.
            </SheetDescription>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ) : null;
}
