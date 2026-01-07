import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface SectionTagProps {
  label?: string;
  inverted?: boolean;
  labelClass?: string;
  className?: string;
  children?: ReactNode;
}

export default function SectionTag(props: SectionTagProps) {
  const rootClass = props.inverted ? "bg-background" : "bg-muted";
  return (
    <div
      className={twMerge(
        props.className,
        rootClass,
        "w-fit flex items-center gap-x-1 rounded-full px-4 py-1",
      )}
    >
      <div className="bg-electric-500 rounded-full size-2 bg shrink-0"></div>
      <p className={twMerge(props.labelClass, "text-sm font-medium")}>
        {props.children ?? props.label}
      </p>
    </div>
  );
}
