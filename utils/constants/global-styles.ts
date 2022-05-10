import { createGlobalStyle } from "styled-components";
import { FontSizeFor } from "../functions/device-font-size.function";

const GlobalStyles = createGlobalStyle`
  *::before,
  *::after,
  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html,
  body {
      height: 100%;
      background: ;
      margin: 0;
      padding: 0;
     font-family: 'Montserrat', sans-serif;
  }

  a{
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
  }

  a.navbar-item{
    font-family: inherit;
    text-transform: capitalize;
    letter-spacing: 0px;
    color: ;
    cursor: pointer;
    width: auto;
    height: auto;
    padding: 0px;
    opacity: 1;
    letter-spacing: 0px;
    ${FontSizeFor.NormalText};
    font-family: 'Montserrat', sans-serif;

    &::after {
      content: "";
      display: block;
      width: 0px;
      height: ;
      background: ;
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export default GlobalStyles;
