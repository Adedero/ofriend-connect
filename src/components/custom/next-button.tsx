"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

interface NextButtonProps
  extends Omit<React.ComponentProps<"button">, "onClick">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingAuto?: boolean;
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | Promise<unknown>;
}

export function NextButton({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  loadingAuto = false,
  disabled,
  onClick,
  children,
  ...props
}: NextButtonProps) {
  const [isAutoLoading, setIsAutoLoading] = React.useState(false);

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!onClick) return;

    const maybePromise = onClick(event);

    if (loadingAuto && maybePromise instanceof Promise) {
      try {
        setIsAutoLoading(true);
        await maybePromise;
      } finally {
        setIsAutoLoading(false);
      }
    }
  };

  const isButtonLoading = loading || isAutoLoading;
  const isButtonDisabled = disabled || isButtonLoading;

  return (
    <Button
      variant={variant}
      size={size}
      asChild={asChild}
      disabled={isButtonDisabled}
      onClick={handleClick}
      className={cn("relative gap-2", className)}
      {...props}
    >
      {isButtonLoading && (
        <Loader2 className="animate-spin size-4 shrink-0" aria-hidden="true" />
      )}
      {children}
    </Button>
  );
}
