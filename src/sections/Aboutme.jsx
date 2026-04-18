import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import "../css/Aboutme.css";
import logo from "../assets/image/profile3.jpeg";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Aboutme = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about">
      <div className="aboutmain">
        {/* Image on the Left */}
        <div className="aboutimage" data-aos="zoom-in-right" data-aos-duration="800">
          <img className="mainimage" src={logo} alt="Profile" />
        </div>

        {/* Content on the Right */}
        <div className="aboutcontent" data-aos="zoom-in-left" data-aos-duration="800" data-aos-delay="150">
          <h1>{t.aboutTitle}</h1>
          <h3>{t.aboutRole}</h3>
          <p>{t.aboutDescription}</p>
          <span>
            <a href="#contact">
              <button className="aboutbutton">
                <span>{t.aboutButton}</span>
                <span className="abouticon">
                  <FaLocationArrow />
                </span>
              </button>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
