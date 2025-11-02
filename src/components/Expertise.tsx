import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faBrain, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/Expertise.scss';
import SkillCard from './SkillCard';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';


function Expertise() {
    const { language } = useLanguage();
    const t = translations[language];

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{t.expertise.title}</h1>
            <div className="skills-grid">
                {/* Card 1: Backend Development */}
                <SkillCard
                    icon={faPython}
                    title={t.expertise.backend.title}
                    description={t.expertise.backend.description}
                    labels={t.expertise.backend.labels}
                />
                {/* Card 2: Frontend Development */}
                <SkillCard
                    icon={faReact}
                    title={t.expertise.frontend.title}
                    description={t.expertise.frontend.description}
                    labels={t.expertise.frontend.labels}
                />
                {/* Card 3: DevOps */}
                <SkillCard
                    icon={faDocker}
                    title={t.expertise.devops.title}
                    description={t.expertise.devops.description}
                    labels={t.expertise.devops.labels}
                />
                {/* Card 4: Database & SQL */}
                <SkillCard
                    icon={faDatabase}
                    title={t.expertise.database.title}
                    description={t.expertise.database.description}
                    labels={t.expertise.database.labels}
                />
                {/* Card 5: Machine Learning */}
                <SkillCard
                    icon={faBrain}
                    title={t.expertise.ml.title}
                    description={t.expertise.ml.description}
                    labels={t.expertise.ml.labels}
                />
                {/* Card 6: Mobile Development */}
                <SkillCard
                    icon={faMobileAlt}
                    title={t.expertise.mobile.title}
                    description={t.expertise.mobile.description}
                    labels={t.expertise.mobile.labels}
                />
            </div>
        </div>
    </div>
    );
}

export default Expertise;