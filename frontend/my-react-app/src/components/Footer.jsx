// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Bankorio</h3>
          <p>Download Our App</p>
          <div className="app-buttons">
            <button>App Store</button>
            <button>Google Play</button>
          </div>
        </div>
        <div className="footer-right">
          <p>© 2024 Bankorio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
