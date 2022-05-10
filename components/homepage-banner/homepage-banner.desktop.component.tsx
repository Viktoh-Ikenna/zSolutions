import {
  HomepageDesktopBannerWrap,
  HomePageBannerMainTextBlock,
  HomePageBannerIllustrationSection,
  HomePageBannerTextSection,
  HomePageBannerSubTextBlock,
  HomePageBannerBtnsSectionWrap,
  HomePageBannerIconBlock,
  HomePageBannerIconsSection,
} from "./homepage-banner.styles";
import { Span } from "./../span/span.styles";
import { ActionButton, StoreBtn } from "../button/button.component";
import Svgs from "./../../assets/svgs";
import banner from "../../assets/Images/banner3.jpeg";
import useTheme from "../../hooks/useTheme";
const { playStoreBtn, screen, clock, Cap, tutor, sittinggirl } = Svgs;

function HomepageDesktopBanner() {
  const theme = useTheme()
  return (
    <HomepageDesktopBannerWrap>
      <HomePageBannerTextSection>
        <HomePageBannerMainTextBlock>
          <Span color={theme.colors.text}>Easy And Faster Way To Sell And Buy Cars on Our Platform</Span>
        </HomePageBannerMainTextBlock>
        <br />
        <br />
        <HomePageBannerSubTextBlock>
          <Span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vel at
          </Span>
          <Span>mauris non egestas. Non tempor dignissim lectus ultrices.</Span>
        </HomePageBannerSubTextBlock>
        <br />
        <br />
        <HomePageBannerBtnsSectionWrap>
          <ActionButton text="Register" />
          <StoreBtn src={playStoreBtn} />
        </HomePageBannerBtnsSectionWrap>
        <br />
        <br />
      
      </HomePageBannerTextSection>
      <HomePageBannerIllustrationSection>
        <img src={banner} alt="" />
      </HomePageBannerIllustrationSection>
    </HomepageDesktopBannerWrap>
  );
}

export default HomepageDesktopBanner;
