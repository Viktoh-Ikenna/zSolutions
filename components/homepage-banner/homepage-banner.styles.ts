import styled, { css } from "styled-components";
import mediaDevices from "./../../utils/constants/media-devices";

const HomePageBannerCSS = css`
  width: 100%;
  padding: 50px 0px;
  position: relative;
`;

export const HomepageDesktopBannerWrap = styled.div`
  display: none;
  justify-content: space-between;
  ${HomePageBannerCSS};

  ${mediaDevices.laptop`
     display: flex;
  `}
`;

export const HomepageMobileBannerWrap = styled.div`
  display: flex;
  flex-direction: column;

  ${HomePageBannerCSS};

  ${mediaDevices.laptop`
     display: none;
  `}
`;

export const HomePageBannerTextSection = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const HomePageMobileBannerTextSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HomePageBannerMainTextCSS = css`
  font-size: 55px;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  ${mediaDevices.desktop`
    font-size: 68px;
  `}

  ${mediaDevices.desktopLg`
    font-size: 80px;
  `}
`;

export const HomePageBannerMainTextBlock = styled.div`
  ${HomePageBannerMainTextCSS};
  font-size: 55px;

  ${mediaDevices.desktop`
    font-size: 68px;
  `}

  ${mediaDevices.desktopLg`
    font-size: 80px;
  `}
`;

export const HomePageMobileBannerMainTextBlock = styled.div`
  ${HomePageBannerMainTextCSS};
  font-size: 20px;
  width: 100%;

  align-items: center;
  text-align: center;

  ${mediaDevices.extrasmall`
     font-size: 32px;
  `}

  ${mediaDevices.phone`
     font-size: 40px;
  `}

   ${mediaDevices.tablet`
     font-size: 56px;
  `}
`;

export const HomePageBannerIllustrationSection = styled.div`
  width: 50%;
  left: 51%;
  top:50%;
  height: inherit;
  position: absolute;
  z-index:-10;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const HomePageMobileBannerIllustrationSection = styled.div`
  width: 100%;

  height: 240px;
  position: relative;

  img {
    position: relative;
    top: -20px;
    width: 100%;
    height: 100%;
  }

  ${mediaDevices.phone`
     height: 350px;
  `}
`;

const HomePageBannerSubTextBlockCSS = css`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text};
`;

export const HomePageBannerSubTextBlock = styled.div`
  font-size: ${({ theme }) => theme.fontSize.normalText};
  ${HomePageBannerSubTextBlockCSS};
`;

export const HomePageMobileBannerSubTextBlock = styled.div`
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  align-items: center;
  ${HomePageBannerSubTextBlockCSS};

  ${mediaDevices.tablet`
    font-size: ${({ theme }) => theme.fontSize.navItems};
  `}
`;

export const HomePageBannerBtnsSectionCSS = css`
  height: auto;
  display: flex;
`;

export const HomePageBannerBtnsSectionWrap = styled.div`
  width: 420px;
  ${HomePageBannerBtnsSectionCSS};
  justify-content: space-between;

  ${mediaDevices.desktop`
   width: 470px;
  `}
`;

export const HomePageMobileBannerBtnsSectionWrap = styled.div`
  ${HomePageBannerBtnsSectionCSS};
  width: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 400px) {
    flex-direction: row;
  }
`;

export const HomePageBannerIconsSection = styled.div`
  width: 400px;
  justify-content: space-between;
  height: auto;
  display: flex;

  ${mediaDevices.desktop`
      width: 450px;
  `}
`;

export const HomePageMobileBannerIconsSection = styled.div`
  width: 100%;
  justify-content: center;
  height: auto;
  display: flex;
  align-items: center;

  ${mediaDevices.desktop`
      width: 500px;
  `}
`;

export const HomePageBannerIconBlock = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 10px;

  div {
    width: 40px;
    height: 40px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  span {
    font-size: 12px;
    font-weight: bold;
  }

  ${mediaDevices.desktop`
      div {
        width: 50px;
        height: 50px;


    img {
      width: 100%;
      height: 100%;
    }
  }
  `}
`;
