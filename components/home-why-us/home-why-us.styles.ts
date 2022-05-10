import styled from "styled-components";
import mediaDevices from "./../../utils/constants/media-devices";

export const HomeWhyUsBlock = styled.div`
  width: 100%;
  justify-content: space-between;
  height: auto;
  flex-direction: column;

  ${mediaDevices.laptop`
   padding: 50px 0px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
  `}
`;

export const HomeWhyUsTextSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  text-align: center;

  ${mediaDevices.laptop`
     width: 50%;
     align-items: flex-start;
     text-align: left;
  `}
`;

export const HomeWhyUsIllustrationSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: inherit;

  ${mediaDevices.laptop`
     width: 50%;
  `}
`;

export const HomeWhyUsTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  width: 100%;
  font-size: 20px;

  ${mediaDevices.extrasmall`
     font-size: 32px;
  `}

  ${mediaDevices.phone`
     font-size: 40px;
  `}

   ${mediaDevices.tablet`
     font-size: 56px;
  `}

  ${mediaDevices.laptop`
     width: 100%;
  `}

  ${mediaDevices.desktop`
    font-size: 68px;
  `}

  ${mediaDevices.desktopLg`
    font-size: 80px;
  `}
`;

export const HomeWhyUsSmallTextBlock = styled.div`
  width: 100%;
  height: auto;
  font-size: 12px;

  ${mediaDevices.tablet`
    font-size: ${({ theme }) => theme.fontSize.navItems};
  `}

  ${mediaDevices.laptop`
    width: 60%;
    height: 80px;
   font-size: 14px;
  `}
`;

export const HomeWhyUsIllsBlock = styled.div`
  width: 70%;
  height: auto;
  margin: auto;

  img {
    width: 100%;
    height 100%;
  }

  ${mediaDevices.laptop`
   width: 100%;
  `}
`;
