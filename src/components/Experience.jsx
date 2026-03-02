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
    <h2>Graduate Studies Programr</h2>
    <h3>Zoho Schools of Learning</h3>
    <span className="timeline-date">Jan 2026 – Present</span>

    <p>
      Currently undergoing incubation training in the Graduate Studies Program
      at Zoho Schools of Learning, focusing on full stack development and
      industry-level software practices.
    </p>

    <ul>
      <li>Studying Java, HTML, CSS, DBMS, DSA, and JDBC</li>
      <li>Learning full stack development concepts and real-world practices</li>
      <li>Collaborating with teammates and college peers</li>
      <li>Learning from experienced developers and contributing to projects</li>
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
