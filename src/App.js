import styled from 'styled-components'
import {
    GlobalStyle
} from './utils/style'
import Hero from './components/hero'
import Builds from './components/builds'
import About from './components/about'

export default function App() {
    return (
        <Wrapper>
            <GlobalStyle />
            <main>
                <Hero />
                <Builds />
                <About />
            </main>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    --blue: #4083df;
    --white: #ffffff;
    --black: #000000;
    
    width: 100%;
    overflow-x: hidden;
`
