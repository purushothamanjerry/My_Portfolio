import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h1 className="experience-title">Work Experience</h1>

      <div className="timeline">

        {/* Current Role */}
        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <div className="timeline-card">
            <h2>Associate Software Developer</h2>
            <h3>LetNext Technologies</h3>
            <span className="timeline-date">Oct 2024 – Present</span>

            <p>
              Working as a Backend Developer, responsible for designing,
              developing, and maintaining backend services using Java and
              Spring Boot. Actively involved in REST API development,
              database operations, and deployment workflows.
            </p>

            <ul>
              <li>Designed and maintained RESTful APIs</li>
              <li>Worked with MongoDB and MySQL databases</li>
              <li>Used Docker for containerization and deployments</li>
              <li>Collaborated with team members to ensure code quality</li>
            </ul>
          </div>
        </div>

        {/* Internship */}
        <div className="timeline-item">
          <span className="timeline-dot"></span>

          <div className="timeline-card">
            <h2>Backend Developer – Intern</h2>
            <h3>K S R College of Engineering (R&D Team)</h3>
            <span className="timeline-date">July 2024 – Nov 2024</span>

            <p>
              Worked on a real-time Hostel Management System as a Backend
              Developer Intern, focusing on API development and server-side
              database management.
            </p>

            <ul>
              <li>Developed REST APIs for hostel data management</li>
              <li>Deployed backend services on AWS EC2</li>
              <li>Managed MySQL database directly on the server</li>
              <li>Worked with real-time project requirements</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
