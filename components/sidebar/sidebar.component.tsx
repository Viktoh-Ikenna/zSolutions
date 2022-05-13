import Avatar from "../avatar/avatar.component";
import Hr from "../hr/hr.component";
import SidebarItems from "../sidebar-items/sidebar-items.component";
import Svgs from "./../../assets/svgs";
import {
  AvatarWrapper,
  SidebarBlock,
  SidebarCloseIconWrap,
  SidebarIconBlock,
  AvatarTextBlock,
  SidebarAvatarWithCloseIconSection,
} from "./sidebar.styles";
const { closeIcon, avatar } = Svgs;

function Sidebar({ isShown, onPress }: any) {
  return (
    <SidebarBlock isShown={false}>
      <SidebarAvatarWithCloseIconSection>
        <SidebarCloseIconWrap>
          <SidebarIconBlock onClick={onPress}>
            <img src={closeIcon} alt="" />
          </SidebarIconBlock>
        </SidebarCloseIconWrap>
        <AvatarWrapper>
          <Avatar src={avatar} alt="avatar" />
          <AvatarTextBlock>
            <span>Aderibigbe Tobi</span>
            <small>Student</small>
          </AvatarTextBlock>
        </AvatarWrapper>
      </SidebarAvatarWithCloseIconSection>
      <Hr />
      <SidebarItems />
    </SidebarBlock>
  );
}

export default Sidebar;
