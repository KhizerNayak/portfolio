import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../cssFold/Footer.css'; // Import your CSS file if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Khizer Nayak. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-and-conditions">Terms of Service</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
        <ul className="footer-social">
          <li><a href="https://www.instagram.com/Khizernayak.io" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://github.com/KhizerNayak" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
          <li><a href="https://www.linkedin.com/in/khizer-nayak" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
