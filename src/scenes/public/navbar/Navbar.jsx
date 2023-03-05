import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="bg-gradient">
            <div className="logo">
            <a href="#header"><h2>Vikram Singh</h2></a>
            </div>
            <div className="menu">
                <ul className="menu-list">
                    <li className="menu-item">
                        <a href="#about">About</a>
                    </li>
                    <li className="menu-item">
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="menu-item">
                        <a href="#contact">Contact</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
