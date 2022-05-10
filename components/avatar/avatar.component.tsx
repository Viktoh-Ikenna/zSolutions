import { AvatarBlock } from "./avatar.styles";
import MyImage from "./../my-image/my-image.component";

function Avatar({ src }: any) {
  return (
    <AvatarBlock>
      <MyImage src={src} alt="" />
    </AvatarBlock>
  );
}

export default Avatar;
