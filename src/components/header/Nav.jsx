import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import './nav.css';
import menuIcon from '../../assets/img/menu-icon.png';
import closeIcon from '../../assets/img/close-icon.png';
import Resume from '../../assets/files/Seko_Livingstone_Dameh - Resume.pdf';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    gsap.fromTo('.nav-link-item', { opacity: 0, y: -20 }, {
      opacity: 1, y: 0, duration: 1, stagger: 0.2, delay: 0.1, ease: 'power2.out',
    });

    // Handle scroll event
    const handleScroll = () => {
      const scrollThreshold = 200; // Adjust the threshold as needed
      const shouldStick = window.scrollY > scrollThreshold;

      setIsSticky(shouldStick);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (window.innerWidth < 768 && showMenu) {
      setShowMenu(false);
    }
  };

  return (
    <nav className={isSticky ? 'sticky' : ''}>
      <ul>
        <div>
          <li>
            <h2 className="logo">Livingstone</h2>
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
                <NavLink className="resume-link" exact target="_blank" to={Resume}>
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
              <NavLink className="resume-link" target="_blank" exact to={Resume}>
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
