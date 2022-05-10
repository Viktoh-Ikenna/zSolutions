import { css } from "styled-components";

export const FontSizeFor = {
  NormalText: css`
    @media (min-width: 200px) {
      font-size: 10px;
    }

    @media (min-width: 320px) {
      font-size: 12px;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }

    @media (min-width: 1400px) {
      font-size: 16px;
    }

    @media (min-width: 1800px) {
      font-size: 18px;
    }

    @media (min-width: 2200px) {
      font-size: 24px;
    }
  `,
  HeaderText: css`
    @media (min-width: 200px) {
      font-size: 14px;
    }

    @media (min-width: 320px) {
      font-size: 22px;
      line-height: 36px;
    }

    @media (min-width: 768px) {
      font-size: 28px;
      line-height: 42px;
    }

    @media (min-width: 1024px) {
      font-size: 36px;
      line-height: 60px;
    }

    @media (min-width: 1400px) {
      font-size: 50px;
      line-height: 84px;
    }

    @media (min-width: 1800px) {
      font-size: 70px;
      line-height: 100px;
    }

    @media (min-width: 2200px) {
      font-size: 80px;
      line-height: 124px;
    }
  `,
};
