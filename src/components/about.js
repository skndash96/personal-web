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
    padding: 4rem 0;
    background: var(--black);
    color: var(--white);
    position: relative;
    .about-title {
        font-family: "Work Sans";
    }
    .about-pic {
        width: 10rem;
        height: 10rem;
        background: rgba(255, 255, 255, .2);
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
        background: var(--blue);
        color: var(--white);
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
            border: 1px solid var(--white);
            border-radius: inherit;
        }
        &:hover {
            transform: scale(105%);
        }
    }
`
