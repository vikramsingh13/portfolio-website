import React from "react";
import "./app.css";
import Header from "./scenes/header/Header";
import Navbar from "./scenes/public/navbar/Navbar";
import About from "./scenes/about/About";
import Contact from "./scenes/contact/Contact";
import { LinksContext } from "./contexts/LinksContext";
import { ProjectsContext } from "./contexts/ProjectsContext";
import Footer from "./scenes/public/footer/Footer";
import Projects from "./scenes/projects/Projects";
import { links } from "./data/links";
import { projects } from "./data/projects";

function App() {
    
    return (
        <LinksContext.Provider value={links}>
            <div className="App">
                <Navbar />
                <Header />
                <About />
                <ProjectsContext.Provider value={projects}>
                    <Projects />
                </ProjectsContext.Provider>

                <Contact />
                <Footer />
            </div>
        </LinksContext.Provider>
    );
}

export default App;
