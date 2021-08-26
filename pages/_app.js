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
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Loading isLoading={isLoading} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      transition: all 0.15s ease;
      box-sizing: border-box;
  }
  ${media.medium`
      html {
          font-size: 5vmin;
      }
  `}
  ${media.large`
      html {
          font-size: 5vmin;
      }
  `}
`;
