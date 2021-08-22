import { createGlobalStyle } from "styled-components";
import { media } from "../utils/style";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
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
          font-size: 2rem;
      }
  `}
`;
