import React, { useEffect } from "react";
import "./About.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <Container
      className="about-container"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="3000"
    >
      <Row>
        <Col>
          <h4>
            👋 I'm HOUSSAME, a React-focused Frontend Developer and UI/UX
            Designer.
          </h4>
          <h4>
            🎨 I create pixel-perfect designs and turn them into user-friendly
            web apps.
          </h4>
          <h4>
            🌐 Constantly learning to stay at the forefront of web development.
          </h4>
          <h4>
            🤝 Collaborative, creative, and dedicated to delivering outstanding
            digital experiences.
          </h4>
          <h4>🌟 Open to job opportunities!</h4>
          <h4>Check out my skills :</h4>
          <div className="about-div">
            <Link to="/skills">
              <Button className="myskills-btn">
                My Skills <GrNext />
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
