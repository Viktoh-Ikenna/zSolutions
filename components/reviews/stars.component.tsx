import { ReviewerImg, Stars } from "./stars";

interface starProp {
  src?: any;
  alt?: any;
}

interface reviewProps {
  src?: any;
  alt?: any;
  className?: any;
}
export function StarIcon({ src, alt }: starProp) {
  return <Stars src={src} alt={alt} />;
}
export function ReviewersImg({ src, alt, className }: reviewProps) {
  return <ReviewerImg src={src} alt={alt} className={className} />;
}
