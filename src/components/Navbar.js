import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';


function Navbar() {

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
            <Link to="/history-of-parliament" className="navbar-link">Buildings</Link>
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
