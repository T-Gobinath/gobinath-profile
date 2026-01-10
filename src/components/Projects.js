import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-card">
        <h3>Chatee - Community Chat Application</h3>
        <p className="project-description">
          A full-stack community chat application designed to connect new people and share information. The application features a real-time chat interface and is fully deployed on Microsoft Azure, utilizing a REST API for seamless communication between the front-end and back-end.
        </p>
        <div className="tech-stack">
          <span>React</span>
          <span>Java</span>
          <span>Spring Boot</span>
          <span>PostgreSQL</span>
          <span>REST API</span>
          <span>Azure</span>
        </div>
        <div className="project-links">
          <a href="http://chatee-app.s3-website.eu-north-1.amazonaws.com/" target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
          <a href="https://github.com/T-Gobinath/Blog-Frontend-Az" target="_blank" rel="noopener noreferrer">
            <FaGithub /> Front-End Code
          </a>
          <a href="https://github.com/T-Gobinath/Blog-Bcakend-Az" target="_blank" rel="noopener noreferrer">
            <FaGithub /> Back-End Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
