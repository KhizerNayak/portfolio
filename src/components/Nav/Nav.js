import React, { useState, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import '../../cssFold/Nav.css';
import Resume1 from '../../asset/resumefolder/Resume1.pdf';

const NavBar = ({ onToggleMenu }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const list = ["Intro", "Skill", "Testimonials", "Projects", "Blogs", "Resume"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (onToggleMenu) {
      const menuHeight = menuRef.current ? menuRef.current.scrollHeight : 0;
      onToggleMenu(isMenuOpen, menuHeight);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen, onToggleMenu]);

  const handleClick = (item) => {
    if (item === "Resume") {
      const resumePath = Resume1;
      window.open(resumePath, '_blank');
    } else {
      toggleMenu();
    }
  };

  return (
    <div className={`Main-nav ${isMenuOpen ? 'active' : ''}`}>
      <button className='menu-toggle' onClick={toggleMenu}>
        ☰
      </button>
      <ul ref={menuRef} className={isMenuOpen ? 'active' : ''}>
        {list.map((item, index) => (
          <li key={index}>
            {item === "Resume" ? (
              <a href="#" onClick={() => handleClick(item)}>
                {item}
              </a>
            ) : (
              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                onClick={() => handleClick(item)}
                offset={-60}
              >
                {item}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
