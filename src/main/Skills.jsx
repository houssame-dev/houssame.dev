import React, { useEffect } from "react";
import "./Skills.css";
import { Container, Row, Col } from "react-bootstrap";
import SkillsData from "./SkillsData";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="skills">
      <Container className="skills-container">
        <h2 data-aos="fade-up" data-aos-duration="2000">
          My Technical Skills
        </h2>
        <Row className="my-5">
          {SkillsData.map((skill, index) => (
            <Col key={index} md={4} xs={6} className="text-center">
              <div data-aos="fade-up" data-aos-duration="3000">
                  <span className="icon">{skill.icon}</span> <br />
                  <span className="text">{skill.name}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
