import React from "react";
import project01 from '../assets/images/projet-01.jpg';
import project02 from '../assets/images/projet-02.jpg';
import project03 from '../assets/images/projet-03.jpg';
import '../assets/styles/Project.scss';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function Project() {
    const { language } = useLanguage();
    const t = translations[language];

    return(
    <div className="projects-container" id="projects">
        <h1>{t.projects.title}</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://mrpaquiteau.github.io/RWC23-scraping/index.html" target="_blank" rel="noreferrer"><img src={project01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MrPaquiteau/RWC23-scraping" target="_blank" rel="noreferrer"><h2>{t.projects.items[0].name}</h2></a>
                <p>{t.projects.items[0].description}</p>
            </div>
            <div className="project">
                <img src={project02} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://github.com/MrPaquiteau/slam-data" target="_blank" rel="noreferrer"><h2>{t.projects.items[1].name}</h2></a>
                <p>{t.projects.items[1].description}</p>
            </div>
            <div className="project">
                <img src={project03} className="zoom" alt="thumbnail" width="100%"/>
                <a href="https://github.com/MrPaquiteau/flight-boarding-simulation" target="_blank" rel="noreferrer"><h2>{t.projects.items[2].name}</h2></a>
                <p>{t.projects.items[2].description}</p>
            </div>
        </div>
    </div>
    );
}
export default Project;