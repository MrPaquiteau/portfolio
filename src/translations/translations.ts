export const translations = {
  en: {
    // Navigation
    nav: {
      expertise: 'Expertise',
      timeline: 'Timeline',
      projects: 'Projects',
    },
    // Main section
    main: {
      title: 'TROILLARD Romain',
      subtitle: 'Master\'s Student in Computer Science (AI)',
    },
    // Expertise section
    expertise: {
      title: 'Expertise',
      backend: {
        title: 'Backend Development',
        description: 'Developed Python programs for web scraping, PDF data extraction, and data manipulation using libraries like Pandas and Selenium. Experience with object storage systems like Minio.',
        labels: ['Python', 'Pandas', 'Polars', 'Object-Oriented Programming', 'FastAPI', 'Web Scraping (Selenium/Bs4)', 'PDF Scraping', 'Minio'],
      },
      frontend: {
        title: 'Frontend Development',
        description: 'Built a React application to enable collaborators in enterprise/production environments to execute Python programs efficiently. Proficient in creating responsive user interfaces with JavaScript, HTML, and CSS.',
        labels: ['React', 'JavaScript', 'HTML5', 'CSS3'],
      },
      devops: {
        title: 'DevOps & Containerization',
        description: 'I have experience with Git and GitHub for project management, version control, and collaboration in software development. Additionally, I am proficient in using Docker for containerization, enabling efficient deployment and scalability of applications.',
        labels: ['Git', 'GitHub', 'Docker'],
      },
      database: {
        title: 'Database & SQL',
        description: 'Proficient in designing and managing relational and NoSQL databases. Experience with SQL query optimization and data modeling using MySQL, PostgreSQL, and MongoDB.',
        labels: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Neo4j'],
      },
      ml: {
        title: 'Machine Learning',
        description: 'Experience in developing and implementing machine learning models for classification tasks, utilizing neural networks, and leveraging libraries like Scikit-learn, TensorFlow, and PyTorch. Familiar with GPU-accelerated data science using the RAPIDS suite (cuDF).',
        labels: ['Classification', 'Neural Networks', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'RAPIDS', 'cuDF'],
      },
      mobile: {
        title: 'Mobile Development',
        description: 'Created small iOS application using Swift & SwiftUI to display scraped datas',
        labels: ['Swift', 'SwiftUI'],
      },
    },
    // Timeline section
    timeline: {
      title: 'Timeline',
      items: [
        {
          date: '2025 - Present',
          company: 'Université du Québec à Chicoutimi (UQAC)',
          title: 'Master in Computer Science (Artificial Intelligence)',
          location: 'Saguenay, Quebec, Canada',
          details: 'Master\'s degree with specialization in AI<br /><br />- Machine Learning & Deep Learning<br />- Computer Vision and Image Processing<br />- Advanced Algorithms, Optimization and Metaheuristics<br />- Tools: Python, PyTorch, TensorFlow, Scikit-learn',
        },
        {
          date: 'September 2024 - July 2025',
          company: 'Arexa',
          title: 'Data Analyst (Work-study)',
          location: 'Meylan, France',
          details: 'BUT 3rd year Work-study<br /><br />- Data Analysis and Visualization (Power BI)<br />- Python Scripting for Data Processing<br />- React Development & FastAPI for Web Applications',
          reportLabel: 'Work-study Report',
        },
        {
          date: 'April 2024 - June 2024',
          company: 'SKIS Rossignol',
          title: 'Database Manager (Internship)',
          location: 'Saint-Jean-de-Moirans, France',
          details: 'BUT 2nd year Internship<br /><br />- Data Management<br />- SQL Queries<br />- Python Scripting for Optimization<br />- Developed an Excel tool using VBA for automation',
          reportLabel: 'Internship Report',
        },
        {
          date: '2022 - 2025',
          company: 'IUT2 - Université Grenoble Alpes',
          title: 'University Bachelor of Technology (BUT) Data Science',
          location: 'Grenoble, France',
          details: '- Data Science and Computer Science<br />- Programming in Python, SQL, R<br />- Machine Learning and AI<br />- Database Management<br />- Data Analysis and Visualization<br />- Web Development with JavaScript, HTML, CSS, PHP<br />- Big Data Technologies<br />- Project Management and Team Collaboration<br />',
        },
        {
          date: '2019 - 2022',
          company: 'Lycée Marie Curie',
          title: 'French Baccalauréat',
          location: 'Échirolles, France',
          details: 'Specialities<br /><br />- Numeric and Computer Science<br />- Mathematics<br />- Economy and Social Sciences',
        },
      ],
    },
    // Projects section
    projects: {
      title: 'Personal Projects',
      items: [
        {
          name: 'RWC23-scraping',
          description: 'Python-based web scraping tool for the 2023 Rugby World Cup. It dynamically generates interactive web pages to display match results, team compositions, and player statistics. Additionally, it includes an iOS app developed in Xcode for a mobile-friendly experience.',
        },
        {
          name: 'Slam Data',
          description: 'Developed a web platform for managing and displaying tennis Grand Slam finals results. Features include data exploration with OLAP operators, detailed player performance statistics, and forms for adding final match results and player profiles.',
        },
        {
          name: 'Flight Boarding Simulation',
          description: 'This project is an object-oriented simulation of the boarding process for a flight. It features passenger management, aircraft layout generation, and a boarding simulation. The goal is to optimize boarding efficiency using OOP principles, including passenger behaviors, seat assignments, and event-driven interactions.',
        },
      ],
    },
    // Footer
    footer: {
      text: 'A portfolio edited and customized by me, based on',
      template: "Yuji Sato's template",
    },
  },
  // -----------------------------------------------------------------------------------------------------------------------------------------------------
  fr: {
    // Navigation
    nav: {
      expertise: 'Expertise',
      timeline: 'Parcours',
      projects: 'Projets',
    },
    // Main section
    main: {
      title: 'TROILLARD Romain',
      subtitle: 'Étudiant en Maîtrise Informatique (IA)',
    },
    // Expertise section
    expertise: {
      title: 'Expertise',
      backend: {
        title: 'Développement Backend',
        description: 'Développement de programmes Python pour le web scraping, l\'extraction de données PDF et la manipulation de données avec des bibliothèques comme Pandas et Selenium. Expérience avec les systèmes de stockage d\'objets comme Minio.',
        labels: ['Python', 'Pandas', 'Polars', 'Programmation Orientée Objet', 'FastAPI', 'Web Scraping (Selenium/Bs4)', 'PDF Scraping', 'Minio'],
      },
      frontend: {
        title: 'Développement Frontend',
        description: 'Création d\'une application React pour permettre aux collaborateurs en environnement entreprise/production d\'exécuter des programmes Python efficacement. Compétent dans la création d\'interfaces utilisateur réactives avec JavaScript, HTML et CSS.',
        labels: ['React', 'JavaScript', 'HTML5', 'CSS3'],
      },
      devops: {
        title: 'DevOps & Conteneurisation',
        description: 'J\'ai de l\'expérience avec Git et GitHub pour la gestion de projets, le contrôle de version et la collaboration dans le développement logiciel. De plus, je maîtrise l\'utilisation de Docker pour la conteneurisation, permettant un déploiement efficace et l\'évolutivité des applications.',
        labels: ['Git', 'GitHub', 'Docker'],
      },
      database: {
        title: 'Bases de Données & SQL',
        description: 'Compétent dans la conception et la gestion de bases de données relationnelles et NoSQL. Expérience avec l\'optimisation des requêtes SQL et la modélisation de données avec MySQL, PostgreSQL et MongoDB.',
        labels: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Neo4j'],
      },
      ml: {
        title: 'Machine Learning',
        description: 'Expérience dans le développement et la mise en œuvre de modèles de machine learning pour des tâches de classification, utilisant des réseaux de neurones et exploitant des bibliothèques comme Scikit-learn, TensorFlow et PyTorch. Familier avec la data science accélérée par GPU utilisant la suite RAPIDS (cuDF).',
        labels: ['Classification', 'Réseaux de Neurones', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'RAPIDS', 'cuDF'],
      },
      mobile: {
        title: 'Développement Mobile',
        description: 'Création de petites application iOS utilisant Swift & SwiftUI pour afficher des données scrapées',
        labels: ['Swift', 'SwiftUI'],
      },
    },
    // Timeline section
    timeline: {
      title: 'Parcours',
      items: [
        {
          date: '2025 - Aujourd\'hui',
          company: 'Université du Québec à Chicoutimi (UQAC)',
          title: 'Maîtrise en Informatique (Intelligence Artificielle)',
          location: 'Saguenay, Québec, Canada',
          details: 'Maîtrise avec spécialisation en IA<br /><br />- Machine Learning & Deep Learning<br />- Vision par Ordinateur et Traitement d\'Images<br />- Algorithmes Avancés, Optimisation et Métaheuristiques<br />- Outils : Python, PyTorch, TensorFlow, Scikit-learn',        },
        {
          date: 'Septembre 2024 - Juillet 2025',
          company: 'Arexa',
          title: 'Data Analyst (Alternance)',
          location: 'Meylan, France',
          details: 'Alternance BUT 3ème année<br /><br />- Analyse et Visualisation de Données (Power BI)<br />- Scripts Python pour le Traitement de Données<br />- Développement React & FastAPI pour Applications Web',
          reportLabel: 'Rapport d\'Alternance',
        },
        {
          date: 'Avril 2024 - Juin 2024',
          company: 'SKIS Rossignol',
          title: 'Gestionnaire de Base de Données (Stage)',
          location: 'Saint-Jean-de-Moirans, France',
          details: 'Stage BUT 2ème année<br /><br />- Gestion de Données<br />- Requêtes SQL<br />- Scripts Python pour l\'Optimisation<br />- Développement d\'un outil Excel utilisant VBA pour l\'automatisation',
          reportLabel: 'Rapport de Stage',
        },
        {
          date: '2022 - 2025',
          company: 'IUT2 - Université Grenoble Alpes',
          title: 'BUT (Bachelor Universitaire de Technologie) Science des Données',
          location: 'Grenoble, France',
          details: '- Science des Données et Informatique<br />- Programmation en Python, SQL, R<br />- Machine Learning et IA<br />- Gestion de Bases de Données<br />- Analyse et Visualisation de Données<br />- Développement Web avec JavaScript, HTML, CSS, PHP<br />- Technologies Big Data<br />- Gestion de Projet et Collaboration en Équipe<br />',
        },
        {
          date: '2019 - 2022',
          company: 'Lycée Marie Curie',
          title: 'Baccalauréat Général',
          location: 'Échirolles, France',
          details: 'Spécialités<br /><br />- Numérique et Sciences Informatiques<br />- Mathématiques<br />- Sciences Économiques et Sociales',
        },
      ],
    },
    // Projects section
    projects: {
      title: 'Projets Personnels',
      items: [
        {
          name: 'RWC23-scraping',
          description: 'Outil de web scraping en Python pour la Coupe du Monde de Rugby 2023. Il génère dynamiquement des pages web interactives pour afficher les résultats des matchs, les compositions d\'équipes et les statistiques des joueurs. De plus, il inclut une application iOS développée avec Xcode pour une expérience mobile.',
        },
        {
          name: 'Slam Data',
          description: 'Développement d\'une plateforme web pour gérer et afficher les résultats des finales du Grand Chelem de tennis. Les fonctionnalités incluent l\'exploration de données avec des opérateurs OLAP, des statistiques détaillées sur les performances des joueurs et des formulaires pour ajouter des résultats de matchs finaux et des profils de joueurs.',
        },
        {
          name: 'Flight Boarding Simulation',
          description: 'Ce projet est une simulation orientée objet du processus d\'embarquement pour un vol. Il comprend la gestion des passagers, la génération de la disposition de l\'avion et une simulation d\'embarquement. L\'objectif est d\'optimiser l\'efficacité de l\'embarquement en utilisant les principes de la POO, y compris les comportements des passagers, les affectations de sièges et les interactions basées sur les événements.',
        },
      ],
    },
    // Footer
    footer: {
      text: 'Un portfolio édité et personnalisé par moi, basé sur',
      template: 'le template de Yuji Sato',
    },
  },
};

export type Translations = typeof translations.en;
