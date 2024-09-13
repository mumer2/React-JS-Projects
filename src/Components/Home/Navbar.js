import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

export const Navbar = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleSubmenuToggle = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Shapely Demo</a>

          <button
            className="custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="toggler-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Collapsible nav items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About The Tests
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="/page1">Page Image Alignment</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/page2">Page Markup and Formatting</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/page3">Clearing Floats</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/page4">Page with Comments</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/page5">Page with Comments Disabled</NavLink></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to="/level1"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Level1
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                  <li className={`dropdown-submenu ${submenuOpen ? 'show' : ''}`}>
                    <NavLink
                      className="dropdown-item dropdown-toggle"
                      to="/level2"
                      id="navbarDropdown2"
                      role="button"
                      onClick={handleSubmenuToggle} // Toggle submenu on click
                    >
                      Level2
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li><NavLink className="dropdown-item" to="/level3">Level3</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/level3a">Level3a</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/level3b">Level3b</NavLink></li>
                    </ul>
                  </li>
                  <li><NavLink className="dropdown-item" to="/level2a">Level2a</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/level2b">Level2b</NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/shop" tabIndex="-1" aria-disabled="true">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" to="/" tabIndex="-1" aria-disabled="true">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
