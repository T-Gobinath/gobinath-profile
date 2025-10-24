import React from 'react';
import profilePic from '../assets/Gemini.png';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header" id="header">
      <img src={profilePic} alt="Gobinath T" className="profile-pic" />
      <h1>Gobinath T</h1>
      <h2>Full-Stack Java Developer</h2>
      
      <div className="header-contact-links">
        <a href="https://www.linkedin.com/in/t-gobinath" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="mailto:gobinathdev@icloud.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="tel:+918015277175" aria-label="Phone">
          <FaPhone />
        </a>
      </div>

      <div className="header-buttons">
        {/* --- THIS BUTTON'S LINK HAS BEEN CHANGED --- */}
        <a href="#contact" className="btn">Contact Me</a>
        
        <a href="/Gobinath_T_Resume.pdf" download="Gobinath_T_Resume.pdf" className="btn">
          Download Resume
        </a>
        <a href="https://github.com/T-Gobinath" target="_blank" rel="noopener noreferrer" className="btn">
          View My GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;