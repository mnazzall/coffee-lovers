import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css"

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  React.useEffect(() => {
    if (navOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [navOpen]);

  const handleHamburgerClick = () => {
    setNavOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <span className="logo"><img src="photos/logo.png" alt="coffee logo" /></span>
        <span className="logo-name">Coffee Lovers</span>
      </div>
      <div className="hamburger" onClick={handleHamburgerClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navLinks${navOpen ? " active" : ""}`}>
        <nav>
          <ul className="nav-list">
            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
            <li><Link to="/services" onClick={handleLinkClick}>Services</Link></li>
            <li><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
