import React, { useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import "./Projects.css";
import ProjectsList from "./ProjectsList";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollNext = () => {
    if (activeIndex < ProjectsList.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const scrollPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <Container className="projects-container">
      <Button className="arrows">
        <BsFillArrowLeftCircleFill
          onClick={scrollPrev}
          disabled={activeIndex === 0}
        />
      </Button>

      <Card className="cards">
        <Card.Img
          variant="top"
          src={ProjectsList[activeIndex].imageUrl}
          alt={ProjectsList[activeIndex].title}
        />
        <Card.Body>
          <Card.Title>{ProjectsList[activeIndex].title}</Card.Title>
          <Card.Text>{ProjectsList[activeIndex].description}</Card.Text>
          <div className="d-flex justify-content-between">
            <Button
              href={ProjectsList[activeIndex].demoLink}
              variant="primary"
              target="_blank"
            >
              Demo
            </Button>
            <Button
              href={ProjectsList[activeIndex].sourceCodeLink}
              variant="secondary"
              target="_blank"
            >
              Source Code
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Button className="arrows">
        <BsFillArrowRightCircleFill
          onClick={scrollNext}
          disabled={activeIndex === ProjectsList.length - 1}
        />
      </Button>
    </Container>
  );
}

export default Projects;
