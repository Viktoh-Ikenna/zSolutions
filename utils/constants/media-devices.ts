import { css } from "styled-components";

const mediaDevices = {
  extrasmall: (...args: any) => css`
    @media (min-width: 320px) {
      ${css(args)};
    }
  `,
  phone: (...args: any) => css`
    @media (min-width: 568px) {
      ${css(args)};
    }
  `,
  tablet: (...args: any) => css`
    @media (min-width: 768px) {
      ${css(args)};
    }
  `,
  laptop: (...args: any) => css`
    @media (min-width: 1020px) {
      ${css(args)};
    }
  `,
  desktop: (...args: any) => css`
    @media (min-width: 1200px) {
      ${css(args)};
    }
  `,
  desktopLg: (...args: any) => css`
    @media (min-width: 1400px) {
      ${css(args)};
    }
  `,
};
export default mediaDevices;
