import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import './nav.css';
import menuIcon from '../../assets/img/menu-icon.png';
import closeIcon from '../../assets/img/close-icon.png';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    gsap.fromTo('.nav-link-item', { opacity: 0, y: -20 }, {
      opacity: 1, y: 0, duration: 1, stagger: 0.5, delay: 1, ease: 'power2.out',
    });
  });

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
          <li className="nav-link-item">
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
              <li className="nav-link-item">
                <NavLink exact to="/" onClick={toggleMenu}>
                  Home
                </NavLink>
              </li>
              <li className="nav-link-item">
                <NavLink exact to="/projects" onClick={toggleMenu}>
                  Projects
                </NavLink>
              </li>
              <li className="nav-link-item">
                <NavLink exact to="/contact" onClick={toggleMenu}>
                  Contact Me
                </NavLink>
              </li>

              <li className="nav-link-item">
                <NavLink className="resume-link" exact to="/resume">
                  Check My Resume
                </NavLink>
              </li>
            </div>
          )}
        </div>

        <div className="menu-desktop">
          <div className="menu-items-desktop">
            <li className="nav-link-item">
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-link-item">
              <NavLink exact to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-link-item">
              <NavLink exact to="/contact">
                Contact Me
              </NavLink>
            </li>

            <li className="nav-link-item">
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
