import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import AboutParliament from './AboutParliament';

function Navbar() {
  return (
    <header>
    <div className='loko'>
    <h1>Parliament</h1>
    <p>info</p>
    </div>
      
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-parliament">About Parliament</Link>
        </li>
        <li>
          <Link to="/speakers">Speakers</Link>
        </li>
          <li className='weird'><a href="#contact">Contact and Feedback</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
