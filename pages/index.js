import Head from "next/head";
import Pencil from '../components/pencil'
import Header from '../components/header'
import styled from 'styled-components'
import { media } from '../utils/style'
import { useState, useEffect } from 'react'

export default function Main() {
    const [landscape, setLandscape] = useState(true)
    
    useEffect(() => {
        const handleResize = () => {
            if(window.innerHeight <= window.innerWidth) setLandscape(true)
            else setLandscape(false)
        }
        
        handleResize()
        
        window.addEventListener("resize", handleResize)
        
        return () => window.removeEventListener("resize", handleResize)
    }, [])
    
    return (
        <Container>
            <Head>
                <title> Dash Skndash </title>
                <meta
                    name="description"
                    content="Me a Full Stack developer"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <Header />
            
            <Home landscape={landscape}>
                <div>
                    <img
                        alt="Effect"
                        className="effect"
                        src={landscape ? "/effect_right.svg" : "/effect_left.svg"}
                    />
                </div>
                
                <div className="text">
                    <span> Make it simple, not simpler. </span>
                    <span> I&apos;m Dash Skndash. </span>
                </div>
                
                <div className="model">
                    <Pencil />
                </div>
            </Home>
            
            <About>
                <div className="title">
                    About
                </div>
            </About>
            
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    width: 100%;
`

const Home = styled.div`
    position: relative;
    width: 100%;
    min-height: 75vh;
    max-height: 85vh;
    background: #845ec2;
    padding: 2.5rem 0 0 2.5rem;
    ${media.landscape`
        padding: 1rem 0 0 25vw;
    `}
    & .effect {
        position: absolute;
        top: 0;
        ${props => props.landscape ? "right: 0;" : "left: 0;"}
        width: 25vmax;
        height: 25max;
    }
    & .model {
        width: 50vw;
        height: 75vh;
        transform: rotate(-15deg);
        position: absolute;
        left: -10%; 
        bottom: -25%;
        z-index: 50;
        ${media.landscape`
            bottom: -7.5%;
        `}
    }
    & .text {
        position: relative;
        z-index: 50;
        color: white;
        & span {
            display: block;
        }
        & span:nth-child(1) {
            font-weight: 700;
            font-size: 1.5rem;
            font-family: 'Work Sans'
        }
        & span:nth-child(2) {
            font-weight: 500;
            font-size: 1.1rem;
            font-family: 'Work Sans';
        }
    }
`

const About = styled.div`
    position: relative;
    width: 100%;
    height: 75vh;
    max-height: 85vh;
    background: white;
    overflowX: hidden;
    padding-left: 1rem;
    & .title {
        position: relative;
        z-index: 50;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background: white;
        transform: translateY(-50%) skewY(4deg);
    }
`