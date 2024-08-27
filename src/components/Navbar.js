import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {
  // script.js

let lastScrollTop = 0; // Track the last scroll position
const navbar = document.querySelector('.navbar-header'); // Select the navbar

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
  if (currentScroll > lastScrollTop) {
    // Scrolling down
    navbar.style.top = '-80px'; // Hide the navbar (adjust height as needed)
  } else {
    // Scrolling up
    navbar.style.top = '0'; // Show the navbar
  }
  
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

  return (
    <header className="navbar-header">
      <div className="navbar-logo">
      <div className="hero-images">
          <img
            className="hero-imag"
            src={require('../assets/4541387-removebg-preview.png')}
            alt="Parliament of Kenya"
          />
         
        </div>
        <h1>Parliament</h1>
      </div>
      
      <div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about-parliament" className="navbar-link">About Parliament</Link>
          </li>
          <li className="navbar-item">
            <Link to="/speakers" className="navbar-link">Speakers</Link>
          </li>
          <li className="navbar-item">
            <Link to="/history" className="navbar-link">History</Link>
          </li>
          <li className="navbar-item">
            <a href="#contact" className="navbar-link">Contact and Feedback</a>
          </li>

        </ul>
      </nav>
      </div>
     
    </header>
  );
}

export default Navbar;
