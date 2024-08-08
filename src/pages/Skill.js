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
                  As a Full Stack .NET Developer, I specialize in building scalable and efficient backend systems with .NET technologies, ensuring robust functionality and seamless integration with front-end solutions. My experience in web design allows me to create visually appealing and user-friendly interfaces, enhancing the overall user experience. Additionally, my skills as a Data Analyst enable me to interpret complex datasets, generate actionable insights, and drive data-informed decision-making. By combining these expertise areas, I deliver comprehensive solutions that are both technically sound and aesthetically pleasing, tailored to meet the specific needs and goals of each project.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Full stack Development" />
                  <h5>Full Stack Development</h5>
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
