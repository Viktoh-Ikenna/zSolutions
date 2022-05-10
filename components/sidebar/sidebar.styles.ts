import styled from "styled-components";
import mediaDevices from "./../../utils/constants/media-devices";
import { PerfectlyCentered } from "./../../utils/functions/perfectly-centered.function";

interface sProp {
  isShown?: any;
}

export const SidebarBlock = styled.div<sProp>`
  width: ${(props) => (props.isShown ? "90%" : "0%")};
  height: 100%;
  overflow-y: hidden;
  position: fixed;
  display: flex;
  z-index: 2;
  background: #fff;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;

  ${mediaDevices.phone`
    width: ${(props) => (props.isShown ? "80%" : "0%")};
  `}

  ${mediaDevices.tablet`
    width: ${(props) => (props.isShown ? "60%" : "0%")};
  `}

  ${mediaDevices.laptop`
    display: none;
  `}
`;

export const SidebarCloseIconWrap = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 35px;
`;

export const SidebarIconBlock = styled.div`
  width: 18px;
  height: 18px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const AvatarWrapper = styled.div`
  width: 100%;
  ${PerfectlyCentered};
  height: 60px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const AvatarTextBlock = styled.div`
  margin: 0px auto;
  height: auto;
  font-size: ${({ theme }) => theme.fontSize.normalText};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  font-weight: bold;

  small {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.small};
  }
`;

export const SidebarAvatarWithCloseIconSection = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 146px;
`;
