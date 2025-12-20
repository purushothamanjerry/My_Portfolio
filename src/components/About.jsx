import React from "react";
import "./About.css";

const About = () => {
  // Joining date: Oct 29, 2024
  const joiningDate = new Date("2025-10-29");
  const currentDate = new Date();

  const diffInMonths =
    (currentDate.getFullYear() - joiningDate.getFullYear()) * 12 +
    (currentDate.getMonth() - joiningDate.getMonth());

  const experience =
    diffInMonths < 12
      ? `${diffInMonths} months`
      : `${(diffInMonths / 12).toFixed(1)} years`;

  return (
    <section className="about-section" id="about">
      <h1 className="about-title">About Me</h1>

      <div className="about-container">
        <div className="about-content">
          <h2>Backend Developer | Java / Spring Boot</h2>

          <p className="about-summary">
            Backend Developer with hands-on experience in building REST APIs using
            Spring Boot and MongoDB. Currently working as an Associate Software
            Developer at LetNext Technologies, focusing on backend development,
            API design, and deployment.
          </p>

          <p className="about-summary">
            I have approximately <span>{experience}</span> of professional
            experience, during which I have worked on real-time projects,
            implemented secure backend logic, and deployed applications using
            Docker and cloud platforms.
          </p>

          <div className="about-tech">
            <h3>Core Technical Skills</h3>
            <ul>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>HTML & CSS</li>
              <li>PHP</li>
            </ul>
          </div>

          <div className="about-role">
            <p>
              🎯 <strong>Looking for roles:</strong> Backend Developer / Java
              Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
