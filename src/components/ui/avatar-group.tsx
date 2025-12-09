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
        "flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className,
      )}
    >
      {children}
    </div>
  );
}
