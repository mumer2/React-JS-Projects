import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>

<nav className="navbar">
      <div className="navbar-logo">Shapely Demo</div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">Blog</a>
        <a href="#services">Portfolio</a>
        <div className="navbar-dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
          About The Tests
          </button>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <a href="#service1">Service 1</a>
            <a href="#service2">Service 2</a>
            <a href="#service3">Service 3</a>
          </div>
        </div>
        <div className="navbar-dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            Level1
          </button>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <a href="#service1">Levelb</a>
            <a href="#service2">Levela</a>
            <a href="#service3">Levelb</a>
          </div>
        </div>
        
        <a href="#contact">Shop</a>
        <a href="#contact"><i class="fa-solid fa-magnifying-glass"></i></a>


      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
      </div>
  )
}
