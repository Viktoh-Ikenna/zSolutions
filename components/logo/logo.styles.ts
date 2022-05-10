import styled from "styled-components";
import mediaDevices from "./../../utils/constants/media-devices";

export const LogoBlock = styled.div`
  width: 120px;
  height: 30px;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  ${mediaDevices.laptop`
     width: 180px;
     height: 34px;
     margin: 0px;
  `}
`;
