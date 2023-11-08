import React from "react";
import "./Loading.css";
import { Col, Container, Row } from "react-bootstrap";

const Loading = () => {
  return (
    <div className="loading">
      <Container>
        <Row>
          <Col xs={12} className="col-1">
            <div className="boxes">
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </Col>
          <Col xs={12} className="col-2">
            <div className="loader">
              <div className="intern"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Loading;
