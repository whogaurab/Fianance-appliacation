// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Stay In Control Your Finances With Allenare</h1>
        <p>Welcome to Allenare</p>
        <button className="cta-button">Open Account</button>
      </div>
      <div className="hero-image">
        <img src="./src/assets/buildings.png" alt="Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
