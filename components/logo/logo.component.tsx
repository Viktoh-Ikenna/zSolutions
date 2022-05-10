import { LogoBlock } from "./logo.styles";

function NavbarLogo({ src, alt = "logo" }: any) {
  return (
    <LogoBlock>
      <img src={src} alt={alt} />
    </LogoBlock>
  );
}

export { NavbarLogo };
