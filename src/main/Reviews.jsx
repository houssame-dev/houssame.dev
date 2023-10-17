import React from "react";
import "./Reviews.css";
import { Col, Container, Row } from "react-bootstrap";

function Reviews() {
  return (
    <div id="reviews">
      <Container className="reviews-container" fluid>
        <Row>
          <Col>
            <h1>Reviews</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Reviews;
