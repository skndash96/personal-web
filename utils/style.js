import { css } from "styled-components";

const queries = {
    verysmall: "(max-width: 298px)",
    medium: "(min-width: 768px)",
    large: "(min-width: 992px)",
    landscape: "(orientation: landscape)"
};

export const media = Object.keys(queries).reduce((all, name) => {
    all[name] = (...args) => css`
        @media screen and ${queries[name]} {
            ${css(...args)}
        }
    `;
    return all;
}, {});
