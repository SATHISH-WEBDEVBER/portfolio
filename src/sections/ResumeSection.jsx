import React, { useState } from "react";
import "../css/ResumeSection.css";
import { experienceData, skillsData, educationData } from "../translations/resumeData.js";
import Experience from "../components/Experience.jsx";
import Skill from "../components/Skill";
import Education from "../components/Education";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const isActive = (tab) => (activeTab === tab ? "active" : "not-active");

  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="section resume" id="resume">
      <h2 className="title" data-aos="fade-up" data-aos-duration="700">
        {t.resumeTitle}
      </h2>

      {/* Tab Navigation */}
      <div className="tab-box" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
        <div
          className={`tab-list resume-list ${isActive("experience")}`}
          onClick={() => setActiveTab("experience")}
        >
          <h3>{t.resumeExperience}</h3>
        </div>
        <div
          className={`tab-list resume-list ${isActive("skills")}`}
          onClick={() => setActiveTab("skills")}
        >
          <h3>{t.resumeSkill}</h3>
        </div>
        <div
          className={`tab-list resume-list ${isActive("education")}`}
          onClick={() => setActiveTab("education")}
        >
          <h3>{t.resumeEducation}</h3>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-wrapper">
        <Experience data={experienceData} isActive={isActive("experience")} />
        <Skill data={skillsData} isActive={isActive("skills")} />
        <Education data={educationData} isActive={isActive("education")} />
      </div>
    </section>
  );
};

export default ResumeSection;
