import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-subtitle">— what I know —</p>

      <div className="projects-slider">

        {/* Card 1 */}
        <div className="project-card">
          <div className="project-image">
            <span>📚</span>
          </div>
          <h2>Library Management System</h2>
          <p>
            Microservices-based backend system built using Spring Boot with
            role-based authentication, MongoDB CRUD operations, and Dockerized
            deployment.
          </p>
          <span className="project-status">Backend Developer</span>
          <button>View Project</button>
        </div>

        {/* Card 2 */}
        <div className="project-card">
          <div className="project-image">
            <span>🗳️</span>
          </div>
          <h2>My Vote</h2>
          <p>
            Secure online voting platform that allows users to register,
            authenticate, and cast votes using PHP backend and MySQL database.
          </p>
          <span className="project-status">Backend Developer</span>
          <button>View Project</button>
        </div>

        {/* Card 3 */}
        <div className="project-card">
          <div className="project-image">
            <span>🎓</span>
          </div>
          <h2>Student Management System</h2>
          <p>
            Console-based Java application for managing student records using
            core Java and object-oriented programming principles.
          </p>
          <span className="project-status">Java Developer</span>
          <button>View Project</button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
