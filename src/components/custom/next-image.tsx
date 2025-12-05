"use client";

/* eslint-disable @next/next/no-img-element */
import React, {
  useState,
  useEffect,
  useRef,
  ImgHTMLAttributes,
  ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

interface NextImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  loader?: ReactNode; // Loader component while image is loading
  fallbackSrc?: string; // Fallback image if onError triggers
  blurSrc?: string; // Low-res blurred placeholder
  priority?: boolean; // Skip lazy loading
  srcSetWebp?: string; // Optional WebP srcSet
  imageClass?: string; // Additional classes for <img>
  blurClass?: string; // Additional classes for blur placeholder
  sizes?: string; // Sizes attribute for responsive images
  objectFitClass?: string; // Tailwind object-fit class
  objectPositionClass?: string; // Tailwind object-position class
  aspectRatio?: number; // Manual aspect ratio override
  autoDetectAspectRatio?: boolean; // Auto-detect aspect ratio from image dimensions
}

const NextImage: React.FC<NextImageProps> = ({
  src,
  alt,
  loader = null,
  fallbackSrc,
  blurSrc,
  priority = false,
  srcSet,
  srcSetWebp,
  sizes,
  onLoad,
  onError,
  className,
  imageClass,
  blurClass,
  objectFitClass = "object-cover",
  objectPositionClass = "object-center",
  aspectRatio,
  autoDetectAspectRatio = false,
  style,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [detectedAspectRatio, setDetectedAspectRatio] = useState<number | null>(
    null,
  );

  // Check for IntersectionObserver support upfront
  const supportsIntersectionObserver =
    typeof window !== "undefined" && "IntersectionObserver" in window;

  const [inView, setInView] = useState(
    priority || typeof window === "undefined" || !supportsIntersectionObserver,
  );

  const imgRef = useRef<HTMLImageElement | null>(null);
  const mountedRef = useRef(true);

  // Lazy load with IntersectionObserver
  useEffect(() => {
    if (priority || !imgRef.current || !supportsIntersectionObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && mountedRef.current) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "200px" },
    );

    const currentImg = imgRef.current;
    observer.observe(currentImg);

    return () => observer.disconnect();
  }, [priority, supportsIntersectionObserver]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!mountedRef.current) return;

    // Auto-detect aspect ratio if enabled
    if (autoDetectAspectRatio && !aspectRatio && imgRef.current) {
      const { naturalWidth, naturalHeight } = imgRef.current;
      if (naturalWidth && naturalHeight) {
        setDetectedAspectRatio(naturalWidth / naturalHeight);
      }
    }

    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (mountedRef.current) {
      setHasError(true);
      onError?.(e);
    }
  };

  const imageSrc = hasError && fallbackSrc ? fallbackSrc : src;
  const showBlur = blurSrc && !priority;
  const showLoader = loader && !priority;

  // Use manual aspectRatio prop, or detected ratio, or null for default
  const finalAspectRatio = aspectRatio ?? detectedAspectRatio;

  // Calculate inline style for custom aspect ratio
  const containerStyle = finalAspectRatio
    ? { ...style, aspectRatio: finalAspectRatio.toString() }
    : style;

  return (
    <div
      className={twMerge(
        "relative bg-gray-100 w-full overflow-hidden",
        !finalAspectRatio && "aspect-video", // Default aspect ratio only if not custom
        className,
      )}
      style={containerStyle}
      aria-busy={!isLoaded}
      role="img"
      aria-label={alt}
    >
      {/* Blur placeholder */}
      {showBlur && (
        <img
          src={blurSrc}
          alt=""
          aria-hidden="true"
          className={twMerge(
            "top-0 left-0 absolute blur-2xl w-full h-full scale-105 transition-opacity duration-300 will-change-opacity filter",
            isLoaded ? "opacity-0" : "opacity-100",
            blurClass,
            objectFitClass,
            objectPositionClass,
          )}
        />
      )}

      {/* Loader */}
      {!isLoaded && showLoader && (
        <div className="absolute inset-0 flex justify-center items-center">
          {loader}
        </div>
      )}

      {/* Main image */}
      {inView && (
        <picture>
          {srcSetWebp && <source srcSet={srcSetWebp} type="image/webp" />}
          {srcSet && <source srcSet={srcSet} />}
          <img
            ref={imgRef}
            src={imageSrc}
            alt={alt}
            sizes={sizes}
            onLoad={handleLoad}
            onError={handleError}
            decoding="async"
            loading={priority ? "eager" : "lazy"}
            className={twMerge(
              "w-full h-full transition-opacity duration-300 will-change-opacity",
              isLoaded ? "opacity-100" : "opacity-0",
              imageClass,
              objectFitClass,
              objectPositionClass,
            )}
            {...props}
          />
        </picture>
      )}
    </div>
  );
};

export default NextImage;
