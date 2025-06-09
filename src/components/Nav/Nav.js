import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../cssFold/Nav.css';
import Resume1 from '../../asset/resumefolder/ETLResume.pdf';

const NavBar = ({ onToggleMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Updated list to match exact section IDs from Homepage.js
  const list = [
    { name: "Intro", id: "intro" },
    { name: "Skills", id: "skill" },
    { name: "Projects", id: "projects" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Blogs", id: "blogs" },
    { name: "Resume", id: "resume" }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const handleClick = (item) => {
    if (item.name === "Resume") {
      window.open(Resume1, '_blank');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(item.id);
      }, 100);
    } else {
      scrollToSection(item.id);
    }
    
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
  };

  return (
    <nav className={`Main-nav ${isMenuOpen ? 'active' : ''}`}>
      <button className='menu-toggle' onClick={toggleMenu}>
        ☰
      </button>
      <ul ref={menuRef} className={isMenuOpen ? 'active' : ''}>
        {list.map((item, index) => (
          <li key={index}>
            {item.name === "Resume" ? (
              <a 
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item);
                }}
                className="nav-link"
              >
                {item.name}
              </a>
            ) : (
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                onClick={() => handleClick(item)}
                className="nav-link"
                style={{ cursor: 'pointer' }}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
