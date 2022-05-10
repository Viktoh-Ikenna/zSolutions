import styled from "styled-components";

export const SidebarItemBlock = styled.a`
  font-size: ${({ theme }) => theme.fontSize.navItems};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  text-decoration: none;
  height: 45px;
  display: flex;
  align-items: center;
`;
