import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../cssFold/Nav.css';
import Resume1 from '../../asset/resumefolder/ETLResume.pdf';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const NAV_ITEMS = [
    { name: 'Intro', id: 'intro' },
    { name: 'Skills', id: 'skill' },
    { name: 'Projects', id: 'projects' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Blogs', id: 'blogs' },
    { name: 'Resume', id: 'resume' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper for click:
  // If pathname is '/', use react-scroll links directly
  // Else navigate then scroll after navigation
  const handleNavClick = (id, name) => {
    if (name === 'Resume') {
      window.open(Resume1, '_blank');
      setIsMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToId: id } });
      setIsMenuOpen(false);
    } else {
      // ScrollLink will handle if on homepage
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`Main-nav ${isMenuOpen ? 'active' : ''}`}>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isMenuOpen ? 'active' : ''}>
        {NAV_ITEMS.map(({ name, id }, index) => {
          if (name === 'Resume') {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id, name);
                  }}
                >
                  {name}
                </a>
              </li>
            );
          }
          if (location.pathname === '/') {
            // Use react-scroll Link directly
            return (
              <li key={index}>
                <ScrollLink
                  to={id}
                  spy={true}
                  smooth={true}
                  offset={-62} // header height
                  duration={500}
                  className="nav-link"
                  activeClass="active"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </ScrollLink>
              </li>
            );
          } else {
            // On other pages, just trigger navigation + scroll after route change
            return (
              <li key={index}>
                <a
                  href="#"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(id, name);
                  }}
                >
                  {name}
                </a>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default NavBar;

