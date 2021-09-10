import styled, { createGlobalStyle, css } from "styled-components";

const sizes = {
  medium: "768px", //handhelds
  large: "992px", //tabs and pcs
};
export const media = Object.keys(sizes).reduce((all, key) => {
  all[key] = (...args) => {
    return `
      @media screen and (min-width: ${sizes[key]}) {
        ${css(...args)}
      }
    `;
  };
  return all;
}, {});


export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Montserrat;
    }
    
    html {
        font-size: calc(0.5rem + 0.025 * 100vmin);
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
            width: 1rem;
            height: 1rem;
            background: rgba(25, 25, 25, .2);
        }
        &:active, &.icon:hover {
            &::before {
                transition: all .1s linear;
                transform: translate(-50%, -50%) scale(8);
            }
        }
    }
    
    a {
        color: currentColor;
        text-decoration: none;
    }
`