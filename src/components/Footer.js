import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h2 className="footer-title">Parliament of Kenya</h2>
          <p className="footer-description">
            Explore the rich history and dynamic role of the Parliament of Kenya. Stay connected and informed with the latest updates and legislative activities.
          </p>
          <div className="footer-social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <h3 className="footer-links-title">Quick Links</h3>
          <ul className="footer-links-list">
            <li><a href="/about">About Us</a></li>
            <li><a href="/history">History</a></li>
            <li><a href="/structure">Structure</a></li>
            <li><a href="/functions">Functions</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Parliament of Kenya. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
