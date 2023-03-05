import React from "react";
import "./socialicon.css";
import { FaLinkedin, FaGithub, FaCodepen, FaEye } from "react-icons/fa";


const SocialIcon = ({linkedin, github, codepen, live, link, newtab}) => {
    const icon = linkedin ? <FaLinkedin /> : (github ? <FaGithub /> : (codepen ? <FaCodepen/> : (live ? <FaEye /> : undefined)));
    const target = newtab ? "_blank" : undefined;
    return (
        <a className="social-icon" href={link} target={target}>
            {icon}
        </a>
    )
};

export default SocialIcon;
