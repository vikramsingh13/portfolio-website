import React from "react";
import './app.css';
import Header from "./scenes/header/Header";
import Navbar from "./scenes/public/navbar/Navbar";
import About from "./scenes/about/About";
import { LinksContext } from "./contexts/LinksContext";

function App() {
    const links = {
        linkedin: "https://www.linkedin.com/in/vikram-singh-32b0b2119/",
        github: "https://github.com/vikramsingh13",
        codepen: "https://codepen.io/vikramsingh13",
    };
    return (
        <LinksContext.Provider value={links}>
            <div className="App">
                <Navbar />
                <Header />
                <About />
            </div>
        </LinksContext.Provider>
    );
}

export default App;
