import { HomepageMobileBannerWrap } from "./homepage-banner.styles";
import {
  HomePageMobileBannerMainTextBlock,
  HomePageMobileBannerTextSection,
  HomePageMobileBannerSubTextBlock,
  HomePageMobileBannerBtnsSectionWrap,
  HomePageBannerIconBlock,
  HomePageMobileBannerIconsSection,
  HomePageMobileBannerIllustrationSection,
} from "./homepage-banner.styles";
import { Span } from "./../span/span.styles";
import { ActionButton, StoreBtn } from "../button/button.component";
import Svgs from "./../../assets/svgs";
import useTheme from "../../hooks/useTheme";
const { playStoreBtn, screen, clock, Cap, tutor, sittinggirl } = Svgs;

function HomePageMobileBanner() {
  const theme = useTheme()
  return (
    <>
      <HomepageMobileBannerWrap>
        <HomePageMobileBannerTextSection>
          <HomePageMobileBannerMainTextBlock>
            <Span color={theme.colors.text}>Easy And Faster Way To Sell And Buy Cars on Our Platform</Span>
          </HomePageMobileBannerMainTextBlock>
          <br />
          <HomePageMobileBannerSubTextBlock>
            <Span>
              please consider using out platform for any car dealing
            </Span>
            <Span>
              we are always active
            </Span>
          </HomePageMobileBannerSubTextBlock>
          {/* <br /> */}
          <HomePageMobileBannerIllustrationSection>
            <img src={sittinggirl} alt="" />
          </HomePageMobileBannerIllustrationSection>
          <HomePageMobileBannerBtnsSectionWrap>
            <ActionButton text="Register" />
            <StoreBtn src={playStoreBtn} />
          </HomePageMobileBannerBtnsSectionWrap>
          <br />
        </HomePageMobileBannerTextSection>
      </HomepageMobileBannerWrap>
    </>
  );
}

export default HomePageMobileBanner;
