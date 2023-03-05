import React, { useContext } from "react";
import "./footer.css";
import SocialIcon from "../../../components/socials/SocialIcon";
import { LinksContext } from "../../../contexts/LinksContext";

const Footer = () => {
    const links = useContext(LinksContext);
    return (
        <footer className="footer bg-gradient-secondary" id="footer">
            <div className="footer-socials socials">
                <SocialIcon linkedin newtab link={links["linkedin"]} />
                <SocialIcon codepen newtab link={links["codepen"]} />
                <SocialIcon github newtab link={links["github"]} />
            </div>
            <div className="footer-copyright">
                <a href="https://vikramsingh.tech">
                    <h2>&copy;Vikram Singh. </h2>
                </a>
                <h2>All Rights Reserved.</h2>
            </div>
        </footer>
    );
};

export default Footer;
