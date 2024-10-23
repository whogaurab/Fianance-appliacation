// src/components/Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Bankorio</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
