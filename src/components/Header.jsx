import React from "react";
import Navigation from "./Navigation";
import "./HeaderSection.css";

const HeaderSection = () => {
  return (
    <header className="header-section" id="home">

      <div className="header-content">
        <h1 className="header-name">Purushothaman S</h1>

        <h2 className="header-role">
          Backend Developer <span>| Java / Spring Boot</span>
        </h2>

        <p className="header-summary">
          Backend Developer with hands-on experience in building secure and
          scalable REST APIs using Spring Boot and MongoDB. Currently working
          as an Associate Software Developer at LetNext Technologies, focusing
          on backend development, API design, and deployment.
        </p>

        <div className="header-actions">
          <a href="#projects" className="btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
