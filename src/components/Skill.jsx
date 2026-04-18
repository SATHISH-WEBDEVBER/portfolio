// components/ResumeSection/Skill.jsx
import React from "react";
import "../css/Skill.css";

const Skill = ({ data, isActive }) => {
  return (
    <div className={`tab-grid resume-box skills ${isActive}`}>
      {data.map((item, index) => (
        <div
          className="tab-item resume-item skills-item"
          key={index}
          data-aos="zoom-in"
          data-aos-delay={index * 50}
          data-aos-duration="500"
        >
          <div className="item-icon">
            <item.icon className="item-icons" />
          </div>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skill;
