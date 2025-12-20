import React from "react";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section className="cert-section" id="certifications">
      <h1 className="cert-title">Certifications & Publications</h1>

      <div className="cert-container">
        {/* Certifications */}
        <div className="cert-card">
          <h2>Certifications</h2>

          <ul className="cert-list">
            <li>
              <span>Java Full Course</span>
              <small>Udemy</small>
            </li>
            <li>
              <span>C Programming Certification</span>
              <small>Udemy</small>
            </li>
            <li>
              <span>Spring Boot Development</span>
              <small>Infosys Springboard</small>
            </li>
          </ul>
        </div>

        {/* Publications */}
        <div className="cert-card">
          <h2>Publications</h2>

          <div className="publication">
            <p className="pub-title">
              A Comprehensive Secured Digital Voting System using Web
              Development and Blockchain
            </p>

            <p className="pub-author">
              S. Purushothaman
            </p>

            <p className="pub-details">
              2025 International Conference on Intelligent Computing and
              Control Systems (ICICCS), IEEE, Erode, India
            </p>

            <p className="pub-date">
              March 19–21, 2025
            </p>

            <p className="pub-doi">
              DOI: 10.1109/ICICCS65191.2025.10985218
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
