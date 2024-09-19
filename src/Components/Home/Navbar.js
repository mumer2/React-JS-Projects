import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);  // To control the Level1 submenu
  const [isLevelaOpen, setIsLevelaOpen] = useState(false); // To control LevelA submenu
  const [navbarOpen, setNavbarOpen] = useState(false);  // To control the navbar collapse
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);  // Toggles the navbar on small screens
  };

  const toggleSearchBar = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle the search bar
  };

  const handleSubmenuToggle = (e, path) => {
    e.preventDefault();
    setSubmenuOpen(!submenuOpen);
    navigate(path);
    setNavbarOpen(false);  // Close navbar on smaller screens after navigating
  };

  const handleNavLinkClick = (path) => {
    navigate(path);  // Navigate to the path
    setNavbarOpen(false);  // Collapse navbar on smaller screens
  };

  const toggleLevelaMenu = () => {
    setIsLevelaOpen(!isLevelaOpen);  // Toggles Levela submenu visibility
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Shapely Demo</a>

          <button
            className="custom-toggler"
            type="button"
            aria-expanded={navbarOpen ? "true" : "false"}  // Control aria-expanded based on state
            aria-label="Toggle navigation"
            onClick={toggleNavbar}  // Toggle navbar open/close
          >
            <div className="toggler-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className={`collapse navbar-collapse ${navbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  exact
                  className="nav-link"
                  aria-current="page"
                  to="/"
                  onClick={() => handleNavLinkClick("/")}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/blog"
                  onClick={() => handleNavLinkClick("/blog")}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/portfolio"
                  onClick={() => handleNavLinkClick("/portfolio")}
                >
                  Portfolio
                </NavLink>
              </li>

              {/* About the Tests dropdown */}
              <li className="nav-item dropdown">
              <NavLink
                  className="nav-link dropdown-toggle"
                  to="/about"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={() => handleNavLinkClick("/about")}

                  // onClick={(e) => handleSubmenuToggle(e, '/about')} 
                >
                 About The Tests
                </NavLink>
                {/* <NavLink
                  className="nav-link dropdown-toggle"
                  to="/about"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About The Tests
                </NavLink> */}
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="/page1" onClick={() => handleNavLinkClick("/page1")}>Page Image Alignment</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/page2" onClick={() => handleNavLinkClick("/page2")}>Page Markup and Formatting</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/page3" onClick={() => handleNavLinkClick("/page3")}>Clearing Floats</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/page4" onClick={() => handleNavLinkClick("/page4")}>Page with Comments</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/page5" onClick={() => handleNavLinkClick("/page5")}>Page with Comments Disabled</NavLink></li>
                </ul>
              </li>

              {/* Level 1 dropdown with Levela submenu */}
              <li className="nav-item dropdown">
              <NavLink
                  className="nav-link dropdown-toggle"
                  to="/level1"
                  id="navbarDropdown1"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => handleSubmenuToggle(e, '/level1')} // Call handler on click
                >
                 Level1
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownLevel1">
                  {/* Levela with submenu */}
                  <li className="dropdown-submenu">
                    <NavLink to="level2" onClick={toggleLevelaMenu} className="submenu-button dropdown-toggle dropdown-item">
                      Level2
                    </NavLink>
                    {isLevelaOpen && (
                      <ul className="dropdown-menu">
                        <li><NavLink className="dropdown-item" to="/level3" onClick={() => handleNavLinkClick("/level3a")}>Level3</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/level3a" onClick={() => handleNavLinkClick("/level3b")}>Level3a</NavLink></li>
                        <li><NavLink className="dropdown-item" to="/level3b" onClick={() => handleNavLinkClick("/level3c")}>Level3b</NavLink></li>
                      </ul>
                    )}
                  </li>
                  {/* Other Level1 items */}
                  <li><NavLink className="dropdown-item" to="/level2a" onClick={() => handleNavLinkClick("/levelb")}>Level2a</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/level2b" onClick={() => handleNavLinkClick("/levelc")}>Level2b</NavLink></li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/shop"
                  onClick={() => handleNavLinkClick("/shop")}
                >
                  Shop
                </NavLink>
              </li>


              <li className="nav-item search-container">
                <button className="nav-link search-button">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                {/* Search input will appear on hover */}
                <div className="search-popup">
                  <input type="text" className="search-input" placeholder="Type Here" />
                  <button className="search-submit">SEARCH</button>
                </div>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/"
                  onClick={() => handleNavLinkClick("/")}
                >
                  <i className="fa-solid fa-magnifying-glass"></i>
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
