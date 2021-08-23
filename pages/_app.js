import { createGlobalStyle } from "styled-components";
import { media } from "../utils/style";
import { useState, useEffect } from "react";
import Loading from "../components/loading";

function MyApp({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2500)
    }, []);

    return (
        <>
            <GlobalStyle />
            <Loading isLoading={isLoading} />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      transition: all 0.2s ease;
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
