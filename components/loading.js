import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Loading({ isLoading }) {
    const screenRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            screenRef.current.remove();
        }, 5000);
    }, []);

    return (
        <Screen ref={screenRef} isLoading={isLoading}>
            <div className="logo">
                <Image
                    priority={true}
                    src="/logo.svg"
                    layout="fill"
                    alt=""
                    objectFit="cover"
                />
            </div>
        </Screen>
    );
}

const logoAnim = keyframes`
    0% {}
    50% {}
    51% {
        width: 0vmax;
        height: 0vmax;
        opacity: 0.5;
    }
    100% {
        width: 50vmax;
        height: 50vmax;
        opacity: 0.1;
    }
`;

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
    overflow: hidden;
    transform: translateY(${({ isLoading }) => (isLoading ? "0%" : "-100%")});
    & .logo {
        position: relative;
        width: 10vmax;
        height: 10vmax;
        background: #ff8066;
        border-radius: 100%;
        transform: translateY(-50%);
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 100%;
            animation: ${logoAnim} 1.25s linear infinite;
        }
    }
`;
