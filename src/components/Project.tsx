import React from "react";
import project01 from '../assets/images/projet-01.jpg';
import project02 from '../assets/images/projet-02.jpg';
import project03 from '../assets/images/projet-03.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://mrpaquiteau.github.io/RWC23-scraping/index.html" target="_blank" rel="noreferrer"><img src={project01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MrPaquiteau/RWC23-scraping" target="_blank" rel="noreferrer"><h2>RWC23-scraping</h2></a>
                <p>Python-based web scraping tool for the 2023 Rugby World Cup. It dynamically generates interactive web pages to display match results, team compositions, and player statistics. Additionally, it includes an iOS app developed in Xcode for a mobile-friendly experience.</p>
            </div>
            <div className="project">
                <img src={project02} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://github.com/MrPaquiteau/slam-data" target="_blank" rel="noreferrer"><h2>Slam Data</h2></a>
                <p>Developed a web platform for managing and displaying tennis Grand Slam finals results. Features include data exploration with OLAP operators, detailed player performance statistics, and forms for adding final match results and player profiles.</p>
            </div>
            <div className="project">
                <img src={project03} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://github.com/MrPaquiteau/flight-boarding-simulation" target="_blank" rel="noreferrer"><h2>Flight Boarding Simulation</h2></a>
                <p>This project is an object-oriented simulation of the boarding process for a flight. It features passenger management, aircraft layout generation, and a boarding simulation. The goal is to optimize boarding efficiency using OOP principles, including passenger behaviors, seat assignments, and event-driven interactions.</p>
            </div>
        </div>
    </div>
    );
}
export default Project;