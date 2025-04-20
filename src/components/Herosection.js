import React from 'react';
import './HeroSection.css';
import swadeshLogo from './images/swadeshLogo.png';
// import groupImage from './images/group-image.png'; 

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <img src={swadeshLogo} alt="SwaDesh Logo Image" className="hero-image" />
        <h1 className="hero-heading">Discover unique treasures from local</h1>
        <div className="search-container">
          <input type="text" placeholder="Search products" className="search-input" />
          <button className="search-btn">
          <i class="fa fa-search"></i>
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
