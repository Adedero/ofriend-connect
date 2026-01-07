"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type AriaCurrentValue = "page" | "step" | "location" | "date" | "time" | false;

type NextLinkProps = LinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    activeClass?: string;
    exactActiveClass?: string;
    inactiveClass?: string;
    hoverClass?: string;
    match?: (pathname: string, href: string) => boolean;
    disabled?: boolean;
    ariaCurrent?: AriaCurrentValue;
  };

export default function NextLink({
  href,
  children,
  className,
  activeClass,
  exactActiveClass,
  inactiveClass,
  hoverClass,
  match,
  disabled,
  ariaCurrent,
  ...props
}: NextLinkProps) {
  const pathname = usePathname();
  const hrefString = typeof href === "string" ? href : href.pathname || "";

  const isExact = pathname === hrefString;
  const isMatch = match
    ? match(pathname, hrefString)
    : hrefString !== "/" && pathname.startsWith(hrefString);

  const isActive = isExact || isMatch;

  const composedClassName = clsx(
    className,
    hoverClass,
    isExact && exactActiveClass,
    isActive && !isExact && activeClass,
    !isActive && inactiveClass,
    disabled && "pointer-events-none opacity-60",
  );

  if (disabled) {
    return (
      <span className={composedClassName} aria-disabled="true">
        {children}
      </span>
    );
  }

  const resolvedAriaCurrent = isActive
    ? (ariaCurrent ?? (isExact ? "page" : false))
    : undefined;

  return (
    <Link
      href={href}
      className={composedClassName}
      aria-current={resolvedAriaCurrent}
      {...props}
    >
      {children}
    </Link>
  );
}
