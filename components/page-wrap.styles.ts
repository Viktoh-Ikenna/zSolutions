import styled from "styled-components";
import mediaDevices from "./../utils/constants/media-devices";

export const PageWrap = styled.div`
  width: 94%;
  margin: 0px auto;
  height: auto;

  ${mediaDevices.laptop`
    width: 80%;
  `}
`;
