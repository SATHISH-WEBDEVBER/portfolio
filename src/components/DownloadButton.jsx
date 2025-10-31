import React, { useState } from "react";
import { MdFileDownload } from "react-icons/md";
import { GoPaperAirplane } from "react-icons/go";
import { MdFileDownloadDone } from "react-icons/md";

import "../css/DownloadButton.css"; // Assuming you have a CSS file for styling

const DownloadButton = () => {
  const [phase, setPhase] = useState("default"); // default, loading, success

  const handleDownload = () => {
    if (phase !== "default") return;

    setPhase("loading");

    // Start download
    const link = document.createElement("a");
    link.href = "/Sathish_Resume.pdf"; // public path
    link.download = "Sathish_Resume.pdf";
    link.click();

    // Rocket animation + downloaded message
    setTimeout(() => {
      setPhase("success");
    }, 1500);

    // Reset to normal
    setTimeout(() => {
      setPhase("default");
    }, 3500);
  };

  return (
    <span className="header-call-to-action" onClick={handleDownload}>
      {phase === "default" && (
        <>
          <p>Download CV</p>
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
          Downloaded <MdFileDownloadDone className="downloaddone"/>
        </p>
      )}
    </span>
  );
};

export default DownloadButton;
