import React from "react";
import emailjs from "@emailjs/browser";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    "service_j4qh9lp",        // service ID
    "template_t9ljsuk",       // ✅ REAL template ID
    e.target,
    "rXkXEza46sjygpQlF"       // ✅ REAL public key
  )
  .then(() => {
    alert("Message sent successfully!");
    e.target.reset();
  })
  .catch((error) => {
    console.error("EmailJS error:", error);
    alert("Failed to send message. Try again.");
  });
};

  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">Get In Touch</h1>
      <p className="contact-subtitle">
        Have a project, opportunity, or just want to say hi?
      </p>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <FaEnvelope />
            <p>purushothamanjerry03@gmail.com</p>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/purushothaman-s-076028286/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/purushothamanjerry"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>

            <a href="mailto:purushothamanjerry03@gmail.com">
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"                // ✅ REQUIRED
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"               // ✅ REQUIRED
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"             // ✅ REQUIRED
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
