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
const { playStoreBtn, screen, clock, Cap, tutor, sittinggirl } = Svgs;

function HomePageMobileBanner() {
  return (
    <>
      <HomepageMobileBannerWrap>
        <HomePageMobileBannerTextSection>
          <HomePageMobileBannerMainTextBlock>
            <Span color="#FA8B0D">Easy And Faster Way To Sell And Buy Cars on Our Platform</Span>
          </HomePageMobileBannerMainTextBlock>
          <br />
          <HomePageMobileBannerSubTextBlock>
            <Span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vel at
            </Span>
            <Span>
              mauris non egestas. Non tempor dignissim lectus ultrices.
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
          <HomePageMobileBannerIconsSection>
            <HomePageBannerIconBlock>
              <div>
                <img src={tutor} alt="" />
              </div>
              <Span>50 Tutors</Span>
            </HomePageBannerIconBlock>
            <HomePageBannerIconBlock>
              <div>
                <img src={Cap} alt="" />
              </div>
              <Span>5000 Students</Span>
            </HomePageBannerIconBlock>
            <HomePageBannerIconBlock>
              <div>
                <img src={screen} alt="" />
              </div>
              <Span>2k Videos</Span>
            </HomePageBannerIconBlock>
            <HomePageBannerIconBlock>
              <div>
                <img src={clock} alt="" />
              </div>
              <Span>5k hrs</Span>
            </HomePageBannerIconBlock>
          </HomePageMobileBannerIconsSection>
        </HomePageMobileBannerTextSection>
      </HomepageMobileBannerWrap>
    </>
  );
}

export default HomePageMobileBanner;
