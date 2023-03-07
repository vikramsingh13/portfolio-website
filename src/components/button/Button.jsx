import React from "react";
import "./button.css";

//todo
//make buttons customizable using props
//e.g. gradient, bg, outlined or filled, disabled, etc.
const Button = ({ text, link, newtab }) => {
    const target = newtab ? "_blank" : undefined;
    return (
        <a href={link} target={target}>
            <button className="button-wrapper bg-gradient">{text}</button>
        </a>
    );
};

export default Button;
