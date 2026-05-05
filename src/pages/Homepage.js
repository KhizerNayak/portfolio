import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../cssFold/Homepage.css';
import { Banner } from '../components/Banner';
import { Skills } from './Skill';
import { ProjectsSection } from './projects';
import { TestimonialsSection } from './Testimonials';
import { BlogsSection } from './blogs';

const Homepage = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToId = location.state && location.state.scrollToId;
    if (scrollToId) {
      // Wait for the DOM/sections to render before scrolling
      requestAnimationFrame(() => {
        const el = document.getElementById(scrollToId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }, [location]);

  return (
    <div className='Homepage'>
      <main style={{ marginTop: '60px', marginLeft: '0', width: '100%' }}>
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
    </div>
  );
};

export default Homepage;
