import React from 'react';
import './education.css';

function Education() {
  return (
    <div className="education-page" id='education'>
      <div className="education-experience-container">
        <div className="timeline-section">
          <h2>🎓 Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>B.E. Computer Science</h3>
              <p>NPR Engineering College, Natham</p>
              <p>Expected: June 2026 | CGPA: 7.51</p>
            </div>
            <div className="timeline-item">
              <h3>HSC - Computer Science</h3>
              <p>Prajna Matric Hr Sec School</p>
              <p>2022 | Percentage: 74%</p>
            </div>
            <div className="timeline-item">
              <h3>SSLC</h3>
              <p>Prajna Matric Hr Sec School</p>
              <p>2020 | Percentage: 63%</p>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h2>💼 Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>Web Developer Intern – Simpery Pvt Ltd (Remote)</h3>
              <p>Jan 2025 – Mar 2025</p>
              <ul>
                <li>Built full-stack HRMS using React.js, MongoDB, MySQL</li>
                <li>Implemented JWT auth & REST APIs</li>
              </ul>
            </div>
            <div className="timeline-item">
              <h3>Web Developer Intern – Intermediate Level (Online)</h3>
              <p>Sep 2024 – Oct 2024</p>
              <ul>
                <li>Developed personal portfolio & landing pages using React</li>
                <li>Built temperature converter app</li>
              </ul>
            </div>
            <div className="timeline-item">
              <h3>Web Developer Intern – Beginner Level (Online)</h3>
              <p>Mar 2023 – Apr 2023</p>
              <ul>
                <li>Learned HTML & CSS fundamentals</li>
                <li>Created basic responsive pages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-section">
        <h2 className="skills-heading">SKILLS</h2>
        <div className="skill-cards">
          <div className="skill-box">
            <h3>LANGUAGES</h3>
            <div className="skill-underline"></div>
            <p>Java • Python</p>
          </div>
          <div className="skill-box">
            <h3>FRONTEND</h3>
            <div className="skill-underline"></div>
            <p>HTML • CSS • JavaScript • React Framework</p>
          </div>
          <div className="skill-box">
            <h3>BACKEND</h3>
            <div className="skill-underline"></div>
            <p>NodeJS • Express • REST API • JWT Authentication</p>
          </div>
          <div className="skill-box">
            <h3>DATABASE</h3>
            <div className="skill-underline"></div>
            <p>MySQL • MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
