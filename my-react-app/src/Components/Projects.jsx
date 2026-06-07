import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container" id='projects'>
      <h1 className="projects-title">Featured Projects</h1>

      <div className="project-cards">
        <div className="project-card">
          <div className="project-image">
            <img src="project1.png" alt="Hyper Launch Project" />
          </div>
          <div className="project-info">
            <h3>Hyper Launch Project</h3>
            <p>A dynamic web application highlighting responsive UI and components.</p>
            <a href="https://github.com/madhanpitchaimani/Hyper-Launch-Project.git" target="_blank" rel="noopener noreferrer">
              <button>View on GitHub</button>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-image">
            <img src="music.png" alt="Music Concert Platform" />
          </div>
          <div className="project-info">
            <h3>Music Concert</h3>
            <p>A dynamic platform for exploring and reserving music concerts.</p>
            <a href="https://github.com/madhanpitchaimani/Music-Concert.git" target="_blank" rel="noopener noreferrer">
              <button>View on GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
