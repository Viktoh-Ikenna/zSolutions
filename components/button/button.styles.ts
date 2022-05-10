import styled, { css } from "styled-components";
import { PerfectlyCentered } from "./../../utils/functions/perfectly-centered.function";
import { FontSizeFor } from "./../../utils/functions/device-font-size.function";
import mediaDevices from "./../../utils/constants/media-devices";

const buttonCSS = css`
  transition: 0.2s;
  ${PerfectlyCentered};
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
`;
interface buttonProp {
  bgcolor?: any;
}

export const NavbarLogInBtnBlock = styled.div<buttonProp>`
  ${buttonCSS};
  ${FontSizeFor.NormalText};
  width: 80px;
  height: 30px;
  border: 1px solid #fff;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${(props) => (props.bgcolor ? props.bgcolor : "#fff")};

  &:hover{
    border: 1px solid ${({ theme }) => theme.colors.primary}}};
  }                


   ${mediaDevices.laptop`
     width: 100px;
     justify-content: center;
     padding: 0px 10px;
     height: 35px;
  `}
`;

export const NavbarRegBtnBlock = styled.div`
  ${buttonCSS};
  ${FontSizeFor.NormalText};
  width: 100px;
   padding: 0px 10px;
   padding-bottom:12px;
  height: 35px;
  color: #fff;
  padding: 0px 10px;
  background: ${({ theme }) => theme.colors.primary}}};
  display: none;
  margin-left: 10px;
  display: none;
  border: 1px solid ${({ theme }) => theme.colors.primary}}};

  &:hover{
    filter: brightness(90%);
  }

   ${mediaDevices.laptop`
     display: flex;
  `}

`;

export const ActionButtonBlock = styled.div`
${buttonCSS};
  width: 140px;
  padding: 0px 10px;
  height: 46px;
  color: #fff;
  margin-top: 5px;
  padding: 0px 10px;
  border: 1px solid ${({ theme }) => theme.colors.text}}};
  background: ${({ theme }) => theme.colors.primary}}};
  font-size: 14px;
  position: relative;
  top: -9px;

  &:hover{
    filter: brightness(90%);
  }

  ${mediaDevices.laptop`
    width: 175px;
    height: 55px;
    font-size: 16px;
    top: 0px;
  `}

   ${mediaDevices.desktop`
    width: 190px;
    font-size: 18px;
    height: 62px;
    margin-top: 5px;
  `}
  
`;

export const StoreBtnBlock = styled.div`
  width: 160px;
  height: 65px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  ${mediaDevices.laptop`
    width: 200px;
    height: 80px;
  `}

  ${mediaDevices.desktop`
     width: 250px;
     height: 90px;
  `}
`;
