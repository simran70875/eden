import React, { useState } from 'react';
import Btn from './btn';
import { FaBars, FaTimes } from 'react-icons/fa'; // Add icons
import images from '../theme/imagesPath';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div id="header">
      <div className="mobile-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <div className="navItems desktop-only">
        {/* Keep navItems only on desktop */}
        {['Home', 'Services', 'Clients', 'Packages', 'About', 'Contact Us'].map((item, i) => (
          <div className="navItem" key={i}>
            <a href="#" className="navItem">{item}</a>
          </div>
        ))}
      </div>

      <div className="navBtn desktop-only">
        <Btn padding="0 3rem">Login</Btn>
      </div>

      <div className="mobile-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars style={{color:'#fff', fontSize:"1.2rem"}}/>
      </div>

      {/* <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <FaTimes className="close-icon" onClick={() => setMenuOpen(false)} />
        {['Home', 'Services', 'Clients', 'Packages', 'About', 'Contact Us'].map((item, i) => (
          <a href="#" key={i} className="mobile-navItem">{item}</a>
        ))}
        <Btn padding="0 2rem">Login</Btn>
      </div> */}
    </div>
  );
};

export default Header;
