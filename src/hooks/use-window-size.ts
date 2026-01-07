import { useState, useEffect, useCallback, useMemo } from "react";

export type BreakpointKey = "sm" | "md" | "lg" | "xl" | "2xl";

export interface UseWindowSizeOptions {
  breakpoints?: Partial<Breakpoints>;
}

export interface Breakpoints {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  "2xl": number;
}

export interface WindowSize {
  width: number;
  height: number;
  breakpoint: BreakpointKey;
  isTouchDevice: boolean;
  orientation: "portrait" | "landscape";
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXLarge: boolean;
  is2xLarge: boolean;
}

const defaultBreakpoints: Breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useWindowSize(options: UseWindowSizeOptions = {}): WindowSize {
  const breakPointsOption = options.breakpoints;

  const breakpoints = useMemo(
    () => ({ ...defaultBreakpoints, ...breakPointsOption }),
    [breakPointsOption],
  );

  const getSize = useCallback((): WindowSize => {
    if (typeof window === "undefined") {
      return {
        width: 0,
        height: 0,
        breakpoint: "sm",
        isTouchDevice: false,
        orientation: "portrait",
        isSmall: true,
        isMedium: false,
        isLarge: false,
        isXLarge: false,
        is2xLarge: false,
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const orientation = width > height ? "landscape" : "portrait";

    let breakpoint: BreakpointKey = "sm";
    if (width >= breakpoints["2xl"]) breakpoint = "2xl";
    else if (width >= breakpoints.xl) breakpoint = "xl";
    else if (width >= breakpoints.lg) breakpoint = "lg";
    else if (width >= breakpoints.md) breakpoint = "md";
    else breakpoint = "sm";

    return {
      width,
      height,
      breakpoint,
      isTouchDevice,
      orientation,
      isSmall: width < breakpoints.md,
      isMedium: width >= breakpoints.md && width < breakpoints.lg,
      isLarge: width >= breakpoints.lg && width < breakpoints.xl,
      isXLarge: width >= breakpoints.xl && width < breakpoints["2xl"],
      is2xLarge: width >= breakpoints["2xl"],
    };
  }, [breakpoints]);

  const [size, setSize] = useState<WindowSize>(getSize);

  useEffect(() => {
    const handleResize = () => setSize(getSize());

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, [getSize]);

  return size;
}
