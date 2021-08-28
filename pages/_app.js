import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme, media } from "../utils/style";
import { useState, useEffect } from "react";
import Loading from "../components/loading";

function MyApp({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2500);
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
            </Head>

            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Loading isLoading={isLoading} />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  svg {
      transition: all 0.15s ease;
  }
  html {
      font-size: calc(0.5rem + 2.5vmin);
  }
`;
