import { NavbarLogInBtn, NavbarRegBtn } from "../button/button.component";
import {
  NavbarAccountItemsBlock,
  NavbarLinksItemsBlock,
} from "./navbar-items.styles";
import Svgs from "./../../assets/svgs";
import NavbarItem from "./../navbar-item/navbar-item.component";
import NavbarItemsData from "./navbar-items.data";
import { MobileNavContentWrap } from "../navbar/navbar.styles";

const { User } = Svgs;

function NavbarLinksItems() {
  return (
    <NavbarLinksItemsBlock>
      {NavbarItemsData.map((item) => {
        return <NavbarItem details={item} key={item.id} />;
      })}
    </NavbarLinksItemsBlock>
  );
}

function NavbarAccountItems() {
  return (
    <NavbarAccountItemsBlock>
      <NavbarRegBtn text="Register" />
    </NavbarAccountItemsBlock>
  );
}

export { NavbarLinksItems, NavbarAccountItems };
