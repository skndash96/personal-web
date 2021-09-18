import styled from 'styled-components'
import {
    FaRegCompass,
    FaCompass
} from 'react-icons/fa'
import {
    useState
} from 'react'

export default function Hero() {
    const [menuIsActive, setMenuIsActive] = useState(false)
    
    const handleClick = (event) => {
        event.stopPropagation()
        event.preventDefault()
        
        setMenuIsActive(state => !state)
    }
    const handleMenuClick = (event) => {
        event.stopPropagation()
        event.preventDefault()
    }
    const handleButtonClick = (event) => {
        event.stopPropagation()
        event.preventDefault()
        
        setMenuIsActive(state => !state)
    }
    
    return (
        <Container onClick={menuIsActive && handleClick}>
            <button onClick={handleButtonClick}>
                <FaCompass className={menuIsActive && 'active'} />
                <FaRegCompass className={!menuIsActive && 'active'} />
            </button>
            
            <div onClick={handleMenuClick} className={`menu ${menuIsActive && "active"}`}>
                <ul>
                    <li> About </li>
                    <li> Works </li>
                    <li> Contact </li>
                    <li> Social </li>
                </ul>
            </div>}
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    & button {
        font-size: 1.5rem;
        height: 3rem;
        width: 3rem;
        padding: 1.5rem;
        border-radius: 0 0 0 100%;
        background: var(--black);
        color: var(--white);
        position: absolute;
        top: 0;
        right: 0;
        overflow: hidden;
        &::before {
            background: rgba(255, 255, 255, .25);
        }
        svg {
            transition: all .2s linear;
            &:first-child {
                transform: translate(-25%, -75%) scale(0);
                &.active {
                    transform: translate(-25%, -75%);
                }
            }
            &:last-child {
                transform: translate(-25%, -200%) scale(0);
                &.active {
                    transform: translate(-25%, -200%);
                }
            }
        }
    }
    .menu {
        color: var(--white);
        font-family: "Work Sans";
        padding: 1rem;
        border-radius: .5rem;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, .2);
        border: 2px solid rgba(255, 255, 255, .6);
        background: rgba(0, 0, 0, .75);
        min-width: 10rem;
        position: absolute;
        top: 0;
        right: 0;
        transition: all .2s linear;
        transform-origin: top right;
        transform: scale(0) translate(-1rem, 1rem);
        &.active {
            transform: scale(1) translate(-1rem, 4rem);
        }
        ul {
            li {
                text-align: center;
                font-size: 1.25rem;
                font-weight: 800;
                margin: .75rem 0;
            }
        }
    }
`
