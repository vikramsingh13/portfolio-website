import React, { useState } from "react";
import "./contact.css";
import Button from "../../components/button/Button";

const Contact = () => {
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //dynamic data placeholder
        const injectedData = {
            DYNAMIC_DATA_PLACEHOLDER: 123,
        };

        const inputs = e.target.elements;
        const data = {};

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {
                data[inputs[i].name] = inputs[i].value;
            }
        }

        fetch(process.env.REACT_APP_HERO_TOFU_API, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => {
            //bypass spam bots
            if (response.status === 422) {
                Object.keys(injectedData).forEach((key) => {
                    const el = document.createElement("input");
                    el.type = "hidden";
                    el.name = key;
                    el.value = injectedData[key];

                    e.target.appendChild(el);
                });

                e.target.submit();
                throw new Error("Please finish the captcha challenge");
            }

            if (response.status !== 200){
                throw new Error(response.statusText);
            }

            return response.json();
        })
        .then(() => setStatus("I'll be in touch soon."))
        .catch((err) => setStatus(err.toString()));
    };

    if (status) {
        return (
            <div className="contact" id="contact">
                <h1>Contact</h1>
                <h2>Thank you!</h2>
                <h2>{status}</h2>
            </div>
        );
    }
    return (
        <div className="contact" id="contact">
            <h1>Contact</h1>
            <form
                action={process.env.REACT_APP_HERO_TOFU_API}
                method="post"
                onSubmit={handleSubmit}
            >
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Organization"
                        name="organization"
                        required
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Org's website"
                        name="website"
                    />
                </div>
                <div>
                    <textarea
                        rows="10"
                        cols="50"
                        placeholder="Message"
                        name="message"
                        required
                    />
                </div>
                <div>
                    <button
                        className="contact-submit bg-gradient"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
