import LayoutBlock from "./layout.styles";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import AddPostSidebar from "../user-addpost";
import { DisplayAddPost } from "../../redux/singles/singles.actions";

export const siteTitle = "iLearn Block... Crypto Education";

const Layout = ({ children }: any) => {
  const addpost = useSelector(state => state.SinglesReducers).addPost;
  const dispatch = useDispatch();

  const setDispayPost = (payload) => {
    dispatch(DisplayAddPost(payload))
  }
  console.log(addpost);
  return (
    <LayoutBlock>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {children}
      <AddPostSidebar addPropty={addpost} setAddPropty={setDispayPost} />
    </LayoutBlock>
  );
};
export default Layout;
