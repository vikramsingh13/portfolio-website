import React, { useContext } from "react";
import SocialIcon from "../../components/socials/SocialIcon";
import './header.css';
import { LinksContext } from "../../contexts/LinksContext";
import Button from "../../components/button/Button";

const Header = () => {
    const links = useContext(LinksContext);
    return (
        <div className="header" id="header">
            <h1 >Vikram Singh</h1>
            <h2>Software Developer | UX Designer | DevOps Engineer</h2>
            <div className="socials">
                <SocialIcon linkedin newtab link={links["linkedin"]} />
                <SocialIcon codepen newtab link={links["codepen"]} />
                <SocialIcon github newtab link={links["github"]} />
                
            </div>
            <div>
                <Button text={"About"} link="#about" />
                <Button text={"Resume"} link={links["resume"]} newtab/>
            </div>
        </div>
    )
};

export default Header;
