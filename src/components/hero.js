import styled, {
    keyframes
} from 'styled-components'
import {
    ReactComponent as Astronaut
} from '../astronaut.svg'
import {
    useEffect
} from 'react'

export default function Hero() {
    useEffect(() => {
        const rockFrames = [
            {}, {
                transform: "rotate(-2deg)"
            }, {
                transform: "rotate(2deg)"
            }, {
                transform: "rotate(-2deg)"
            }, {
                transform: "rotate(2deg)"
            }, {}
        ]
        const menFrames= [
            {}, {
                transform: "rotate(2deg)"
            }, {
                transform: "rotate(-2deg)"
            }, {
                transform: "rotate(2deg)"
            }, {
                transform: "rotate(-2deg)"
            }, {}
        ]
        
        const options = {
            duration: 5000,
            iterations: Infinity
        }
        
        const rocks = document.querySelectorAll('.cls-12, .cls-13, .cls-14')
       const men = document.querySelectorAll('.cls-1, .cls-3, .cls-4, .cls-6, .cls-7, .cls-9, .cls-8, .cls-10, .cls-11')
        rocks.forEach(rock => rock.animate(rockFrames, options))
        men.forEach(part => part.animate(menFrames, options))
    }, [])
    
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
    padding: 3.5rem 0;
    min-height: 100vh;
    background-image: linear-gradient(
        rgba(0, 0, 0, .5) 35%,
        rgba(0, 0, 0)
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
        width: 70vmin;
        height: 70vmin;
        z-index: 99;
    }
`
