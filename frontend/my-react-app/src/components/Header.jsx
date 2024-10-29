// src/components/Header.jsx
import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1><a href=".?"></a>Allenare</h1>
        </div>
        <nav className="navbar">
          <ul>
            
            <li class="dropdown"><a href="#services">Services</a>
              <div class="dropdown-content">
                            <a href="product-page/manufacturing.html">Manufacturing Plants</a>
                            <a href="product-page/distribution.html">Distribution Centers</a>
                            <a href="product-page/data.html">Data Centers</a>
                            <a href="product-page/industrial.html">Industrial Warehouses</a>
              </div>
            </li>
            <li><Link to="#">Pricing</Link></li>
            <li><Link to="#">About Us</Link></li>
            <li><Link to="/contact">contact</Link></li>
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
