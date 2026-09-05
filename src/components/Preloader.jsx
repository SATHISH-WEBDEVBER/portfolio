import React, { useEffect, useState, useRef } from "react";
import logo from "../../public/logo.png";
import "../css/Preloader.css";

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState("loading"); // "loading" | "fadeText" | "fly" | "done"
  const [flyStyle, setFlyStyle] = useState({});
  const logoWrapperRef = useRef(null);

  const onCompleteRef = useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    // 1. Progress counter 0 to 100 over ~2.8s
    const duration = 2800;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    // 2. Fade out welcome text & circular progress at 3.0s
    const textTimer = setTimeout(() => {
      setStage("fadeText");
    }, 3000);

    // 3. Dynamic flight animation to exact navbar logo coordinates at 3.4s
    const flyTimer = setTimeout(() => {
      setStage("fly");

      const targetEl =
        document.getElementById("main-navbar-logo") ||
        document.querySelector(".navbar-logo");

      if (targetEl && logoWrapperRef.current) {
        const targetRect = targetEl.getBoundingClientRect();
        const logoRect = logoWrapperRef.current.getBoundingClientRect();

        const translateX =
          targetRect.left +
          targetRect.width / 2 -
          (logoRect.left + logoRect.width / 2);
        const translateY =
          targetRect.top +
          targetRect.height / 2 -
          (logoRect.top + logoRect.height / 2);
        const scale = targetRect.width / logoRect.width;

        setFlyStyle({
          transform: `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`,
          opacity: 0.95,
        });
      }
    }, 3400);

    // 4. Complete transition at 4.1s
    const completeTimer = setTimeout(() => {
      setStage("done");
      if (onCompleteRef.current) onCompleteRef.current();
    }, 4100);

    return () => {
      clearInterval(interval);
      clearTimeout(textTimer);
      clearTimeout(flyTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (stage === "done") return null;

  // SVG Circle circumference r=80 -> 2 * PI * 80 ≈ 502.65
  const circumference = 502.65;
  const strokeDashoffset = circumference - (circumference * Math.min(progress, 100)) / 100;

  return (
    <div className={`preloader-overlay ${stage === "fly" ? "exiting" : ""}`}>
      <div className="preloader-stage">
        {/* Central Logo Container */}
        <div
          ref={logoWrapperRef}
          className="preloader-logo-wrapper"
          style={stage === "fly" ? flyStyle : {}}
        >
          {/* Orbital Rings */}
          <div className="ring-outer" />
          <div className="ring-inner" />
          <div className="ring-glow-pulse" />

          {/* Circular SVG Progress Bar */}
          <svg className="circular-progress-svg" viewBox="0 0 180 180">
            <circle className="circle-bg" cx="90" cy="90" r="80" />
            <circle
              className="circle-progress"
              cx="90"
              cy="90"
              r="80"
              style={{
                strokeDasharray: circumference,
                strokeDashoffset: strokeDashoffset,
              }}
            />
          </svg>

          {/* Center Logo Image */}
          <img
            src={logo}
            alt="Portfolio Logo"
            className="preloader-logo-img"
          />
        </div>

        {/* Progress & Welcome Message Container */}
        <div
          className={`preloader-progress-container ${
            stage === "fadeText" || stage === "fly" ? "fade-out" : ""
          }`}
        >
          <h2 className="preloader-welcome-text">
            Welcome to <span>My Portfolio</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
