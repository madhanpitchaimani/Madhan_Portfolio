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
              <div className="timeline-dot"></div>
              <h3>B.E. Computer Science</h3>
              <h4>NPR Engineering College, Natham</h4>
              <p>Expected: June 2026 | CGPA: 7.51</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>HSC - Computer Science</h3>
              <h4>Prajna Matric Hr Sec School</h4>
              <p>2022 | Percentage: 74%</p>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>SSLC</h3>
              <h4>Prajna Matric Hr Sec School</h4>
              <p>2020 | Percentage: 63%</p>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h2>💼 Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>Web Developer Intern</h3>
              <h4>Simpery Pvt Ltd (Remote)</h4>
              <p className="timeline-date">Jan 2025 – Mar 2025</p>
              <ul>
                <li>Built full-stack HRMS using React.js, MongoDB, MySQL</li>
                <li>Implemented JWT auth & REST APIs</li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>Web Developer Intern (Intermediate)</h3>
              <h4>Bharath Intern (Online)</h4>
              <p className="timeline-date">Sep 2024 – Oct 2024</p>
              <ul>
                <li>Developed personal portfolio & landing pages using React</li>
                <li>Built temperature converter app</li>
              </ul>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3>Web Developer Intern (Beginner)</h3>
              <h4>Oasis Infobyte (Online)</h4>
              <p className="timeline-date">Mar 2023 – Apr 2023</p>
              <ul>
                <li>Learned HTML & CSS fundamentals</li>
                <li>Created basic responsive pages</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h2 className="skills-heading">SKILLS</h2>
        <div className="skill-cards">
          <div className="skill-box">
            <h3>Languages</h3>
            <p>Java • Python</p>
          </div>
          <div className="skill-box">
            <h3>Frontend</h3>
            <p>HTML • CSS • JavaScript • React.js</p>
          </div>
          <div className="skill-box">
            <h3>Backend</h3>
            <p>Node.js • Express • REST API • JWT</p>
          </div>
          <div className="skill-box">
            <h3>Database</h3>
            <p>MySQL • MongoDB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
