// import React, { useState } from "react";
// import {
//   experienceData,
//   skillsData,
//   educationData,
// } from "../translations/resumeData.js";
// import "../css/ResumeSection.css";

// const ResumeSection = () => {
//   const [activeTab, setActiveTab] = useState("experience");

//   const isActive = (tab) => (activeTab === tab ? "active" : "not-active");

//   return (
//     <section className="section resume" id="resume">
//       <h2 className="title">Resume</h2>

//       {/* Tab Navigation */}
//       <div className="tab-box">
//         <div
//           className={`tab-list resume-list ${isActive("experience")}`}
//           onClick={() => setActiveTab("experience")}
//         >
//           <h3>Experience</h3>
//         </div>
//         <div
//           className={`tab-list resume-list ${isActive("skills")}`}
//           onClick={() => setActiveTab("skills")}
//         >
//           <h3>Skill</h3>
//         </div>
//         <div
//           className={`tab-list resume-list ${isActive("education")}`}
//           onClick={() => setActiveTab("education")}
//         >
//           <h3>Education</h3>
//         </div>
//       </div>

//       {/* Tab Content */}
//       <div className="tab-wrapper">
//         {/* Experience */}
//         <div
//           className={`tab-grid resume-box experience ${isActive("experience")}`}
//         >
//           {experienceData.map((item, index) => (
//             <div data-aos="zoom-in">
//               <div className="tab-item resume-item experience-item" key={index}>
//                 <h4>{item.year}</h4>
//                 <h4>{item.role}</h4>
//                 <h4>{item.place}</h4>
//                 <p>{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Skills */}
//         <div className={`tab-grid resume-box skills ${isActive("skills")}`}>
//           {skillsData.map((item, index) => (
//             <div className="tab-item resume-item skills-item" key={index}>
//               <div className="item-icon">
//                 <item.icon className="item-icons" />
//               </div>
//               <p>{item.name}</p>
//             </div>
//           ))}
//         </div>

//         {/* Education */}
//         <div
//           className={`tab-grid resume-box education ${isActive("education")}`}
//         >
//           {educationData.map((item, index) => (
//             <div
//               className="tab-item resume-item education-item"
//               key={index}>
//                 <h4>{item.year}</h4>
//                 <h4>{item.course}</h4>
//                 <h4>{item.platform}</h4>
//                 <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ResumeSection;

// components/ResumeSection/ResumeSection.jsx
import React, { useState } from "react";
import "../css/ResumeSection.css";
import { experienceData, skillsData, educationData } from "../translations/resumeData.js";

import Experience from "../components/Experience.jsx";
import Skill from "../components/Skill";
import Education from "../components/Education";

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const isActive = (tab) => (activeTab === tab ? "active" : "not-active");

  return (
    <section className="section resume" id="resume">
      <h2 className="title">Resume</h2>

      {/* Tab Navigation */}
      <div className="tab-box">
        <div className={`tab-list resume-list ${isActive("experience")}`} onClick={() => setActiveTab("experience")}>
          <h3>Experience</h3>
        </div>
        <div className={`tab-list resume-list ${isActive("skills")}`} onClick={() => setActiveTab("skills")}>
          <h3>Skill</h3>
        </div>
        <div className={`tab-list resume-list ${isActive("education")}`} onClick={() => setActiveTab("education")}>
          <h3>Education</h3>
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
