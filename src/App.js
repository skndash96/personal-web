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
    --blue: #2c74d0;
    --white: #ffffff;
    --black: #000000;
    
    --fs-xxl: 3.5rem;
    --fs-xl: 2.5rem;
    --fs-lg: 1.5rem;
    --fs-md: 1rem;
    --fs-sm: .75rem;
    
    width: 100%;
    overflow-x: hidden;
`
