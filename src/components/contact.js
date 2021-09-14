import styled, {
    keyframes
} from 'styled-components'
import {
    FaGithub,
    FaFacebook,
    FaDribbble
} from 'react-icons/fa'
import {
    AiFillTwitterCircle
} from 'react-icons/ai'
import {
    SiMailDotRu
} from 'react-icons/si'
import {
    ReactComponent as Planet
} from '../planet.svg'

export default function Hero() {
    return (
        <Container>
            <h1 className="contact-title">
                Contact
            </h1>
            
            <Planet className="contact-planet" />
            
            <div className="contact-form">
                <form>
                    <input
                        type="text"
                        placeholder="whats your email?"
                    />
                    <input
                        type="text"
                        placeholder="whats in your mind?"
                    />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
            
            <div className="contact-links">
                <button> <FaGithub /> </button>
                <button> <FaFacebook /> </button>
                <button> <AiFillTwitterCircle /> </button>
                <button> <FaDribbble /> </button>
                <button> <SiMailDotRu /> </button>
            </div>
        </Container>
    );
}

const rotate = keyframes`
    to { transform: translateX(-25%) rotate(360deg) }
`

const Container = styled.div`
    width: 100%;
    padding: 2.5rem;
    background: var(--blue);
    color: var(--white);
    .contact-title {
        text-align: center;
    }
    .contact-planet {
        display: block;
        width: 15rem;
        height: unset;
        margin: 0 auto -5rem auto;
        transform: translateX(-25%);
        animation: ${rotate} 60s linear infinite;
        @media (min-width: 612px) {
            width: 16.5rem;
        }
    }
    .contact-form {
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            input, button {
                margin: .5rem 0;
                padding: .5rem 1rem;
            }
            input {
                backdrop-filter: blur(5px);
                border: 2px solid var(--white);
                border-radius: .5rem;
                transition: all .2s linear;
                color: var(--white);
                &::placeholder {
                    color: var(--white);
                    opacity: .75;
                }
            }
            button {
                background: var(--white);
                border-radius: .5rem;
                transform: scale(1);
            }
        }
    }
    .contact-links {
        display: flex;
        justify-content: space-evenly;
        max-width: 20rem;
        margin: 0 auto;
        button {
            margin-top: 2rem;
            height: 2.5rem;
            width: 2.5rem;
            font-size: var(--fs-lg);
            color: var(--white);
            transform: scale(1);
            border-radius: 50%;
            display: grid;
            place-items: center;
        }
    }
`
