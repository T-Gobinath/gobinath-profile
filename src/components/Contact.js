import React from 'react';
// --- 1. FaGithub icon is removed here ---
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaPhone, FaTelegram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-text-content">
          <h2 className="section-title">Get In Touch</h2>
          <p>
            My inbox is always open. Whether you have a question, a project proposal, or just want to say hello, feel free to reach out. I'll get back to you as soon as possible!
          </p>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <div className="contact-info">
              <h4>Email</h4>
              <a href="mailto:gobinathdev@icloud.com">gobinathdev@icloud.com</a>
            </div>
          </div>

          <div className="contact-item">
            <FaPhone className="icon" />
            <div className="contact-info">
              <h4>Phone</h4>
              <a href="tel:+918015277175">+91 80152 77175</a>
            </div>
          </div>

          <div className="contact-item">
            <FaLinkedin className="icon" />
            <div className="contact-info">
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/t-gobinath" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/t-gobinath
              </a>
            </div>
          </div>

          <div className="contact-item">
            <FaWhatsapp className="icon" />
            <div className="contact-info">
              <h4>WhatsApp</h4>
              <a href="https://wa.me/918015277175" target="_blank" rel="noopener noreferrer">
                +91 80152 77175
              </a>
            </div>
          </div>

          <div className="contact-item">
            <FaTelegram className="icon" />
            <div className="contact-info">
              <h4>Telegram</h4>
              <a href="https://t.me/tgobinath" target="_blank" rel="noopener noreferrer">
                @tgobinath
              </a>
            </div>
          </div>
          
          {/* --- 2. GITHUB SECTION HAS BEEN REMOVED --- */}

        </div>
      </div>
    </section>
  );
};

export default Contact;