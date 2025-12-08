import React from "react";
import { twMerge } from "tailwind-merge";

export default function AvatarGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
