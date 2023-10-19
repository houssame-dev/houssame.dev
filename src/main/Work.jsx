import React from "react";
import "./Work.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import WorkImages from "./WorkImages";
import InfiniteLooper from "./InfiniteLooper";
import WorkImages1 from "./WorkImages1";
import WorkImages2 from "./WorkImages2";

function Work() {
  return (
    <div id="work">
      <Container className="work-container" fluid>
        <Row className="work-row">
          <Col lg={12} className="title-col">
            <h1>My Work</h1>
          </Col>
          <Col lg={12} className="images-col">
            <InfiniteLooper speed="80" direction="left">
              <div className="contentBlock contentBlock--one">
                {WorkImages.map((image, index) => (
                  <Card.Img
                    key={index}
                    variant="top"
                    src={image}
                    className="img"
                  />
                ))}
              </div>
              <div className="contentBlock contentBlock--one">
                {WorkImages.map((image, index) => (
                  <Card.Img
                    key={index}
                    variant="top"
                    src={image}
                    className="img"
                  />
                ))}
              </div>
            </InfiniteLooper>
            <InfiniteLooper speed="80" direction="right">
              <div className="contentBlock contentBlock--one">
                {WorkImages1.map((image, index) => (
                  <Card.Img
                    key={index}
                    variant="top"
                    src={image}
                    className="img"
                  />
                ))}
              </div>
              <div className="contentBlock contentBlock--one">
                {WorkImages1.map((image, index) => (
                  <Card.Img
                    key={index}
                    variant="top"
                    src={image}
                    className="img"
                  />
                ))}
              </div>
            </InfiniteLooper>
            <InfiniteLooper speed="80" direction="left">
              <div className="contentBlock contentBlock--one">
                {WorkImages2.map((image, index) => (
                  <Card.Img
                    key={index}
                    variant="top"
                    src={image}
                    className="img"
                  />
                ))}
              </div>
              <div className="contentBlock contentBlock--one">
                {WorkImages2.map((image, index) => (
                  <Card.Img
                    key={index}
                    variant="top"
                    src={image}
                    className="img"
                  />
                ))}
              </div>
            </InfiniteLooper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Work;
