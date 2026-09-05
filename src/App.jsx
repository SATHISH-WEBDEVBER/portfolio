import React, { useEffect, useState, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./sections/Navbar";
import Home from "./sections/Header.jsx";
import Resume from "./sections/ResumeSection.jsx";
import Projects from "./sections/ProjectSection.jsx";
import Contact from "./sections/Contact.jsx";
import Aboutme from "./sections/Aboutme.jsx";
import Preloader from "./components/Preloader.jsx";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = useCallback(() => {
    setLoading(false);
    // Remove any premature AOS classes added during preloading
    document.querySelectorAll("[data-aos]").forEach((el) => {
      el.classList.remove("aos-animate");
    });
    setTimeout(() => {
      AOS.init({
        duration: 900,
        once: true,
        easing: "ease-in-out",
        offset: 50,
      });
      AOS.refreshHard();
    }, 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      <div
        className={`main-app-container ${!loading ? "content-loaded" : ""}`}
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.6s ease-in-out",
        }}
      >
        <Navbar />
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <Aboutme />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
};

export default App;
