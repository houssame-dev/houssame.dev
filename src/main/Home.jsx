import React from "react";
import "./Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  const showNumber = () => {
    window.open("tel:+212623659049");
  };
  return (
    <div id="home">
      <Container className="home-container" fluid>
        <Row>
          <Col>
            <h1>
              <div>
                Turning Digital
              </div>
              <div>
                Dreams
              </div>
              <div>
                into Reality
              </div>
            </h1>
            <div className="div-button">
              <Button variant="light" className="button" onClick={showNumber}>
                Contact me now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
