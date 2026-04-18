import React, { useState } from "react";
import { MdFileDownload } from "react-icons/md";
import { GoPaperAirplane } from "react-icons/go";
import { MdFileDownloadDone } from "react-icons/md";
import "../css/DownloadButton.css";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const DownloadButton = () => {
  const [phase, setPhase] = useState("default"); // default, loading, success
  const { language } = useLanguage();
  const t = translations[language];

  const handleDownload = () => {
    if (phase !== "default") return;
    setPhase("loading");

    const link = document.createElement("a");
    link.href = "/Sathish_Resume.pdf";
    link.download = "Sathish_Resume.pdf";
    link.click();

    setTimeout(() => {
      setPhase("success");
    }, 1500);

    setTimeout(() => {
      setPhase("default");
    }, 3500);
  };

  return (
    <span className="header-call-to-action" onClick={handleDownload}>
      {phase === "default" && (
        <>
          <p>{t.headerDownload}</p>
          <span>
            <MdFileDownload />
          </span>
        </>
      )}

      {phase === "loading" && (
        <span className="rocket-fly">
          <GoPaperAirplane />
        </span>
      )}

      {phase === "success" && (
        <p className="success-message">
          {t.headerDownloaded} <MdFileDownloadDone className="downloaddone" />
        </p>
      )}
    </span>
  );
};

export default DownloadButton;
