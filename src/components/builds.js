import styled from 'styled-components'
import { useState } from 'react'
import { media } from '../utils/style'

export default function Hero() {
    const [isDesigns, setIsDesigns] = useState(true)
    
    return (
        <Container>
            <div className="design-dev-switch">
                <button
                    className={isDesigns ? "active" : ""}
                    onClick={() => !isDesigns && setIsDesigns(true)}
                > Design </button>
                
                <button 
                    className={!isDesigns ? "active" : ""}
                    onClick={() => isDesigns && setIsDesigns(false)}
                > Code </button>
            </div>
            
            {isDesigns
            ? <div className="designs">
                <div className="item" />
                <div className="item" />
                <div className="item" />
                <div className="item" />
            </div>
            
            : <div className="codes">
                <div className="item" />
                <div className="item" />
                <div className="item" />
                <div className="item" />
            </div>}
            
            <button className="view-more">
                More
            </button>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 75vh;
    padding-bottom: 5rem;
    background: var(--blue);
    color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    & .design-dev-switch {
        & > * {
            font-weight: 700;
            background: var(--blue);
            color: var(--white);
            border-radius: .5rem;
            padding: .5rem;
            margin: 0 .5rem;
            width: 5rem;
            transform: translateY(-75%);
            transition: all .2s ease-in;
        }
        & button.active {
            background-color: var(--white);
            box-shadow: 0 2px 15px rgba(0, 0, 0, .2);
            color: var(--blue);
        }
    }
    & .designs, & .codes {
        margin: 1rem 0 2rem 0;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr;
        ${media.medium`
            grid-template-rows: unset;
            grid-template-columns: 1fr 1fr;
        `}
        gap: 1rem;
        & .item {
            min-width: 13rem;
            height: 13rem;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: .5rem;
            &:last-child {
                display: none;
            }
            ${media.medium`
                &:last-child {
                    display: block;
                }
            `}
        }
    }
    & .view-more {
        padding: .5rem 1rem;
        background-color: var(--white);
        color: var(--blue);
        border-radius: .5rem;
        font-weight: 700;
        width: 5rem;
        transform: scale(1);
        transition: all .2s linear;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 7.5rem;
        background-image: linear-gradient(
            to top,
            var(--blue) 25%,
            transparent
        );
        transform: translateY(-100%);
    }
`
