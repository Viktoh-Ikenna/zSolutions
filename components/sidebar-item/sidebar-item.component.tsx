import { SidebarItemBlock } from "./sidebar-item.styles";
import MyLink from "./../my-link/my-link.component";

function SidebarItem({ data }: any) {
  const { name, route } = data;
  return (
    <MyLink href={route} activeClassName="active">
      <SidebarItemBlock>{name}</SidebarItemBlock>
    </MyLink>
  );
}
export default SidebarItem;
