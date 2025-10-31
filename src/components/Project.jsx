import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import "../css/Project.css";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Project = ({ data, isActive }) => {
  const { language } = useLanguage();
  const t = translations[language];

  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`tab-grid resume-box project ${isActive}`}>
      {data.map((item, index) => (
        <div
          key={index}
          className="project-box"
          onClick={() => isMobile && toggleContent(index)}
        >
          <img
            className="project-image"
            src={item.projectimage}
            alt={t[item.nameKey]}
          />
          <div
            className={`project-content ${
              isMobile && activeIndex === index ? "show" : ""
            }`}
          >
            <h1>{t[item.nameKey]}</h1>
            <p>{t[item.contentKey]}</p>
            <p className="tech">{item.tech}</p>
            <span className="line"></span>
            <div className="project-links">
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <FaGithub />
              </a>
              <a
                href={item.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <GoArrowUpRight />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
