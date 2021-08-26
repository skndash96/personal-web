import styled from "styled-components";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import { media } from "../utils/style";

export default function Header() {
    const [menuIsActive, setMenuIsActive] = useState(false);

    return (
        <Container>
            <div className="logo">
                <Image
                    priority={true}
                    src="/logo.svg"
                    alt="profilePic"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <div className="social">
                <FaGithub />
                <FaTwitter />
                <FaEnvelope />
            </div>

            <NavBar
                active={menuIsActive}
                onClick={() => setMenuIsActive(!menuIsActive)}
            >
                <MdKeyboardArrowUp />
                <MdKeyboardArrowDown />
            </NavBar>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.darkmaroon};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.white};
    padding: 0 1rem;
    z-index: 9999;
    & .logo {
        position: relative;
        display: grid;
        place-items: center;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 100%;
        background: ${({ theme }) => theme.orange};
        overflow: hidden;
        &:hover {
            transform: scale(105%) rotate(90deg);
        }
    }
    & .social {
        transform: scale(110%);
        ${media.verysmall`
            display: none;
        `}
        & > * {
            margin: 0 2rem 0 0.5rem;
            &:hover {
                color: ${({ theme }) => theme.pink};
                transform: scale(120%);
            }
        }
    }
`;

const NavBar = styled.div`
    z-index: 50;
    transform: translateY(1rem);
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.grey};
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2), -2px -2px 5px rgba(0, 0, 0, 0.2);
    padding: 0 0.6rem;
    border-radius: 100%;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.yellow};
    & svg:nth-child(1) {
        transform: ${(props) =>
            props.active ? "translateY(0.75rem)" : "translateY(0)"};
    }
    & svg:nth-child(2) {
        transform: ${(props) =>
            props.active ? "translateY(-0.75rem)" : "translateY(0)"};
    }
`;
