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
        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            border-radius: 50%;
            width: .5rem;
            height: .5rem;
            background: rgba(25, 25, 25, .2);
        }
        &:active, &:hover {
            &::before {
                transition: all .1s linear;
                transform: translate(-50%, -50%) scale(10);
            }.
        }
    }
    
    a {
        color: currentColor;
        text-decoration: none;
    }
`