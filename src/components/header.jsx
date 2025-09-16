import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function toggleNav() {
    setIsOpen(!isOpen);
  }

  function closeNav() {
    setIsOpen(false);
    setDropdownOpen(false);
  }

  function toggleDropdown() {
    setDropdownOpen(!dropdownOpen);
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
            <Link to="/" onClick={closeNav}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNav}>
              About
            </Link>
          </li>

          <li className={`dropdown ${dropdownOpen ? "open" : ""}`}>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              Coffee Knowledge ▾
            </button>
            <ul className="dropdown-menu">
              <li>
                <Link to="/History" onClick={closeNav}>
                  Origins & Early History
                </Link>
              </li>
              <li>
                <Link to="/BeansAndVarieties" onClick={closeNav}>
                  Beans & Varieties
                </Link>
              </li>
              <li>
                <Link to="/BrewingMethods" onClick={closeNav}>
                  Brewing Methods
                </Link>
              </li>
              <li>
                <Link to="/RoastingLevels" onClick={closeNav}>
                Roasting Levels
                </Link>
              </li>
              <li>
                <Link to="/Culture" onClick={closeNav}>
                  Coffee Culture
                </Link>
              </li>
              <li>
                <Link to="/HealthAndBenefits" onClick={closeNav}>
                  Health & Benefits
                </Link>
              </li>
              <li>
                <Link to="/Recipes" onClick={closeNav}>
                  Coffee Recipes
                </Link>
              </li>
              <li>
                <Link to="/AroundTheWorld" onClick={closeNav}>
                  Around the World
                </Link>
              </li>
              <li>
                <Link to="/SustainabilityAndTrade" onClick={closeNav}>
                  Sustainability & Trade
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}
1;

export default Header;
