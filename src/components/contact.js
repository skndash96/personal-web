import styled from 'styled-components'





export default function Hero() {
    return (
        <Container>
            <h1 className="contact-title">
                Contact
            </h1>
            
            <div className="contact-form">
                <form>
                    <input
                        type="text"
                        placeholder="whats your email?"
                    />
                    <input
                        type="text"
                        placeholder="whats in your mind?"
                    />
                    <button>
                        Submit
                    </button>
                </form>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    padding: 2.5rem;
    background: var(--blue);
    color: var(--white);
    .contact-title {
        font-family: "Work Sans";
        text-align: center;
        margin-bottom: 2.5rem;
    }
    .contact-form {
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            input, button {
                margin: .5rem 0;
                padding: .5rem 1rem;
            }
            input {
                border-bottom: 2px solid var(--white);
                &::placeholder {
                    color: var(--white);
                    opacity: .75;
                }
            }
            button {
                background: var(--white);
                border-radius: .5rem;
            }
        }
    }
`
