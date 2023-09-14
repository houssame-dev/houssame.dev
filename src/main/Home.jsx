import React, { useEffect } from "react";
import "./Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="home">
      <Container className="home-container">
        <Row>
          <Col>
            <h1 data-aos="fade-up" data-aos-duration="1000">
              <div>HOUSSAME</div>
              <div>ERRJEM</div>
            </h1>
            <p data-aos="fade-up" data-aos-duration="2000">
              FRONT-END DEVELOPER
            </p>
            <div
              className="div-buttons"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Button variant="light">Download Cv</Button>
              <Button variant="light">Contact Me</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
