import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <h1>Madhan</h1>
        <div className="links">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
