import styled from "styled-components";

interface SProp {
  color?: any;
}

export const Span = styled.span<SProp>`
  font-size: inherit;
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.colors.text};
`;
