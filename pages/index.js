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

                {/*TODO: a scribble line*/}
            </Home>

            <About>
                <h1 className="title"> About this guy. </h1>

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
                <h1> Write Me. </h1>
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

const Home = styled.div`
    position: relative;
    width: 100%;
    min-height: 95vh;
    background: #7a3939;
    padding: 2rem 0 0 3rem;
    ${media.landscape`
        min-height: 125vh;
        padding-left: 5rem;
    `}
    & .text {
        position: relative;
        color: white;
        & span > span {
            display: inline;
            color: #fdff66;
        }
        & > span {
            display: block;
            position: relative;
            z-index: 55;
            text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.2);
        }
        & > span:nth-child(1) {
            font-weight: 700;
            font-size: 1.75rem;
            font-family: "Work Sans";
            margin-left: -2rem;
        }
        & > span:nth-child(2) {
            font-weight: 500;
            font-size: 1.25rem;
            font-family: "Work Sans";
        }
        &::after {
            content: "";
            background: #ff8066;
            width: 75%;
            height: 75%;
            position: absolute;
            bottom: 2rem;
            left: -1rem;
            transform: translateY(100%);
            ${media.landscape`
                width: 40vw;
                height: 100%;
                left: 3rem;
            `}
            ${media.medium`
                height: 150%;
            `}
            z-index: 54;
            box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
        }
    }
    & .design {
        width: 65vmin;
        height: 80vmin;
        max-height: 75vh;
        background: #5f1c1c;
        box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
        z-index: 50;
        position: absolute;
        top: 20%;
        right: 10%;
        ${media.landscape`
            top: 15%;
            right: 20%;
        `}
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(to right, #5f1c1caa, transparent);
        }
        & .cta {
            position: absolute;
            bottom: -25%;
            ${media.landscape`bottom: -10%;`}
            left: -30%;
            width: 40vmin;
            height: 40vmin;
            border-radius: 100%;
            border: 1px solid #ffffffcc;
            font-family: "Work Sans";
            & > * {
                z-index: 60;
            }
            & > span {
                color: #90ee90;
                position: absolute;
                top: 25%;
                left: 40%;
                font-weight: 400;
            }
            & div {
                position: absolute;
                top: 45%;
                left: 50%;
                > * {
                    color: #80ce80;
                    display: inline;
                    font-size: 0.8rem;
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
    min-height: 75vh;
    background: #fefedf;
    overflowx: hidden;
    padding-left: 1rem;
    padding-bottom: 5rem;
    padding-right: 1.5rem;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 20%;
        background: #fefedf;
        transform: translateY(-50%) skewY(3deg);
    }
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
    & .infoContainer {
        display: grid;
        & .pic {
            position: relative;
            width: 30vmax;
            height: 30vmax;
            background: #a8aa83;
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
        border-color: #ff8066;
    }
`;

const Contact = styled.div`
    position: relative;
    width: 100%;
    padding-bottom: 2rem;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        border-radius: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 20%;
        background: white;
        box-shadow: 0 -10px 5px 2px rgba(0, 0, 0, 0.025);
    }
    & h1 {
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
    & .FormAndImgContainer {
        min-height: 50vh;
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
`;
