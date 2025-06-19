import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/madhanpitchaimani" target="_blank" rel="noopener noreferrer">
          <img src="Github.svg" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/madhan-p-8676b424a/" target="_blank" rel="noopener noreferrer">
          <img src="linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="mailto:madhanpitchaimani@gmail.com">
          <img src="mail.svg" alt="Email" />
        </a>
      </div>
      <p>© 2025 <strong>Madhan P</strong>. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
