import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container" id='projects'>
      <h1 className="projects-title">My Projects</h1>

      <div className="project-cards">
        <div className="project-card-1">
          <img src="project1.png" alt="Project 1" />
          <a href="https://github.com/madhanpitchaimani/Hyper-Launch-Project.git" target="_blank" rel="noopener noreferrer">
            <button>GitHub</button>
          </a>
        </div>

        <div className="project-card-2">
          <img src="Employee.png" alt="Employee Management System" />
          <a href="https://github.com/yourusername/employee-project" target="_blank" rel="noopener noreferrer">
            <button>GitHub</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
