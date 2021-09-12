import styled from 'styled-components'
import { ReactComponent as Astronaut } from '../astronaut.svg'

export default function Hero() {
    return (
        <Container>
            <div className="hero-title">
                <h1> Hello! </h1>
                <h3> I am Dash Skndash. </h3>
            </div>
            
            <div className="hero-image">
                <Astronaut />
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(
        rgba(0, 0, 0, .5) 65%,
        rgba(0, 0, 0, .75)
    ), url(
        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72zuHNCQYujRbTKF_52OElLLofOwLtursqw&usqp=CAU
    );
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .hero-title {
        h1 {
            font-size: 3.5rem;
        }
        h3 {
            font-size: 1.5rem;
        }
    }
    .hero-image {
        width: 75vw;
        height: 75vw;
    }
`
