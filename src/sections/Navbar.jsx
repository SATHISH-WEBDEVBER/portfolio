import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import "../css/Navbar.css";
import logo from "../../public/logo.png";
import { IoReorderThreeOutline, IoClose } from "react-icons/io5";

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScroll, setPrevScroll] = useState(window.scrollY);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const idleTimerRef = useRef(null);
  const idleMouseTimerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // ✅ Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Mouse move idle detection (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = () => {
      clearTimeout(idleMouseTimerRef.current);
      setShowNavbar(true);
      idleMouseTimerRef.current = setTimeout(() => {
        if (!isHovered) {
          setShowNavbar(false);
        }
      }, 2000);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(idleMouseTimerRef.current);
    };
  }, [isMobile, isHovered]);

  // ✅ Scroll detection (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        setShowNavbar(true);
        return;
      }

      const currentScroll = window.scrollY;

      if (currentScroll < 10 || currentScroll < prevScroll || isHovered) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      setPrevScroll(currentScroll);

      clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        if (!isHovered) setShowNavbar(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimerRef.current);
    };
  }, [prevScroll, isHovered, isMobile]);

  // ✅ Active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSectionId = section.getAttribute("id");
        }
      });

      document.querySelectorAll(".nav-item").forEach((link) => {
        link.classList.remove("active");
        const href = link.getAttribute("href");
        if (href === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar ${showNavbar ? "visible" : "hidden"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="">
        <div className="navbar-start">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <h1
            className={`navbar-title ${
              language === "en" ? "navbar-title-en" : "navbar-title-ta"
            }`}
          >
            {t.title}
          </h1>
        </div>
      </a>
      {/* Toggle Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? (
          <IoClose size={30} />
        ) : (
          <IoReorderThreeOutline size={30} />
        )}
      </div>

      {/* Sliding Navbar */}
      <nav className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <ul
          className={`navbar-list ${
            language === "en" ? "navbar-list-en" : "navbar-list-ta"
          }`}
        >
          <li>
            <a
              href="#home"
              className={`nav-item ${
                language === "en" ? "nav-item-en" : "nav-item-ta"
              }`}
              onClick={toggleMenu}
            >
              {t.home}
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`nav-item ${
                language === "en" ? "nav-item-en" : "nav-item-ta"
              }`}
              onClick={toggleMenu}
            >
              {t.about}
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className={`nav-item ${
                language === "en" ? "nav-item-en" : "nav-item-ta"
              }`}
              onClick={toggleMenu}
            >
              {t.resume}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`nav-item ${
                language === "en" ? "nav-item-en" : "nav-item-ta"
              }`}
              onClick={toggleMenu}
            >
              {t.projects}
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`nav-item ${
                language === "en" ? "nav-item-en" : "nav-item-ta"
              }`}
              onClick={toggleMenu}
            >
              {t.contact}
            </a>
          </li>
          {/* <li className="lang-toggle" onClick={toggleLanguage}>
            <span className="lang-btn">
              {language === "en" ? "தமிழ்" : "English"}
            </span>
          </li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
