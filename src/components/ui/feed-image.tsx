"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

type FeedImageProps = Omit<ImageProps, "src" | "alt"> & {
  src: string;
  fallbackSrc: string;
  alt: string;
};

export function FeedImage({ src, fallbackSrc, alt, ...rest }: FeedImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={currentSrc}
      alt={alt}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
