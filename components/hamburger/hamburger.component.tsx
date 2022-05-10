import { HamburgerBlock, HamburgerContentWrap } from "./hamburger.styles";

function Hamburger({ src, alt, onPress }: any) {
  return (
    <HamburgerContentWrap>
      <HamburgerBlock onClick={onPress}>
        <img src={src} alt={alt} />
      </HamburgerBlock>
    </HamburgerContentWrap>
  );
}

export default Hamburger;
