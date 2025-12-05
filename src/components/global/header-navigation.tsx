"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { headerLinks } from "@/data/global-links";
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";

export default function HeaderNavigation() {
  const isMobile = useIsMobile();

  return isMobile ? null : (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList>
        {headerLinks.map((link) => (
          <NavigationMenuItem key={link.label}>
            {link.href && !link.children && (
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={link.href}>{link.label}</Link>
              </NavigationMenuLink>
            )}

            {!link.href && link.children && (
              <>
                <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="gap-2 grid grid-cols-2 w-[400px]">
                    {link.children.map((child) => (
                      <NavigationMenuLink key={child.label} asChild>
                        <Link href={child.href ?? "#"}>
                          <p>{child.label}</p>
                          {child.description && (
                            <p className="text-muted-foreground text-sm">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
