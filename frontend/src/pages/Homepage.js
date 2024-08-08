import React, { useState } from 'react';
import NavBar from '../components/Nav/Nav';
import '../cssFold/Homepage.css';
import logo from '../asset/P.png';
import { Banner } from '../components/Banner';
import { Skills } from '../pages/Skill';
import { ProjectsSection } from './projects';
import { TestimonialsSection } from './Testimonials';
import { BlogsSection } from './blogs';
import Footer from '../components/Footer';

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);

  const handleToggleMenu = (isOpen, height) => {
    setIsMenuOpen(isOpen);
    setMenuHeight(height);
  };

  return (
    <div className='Homepage'>
      <header className='Header'>
        <div className="logo">
          <img src={logo} alt="My Logo" />
        </div>
        <NavBar onToggleMenu={handleToggleMenu} />
      </header>
      <main className={isMenuOpen ? 'menu-open' : ''} style={{ marginTop: isMenuOpen ? `${menuHeight}px` : '60px', marginLeft: '0', width: '100%' }}>
        <section id='intro' className='Intro'>
          <div className='intro-content'>
            <Banner />
          </div>
        </section>
        <section id='skill'>
          <Skills />
        </section>
        <section id='projects'>
          <ProjectsSection />
        </section>
        <section id='testimonials'>
          <TestimonialsSection />
        </section>
        <section id='blogs'>
          <BlogsSection />
        </section>
      </main>
       <Footer />
    </div>
  );
};

export default Homepage;
