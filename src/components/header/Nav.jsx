import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';
import menuIcon from '../../assets/img/menu-icon.png';
import closeIcon from '../../assets/img/close-icon.png';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (window.innerWidth < 768 && showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <nav>
      <ul>
        <div>
          <li>
            <h2 className="logo">SekoViper</h2>
          </li>
        </div>
        {/* mobile menu */}
        <div className="menu">
          <button
            type="button"
            className="menu-icon"
            onClick={toggleMenu}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                toggleMenu();
              }
            }}
          >
            <img
              src={showMenu ? closeIcon : menuIcon}
              alt="menu icon"
            />
          </button>
          {showMenu && (
            <div className="menu-items" style={{ display: showMenu ? 'flex' : 'none' }}>
              <li>
                <NavLink exact to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/blogs" onClick={toggleMenu}>
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about" onClick={toggleMenu}>
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/projects" onClick={toggleMenu}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/contact" onClick={toggleMenu}>
                  Contact Me
                </NavLink>
              </li>

              <li>
                <NavLink className="resume-link" exact to="/resume">
                  Check My Resume
                </NavLink>
              </li>
            </div>
          )}
        </div>

        <div className="menu-desktop">
          <div className="menu-items-desktop">
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/blogs">
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about">
                About Me
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact">
                Contact Me
              </NavLink>
            </li>

            <li>
              <NavLink className="resume-link" exact to="/resume">
                Resume
              </NavLink>
            </li>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
