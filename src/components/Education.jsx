// components/ResumeSection/Education.jsx
import React from "react";
import "../css/Education.css";

const Education = ({ data, isActive }) => {
  return (
    <div className={`tab-grid resume-box education ${isActive}`}>
      {data.map((item, index) => (
        <div
          className="tab-item resume-item education-item"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 70}
          data-aos-duration="600"
        >
          <h4>{item.year}</h4>
          <h4>{item.course}</h4>
          <h4>{item.platform}</h4>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;
