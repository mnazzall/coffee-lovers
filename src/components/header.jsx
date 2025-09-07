import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  function closeNav() {
    setIsOpen(false);
  }

  return (
    <header className="header">
      <div className="logo-container">
        <span className="logo">
          <img src="/coffee-lovers/photos/logo.png" alt="coffee logo" />
        </span>
        <span className="logo-name">Coffee Lovers</span>
      </div>

      <div className="openList">
        <button id="openListButton" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {isOpen && <div className="overlay" onClick={closeNav}></div>}

      <nav className={`navLinks ${isOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={closeNav}>
          ✕
        </button>
        <ul className="nav-list">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/BeansAndVarieties" onClick={() => setIsOpen(false)}>
              Beans & Varieties
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
1;

export default Header;
