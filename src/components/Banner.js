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
                       A versatile Full Stack .NET Developer, Data Analyst, and Web Designer with a passion for crafting innovative solutions. With a solid foundation in .NET technologies, I build dynamic and scalable applications that seamlessly integrate backend and frontend systems. My expertise extends to web design, where I focus on creating intuitive and visually appealing user experiences. As a Data Analyst, I excel in analyzing complex datasets to extract actionable insights and drive strategic decisions. Combining these skills, I am committed to delivering comprehensive solutions that are both technically robust and aesthetically engaging.
                  </p>

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
