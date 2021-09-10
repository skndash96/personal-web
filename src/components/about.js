import styled from 'styled-components'

export default function Hero() {
    return (
        <Container>
            <h1 className="about-title">
                About me
            </h1>
            
            <div className="about-pic">
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
    background: var(--blue);
    color: var(--white);
    position: relative;
    & > * {
        z-index: 9;
    }
    .about-title {
        font-family: "Work Sans";
    }
    .about-pic {
        width: 10rem;
        height: 10rem;
        background: rgba(0, 0, 0, .2);
        border-radius: 50%;
        overflow: hidden;
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
        color: var(--blue);
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
            border: 1px solid var(--blue);
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
        background: var(--blue);
        transform: skewY(-3deg) translateY(-30%);
    }
`
