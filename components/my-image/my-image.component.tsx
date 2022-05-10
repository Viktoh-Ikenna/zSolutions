import { Image } from "./my-image.styles";

interface imageProp {
  src?: any;
  alt?: any;
}

function MyImage({ src, alt }: imageProp) {
  return <Image src={src} alt={alt} />;
}

export default MyImage;
