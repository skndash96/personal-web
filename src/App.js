import styled from 'styled-components'
import {
    GlobalStyle
} from './utils/style'
import Hero from './components/hero'
import Builds from './components/builds'
import About from './components/about'
import Contact from './components/contact'

export default function App() {
    return (
        <Wrapper>
            <GlobalStyle />
            <main>
                <Hero />
                <About />
                <Builds />
                <Contact />
            </main>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    --contrast: #2128a6;
    --blue: #3498de;
    --white: #ffffff;
    --black: #000000;
    
    width: 100%;
    overflow-x: hidden;
`
