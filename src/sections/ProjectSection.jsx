import React, { useState } from "react";
import "../css/ProjectSection.css";
import { projectData, serviceData } from "../translations/projectData.js";
import Experience from "../components/Project.jsx";
import Skill from "../components/Service.jsx";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("project");
  const isActive = (tab) => (activeTab === tab ? "active" : "not-active");

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section Portfolio" id="projects">
      <h2 className="title" data-aos="fade-up" data-aos-duration="700">
        {t.projectTitle}
      </h2>

      {/* Tab Navigation */}
      <div className="tab-box" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
        <div
          className={`tab-list-Portfolio resume-list-Portfolio ${isActive("project")}`}
          onClick={() => setActiveTab("project")}
        >
          <h3>{t.projectsTab}</h3>
        </div>
        <div
          className={`tab-list-Portfolio resume-list-Portfolio ${isActive("service")}`}
          onClick={() => setActiveTab("service")}
        >
          <h3>{t.serviceTab}</h3>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-wrapper-Portfolio">
        <Experience data={projectData} isActive={isActive("project")} />
        <Skill data={serviceData} isActive={isActive("service")} />
      </div>
    </section>
  );
};

export default ResumeSection;
