import { NavbarLogo } from "../logo/logo.component";
import {
  NavbarAccountItems,
  NavbarLinksItems,
} from "../navbar-items/navbar-items.component";
import { NavbarBlock, MobileNavContentWrap } from "./navbar.styles";
import Svgs from "./../../assets/svgs";
import Hamburger from "../hamburger/hamburger.component";
const { Logo, hamburger } = Svgs;

function Navbar({ onPress }: any) {
  return (
    <NavbarBlock>
      <Hamburger src={hamburger} onPress={onPress} />
      <MobileNavContentWrap>
        <NavbarLogo src={Logo} />
      </MobileNavContentWrap>
      <NavbarLinksItems />
      <NavbarAccountItems />
    </NavbarBlock>
  );
}

export default Navbar;
