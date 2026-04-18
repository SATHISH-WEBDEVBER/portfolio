import React from "react";
import DownloadButton from "../components/DownloadButton.jsx";
import TypedHeader from "../components/TypedHeader.jsx";
import ImageBox from "../components/ImageBox.jsx";
import "../css/Header.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const Header = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <div className="header" id="home">
        <div className="header-content" data-aos="fade-right" data-aos-duration="900">
          <h3 className="title-1 animate-slide-down">{t.headerGreeting}</h3>
          <h1 className="title-name animate-slide-up">{t.headerName}</h1>
          <span className="title-role">
            <TypedHeader />
          </span>
          <p className="title-description animate-fade-in">
            {t.headerDescription}
          </p>
          <div className="header-links">
            <div>
              <span>
                <DownloadButton />
              </span>
            </div>
            <div className="header-social-links-container">
              <span className="header-social-links">
                <a
                  href="https://github.com/SATHISH-WEBDEVBER"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="social-icon" />
                  <p>Github</p>
                </a>
              </span>
              <span className="header-social-links">
                <a
                  href="https://www.linkedin.com/in/sathishs07"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="social-icon" />
                  <p>LinkedIn</p>
                </a>
              </span>
              <span className="header-social-links">
                <a
                  href="https://x.com/Sathish_MS1589"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="social-icon" />
                  <p>Twitter</p>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
          <ImageBox />
        </div>
      </div>
    </>
  );
};

export default Header;
