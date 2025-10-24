import React, { useState } from 'react';
import { FaCertificate } from 'react-icons/fa';
import './Certifications.css'; // Make sure you have this CSS file

const Certifications = () => {
    // State for modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // The 6 courses that are PART of the specialization
    const includedCourses = [
        {
            title: "Application Development",
            url: "https://coursera.org/share/85202af8764360dc8882d31b2e345b63"
        },
        {
            title: "Programming with Java",
            url: "https://coursera.org/share/b7fca19d495d4a98722e20fc67ad7dee"
        },
        {
            title: "Full Stack Web Development",
            url: "https://coursera.org/share/6e7f8087d18af5707a440b9a92cb6a82"
        },
        {
            title: "Generative AI in Software Development",
            url: "https://coursera.org/share/4c1a25a97e8acbdafee42698340a7339"
        },
        {
            title: "Database Management with Java and SQL",
            url: "https://coursera.org/share/d1dae4d44caa9fefe5597f31b420ae9c"
        },
        {
            title: "Introduction to Software Development",
            url: "https://coursera.org/share/79a2c0c9541acb7343a7353b799eadc0"
        }
    ];

    return (
        <section id="certifications">
            <h2 className="section-title">Certifications</h2>

            {/* ----- SINGLE, COMBINED CARD FOR THE SPECIALIZATION ----- */}
            <div className="certification-card">
                
                {/* --- Main Specialization Info --- */}
                <h3>Amazon Junior Software Developer Specialization</h3>
                <p className="issuer">Issued by Coursera & Amazon</p>
                <p className="date">Completed: August 8, 2025</p>
                <p className="project-description">
                    A comprehensive specialization covering software development fundamentals, Java programming, data structures, algorithms, databases with SQL, full-stack development, and Generative AI applications.
                </p>

                {/* --- Highlighted List of Included Courses --- */}
                <h4 className="included-courses-title">Specialization Courses Included:</h4>
                <ul className="certification-list">
                    {includedCourses.map((cert, index) => (
                        <li key={index}>
                            <a 
                                href={cert.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="credential-link"
                            >
                                <FaCertificate />
                                <span>{cert.title}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* --- MAIN POPUP BUTTON (at the very end) --- */}
                <button 
                    onClick={openModal} 
                    className="credential-button main-credential-button" // Added a new class
                >
                    <FaCertificate /> View Full Specialization Credential
                </button>
            </div>

            {/* ----- MODAL POPUP CODE (Stays the same) ----- */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div 
                        className="modal-content" 
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button className="modal-close-button" onClick={closeModal}>
                            &times;
                        </button>
                        <iframe 
                            src="/Coursera.pdf"
                            title="Coursera Certificate"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;