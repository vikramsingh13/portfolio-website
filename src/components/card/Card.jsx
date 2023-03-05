import React from "react";
import "./card.css";
import SocialIcon from "../socials/SocialIcon";

const Card = ({
    appName,
    appSkills,
    appDescription,
    appCodeLink,
    appLiveLink,
    appImage,
}) => {
    //formatting project descriptions
    const descriptionArray = [];
    for (let i = 0; i < appDescription.length; i++) {
        descriptionArray.push(<h2>{appDescription[i]}</h2>);
    }

    //line break between content
    const lineBreak = <hr className="card-content-line-break" />;

    return (
        <div className="card">
            <div>
                <img
                    className="card-image"
                    src={`images/${appImage}`}
                    alt={`${appName} image`}
                    title={`${appName} image`}
                />
            </div>
            <div className="card-content bg-gradient-secondary">
                <div className="card-title">
                    <h1>{appName}</h1>
                </div>
                {lineBreak}
                <div className="card-skills">
                    <h2>{appSkills.join(" | ")}</h2>
                </div>
                {lineBreak}
                <div className="card-description">{descriptionArray}</div>
                {lineBreak}
                <div className="card-links">
                    <SocialIcon live link={appLiveLink} newtab/>
                    <SocialIcon github link={appCodeLink} newtab/>
                </div>
            </div>
        </div>
    );
};

export default Card;
