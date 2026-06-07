import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-brand">MADHAN P</h2>
        <div className="social-icons">
          <a href="https://github.com/madhanpitchaimani" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="Github.svg" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/madhan-p-8676b424a/" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src="linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="mailto:madhanpitchaimani@gmail.com" className="social-link">
            <img src="mail.svg" alt="Email" />
          </a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} <strong>Madhan P</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
