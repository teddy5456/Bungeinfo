import React from 'react';
import './Hero.css'; // Import your CSS file

function Hero() {
  return (
    <div className="heroo">
      <div id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-text">
           <div className='white-outer'>
            <div className='white'>
                <img src={require('../assets/4541387-removebg-preview.png')} alt="Image Description" />
              </div>
           </div>
            
            
            <h2>Welcome to the Parliament of Kenya</h2>
            <p>Discover the rich history and significance of the Parliament of Kenya.</p>
          </div>

          <div className="hero-image-container">
            <div className="image-overlay"></div>
            <img
              className="hero-image"
              src="http://www.parliament.go.ke/sites/default/files/articles/backGround.jpg"
              alt="Hero Background"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
