import styled from "styled-components";

export const BrandContainer = styled.div`
  width: 100%;
  height: 12px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight:800 !important;
  font-size:20px;
`;
export const FlexContainer = styled.div`
  width: 100%;
  font-weight:800 !important;
  font-size:50px;
`;
export const FavouriteIconContainer = styled.div`
  position:absolute;
  top:10px;
  left:10px;
`;