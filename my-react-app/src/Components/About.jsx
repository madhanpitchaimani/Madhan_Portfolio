import React from 'react';
import './about.css';

function About() {
  return (
    <div className="about-page" id='about'>
      <div className="image-2">
        <img src="photo2.png" alt="Madhan P" />
      </div>

      <div className="description">
        <h1>About Me</h1>
        <p>
          👋 Hi, I’m <strong>Madhan P</strong>, a passionate and aspiring Full Stack Developer currently pursuing a B.E. in Computer Science. I specialize in building responsive web applications using React.js, MongoDB, MySQL, and REST APIs. I’ve worked on various projects like an HRMS dashboard, an E‑commerce site, and a dynamic Chef Spot booking platform with features such as chef exploration and event reservation using json‑server. With hands‑on internship experience and a good grasp of UI/UX design using Figma, I aim to create clean, user‑friendly digital experiences. I’m always eager to learn and collaborate on innovative solutions.
        </p>

        <div className="social-resume-wrapper">
          <div className="social-icons">
            <a href="https://github.com/madhanpitchaimani" target="_blank" rel="noopener noreferrer">
              <img src="Github.svg" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/madhan-p-8676b424a/" target="_blank" rel="noopener noreferrer">
              <img src="linkedin.svg" alt="LinkedIn" />
            </a>
          </div>

          <div className="resume-button">

            <a href="Madhan_P_Resume.pdf?v=latest" download="Madhan_P_Resume.pdf">
              <button>Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
