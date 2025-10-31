import React from "react";
import "../css/ImageBox.css"; // replace with your actual CSS path


import logo from "../assets/image/img3.png";

const ImageBox = () => {
  return (
    <div className="img-wrapper">
      <div className="img-box home-img">
        <img src={logo} alt="Profile" className="header-image"/>
      </div>
    </div>
  );
};

export default ImageBox;
