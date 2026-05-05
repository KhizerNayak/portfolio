import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../cssFold/Nav.css';
import Resume1 from '../../asset/resumefolder/ETLResume.pdf';
import logo from '../../asset/P.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const NAV_ITEMS = [
    { name: 'Intro', id: 'intro' },
    { name: 'Skills', id: 'skill' },
    { name: 'Projects', id: 'projects' },
    { name: 'Testimonials', id: 'testimonials'},
    { name: 'Blogs', id: 'blogs' },
    { name: 'Resume', id: 'resume' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (id, name) => {
    if (name === 'Resume') {
      window.open(Resume1, '_blank');
      setIsMenuOpen(false);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollToId: id } });
    } else {
      scrollToSection(id);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const intro = document.getElementById('intro');
      if (intro) {
        intro.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`Main-nav ${isMenuOpen ? 'active' : ''}`}>
      <div className="logo" onClick={handleLogoClick} role="button" tabIndex={0}>
        <img src={logo} alt="My Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={isMenuOpen ? 'active' : ''}>
        {NAV_ITEMS.map(({ name, id }, index) => (
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
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

