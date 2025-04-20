import React from 'react';
import './Navbar.css';
import swadeshLogo from './images/swadeshLogo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
       <div className="logo">स्वदेश</div>
       {/* <div className="logo">SwaDesh</div> */}
      <ul className="nav-links">
        <li><button className="btn">Sign in</button></li>
        <li><button className="btn">Sign up</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
