import React from "react";
import "./Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { RiWhatsappFill } from "react-icons/ri";


function Home() {
  const showNumber = () => {
    window.open("tel:+212623659049");
  };

  return (
    <div id="home">
      <Container className="home-container">
        <Row>
          <Col>
            <h1>
              <div>hi, it's</div>
              <div>HOUSSAME</div>
            </h1>
            <p>a WEB DEVELOPER</p>
            <div className="div-buttons">
              <Button variant="light" id="btn2" onClick={showNumber}>
                <RiWhatsappFill /> Contact Me
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
