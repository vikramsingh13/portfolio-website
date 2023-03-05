import React from "react";
import "./button.css";

//todo
//make buttons customizable using props
//e.g. gradient, bg, outlined or filled, disabled, etc.
const Button = ({ text, link }) => {
    return (
        <a href={link}>
            <button className="button-wrapper bg-gradient">{text}</button>
        </a>
    );
};

export default Button;
