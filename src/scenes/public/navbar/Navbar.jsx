import React from "react";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="bg-gradient">
            <div className="logo">
                <h2>Vikram Singh</h2>
            </div>
            <div className="menu">
                <ul className="menu-list">
                    <li className="menu-item">
                        <a href="#">About</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Projects</a>
                    </li>
                    <li className="menu-item">
                        <a href="#">Contact</a>
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
