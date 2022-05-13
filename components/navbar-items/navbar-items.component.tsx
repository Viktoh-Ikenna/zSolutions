import { NavbarLogInBtn, NavbarRegBtn } from "../button/button.component";
import {
  NavbarAccountItemsBlock,
  NavbarLinksItemsBlock,
} from "./navbar-items.styles";
import Svgs from "./../../assets/svgs";
import NavbarItem from "./../navbar-item/navbar-item.component";
import NavbarItemsData from "./navbar-items.data";
import { MobileNavContentWrap } from "../navbar/navbar.styles";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';

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

function NavbarAccountItems({ setOpenLogin, setOpenSignUp }) {
  return (
    <NavbarAccountItemsBlock>
      <NavbarLogInBtn text="Login" onClick={() => setOpenLogin(true)} />
      <NavbarRegBtn text="Register" onClick={() => setOpenSignUp(true)} />
    </NavbarAccountItemsBlock>
  );
}
function NavbarAccountLoggedInItem({ add }) {
  return (
    <NavbarAccountItemsBlock>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="Remy Sharp"
        src="/broken-image.jpg"
      />
      <NavbarRegBtn text="Sell" onClick={() => add(true)} />
    </NavbarAccountItemsBlock>
  );
}

export { NavbarLinksItems, NavbarAccountItems, NavbarAccountLoggedInItem };
