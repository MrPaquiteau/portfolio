import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function Main() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={require('../assets/images/me.png')} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/MrPaquiteau" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/romain-troillard/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>{t.main.title}</h1>
          <p>{t.main.subtitle}</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/MrPaquiteau" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/romain-troillard/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;