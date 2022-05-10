import {
  NavbarLogInBtnBlock,
  NavbarRegBtnBlock,
  ActionButtonBlock,
  StoreBtnBlock,
} from "./button.styles";
import MyImage from "./../my-image/my-image.component";

interface buttonProp {
  text?: string;
  bgcolor?: string;
  src?: any;
  alt?: any;
}

function NavbarLogInBtn({ text, bgcolor, src, alt }: buttonProp) {
  return (
    <NavbarLogInBtnBlock bgcolor={bgcolor}>
      <MyImage src={src} alt={alt} />
      <div>{text}</div>
    </NavbarLogInBtnBlock>
  );
}

function NavbarRegBtn({ text }: any) {
  return <NavbarRegBtnBlock>{text}</NavbarRegBtnBlock>;
}

function ActionButton({ text }: any) {
  return <ActionButtonBlock>{text}</ActionButtonBlock>;
}

function StoreBtn({ src, alt = "" }: any) {
  return (
    <StoreBtnBlock>
      <img src={src} alt={alt} />
    </StoreBtnBlock>
  );
}

export { NavbarLogInBtn, NavbarRegBtn, StoreBtn, ActionButton };
