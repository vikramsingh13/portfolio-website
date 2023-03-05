import React, { useContext } from "react";
import { ProjectsContext } from "../../contexts/ProjectsContext";
import Card from "../../components/card/Card";
import './projects.css';

const Projects = () => {
    const projects = useContext(ProjectsContext);
    const cardList = [];
    //not going to dynamically update the projects 
    //so skipping useState, useEffect
    for(let i = 0; i < projects.length; i++){
        cardList.push(<Card key={projects[i].appName} {...projects[i]} />)
    }

    return (
        <div className="projects" id="projects">
            <h1 className="projects-heading">Projects</h1>
            <div className="projects-list">{cardList}</div>
        </div>
    );
};

export default Projects;
