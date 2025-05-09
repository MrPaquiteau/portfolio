import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBrain, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Expertise.scss';
import SkillCard from './SkillCard';


function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {/* Card 1: Backend Development */}
                <SkillCard
                    icon={faPython}
                    title="Backend Development"
                    description="Developed Python programs for web scraping, PDF data extraction, and data manipulation using libraries like Pandas and Selenium. Experience with object storage systems like Minio." // Updated description
                    labels={["Python", "Pandas", "Polars", "Object-Oriented Programming", "FastAPI", "Web Scraping (Selenium/Bs4)", "PDF Scraping", "Minio"]}
                />
                {/* Card 2: Frontend Development */}
                <SkillCard
                    icon={faReact}
                    title="Frontend Development"
                    description="Built a React application to enable collaborators in enterprise/production environments to execute Python programs efficiently. Proficient in creating responsive user interfaces with JavaScript, HTML, and CSS." // Updated description
                    labels={["React", "JavaScript", "HTML5", "CSS3"]}
                />
                {/* Card 3: DevOps */}
                <SkillCard
                    icon={faDocker}
                    title="DevOps & Containerization"
                    description="I have experience with Git and GitHub for project management, version control, and collaboration in software development. Additionally, I am proficient in using Docker for containerization, enabling efficient deployment and scalability of applications."
                    labels={["Git", "GitHub", "Docker"]}
                />
                {/* Card 4: Database & SQL */}
                <SkillCard
                    icon={faDatabase}
                    title="Database & SQL"
                    description="Proficient in designing and managing relational and NoSQL databases. Experience with SQL query optimization and data modeling using MySQL, PostgreSQL, and MongoDB."
                    labels={["SQL", "MySQL", "PostgreSQL", "MongoDB", "Neo4j"]}
                />
                {/* Card 5: Machine Learning */}
                <SkillCard
                    icon={faBrain}
                    title="Machine Learning"
                    description="Experience in developing and implementing machine learning models for classification tasks, utilizing neural networks, and leveraging libraries like Scikit-learn, TensorFlow, and PyTorch. Familiar with GPU-accelerated data science using the RAPIDS suite (cuDF)." // Updated description
                    labels={["Classification", "Neural Networks", "Scikit-learn", "TensorFlow", "PyTorch", "RAPIDS", "cuDF"]}
                />
                {/* Card 6: Mobile Development */}
                <SkillCard
                    icon={faMobileAlt}
                    title="Mobile Development"
                    description="Created small iOS applications using Swift & SwiftUI to display scraped datas"
                    labels={["Swift", "SwiftUI"]}
                />
            </div>
        </div>
    </div>
    );
}

export default Expertise;