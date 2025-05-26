import NextImage from "next/image";
import { StaticImageData } from "next/image";

type ImageProps = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
};
const Image = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
}: ImageProps) => {
  return (
    <div className={`relative h-full min-w-full ${className}`}>
      <NextImage
        className="z-0"
        fill={fill}
        src={src}
        alt={alt}
        width={width || undefined}
        height={height || undefined}
      />
    </div>
  );
};

export default Image;
