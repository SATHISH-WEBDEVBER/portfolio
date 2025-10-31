import React from "react";

import DownloadButton from "../components/DownloadButton.jsx";
import TypedHeader from "../components/TypedHeader.jsx";
import ImageBox from "../components/ImageBox.jsx";
import "../css/Header.css"; // Assuming you have a CSS file for styling

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdFileDownload } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="header" id="home">
        <div className="header-content" data-aos="zoom-in-right">
          <h3 className="title-1">Hello It's Me</h3>
          <h1 className="title-name">Sathish S</h1>
          <span className="title-role">
            <TypedHeader />
          </span>
          <p className="title-description">
            I'm a passionate Full Stack Developer skilled in NodeMCU-based IoT
            projects, MERN Stack, and Responsive Web Design. I enjoy building
            real-time, user-friendly applications using modern technologies. I'm
            also exploring AI integration and love turning innovative ideas into
            working products.
          </p>
          <div className="header-links">
            <div>
              <span>
                <DownloadButton />
              </span>
            </div>
            <div className="header-social-links-container">
              <span className="header-social-links">
                <a href="">
                  <FaGithub className="social-icon" />
                  <p>Github</p>
                </a>
              </span>
              <span className="header-social-links">
                <a href="">
                  <FaLinkedin className="social-icon" />
                  <p>LinkedIn</p>
                </a>
              </span>
              <span className="header-social-links">
                <a href="">
                  <FaXTwitter className="social-icon" />
                  <p>Twitter</p>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in-left">
          <ImageBox />
        </div>
      </div>
    </>
  );
};

export default Header;
