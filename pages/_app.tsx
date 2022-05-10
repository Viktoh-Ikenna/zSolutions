import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "./../redux/store.dev";
import theme from "./../utils/constants/theme";
import GlobalStyles from "./../utils/constants/global-styles";
import "../utils/tailwind/styles.css";

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyles />
          <Head>
            <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400&family=Poppins:wght@200&display=swap');
            </style>
          </Head>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
