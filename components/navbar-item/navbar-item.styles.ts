import styled from "styled-components";

export const NavbarItemBlock = styled.a`
  font-size: ${({ theme }) => theme.fontSize.navItems};
  color: ${({ theme }) => theme.colors.link};
  cursor: pointer;
  margin-right: 40px;
`;
