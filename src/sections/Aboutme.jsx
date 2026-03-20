import React from "react";
import { FaLocationArrow } from "react-icons/fa";

import "../css/Aboutme.css";

import logo from "../assets/image/profile1.jpeg";

const Aboutme = () => {
  return (
    <section id="about">
      <div className="aboutmain">
        {/* Image on the Left */}
        <div className="aboutimage" data-aos="zoom-in-right">
          <img className="mainimage" src={logo} alt="Profile" />
        </div>
        
        {/* Content on the Right */}
        <div className="aboutcontent" data-aos="zoom-in-left">
          <h1>About Me</h1>
          <h3>Full Stack Developer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis, adipisci. Iusto nostrum saepe totam delectus tempora
            dicta exercitationem eos repellat deserunt sunt fugiat suscipit, quo
            quod ipsum soluta beatae reiciendis provident aperiam eligendi odit?
            Cupiditate aspernatur, eveniet ex minima fugit modi corporis enim
            tempore rem ipsam veritatis sint delectus facilis.
          </p>
          <span>
            <button className="aboutbutton">
              <span>Contact Me</span>
              <span className="abouticon">
                <FaLocationArrow />
              </span>
            </button>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;