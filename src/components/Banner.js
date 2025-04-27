import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Lottie from 'lottie-react';
import animationData from '../asset/Animation - 1722347988405.json';
import { useNavigate } from 'react-router-dom';
import '../cssFold/Banner.css';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Full Stack Developer", "Web Designer", "Data Analyst"];
  const period = 2000;

  const navigate = useNavigate();

  useEffect(() => {
    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta(prevDelta => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta, loopNum, isDeleting]);

  const handleNavigate = () => {
    navigate('/contact');
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-left">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Khizer Nayak.`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Developer", "Web Designer", "Data Analyst" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  I started my journey as a full-stack .NET developer, crafting web applications and software solutions.

My passion for data led me to transition into data analytics, where I uncovered insights and built stories from numbers.

Eager to deepen my skills, I ventured into data science, blending statistical models with real-world impact.

Today, I stand as a data engineer — designing scalable pipelines, building data systems, and enabling data-driven decisions.

With a strong foundation in Python, SQL, and cloud-native tools, I bridge the gap between raw data and actionable intelligence.

Beyond the code, I'm an eSports enthusiast, driven by a competitive spirit and a love for continuous learning.

Welcome to my portfolio — a reflection of my journey, my skills, and my vision for building the future through data.                  </p>

                  <button onClick={handleNavigate}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="lottie-container">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <Lottie animationData={animationData} loop={true} />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
