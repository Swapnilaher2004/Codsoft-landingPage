import React from 'react';
import './HeaderFooter.css';

const HeaderFooter = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <span className="brand">Handicrafts</span>
        <nav>
          <a href="#local" className="nav-link">Local</a>
          <a href="#traditional" className="nav-link">Traditional</a>
          <a href="#customer" className="nav-link">Customer</a>
        </nav>
      </div>
      <div className="footer-right">
        <span>© SwaDesh 2024</span>
      </div>
    </div>
  );
};

export default HeaderFooter;
