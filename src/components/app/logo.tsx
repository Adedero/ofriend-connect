import React from "react";
import { twMerge } from "tailwind-merge";

type LogoProps = {
  width?: number | string;
  height?: number | string;
  circleColor?: string;
  circleClass?: string;
  shapeColor?: string;
  shapeClass?: string;
  className?: string;
};

const ORIGINAL_WIDTH = 212 / 8;
const ORIGINAL_HEIGHT = 207 / 8;

export default function Logo({
  width,
  height,
  circleColor = "fill-electric",
  circleClass,
  shapeColor = "fill-midnight dark:fill-white",
  shapeClass,
  className,
}: LogoProps) {
  let calculatedWidth = width;
  let calculatedHeight = height;

  // Maintain aspect ratio if only one dimension is provided
  if (width && !height) {
    const ratio = ORIGINAL_HEIGHT / ORIGINAL_WIDTH;
    calculatedHeight = typeof width === "number" ? width * ratio : undefined;
  } else if (height && !width) {
    const ratio = ORIGINAL_WIDTH / ORIGINAL_HEIGHT;
    calculatedWidth = typeof height === "number" ? height * ratio : undefined;
  }

  return (
    <svg
      width={calculatedWidth ?? ORIGINAL_WIDTH}
      height={calculatedHeight ?? ORIGINAL_HEIGHT}
      viewBox="0 0 212 207"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M185.854 90.8525C196.87 89.1606 207.381 96.7727 206.906 107.908C206.208 124.28 201.627 140.354 193.417 154.757C181.853 175.043 163.768 190.823 142.102 199.532C120.436 208.241 96.462 209.368 74.0747 202.729C51.6873 196.09 32.2028 182.076 18.787 162.964C5.3712 143.852 -1.1874 120.764 0.176893 97.4531C1.54118 74.1421 10.7482 51.9774 26.3019 34.5604C41.8555 17.1435 62.8418 5.498 85.8508 1.51608C102.187 -1.31101 118.861 -0.157102 134.495 4.7501C145.129 8.08773 148.716 20.5599 143.382 30.3457C138.047 40.1314 125.739 43.3657 114.772 41.3759C107.538 40.0634 100.08 40.015 92.7334 41.2863C78.6972 43.7154 65.8948 50.8196 56.4065 61.4445C46.9182 72.0695 41.3016 85.5907 40.4694 99.8112C39.6371 114.032 43.6381 128.116 51.8222 139.775C60.0063 151.434 71.8925 159.983 85.5496 164.033C99.2066 168.083 113.832 167.396 127.049 162.083C140.266 156.77 151.298 147.144 158.352 134.768C162.045 128.291 164.534 121.26 165.758 114.011C167.613 103.021 174.838 92.5444 185.854 90.8525Z"
        className={twMerge(shapeColor, shapeClass)}
      />
      <circle
        cx="185.5"
        cy="45.5"
        r="26.5"
        className={twMerge(circleColor, circleClass)}
      />
    </svg>
  );
}
