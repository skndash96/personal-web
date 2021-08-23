import styled from "styled-components";

export default function Loading({ isLoading }) {
    return <Screen isLoading={isLoading}>Loading...</Screen>;
}

const Screen = styled.div`
    position: fixed;
    top: 0;
    z-index: 9999;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
    background: #4b4453;
    color: white;
    transform: translateY(${(props) => (props.isLoading ? "0%" : "-100%")});
`;
