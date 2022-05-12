import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "./../redux/store.dev";
import theme from "./../utils/constants/theme";
import GlobalStyles from "./../utils/constants/global-styles";
import "../utils/tailwind/styles.css";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { muiTheme } from "../utils/constants/muiTheme";


function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <GlobalStyles />
            <Head>
              <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,400;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,800;1,900&display=swap');
              </style>
            </Head>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  );
}

export default MyApp;
