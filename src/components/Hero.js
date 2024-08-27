import React from 'react';
import './Hero.css';


function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text-section">
          <h2>Welcome to the Parliament of Kenya</h2>
          <p>
            Explore the historical significance and the vital role that the Parliament of Kenya plays in the legislative process. Dive into the history, achievements, and contributions of the National Assembly and the Senate.
          </p>
          <a href="#learn-more" className="hero-button">Learn More</a>
        </div>

        <div className="hero-image-container">
                <img
                  className="hero-image"
                  src={require('../assets/backGround.jpg')}
                  alt="Hero Background"
                />
        </div>
      </div>

         
      <div className="info-section">
        <div className="info-card card-one">
          <div>
          <h4>Understanding the Bicameral Legislature</h4>
          <p>
            The Parliament of Kenya comprises two houses: the National Assembly and the Senate. Learn about their distinct roles and how they collaborate to govern the nation.
          </p>
          <a href="#bicameral" className="info-link">Learn More</a>
          </div>

        </div>

        <div className="info-card card-two">
  <div className="info-card-header">
    <h4>Latest News & Updates</h4>
  </div>
  <div className="info-card-content">
    <ul>
      <li>
        <div className="news-item">
          <div className="news-icon">
            <i className="fas fa-newspaper"></i>
          </div>
          <div className="news-details">
            <a href="#article1">The Evolution of Kenya's Parliamentary System</a>
            <p className="news-date">August 25, 2024</p>
          </div>
        </div>
      </li>
      <li>
        <div className="news-item">
          <div className="news-icon">
            <i className="fas fa-scroll"></i>
          </div>
          <div className="news-details">
            <a href="#article2">Key Legislation Passed in 2024</a>
            <p className="news-date">August 20, 2024</p>
          </div>
        </div>
      </li>
      <li>
        <div className="news-item">
          <div className="news-icon">
            <i className="fas fa-calendar-alt"></i>
          </div>
          <div className="news-details">
            <a href="#article3">Upcoming Sessions and Agendas</a>
            <p className="news-date">August 18, 2024</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div className="info-card-footer">
    <a href="#more-news" className="info-card-footer-link">View All News</a>
  </div>
</div>


      </div>
    </div>
  );
}

export default Hero;
