import React from "react";
import "./socialicon.css";
import { FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";


const SocialIcon = ({linkedin, github, codepen, link, newtab}) => {
    const icon = linkedin ? <FaLinkedin /> : (github ? <FaGithub /> : (codepen ? <FaCodepen/> : undefined));
    const target = newtab ? "_blank" : undefined;
    return (
        <a className="social-icon" href={link} target={target}>
            {icon}
        </a>
    )
};

export default SocialIcon;
