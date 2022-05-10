import { ImageContainer, Landsvg } from "./my-image.styles";

interface imageProp {
  src?: any;
  alt?: any;
  className?: any;
}

export function ImageContainers({ src, alt, className }: imageProp) {
  return <ImageContainer src={src} alt={alt} className={className} />;
}
export function LandingSvgs({ src, alt, className }: imageProp) {
  return <Landsvg src={src} alt={alt} className={className} />;
}
