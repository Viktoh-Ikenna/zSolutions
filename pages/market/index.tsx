import { useState } from "react";
import Layout from "../../components/layout/layout.component";
import { PageWrap } from "../../components/page-wrap.styles";
import Navbar from "./../../components/navbar/navbar.component";
import Sidebar from "./../../components/sidebar/sidebar.component";
import InjectToHome from "../../components/injectToLanding/injectToHome.component";
import Footer from "../../components/footer/footer.component";
import WithFilter from "../../components/with-filter";
import PostDrawer from "../../components/post-content";


function Home() {
  const [isShown, setSidebar] = useState(false);
  const [showPost, setShhowPOst] = useState(false);


  const ToggleSidebar = () => {
    setSidebar(!isShown);
  };
  const ToggleViewPost = () => {
    setShhowPOst(!showPost);
  };
  return (
    <Layout>
      <Sidebar onPress={ToggleSidebar} isShown={isShown} />
      <PageWrap>
        <Navbar onPress={ToggleSidebar} />
        <br />
        <br />
        <WithFilter toggleShowAds={ToggleViewPost} />
        <PostDrawer showAdd={showPost} toggleShowAdd={ToggleViewPost}  />
      </PageWrap>
      {/* <Carousel/> */}
      <Footer />
    </Layout>
  );
}

export default Home;
