import styled from 'styled-components'
import {
    ReactComponent as Rocket
} from '../rocket.svg'
import {
    useEffect
} from 'react'

export default function Hero() {
    useEffect(() => {
        const paths = document.querySelector('.about-rocket').querySelectorAll('path')
        
        const rotate = [
            { transform: "rotate(-25deg)" },
            { transform: "rotate(-23deg)" },
            { transform: "rotate(-26deg)" },
            { transform: "rotate(-24deg)" },
            { transform: "rotate(-25deg)" }
        ]
        const options = {
            duration: 5000,
            iterations: Infinity
        }
        
        for (let i = 0; i < paths.length; i++) {
            paths[i].animate(
                (i === 8 || i === 9)
                ? rotate.slice().reverse()
                : rotate,
                options
            )
        }
    }, [])
    
    return (
        <Container>
            <h1 className="about-title">
                About me
            </h1>
            
            
            <div className="about-pic">
                <img src="" alt="ProfilePic" />
                <Rocket className="about-rocket" />
            </div>
            
            <p className="about-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue lacus, fermentum eget mi at, pretium posuere eros. Morbi in dui diam.
            </p>
            
            <button className="cta">
                Meet me
            </button>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    gap: 2rem;
    padding: 0 0 4rem 0;
    background: var(--black);
    color: var(--white);
    position: relative;
    & > * {
        z-index: 9;
    }
    .about-title {
        font-family: "Work Sans";
    }
    .about-pic {
        width: 12.5rem;
        height: 12.5rem;
        background: rgba(255, 255, 255, .2);
        border-radius: 50%;
        position: relative;
        img {
            height: inherit;
            width: inherit;
            position: absolute;
            border-radius: inherit;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        .about-rocket {
            color: #409331;
            width: inherit;
            height: inherit;
            position: absolute;
            top: -2.5rem;
            right: -4rem;
            transform-origin: right;
            transform: rotate(-25deg);
        }
    }
    .about-text {
        text-align: center;
        margin: 0 2rem;
        font-family: "Work Sans", sans-serif;
        max-width: 20rem;
    }
    .cta {
        padding: .5rem 1rem;
        background: var(--white);
        color: var(--black);
        border-radius: .5rem;
        font-weight: 700;
        transform: scale(1);
        &::after {
            content: "";
            position: absolute;
            top: 2px;
            left: 2px;
            right: 2px;
            bottom: 2px;
            border: 1px solid var(--black);
            border-radius: inherit;
        }
        &:hover {
            transform: scale(105%);
        }
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 7.5rem;
        background: var(--black);
        transform: skewY(-3deg) translateY(-30%);
    }
`
