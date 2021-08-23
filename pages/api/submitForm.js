import emailjs from "emailjs";

export default function handleForm(req, res) {
    console.log(req);

    emailjs
        .send(
            "portfolio_google",
            "portfolio_template",
            {
                from: req.q.from,
                message: req.q.message,
            },
            "user_2TIRQjQ1Fb0fsEKmWOM6P"
        )
        .then(() => {
            res.status(200);
        })
        .catch(() => {
            res.status(500);
        });
}
