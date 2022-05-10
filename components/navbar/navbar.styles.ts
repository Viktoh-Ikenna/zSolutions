import styled from "styled-components";
import mediaDevices from "./../../utils/constants/media-devices";

export const NavbarBlock = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MobileNavContentWrap = styled.div`
  width: 33%;
  display: flex;
  height: auto;

  ${mediaDevices.laptop`
    width: auto;
  `}
`;
