import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";
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
    <Container
      className="home-container"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="3000"
    >
      <Row>
        <Col>
          <h1>
            <div>HOUSSAME</div> <div>ERRJEM</div>
          </h1>
          <p>FRONT END DEVELOPER, UI/UX DESIGNER</p>
          <div className="home-div">
            <Link to="/about">
              <Button className="aboutme-btn">
                About Me <GrNext />
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
