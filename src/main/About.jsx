import React from "react";
import "./About.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTheme } from "./ThemeContext";
import artboard from "./images/Artboard.png";

function About() {
  const { isDarkMode } = useTheme();
  return (
    <div id="about">
      <div className="about" id={isDarkMode ? "dark-mode" : "light-mode"}>
        <Container fluid>
          <Row className="about-row">
            <Col md={6} className="text-col">
              <h1>who am i ? and what i can do</h1>
              <p>
                Hello there! My name is HOUSSAME ERRJEM, a passionate front-end
                developer with a strong focus on React - NextJs. <br />
                I thrive on turning creative ideas into exquisitely crafted,
                user-friendly web applications that not only boast a visually
                stunning design but also deliver an unparalleled user
                experience.
                <br />
                My dedication to this craft fuels my pursuit of innovation and
                excellence in every project I undertake. <br />
                Let's collaborate to bring your digital visions to life!
                <br /> <br />
                <span>SKILLS:</span> HTML and CSS / JavaScript / Git / React /
                Next.js / Bootstrap / Material UI / Tailwind CSS / MongoDB /
                Express.js / Node.js / UI/UX Design / Figma / still learning...
              </p>
            </Col>
            <Col md={2} className="line-col">
              <div className="line-wrap--vertical">
                <div className="line-wrap__word"></div>
              </div>
            </Col>
            <Col md={4} className="image-col">
              <Card className="image-card">
                <Card.Img src={artboard} alt="artboard" className="image" />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
