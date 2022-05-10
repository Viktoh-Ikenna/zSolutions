import styled from "styled-components";
import { PerfectlyCentered } from "./../../utils/functions/perfectly-centered.function";
import mediaDevices from "./../../utils/constants/media-devices";

export const HamburgerBlock = styled.div`
  display: flex;
  ${PerfectlyCentered};
  width: 30px;
  height: 30px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  ${mediaDevices.laptop`
     display: none;
  `}
`;

export const HamburgerContentWrap = styled.div`
  width: 33%;
  display: flex;
  height: auto;
  display: flex;

  ${mediaDevices.laptop`
    width: auto;
     display: none;
  `}
`;
