import React from "react";
import "./About.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTheme } from "./ThemeContext";
import InfiniteLooper from "./InfiniteLooper";
import WorkImages from "./WorkImages";
import WorkImages1 from "./WorkImages1";
import WorkImages2 from "./WorkImages2";

function About() {
  const { isDarkMode } = useTheme();
  return (
    <div id="about">
      <div className="about" id={isDarkMode ? "dark-mode" : "light-mode"}>
        <Container fluid>
          <Row className="about-row">
            <Col md={6} className="text-col">
              <div>
                <h1>Getting to Know Me and My Skills</h1>
                <p>
                  Hello there! My name is HOUSSAME ERRJEM, a passionate
                  front-end developer with a strong focus on React - NextJs.{" "}
                  <br />
                  I thrive on turning creative ideas into exquisitely crafted,
                  user-friendly web applications that not only boast a visually
                  stunning design but also deliver an unparalleled user
                  experience.
                  <br />
                  My dedication to this craft fuels my pursuit of innovation and
                  excellence in every project I undertake. <br />
                  Let's collaborate to bring your digital visions to life!
                  <br /> <br />
                  <span className="skills-title">SKILLS:</span>{" "}
                  <span className="skills">
                    HTML and CSS / JavaScript / Git / React / Next.js /
                    Bootstrap / Material UI / Tailwind CSS / MongoDB /
                    Express.js / Node.js / UI/UX Design / Figma / still
                    learning...
                  </span>
                </p>
              </div>
            </Col>
            <Col md={1} className="line-col">
              <div className="line-wrap--vertical">
                <div className="line-wrap__word"></div>
              </div>
            </Col>
            <Col md={5} className="image-col">
              <Col xs={12}>
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;
