import styled from "styled-components"
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
import { useState } from 'react'

export default function Header() {
    const [menuIsActive, setMenuIsActive] = useState(false)
    
    return (
        <Container>
            <div className="logo">
                <img src="/pfp.jpeg" width={35} height={35} />
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
    )
}

const Container = styled.div`
    width: 100%;
    background: #4b4453;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    padding: 0 1rem;
    & .logo {
        display: grid;
        place-items: center;
        border-radius: 100%;
        overflow: hidden;
        &:hover {
            transform: scale(105%);
        }
    }
    & .social {
        & > * {
            margin: 0 2rem 0 0.5rem;
        }
    }
`

const NavBar = styled.div`
    z-index: 50;
    transform: translateY(1rem);
    display: flex;
    flex-direction: column;
    background: #352b38;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2), -2px -2px 5px rgba(0, 0, 0, 0.2);
    padding: 0 0.6rem;
    border-radius: 100%;
    font-size: 1.25rem;
    & svg:nth-child(1) {
        transform: ${props => props.active ? "translateY(0.75rem)" : "translateY(0)"};
    }
    & svg:nth-child(2) {
        transform: ${props => props.active ? "translateY(-0.75rem)" : "translateY(0)"};
    }
`