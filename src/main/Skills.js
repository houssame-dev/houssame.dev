import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Skills.css";
import SkillsData from "./SkillsData";
import { GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <Container className="skills-container">
      <Row>
        {SkillsData.map((skill, index) => (
          <Col xs={4} sm={4} md={3} lg={2} key={index}>
            <div
              className="skill-item"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              {skill.image} <br /> {skill.title}
            </div>
          </Col>
        ))}
      </Row>
      <div className="skills-div">
        <Link to="/projects">
          <Button className="myprojects-btn">
            My Projects <GrNext />
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default Skills;
