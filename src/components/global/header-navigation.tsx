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
import NextLink from "../custom/next-link";

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
                <NextLink
                  exactActiveClass="font-semibold text-electric-600 dark:text-electric"
                  href={link.href}
                >
                  {link.label}
                </NextLink>
              </NavigationMenuLink>
            )}

            {!link.href && link.children && (
              <>
                <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="gap-2 grid grid-cols-2 w-[400px]">
                    {link.children.map((child) => (
                      <NavigationMenuLink key={child.label} asChild>
                        <NextLink
                          href={child.href ?? "#"}
                          exactActiveClass="font-semibold text-electric-600 dark:text-electric"
                        >
                          <p>{child.label}</p>
                          {child.description && (
                            <p className="text-muted-foreground text-sm">
                              {child.description}
                            </p>
                          )}
                        </NextLink>
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
