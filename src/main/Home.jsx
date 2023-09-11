import React from "react";
import "./Home.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Home() {
  return (
    <div id="home">
      <Container className="home-container">
        <Row>
          <Col>
            <h1>
              <div>HOUSSAME</div> <div>ERRJEM</div>
            </h1>
            <p>FRONT END DEVELOPER, UI/UX DESIGNER</p>
            <div className="div-buttons">
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
