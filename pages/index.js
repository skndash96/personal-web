import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import { media } from "../utils/style";
import Image from "next/image";
import Form from "../components/form";

export default function Main({ today }) {
    return (
        <Container>
            <Head>
                <title> Dash Skndash </title>
                <meta name="description" content="Me a Full Stack developer" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Home>
                <div className="text">
                    <span>
                        I make stuff in it&apos;s <span>better</span> way.
                    </span>
                    <span> I&apos;m Dash Skndash. </span>
                </div>

                <div className="design">
                    <div className="cta">
                        <span>dashskndash@gmail.com</span>

                        <div>
                            <span>available</span>
                            <span>{today.day}</span>
                            <sup>{today.suffix}</sup>
                            <span>{today.month}</span>
                        </div>
                    </div>

                    <Image alt="bigme" src="/bigme.jpeg" layout="fill" />
                </div>
            </Home>

            <Builds>
                <h1 className="title">Builds</h1>
            </Builds>

            <About>
                <h1 className="title"> About me. </h1>

                <div className="infoContainer">
                    <div className="pic">
                        <Image
                            alt="MyImage"
                            layout="fill"
                            objectFit="cover"
                            src="/pfp.png"
                        />
                    </div>

                    <div className="info">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Pellentesque blandit facilisis condimentum.
                        </p>
                    </div>
                </div>
                <hr />
            </About>
            <Contact>
                <h1 className="title"> Write Me. </h1>
                <div className="FormAndImgContainer">
                    <div className="socialContainer">
                        <Image
                            alt="socialImage"
                            layout="fill"
                            src="/social.svg"
                        />
                    </div>

                    <Form />
                </div>
            </Contact>
            <Footer />
        </Container>
    );
}

export async function getServerSideProps() {
    const date = new Date();

    const day = date.getDate();

    const suffix =
        day % 10 === 1
            ? "st"
            : day % 10 === 2
            ? "nd"
            : day % 10 === 3
            ? "rd"
            : "th";

    const month = date.getMonth() + 1;
    let monthName;

    switch (month) {
        case 1:
            monthName = "jan";
            break;
        case 2:
            monthName = "feb";
            break;
        case 3:
            monthName = "mar";
            break;
        case 4:
            monthName = "apr";
            break;
        case 5:
            monthName = "may";
            break;
        case 6:
            monthName = "jun";
            break;
        case 7:
            monthName = "jul";
            break;
        case 8:
            monthName = "aug";
            break;
        case 9:
            monthName = "sep";
            break;
        case 10:
            monthName = "oct";
            break;
        case 11:
            monthName = "nov";
            break;
        case 12:
            monthName = "dec";
            break;
    }

    return {
        props: {
            today: {
                day: day,
                suffix: suffix,
                month: monthName,
            },
        },
    };
}

const Builds = styled.div`
    position: relative;
    min-height: 100vh;
    background: ${({ theme }) => theme.yellow};
    padding: 0 2rem;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30%;
        transform: skewY(-3deg) translateY(-30%);
        background: ${({ theme }) => theme.yellow};
    }
`;

const Home = styled.div`
    position: relative;
    width: 100%;
    min-height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    padding-top: 3rem;
    padding-bottom: 5rem;
    background: ${({ theme }) => theme.maroon};
    & .text {
        position: relative;
        height: 100%;
        color: ${({ theme }) => theme.white};
        & span > span {
            display: inline;
            color: ${({ theme }) => theme.yellow};
        }
        & > span {
            display: block;
            position: relative;
            font-family: "Work Sans";
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
            z-index: 55;
        }
        & > span:nth-child(1) {
            font-weight: 700;
            font-size: 1.75rem;
        }
        & > span:nth-child(2) {
            font-weight: 500;
            font-size: 1.25rem;
        }
        &::after {
            content: "";
            background: ${({ theme }) => theme.orange};
            width: 75%;
            height: 75%;
            position: absolute;
            bottom: -35%;
            left: 10%;
            ${media.landscape`
                width: 40vw;
                left: 3rem;
            `}
            z-index: 54;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        }
    }
    & .design {
        align-self: flex-end;
        ${media.landscape`transform: translateX(-50%);`}
        position: relative;
        width: 65vmin;
        height: 80vmin;
        max-height: 65%;
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
        z-index: 50;
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                to right,
                ${({ theme }) => theme.maroon}ac,
                transparent
            );
        }
        & .cta {
            position: absolute;
            bottom: -25%;
            ${media.landscape`bottom: -10%;`}
            left: -30%;
            width: 35vmin;
            height: 35vmin;
            border-radius: 100%;
            border: 1px solid rgba(255, 255, 255, 0.6);
            font-family: "Work Sans";
            & > * {
                z-index: 60;
            }
            & > span {
                color: ${({ theme }) => theme.yellow};
                position: absolute;
                top: 25%;
                left: 40%;
                font-weight: 400;
                font-size: 1.15rem;
            }
            & div {
                position: absolute;
                top: 45%;
                left: 50%;
                > * {
                    color: ${({ theme }) => theme.lightyellow};
                    display: inline;
                    font-size: 0.75rem;
                    text-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
                }
                & *:first-child {
                    display: block;
                }
            }
        }
    }
`;

const About = styled.div`
    position: relative;
    width: 100%;
    background: ${({ theme }) => theme.blue};
    padding-left: 1rem;
    padding-bottom: 5rem;
    padding-right: 1.5rem;
    color: ${({ theme }) => theme.white};
    & .title {
        color: ${({ theme }) => theme.yellow} !important ;
        text-decoration-color: ${({ theme }) => theme.yellow} !important ;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background: ${({ theme }) => theme.blue};
        transform: translateY(-50%) skewY(3deg);
    }
    & .infoContainer {
        display: grid;
        & .pic {
            position: relative;
            width: 30vmax;
            height: 30vmax;
            background: ${({ theme }) => theme.lightyellow};
            border-radius: 100%;
            overflow: hidden;
            margin: auto;
            margin-bottom: 1.5rem;
        }
        & .info {
            margin: auto;
            max-width: 75vw;
            text-align: center;
            & p {
                line-height: 1.75rem;
            }
        }
        ${media.landscape`
            grid-template-columns: 1fr 1fr;
            & .info {
                text-align: left;
            }
        `}
    }
    & hr {
        display: block;
        width: 80%;
        margin: auto;
        margin-top: 1rem;
        border-color: ${({ theme }) => theme.yellow};
    }
`;

const Contact = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 2rem;
    background: ${({ theme }) => theme.white};
    &::before {
        content: "";
        position: absolute;
        top: 0;
        border-radius: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 20%;
        background: ${({ theme }) => theme.white};
        box-shadow: 0 -10px 5px 2px rgba(0, 0, 0, 0.025);
    }
    & .FormAndImgContainer {
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        ${media.landscape`
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            justify-items: start;
        `}
    }
    & .socialContainer {
        position: relative;
        width: 100%;
        height: 100%;
    }
`;

const Container = styled.div`
    position: relative;
    width: 100%;
    & .title {
        position: relative;
        z-index: 50;
        font-family: Sans-Serif;
        text-align: center;
        color: #ff8066;
        -webkit-text-stroke: 1px black;
        text-decoration: underline wavy #ff8066aa 0.2rem;
        text-underline-offset: 5px;
        margin-bottom: 2rem;
    }
`;
