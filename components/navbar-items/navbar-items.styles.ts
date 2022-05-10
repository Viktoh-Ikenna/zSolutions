import styled, { css } from "styled-components";
import mediaDevices from "./../../utils/constants/media-devices";

const NavItemsCSS = css`
  align-items: center;
  height: auto;

  @media (min-width: 333px) {
    margin-left: 20px;
  }
`;

export const NavbarLinksItemsBlock = styled.div`
  ${NavItemsCSS};
  width: auto;
  display: none;

  .active {
    border-bottom: ${({ theme }) => theme.colors.primary};
  }

  ${mediaDevices.laptop`
     display: flex;
  `}
`;

export const NavbarAccountItemsBlock = styled.div`
  ${NavItemsCSS};
  display: flex;
`;
