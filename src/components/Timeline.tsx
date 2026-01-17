import React, { useState } from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faChevronDown, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

function Timeline() {
  const { language } = useLanguage();
  const t = translations[language];
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
      type: 'education',
      date: t.timeline.items[0].date,
      icon: faGraduationCap,
      iconBg: '#007bff',
      company: t.timeline.items[0].company,
      title: t.timeline.items[0].title,
      location: t.timeline.items[0].location,
      details: t.timeline.items[0].details,
    },
    {
      index: 1,
      type: 'work',
      date: t.timeline.items[1].date,
      icon: faBriefcase,
      iconBg: '#5000ca',
      company: t.timeline.items[1].company,
      title: t.timeline.items[1].title,
      location: t.timeline.items[1].location,
      details: t.timeline.items[1].details,
      report: {
        url: "/documents/Workstudy_Arexa_Report_French.pdf",
        label: t.timeline.items[1].reportLabel
      }
    },
    {
      index: 2,
      type: 'work',
      date: t.timeline.items[2].date,
      icon: faBriefcase,
      iconBg: '#5000ca',
      company: t.timeline.items[2].company,
      title: t.timeline.items[2].title,
      location: t.timeline.items[2].location,
      details: t.timeline.items[2].details,
      report: {
        url: "/documents/Internship_Rossignol_Report_French.pdf",
        label: t.timeline.items[2].reportLabel
      }
    },
    {
      index: 3,
      type: 'education',
      date: t.timeline.items[3].date,
      icon: faGraduationCap,
      iconBg: '#007bff',
      company: t.timeline.items[3].company,
      title: t.timeline.items[3].title,
      location: t.timeline.items[3].location,
      details: t.timeline.items[3].details
    },
    {
      index: 4,
      type: 'education',
      date: t.timeline.items[4].date,
      icon: faGraduationCap,
      iconBg: '#007bff',
      company: t.timeline.items[4].company,
      title: t.timeline.items[4].title,
      location: t.timeline.items[4].location,
      details: t.timeline.items[4].details
    }
  ];

  return (
    <div id="timeline">
      <div className="items-container">
        <h1>{t.timeline.title}</h1>
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