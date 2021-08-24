import styled from "styled-components";
import { useState } from "react";
import { media } from '../utils/style'
import { FaRegClipboard } from "react-icons/fa"
import { send } from "emailjs-com"
                    
export default function Form() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    
    const [formEmail, setFormEmail] = useState("");
    const [formMessage, setFormMessage] = useState("");
    const [formErrors, setFormErrors] = useState({})
    
    const handleChange = (event, field) => {
        event.preventDefault()
        const { value } = event.target
        
        setFormErrors(state => {
            field === "email"
            ? (
                !value
                ? state.email = "empty"
                : !/^\S+@\S+\.\S+$/.test(value)
                ? state.email = "invalid"
                : state.email = null
            )
            : (
                !value
                ? state.message = "empty"
                : value.length < 10
                ? state.message = "small"
                : state.message = null
            )
            
            return state
        })
        
        field === "email"
        ? setFormEmail(value)
        : setFormMessage(value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        
        if (errors.email || errors.message) return //TODO: send a popup
        
        setIsSubmitting(true)
        
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
            console.log('success')
        })
        .catch((error) => {
            console.log('error', error)
        })
        .finally(async () => {
            await new Promise(res => setTimeout(res, 2000))
            
            document.querySelector("#contactForm").reset()
            document.querySelector(".socialContainer").remove()
            setIsSubmitting("already")
        })
    }
    
    if (isSubmitting === "already") {
        return (
            <SentBox>
                <h2>
                    Sent!
                </h2>
            </SentBox>
        )
    }
    
    return (
        <FormContainer
            submitting={isSubmitting}
            data={{email:formEmail, message: formMessage}}
            errors={formErrors}
        >
            <form id="contactForm" onSubmit={handleSubmit}>
                <div>
                    <input
                        name="email"
                        className="formInput"
                        onChange={(e) => handleChange(e, "email")}
                    />
                    <label>
                         What&apos;s your contact email?
                    </label>
                </div>
                <div>
                    <textarea
                        rows={3}
                        name="message"
                        className="formInput"
                        onChange={(e) => handleChange(e, "message")}
                    />
                    <label>
                        What&apos;s in your mind??
                    </label>
                </div>
                <div>
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
    padding-bottom: 2rem;
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
            ${({data: {email}}) => email && `
                & ~ label {
                    top: -1rem;
                }
            `}
            ${({ errors: { email } }) => email && `
                color: rgba(255, 25, 25);
            `}
        }
        &[name="message"] {
            ${({data: {message}}) => message && `
                & ~ label {
                    top: -1rem;
                }
            `}
            ${({ errors: { message } }) => message && `
                color: rgba(255, 25, 25);
            `}
        }
    }
    & label {
        position: absolute;
        left: 0.5rem;
        top: 0.5rem;
        color: rgba(0, 0, 0, 0.5);
        font-size: 0.75rem;
    }
    & input[type=submit] {
        background: #ff8066;
        color: white;
        display: block;
        margin: 0 auto;
        ${({errors}) => (errors.email || errors.message) && `
             background: #ee909a;
        `}
        border: none;
        border-bottom: none;
    }
`

const SentBox = styled.div`
    min-width: 50%;
    margin: auto;
    padding: 0.5rem;
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
`