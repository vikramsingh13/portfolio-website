import React from "react";
import Button from "../../components/button/Button";
import "./about.css";

const About = () => {
    return (
        <div className="about" id="about">
            <h1>
                Hi! I am <span className="span-name">Vikram Singh</span>{" "}
            </h1>
            <h2>
                I am a software developer based out of Mississauga. I am also
                adept in UX design, DevOps solutions, Cloud and Mobile
                development. Currently I am dabbling in IOTs and blockchain, and
                furthering my education in Machine Learning.
            </h2>
            <div>
                <Button text="Projects" link="#projects"/>
            </div>
        </div>
    );
};

export default About;
