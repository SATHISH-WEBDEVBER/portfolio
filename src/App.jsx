// App.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./sections/Navbar";
import Home from "./sections/Header.jsx";
import Resume from "./sections/ResumeSection.jsx";
import Projects from "./sections/ProjectSection.jsx";
import Contact from "./sections/Contact.jsx";
import "./App.css";
import Aboutme from "./sections/Aboutme.jsx";

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // prevent re-triggering
      easing: "ease-in-out",
      offset: 100,
    });
    AOS.refresh();
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
    </>
  );
};

export default App;
