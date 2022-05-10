import { SidebarServicesData, SidebarAccountData } from "./sidebar-items.data";
import {
  SidebarItemsBlock,
  SidebarServiceDataWrapper,
} from "./sidebar-items.styles";
import SidebarItem from "./../sidebar-item/sidebar-item.component";
import Hr from "./../hr/hr.component";

function SidebarItems() {
  return (
    <SidebarItemsBlock>
      <SidebarServiceDataWrapper>
        {SidebarServicesData.map((data) => {
          return <SidebarItem data={data} key={data.id} />;
        })}
      </SidebarServiceDataWrapper>
      <Hr />
      <SidebarServiceDataWrapper>
        {SidebarAccountData.map((data) => {
          return <SidebarItem data={data} key={data.id} />;
        })}
      </SidebarServiceDataWrapper>
      <Hr />
    </SidebarItemsBlock>
  );
}

export default SidebarItems;
