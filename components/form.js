import styled from "styled-components";
import { useState } from "react";
import { media } from "../utils/style";
import { FaRegClipboard, FaInfoCircle } from "react-icons/fa";
import { send } from "emailjs-com";

export default function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { noemail, nomessage, invalidemail, invalidmessage } = {
        noemail: "Email is required.",
        nomessage: "Say something.",
        invalidemail: "Couldnt verify a valid email.",
        veryshortmessage: "Say some more, I'd like to hear you.",
    };

    const [formEmail, setFormEmail] = useState("");
    const [formMessage, setFormMessage] = useState("");
    const [formErrors, setFormErrors] = useState({
        email: noemail,
        message: nomessage,
    });

    const handleChange = (event, field) => {
        event.preventDefault();
        const { value } = event.target;

        setFormErrors((state) => {
            field === "email"
                ? !value
                    ? (state.email = noemail)
                    : !/^\S+@\S+\.\S+$/.test(value)
                    ? (state.email = invalidemail)
                    : delete state.email
                : !value
                ? (state.message = nomessage)
                : value.length < 10
                ? (state.message = invalidmessage)
                : delete state.message;

            return state;
        });

        field === "email" ? setFormEmail(value) : setFormMessage(value);

        if (Object.keys(formErrors).length === 0)
            document.querySelector("#formPopup").style.display = "none";
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formErrors.email || formErrors.messaformPopup) {
            document.querySelector("#formPopup").style.display = "block";
            return;
        }

        setIsSubmitting(true);

        send(
            "service_411f074",
            "template_ofcg5sf",
            {
                from: formEmail,
                message: formMessage,
            },
            "user_2TIRQjQ1Fb0fsEKmWOM6P"
        )
            .then(() => {
                console.log("success");
            })
            .catch((error) => {
                console.log("error", error);
            })
            .finally(async () => {
                await new Promise((res) => setTimeout(res, 2000));

                document.querySelector("#contactForm").reset();
                //document.querySelector(".socialContainer").remove();
                setIsSubmitting("already");
            });
    };

    if (isSubmitting === "already") {
        return (
            <SentBox>
                <h2>Sent!</h2>
            </SentBox>
        );
    }

    return (
        <FormContainer
            submitting={isSubmitting}
            data={{ email: formEmail, message: formMessage }}
            errors={formErrors}
        >
            <form id="contactForm" onSubmit={handleSubmit}>
                <div>
                    <input
                        id="formEmail"
                        name="email"
                        className="formInput"
                        onChange={(e) => handleChange(e, "email")}
                    />
                    <label htmlFor="formEmail">
                        What&apos;s your contact email?
                    </label>
                </div>
                <div>
                    <textarea
                        rows={1}
                        id="formMessage"
                        name="message"
                        className="formInput"
                        onChange={(e) => handleChange(e, "message")}
                        resizable="none"
                    />
                    <label htmlFor="formMessage">
                        What&apos;s in your mind??
                    </label>
                </div>
                <div>
                    <div id="formPopup" className="formPopup">
                        <FaInfoCircle />
                        {Object.values(formErrors).filter((x) => !!x)[0]}
                    </div>
                    <input
                        onClick={handleSubmit}
                        type="submit"
                        value={isSubmitting ? "..." : "Send"}
                        className="formInput"
                    />
                </div>
            </form>
        </FormContainer>
    );
}

const FormContainer = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    & div {
        position: relative;
    }
    & .formInput {
        min-width: 250px;
        padding: 0.5rem;
        outline: none;
        border: none;
        border-bottom: 2px solid #ff8066;
        ${media.landscape`
            border-left: 2px solid #ff8066;
        `}
        margin-bottom: 1.5rem;
        &:focus ~ label {
            top: -1rem;
        }

        &[name="email"] {
            ${({ data: { email } }) =>
                email &&
                `
                & ~ label {
                    top: -1rem;
                }
            `}
        }
        &[name="message"] {
            ${({ data: { message } }) =>
                message &&
                `
                & ~ label {
                    top: -1rem;
                }
            `}
        }
    }
    & label {
        position: absolute;
        left: 0.5rem;
        top: 0.5rem;
        color: rgba(0, 0, 0, 0.5);
        font-size: 0.75rem;
        ${media.medium`
            font-size: 0.55rem;
        `}
    }
    & input[type="submit"] {
        background: #ff8066;
        color: white;
        display: block;
        margin: 0 auto;
        ${({ errors }) =>
            (errors.email || errors.message) &&
            `
            color: #cccccc;
        `}
        border: none;
        border-bottom: none;
    }
    & .formPopup {
        display: none;
        color: #ff909a;
        margin-bottom: 0.5rem;
        text-align: left;
        font-size: 0.8rem;
        border-radius: 10px;
        & svg {
            margin-right: 0.5rem;
            transform: translateY(2px);
        }
    }
`;

const SentBox = styled.div`
    min-width: 50%;
    margin: auto;
    margin-top: -0.5rem;
    padding: 0.5rem;
    ${media.landscape`
        margin: auto;
        margin-left: 1rem;
    `}
    background: #ff8066;
    & h2 {
        position: relative;
        z-index: 50;
        font-family: Sans-Serif;
        text-align: center;
        color: #ff8066;
        -webkit-text-stroke: 1.25px white;
        text-decoration: underline wavy #ffffff 0.2rem;
        text-underline-offset: 5px;
        margin-bottom: 0.5rem;
    }
`;
