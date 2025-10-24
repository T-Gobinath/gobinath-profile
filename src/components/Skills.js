import React from 'react';
import { 
  FaJava, FaReact, FaDatabase, FaCloud, FaTools, FaLaptopCode, FaAws, FaServer, 
  FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaTerminal, FaBrain, FaCloudUploadAlt 
} from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3><FaJava /> Back-End</h3>
          <ul>
            <li><FaJava /> Java</li>
            <li><FaServer /> Spring Boot</li>
            <li><FaLaptopCode /> REST API</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3><FaReact /> Front-End</h3>
          <ul>
            <li><FaReact /> React</li>
            <li><FaJs /> JavaScript</li>
            <li><FaHtml5 /> HTML</li>
            <li><FaCss3Alt /> CSS</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3><FaDatabase /> Databases</h3>
          <ul>
            <li><FaDatabase /> PostgreSQL</li>
            <li><FaDatabase /> MySQL</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3><FaCloud /> Cloud & DevOps</h3>
          <ul>
            <li><FaAws /> AWS (EC2)</li>
            <li><FaCloud /> Azure</li>
            <li><FaCloudUploadAlt /> End-to-End Deployment</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3><FaTools /> Developer Tools</h3>
          <ul>
            <li><FaGitAlt /> Git & <FaGithub /> GitHub</li>
            <li><FaLaptopCode /> IntelliJ IDEA & VS Code</li>
            <li><FaTerminal /> Postman</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3><FaLaptopCode /> AI-Assisted Development</h3>
          <ul>
            <li><FaGithub /> GitHub Copilot</li>
            <li><FaBrain /> Prompt Engineering</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;