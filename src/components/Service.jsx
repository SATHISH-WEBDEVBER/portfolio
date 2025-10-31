import React from "react";
import "../css/Service.css";
import { FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Service = ({ data, isActive }) => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className={`tab-grid resume-box service ${isActive}`}>
      {data.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="service-card">
            <div className="service-icon">
              <Icon className="main-icon" />
              <FaArrowRight className="arrow-icon" />
            </div>
            <div className="service-text">
              <h2>{t[item.titleKey]}</h2>
              <p>{t[item.contentKey]}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
