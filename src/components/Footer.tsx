import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer>
      <div>
        <a href="https://github.com/MrPaquiteau" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/romain-troillard/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>{t.footer.text} <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">{t.footer.template}</a>.</p>
    </footer>
  );
}

export default Footer;