import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Work Sans";
    }
    
    html {
        font-size: calc(.5rem + 0.025 * 100vmin);
    }
    
    ul, ol {
        list-style: none;
    }
    
    button, input {
        background: none;
        border: none;
        outline: none;
        font-size: 1rem;
    }
    
    button {
        overflow: hidden;
        cursor: pointer;
        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            border-radius: inherit;
            width: .5rem;
            height: .5rem;
        }
        &:hover {
            &::before {
                transition: all .1s linear;
                background: rgba(255, 255, 255, .075);
                transform: translate(-50%, -50%) scale(10);
            }
        }
        &:active {
            &::before {
                transition: all .1s linear;
                background: rgba(255, 255, 255, .225) !important;
                transform: translate(-50%, -50%) scale(10);
            }
        }
    }
    
    a {
        color: currentColor;
        text-decoration: none;
    }
`