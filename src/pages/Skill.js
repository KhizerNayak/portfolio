import React from 'react';
import meter1 from '../asset/meter1.svg';
import meter2 from '../asset/meter2.svg';
import meter3 from '../asset/meter3.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow2 from '../asset/arrow2.svg';  // Correct path
import colorSharp from '../asset/color-sharp.png';  // Correct path
import '../cssFold/SKill.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
              As a Data Engineer with a strong foundation in full-stack development, I specialize in designing and building scalable, resilient data pipelines that transform raw information into actionable insights.

With proficiency in Python, SQL, and cloud-native tools, I architect end-to-end data solutions — from extraction to modeling to deployment — ensuring seamless data flow across systems.

My background in analytics and data science enables me to not just move data, but to understand it, optimize it, and engineer it for maximum business impact.

Combining technical expertise with a mindset shaped by eSports — precision, strategy, and continuous improvement — I deliver intelligent, high-performance solutions tailored to real-world challenges.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Full stack Development" />
                  <h5>Full Stack Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Data Engineer" />
                  <h5>Data Engineer</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Data Analyst" />
                  <h5>Data Analyst</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Web Design" />
                  <h5>Web Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Web Development" />
                  <h5>Web Development</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
