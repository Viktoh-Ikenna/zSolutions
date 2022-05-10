import { NavbarItemBlock } from "./navbar-item.styles";
import MyLink from "./../my-link/my-link.component";

function NavbarItem({ details }: any) {
  const { route, name } = details;
  return (
    <MyLink href={route} activeClassName="active">
      <NavbarItemBlock>{name}</NavbarItemBlock>
    </MyLink>
  );
}

export default NavbarItem;
