import Image, { type ImageProps } from "next/image";

type PlaceholderImageProps = Omit<ImageProps, "src"> & {
  src?: string;
  fallbackSrc: string;
};

export function PlaceholderImage({ src, fallbackSrc, alt, ...rest }: PlaceholderImageProps) {
  const resolvedSrc = src && src.trim().length > 0 ? src : fallbackSrc;

  return <Image src={resolvedSrc} alt={alt} {...rest} />;
}
