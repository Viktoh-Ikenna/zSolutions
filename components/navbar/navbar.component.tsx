import { useState } from "react";
import { NavbarLogo } from "../logo/logo.component";
import {
  NavbarAccountItems,
  NavbarAccountLoggedInItem,
  NavbarLinksItems,
} from "../navbar-items/navbar-items.component";
import { NavbarBlock, MobileNavContentWrap } from "./navbar.styles";
import Svgs from "./../../assets/svgs";
import Hamburger from "../hamburger/hamburger.component";
import LoginModal from "../login";
import SignUp from "../signup";
import { useDispatch } from "react-redux";
import { DisplayAddPost } from "../../redux/singles/singles.actions";
const { Logo, hamburger } = Svgs;

function Navbar({ onPress }: any) {
  const [openLogin, setOpenLogin] = useState(false)
  const [openSignUp, setOpenSignUp] = useState(false)
  const dispatch = useDispatch()

  const setDispayPost = (payload) => {
    dispatch(DisplayAddPost(payload))
  }
  return (
    <NavbarBlock>
      <Hamburger src={hamburger} onPress={onPress} />
      <MobileNavContentWrap>
        <NavbarLogo src={Logo} />
      </MobileNavContentWrap>
      <SignUp open={openSignUp} setOpen={setOpenSignUp} />
      <NavbarLinksItems />
      <LoginModal open={openLogin} setOpen={setOpenLogin} />
      <NavbarAccountItems setOpenLogin={setOpenLogin} setOpenSignUp={setOpenSignUp} />
      <NavbarAccountLoggedInItem add={setDispayPost} />
    </NavbarBlock>
  );
}

export default Navbar;
