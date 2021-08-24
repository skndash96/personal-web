import styled from 'styled-components'
import { FaGithub, FaFacebook, FaReddit, FaEnvelope } from "react-icons/fa";
import { AiFillTwitterCircle as FaTwitter } from "react-icons/ai";

export default function Footer() {
    return (
        <Container>
            <div className="text">
                <h2> S. Dash Skndash </h2>
                <h5> Full stack Developer </h5>
            </div>
            
            <div className="social-links">
                <FaFacebook />
                <FaTwitter />
                <FaGithub />
                <FaReddit />
                <FaEnvelope />
            </div>
        </Container>
    )
}

const Container = styled.div`
    background: #4b4453;
    width: 100%;
    min-height: 20vh;
    padding: 1rem;
    display: grid;
    place-items: center;
    font-family: "Work Sans";
    & .text {
        margin-bottom: 1rem;
        text-align: center;
    }
    & h2 {
        color: white;
    }
    & h5 {
        color: lightgray;
    }
    & .social-links {
        & svg {
            margin: 0 0.75rem;
            font-size: 1.75rem;
            color: #e57f7f;
            &:hover {
                color: white;
            }
        }
        & svg:nth-child(2) {
            transform: scale(120%);
        }
        & svg:last-child {
            border-radius: 100%;
            background-image: linear-gradient(
                to bottom,
                #e57f7f 15%,
                transparent 16%,
                transparent 70%,
                #e57f7f 71%
            );
            transform: scale(95%);
            &:hover {
                background-image: linear-gradient(
                    to bottom,
                    white 15%,
                    transparent 16%,
                    transparent 70%,
                    white 71%
                );
                color: white;
            }
        }
    }
`