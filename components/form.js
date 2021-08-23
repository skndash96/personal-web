import styled from "styled-components";
import { useState } from "react";

export default function Form() {
    const [formEmail, setFormEmail] = useState("");
    const [formMessage, setFormMessage] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        name="email"
                        className="formInput"
                        onChange={(e) => setFormEmail(e.target.value)}
                        required
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
                        onChange={(e) => setFormMessage(e.target.value)}
                        required
                    />
                    <label>
                        What&apos;s in your mind??
                    </label>
                </div>
                <div>
                    <input
                        type="submit"
                        value="Send"
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
        border-left: 2px solid #ff8066;
        margin-bottom: 1.5rem;
        &:valid ~ label {
            top: -1rem;
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
    }
`