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
import LetsFind from "../components/lets-help";
import { SeeMoreContainer } from "../components/injectToLanding/inject.styles";
import { Button } from "@mui/material";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import PostDrawer from "../components/post-content";
import { useRouter } from "next/router";


function Home() {
  const [isShown, setSidebar] = useState(false);
  const [showPost, setShhowPOst] = useState(false);
const router = useRouter()
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
        <HomepageBanner />
        <LetsFind />
        <InjectToHome toggleShowAds={ToggleViewPost} />
        <SeeMoreContainer>
          <Button style={{ fontStyle: 'uppercase', marginBottom: 30 }} onClick={()=>router.push('/market')} variant='outlined'>
            see more
          </Button>
        </SeeMoreContainer>
        <PostDrawer showAdd={showPost} toggleShowAdd={ToggleViewPost} />
      </PageWrap>
      <Footer />
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async ({ res, req }) => {

  // console.log('context',req);
  // axios.get('http://localhost:3000/api/user')
  //   .then(res => {
  //     console.log(res)
  //   })
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default Home;
