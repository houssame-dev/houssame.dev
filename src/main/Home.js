import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { GrNext } from 'react-icons/gr';
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <Container className="home-container">
      <Row>
        <Col>
          <h1>
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              HOUSSAME
            </div>{" "}
            <div
              data-aos="fade-left"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              ERRJEM
            </div>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            FRONT END DEVELOPER, UI/UX DESIGNER
          </p>
          <div className="home-div">
            <Link to="/about">
              <Button className="aboutme-btn">About Me <GrNext/></Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
