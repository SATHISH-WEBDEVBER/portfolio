// components/ResumeSection/Experience.jsx
import React from "react";
import "../css/Experience.css";

const Experience = ({ data, isActive }) => {
  return (
    <div className={`tab-grid resume-box experience ${isActive}`}>
      {data.map((item, index) => (
        <div data-aos="zoom-in" key={index}>
          <div className="tab-item resume-item experience-item">
            <h4>{item.year}</h4>
            <h4>{item.role}</h4>
            <h4>{item.place}</h4>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
