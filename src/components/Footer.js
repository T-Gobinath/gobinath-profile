import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p>Designed & Built by Gobinath T © {currentYear}</p>
        </footer>
    );
};

export default Footer;