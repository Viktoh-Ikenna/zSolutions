import { ActionButton } from "../button/button.component";
import { Span } from "../span/span.styles";
import {
  HomeWhyUsBlock,
  HomeWhyUsTextSection,
  HomeWhyUsIllustrationSection,
  HomeWhyUsTextBlock,
  HomeWhyUsSmallTextBlock,
  HomeWhyUsIllsBlock,
} from "./home-why-us.styles";
import Svgs from "./../../assets/svgs";
const { whyus } = Svgs;

function HomeWhyUs() {
  return (
    <HomeWhyUsBlock>
      <HomeWhyUsTextSection>
        <HomeWhyUsTextBlock>
          <Span color="#FA8B0D">Why</Span>
          <Span color="#0D1930">iLearnBlock?</Span>
        </HomeWhyUsTextBlock>
        <br />
        <HomeWhyUsSmallTextBlock>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
          elementum hac volutpat a eget in.
        </HomeWhyUsSmallTextBlock>
        <br />
        <ActionButton text="Register" />
      </HomeWhyUsTextSection>
      <br />
      <br />
      <br />
      <HomeWhyUsIllustrationSection>
        <HomeWhyUsIllsBlock>
          <img src={whyus} alt="" />
        </HomeWhyUsIllsBlock>
      </HomeWhyUsIllustrationSection>
    </HomeWhyUsBlock>
  );
}

export default HomeWhyUs;
