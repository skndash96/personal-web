import Head from "next/head";
import Pencil from "../components/pencil";
import Header from "../components/header";
import styled from "styled-components";
import { media } from "../utils/style";
import { useState, useEffect } from "react";
import Image from "next/image";
import Form from "../components/form";
import { FaGithub, FaFacebook, FaReddit, FaEnvelope } from 'react-icons/fa'
import { AiFillTwitterCircle as FaTwitter } from 'react-icons/ai'

export default function Main() {
    const [landscape, setLandscape] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerHeight <= window.innerWidth) setLandscape(true);
            else setLandscape(false);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Container>
            <Head>
                <title> Dash Skndash </title>
                <meta name="description" content="Me a Full Stack developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <Home landscape={landscape}>
                <div>
                    <img
                        alt="Effect"
                        className="effect"
                        src={
                            landscape ? "/effect_right.svg" : "/effect_left.svg"
                        }
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
                <h1 className="title"> Me </h1>

                <div className="infoContainer">
                    <div className="pic">
                        <Image layout="fill" objectFit="cover" src="/pfp.png" />
                    </div>

                    <div className="info">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque blandit facilisis condimentum.
                        </p>
                    </div>
                </div>
                <hr />
            </About>

            <Contact>
                <h1> Let&apos;s Connect </h1>
                <div className="FormAndImgContainer">
                    <div className="socialContainer">
                        <Image layout="fill" src="/social.svg" />
                    </div>
                    
                    <Form />
                    
                    <div className="social-links">
                        <FaFacebook />
                        <FaTwitter />
                        <FaGithub />
                        <FaReddit />
                        <FaEnvelope />
                    </div>
                </div>
            </Contact>
        </Container>
    );
}

const Contact = styled.div`
    position: relative;
    width: 100%;
    min-height: 75vh;
    padding-bottom: 2rem;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        border-radius: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 20%;
        background: white;
        box-shadow: 0 -10px 5px 2px rgba(0, 0, 0, 0.025);
    }
    & h1 {
        position: relative;
        z-index: 50;
        font-family: Sans-Serif;
        text-align: center;
        color: #ff8066;
        -webkit-text-stroke: 1px black;
        text-decoration: underline wavy #ff8066aa 0.2rem;
        text-underline-offset: 5px;
        margin-bottom: 2rem;
    }
    & .FormAndImgContainer {
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        ${media.landscape`
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            justify-items: start;
        `}
    }
    & .socialContainer {
        position: relative;
        width: 100%;
        height: 100%;
    }
    & .social-links {
        display: flex;
        margin: auto;
        & svg {
            margin: 0 0.75rem;
            font-size: 1.75rem;
            color: #e57f7f;
        }
        & svg:nth-child(2) {
            transform: scale(120%);
        }
        & svg:last-child {
            border-radius: 100%;
            background-image: linear-gradient(to bottom, #e57f7f 15%, transparent 16%, transparent 70%, #e57f7f 71%);
            transform: scale(95%);
        }
    }
`;

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
        ${(props) => (props.landscape ? "right: 0;" : "left: 0;")}
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
            bottom: -10%;
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
            font-size: 1.75rem;
            font-family: "Work Sans";
        }
        & span:nth-child(2) {
            font-weight: 500;
            font-size: 1.25rem;
            font-family: "Work Sans";
        }
    }
`;

const About = styled.div`
    position: relative;
    width: 100%;
    min-height: 75vh;
    background: #fefedf;
    overflowx: hidden;
    padding-left: 1rem;
    padding-bottom: 7.5rem;
    padding-right: 1.5rem;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background: #fefedf;
        transform: translateY(-50%) skewY(4deg);
    }
    & .title {
        position: relative;
        z-index: 50;
        font-family: Sans-Serif;
        text-align: center;
        color: #ff8066;
        -webkit-text-stroke: 1px black;
        text-decoration: underline wavy #ff8066aa 0.2rem;
        text-underline-offset: 5px;
        margin-bottom: 2rem;
    }
    & .infoContainer {
        display: grid;
        & .pic {
            position: relative;
            width: 30vmax;
            height: 30vmax;
            background: #00c9a7;
            border-radius: 100%;
            overflow: hidden;
            margin: auto;
            margin-bottom: 1.5rem;
        }
        & .info {
            margin: auto;
            max-width: 75vw;
            text-align: center;
            & p {
                line-height: 1.75rem;
            }
        }
        ${media.landscape`
            grid-template-columns: 1fr 1fr;
            & .info {
                text-align: left;
            }
        `}
    }
    & hr {
        display: block;
        width: 80%;
        margin: auto;
        margin-top: 1rem;
        border-color: #ff8066;
    }
`;

const Container = styled.div`
    position: relative;
    width: 100%;
`;
