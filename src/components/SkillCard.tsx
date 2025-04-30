import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss'; // Assuming styles are needed here too

interface SkillCardProps {
    icon: IconDefinition;
    title: string;
    description: string;
    labels: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, labels }) => {
    return (
        <div className="skill">
            <FontAwesomeIcon icon={icon} size="3x" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labels.map((label, index) => (
                    <Chip key={index} className='chip' label={label} />
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
