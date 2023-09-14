import React, { useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BsFillEyeFill, BsGithub } from "react-icons/bs";
import ProjectsData from "./ProjectsData";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="projects">
      <Container className="projects-container">
        <h2 data-aos="fade-up" data-aos-duration="2000">My Work</h2>
        <Row>
          {ProjectsData.map((project, index) => (
            <Col key={index} md={6} lg={4} className="my-5">
              <Card className="card" data-aos="fade-up" data-aos-duration="3000">
                <Card.Img
                  variant="top"
                  src={project.image}
                  className="card-img"
                />
                <Card.Body>
                  <Card.Title>
                    <strong>{project.title}</strong>
                  </Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Button
                    variant="light"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn1"
                  >
                    <BsFillEyeFill /> Demo
                  </Button>
                  <Button
                    variant="light"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn2"
                  >
                    <BsGithub /> Source Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
