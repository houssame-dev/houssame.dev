import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { FcNext, FcPrevious } from "react-icons/fc";
import { FaGithub, FaLink } from "react-icons/fa";
import { GrNext } from "react-icons/gr";
import "./Projects.css";
import ProjectsList from "./ProjectsList";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <Container
      className="projects-container"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="3000"
    >
      <Container className="projects-container2">
        <Button className="arrows">
          <FcPrevious onClick={scrollPrev} disabled={activeIndex === 0} />
        </Button>

        <Card className="cards">
          <Card.Img
            variant="top"
            src={ProjectsList[activeIndex].imageUrl}
            alt={ProjectsList[activeIndex].title}
            className="card-img"
          />
          <Card.Body>
            <Card.Title>
              <strong> {ProjectsList[activeIndex].title}</strong>
            </Card.Title>
            <Card.Text>{ProjectsList[activeIndex].description}</Card.Text>
            <div className="d-flex justify-content-between">
              <Button
                href={ProjectsList[activeIndex].demoLink}
                variant="primary"
                target="_blank"
                className="btn-cards"
              >
                <FaLink size={25} /> <span>Demo</span>
              </Button>
              <Button
                href={ProjectsList[activeIndex].sourceCodeLink}
                variant="secondary"
                target="_blank"
                className="btn-cards"
              >
                <FaGithub size={25} /> <span>Source Code</span>
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Button className="arrows">
          <FcNext
            onClick={scrollNext}
            disabled={activeIndex === ProjectsList.length - 1}
          />
        </Button>
      </Container>
      <div className="projects-div">
        <Link to="/contact">
          <Button className="next-btn">
            Contact Me <GrNext />
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Projects;
