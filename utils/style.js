import { css } from "styled-components";

const queries = {
    verysmall: "(max-width: 298px)",
    medium: "(min-width: 768px)",
    large: "(min-width: 992px)",
    landscape: "(orientation: landscape) and (min-width: 512px)",
};

export const media = Object.keys(queries).reduce((all, name) => {
    all[name] = (...args) => css`
        @media screen and ${queries[name]} {
            ${css(...args)}
        }
    `;
    return all;
}, {});

export const theme = {
    black: "#000000",
    maroon: "#7A3939",
    darkmaroon: "#4f1f1f",
    pink: "#E57F7F",
    orange: "#FF8066",
    yellow: "#FED766",
    lightyellow: "#F3EED9",
    green: "#80CE80",
    lightgreen: "#90EE90",
    blue: "#009FB7",
    grey: "#4B4453",
    lightgrey: "#D3D3D3",
    white: "#FFFFFF",
};
