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
        const rotate = [
            {},
            { transform: "rotate(-2deg)" },
            { transform: "rotate(2deg)" },
            { transform: "rotate(-2deg)" },
            { transform: "rotate(2deg)" },
            {}
        ]
        
        const rocks = document.querySelectorAll('.cls-12, .cls-14')
        const shadowRocks = document.querySelectorAll('.cls-13, .cls-9')
       const parts = document.querySelectorAll('.cls-1, .cls-3, .cls-4, .cls-6, .cls-7, .cls-8, .cls-10, .cls-11')
       
       for (let i = 0; i < shadowRocks.length; i++) {
            const el = shadowRocks[i]
           
            el.animate(rotate, {
                duration: 15000,
                iterations: Infinity,
                delay: Math.random() * 3 * 1000
            })
       }
       for (let i = 0; i < rocks.length; i++) {
           const el = rocks[i]
           
           el.animate(rotate, {
                duration: 15000,
                iterations: Infinity
            })
       }
       for (let i = 0; i < parts.length; i++) {
           const el = parts[i]
           
           el.animate(rotate.slice().reverse(), {
               duration: 12000,
               iterations: Infinity,
               delay: 768
           })
       }
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
    min-height: 25rem;
    height: 100vh;
    padding: 2.5rem 0;
    background-image: linear-gradient(
        rgba(0, 0, 0, .5) 35%,
        rgba(0, 0, 0)
    ), url(
        https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72zuHNCQYujRbTKF_52OElLLofOwLtursqw&usqp=CAU
    );
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .hero-title {
        h1 {
            font-size: var(--fs-xxl);
        }
        h3 {
            font-size: var(--fs-lg);
        }
    }
    .hero-image {
        width: 70vmin;
        height: 70vmin;
        z-index: 99;
    }
`
