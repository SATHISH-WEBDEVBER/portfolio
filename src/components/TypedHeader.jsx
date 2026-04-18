import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../css/TypedHeader.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const TypedHeader = () => {
  const typedRef = useRef(null);
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const typed = new Typed("#typed-text", {
      strings: t.typedStrings,
      typeSpeed: 90,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
    });
    typedRef.current = typed;
    return () => {
      typed.destroy();
    };
  }, [language]);

  return (
    <h3 className="typed-header">
      {language === "en" ? "I Am" : "நான்"}
      <span id="typed-text" className="typed-text"></span>
    </h3>
  );
};

export default TypedHeader;
