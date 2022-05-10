import { useState } from "react";
import Layout from "../components/layout/layout.component";
import { PageWrap } from "../components/page-wrap.styles";
import Navbar from "./../components/navbar/navbar.component";
import Sidebar from "./../components/sidebar/sidebar.component";
import HomepageBanner from "./../components/homepage-banner/homepage-banner.component";
import HomeWhyUs from "./../components/home-why-us/home-why-us.component";
import InjectToHome from "../components/injectToLanding/injectToHome.component";
import Footer from "../components/footer/footer.component";
import Carousel from "../components/carousel/carousel.component";


function Home() {
  const [isShown, setSidebar] = useState(false);

  const ToggleSidebar = () => {
    setSidebar(!isShown);
  };

  return (
    <Layout>
      <Sidebar onPress={ToggleSidebar} isShown={isShown} />
      <PageWrap>
        <Navbar onPress={ToggleSidebar} />
        <HomepageBanner />
        <br />
        <br />
        <InjectToHome />
      </PageWrap>
      {/* <Carousel/> */}
      <Footer />
    </Layout>
  );
}

export default Home;
