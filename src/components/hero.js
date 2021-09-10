import styled from 'styled-components'

export default function Hero() {
    return (
        <Container>
            <div className="hero-title">
                <h1> Hello! </h1>
                <h3> I am Dash Skndash. </h3>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(
        to bottom,
        transparent,
        rgba(0, 0, 0, 0.5)
    ), url(
        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyereVMWGNK7SSosml0ZzOFOw486WCEdqO9A&usqp=CAU
    );
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: var(--white);
    display: grid;
    justify-content: center;
    .hero-title {
        margin-top: 25vh;
        transform: translate(-10%, -7.5%);
        h1, h3 {
            font-family: "Work Sans";
        }
        h1 {
            font-size: 3rem;
        }
    }
`
