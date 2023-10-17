import React from "react";
import "./About.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import about_img from "./images/about-img.jpg";

function About() {
  return (
    <div id="about">
      <Container className="about-container" fluid>
        <Row className="about-row">
          <Col lg={6} className="img-col">
            <Card.Img src={about_img} alt="about-img" />
          </Col>
          <Col lg={6} className="text-col">
            <h1>About Me</h1>
            <p>
              Hello there! I'm <strong>HOUSSAME</strong>, a passionate web
              developer with a strong focus on React. <br />
              I thrive on turning creative ideas into exquisitely crafted,
              user-friendly web applications that not only boast a visually
              stunning design but also deliver an unparalleled user experience.
              <br />
              My dedication to this craft fuels my pursuit of innovation and
              excellence in every project I undertake. <br />
              Let's collaborate to bring your digital visions to life!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
