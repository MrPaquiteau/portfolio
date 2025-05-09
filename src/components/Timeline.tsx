import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faChevronDown, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  const [openStates, setOpenStates] = useState<{ [key: number]: boolean }>({});

  const toggleDetails = (index: number) => {
    setOpenStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const timelineItems = [
    {
      index: 0,
      type: 'work',
      date: "September 2024 - July 2025",
      icon: faBriefcase,
      iconBg: '#5000ca',
      company: "Arexa",
      title: "Data Analyst (Work-study)",
      location: "Meylan, France",
      details: `BUT 3rd year Work-study<br /><br />- Data Analysis and Visualization (Power BI)<br />- Python Scripting for Data Processing<br />- React Development & FastAPI for Web Applications`
    },
    {
      index: 1,
      type: 'work',
      date: "April 2024 - June 2024",
      icon: faBriefcase,
      iconBg: '#5000ca',
      company: "SKIS Rossignol",
      title: "Database Manager (Internship)",
      location: "Saint-Jean-de-Moirans, France",
      details: `BUT 2nd year Internship<br /><br />- Data Management<br />- SQL Queries<br />- Python Scripting for Optimization<br />- Developed an Excel tool using VBA for automation`,
      report: {
        url: "/documents/Internship_Rossignol_Report_French.pdf",
        label: "Internship Report"
      }
    },
    {
      index: 2,
      type: 'education',
      date: "2022 - Present",
      icon: faGraduationCap,
      iconBg: '#007bff',
      company: "IUT2 - Université Grenoble Alpes",
      title: "University Bachelor of Technology (BUT) Data Science",
      location: "Grenoble, France",
      details: `- Data Science and Computer Science<br />- Programming in Python, SQL, R<br />- Machine Learning and AI<br />- Database Management<br />- Data Analysis and Visualization<br />- Web Development with JavaScript, HTML, CSS, PHP<br />- Big Data Technologies<br />- Project Management and Team Collaboration<br />`
    },
    {
      index: 3,
      type: 'education',
      date: "2019 - 2022",
      icon: faGraduationCap,
      iconBg: '#007bff',
      company: "Lycée Marie Curie",
      title: "French Baccalauréat",
      location: "Échirolles, France",
      details: `Specialities<br /><br />- Numeric and Computer Science<br />- Mathematics<br />- Economy and Social Sciences`
    }
  ];

  return (
    <div id="timeline">
      <div className="items-container">
        <h1>Timeline</h1>
        <VerticalTimeline>
          {timelineItems.map((item) => (
            <VerticalTimelineElement
              key={item.index}
              className={`vertical-timeline-element--${item.type} ${openStates[item.index] ? 'is-open' : ''}`}
              date={item.date}
              iconStyle={{ background: item.iconBg, color: 'white' }}
              icon={<FontAwesomeIcon icon={item.icon} />}
            >
              <div className="timeline-content-wrapper" onClick={() => toggleDetails(item.index)}>
                <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h5 className="vertical-timeline-element-subtitle">{item.location}</h5>
                <div className="timeline-details">
                <p dangerouslySetInnerHTML={{ __html: item.details }} />
                {item.report && (
                  <a
                    href={item.report.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-download-link"
                    onClick={e => e.stopPropagation()}
                    style={{ display: item.report ? undefined : "none" }}
                  >
                    <FontAwesomeIcon icon={faFilePdf} size="lg" />
                    {item.report.label}
                  </a>
                )}
              </div>
                <div className="expand-arrow">
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;