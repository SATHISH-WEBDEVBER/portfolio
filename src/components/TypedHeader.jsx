import React, { useEffect } from "react";
import Typed from "typed.js";
import "../css/TypedHeader.css";

const TypedHeader = () => {
  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: [
        "Frontend Developer",
        "Junior Backend Developer",
        "React Developer",
        "Digital Marketer",
        "IoT Enthusiast",
        "NodeMCU Programmer",
        "Embedded Systems Learner",
      ],
      typeSpeed: 90,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <h3 className="typed-header">
      I Am
      <span id="typed-text" className="typed-text"></span>
    </h3>
  );
};

export default TypedHeader;