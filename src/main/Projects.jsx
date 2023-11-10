import React from "react";
import "./Projects.css";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { useTheme } from "./ThemeContext";
import story_corner_img from "./images/story-corner.png";
import weather_twoday_img from "./images/weather-twoday.png";
import { TbWorld } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import {
  SiAntdesign,
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
} from "react-icons/si";
import { motion } from "framer-motion";

function Projects() {
  const { isDarkMode } = useTheme();
  return (
    <div id="projects">
      <div className="projects" id={isDarkMode ? "dark-mode" : "light-mode"}>
        <Container fluid>
          <motion.h1
            initial={{
              opacity: 0,
              x: -200,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 1, delay: 0 }}
            viewport={{ once: true }}
          >
            Check Out Some Of My Programming Projects
          </motion.h1>
            <Row className="projects-row">
              <Col className="projects-col">
                <motion.div
                  className="project-card"
                  initial={{
                    opacity: 0,
                    x: -200,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <Card.Header
                    className="card-title"
                    id={isDarkMode ? "dark-mode" : "light-mode"}
                  >
                    <img src={story_corner_img} alt="story-corner-img" />
                    <span>Story Corner</span>
                  </Card.Header>
                  <Card.Body className="card-body">
                    <Card.Text
                      className="card-text"
                      id={isDarkMode ? "dark-mode" : "light-mode"}
                    >
                      This is a modern blogging platform where users can create
                      accounts, share their stories, like other users' stories,
                      and manage their own stories.
                    </Card.Text>
                    <hr id={isDarkMode ? "dark-mode" : "light-mode"} />
                    <Card.Text className="card-techs">
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiHtml5 /> HTML
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiCss3 /> CSS
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiJavascript /> JavaScript
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiReact /> React
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiMongodb /> MongoDB
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiNodedotjs /> Node.js
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiExpress /> Express.js
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiBootstrap /> Bootstrap
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiAntdesign /> Ant Design
                      </Badge>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="card-footer">
                    <div className="div-btn">
                      <a
                        href="https://storycorner.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <TbWorld /> <span className="live">Live</span>
                        <span>Demo</span>
                      </a>
                      <a
                        href="https://github.com/houssame-dev/story-corner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <FaCode /> <span className="source">Source</span>
                        <span>Code</span>
                      </a>
                    </div>
                  </Card.Footer>
                </motion.div>

                <motion.div
                  className="project-card"
                  initial={{
                    opacity: 0,
                    x: -200,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <Card.Header
                    className="card-title"
                    id={isDarkMode ? "dark-mode" : "light-mode"}
                  >
                    <img src={weather_twoday_img} alt="story-corner-img" />
                    <span>Weather TwoDay</span>
                  </Card.Header>
                  <Card.Body className="card-body">
                    <Card.Text
                      className="card-text"
                      id={isDarkMode ? "dark-mode" : "light-mode"}
                    >
                      This app provides you with real-time weather updates,
                      detailed forecasts, and accurate local weather conditions,
                      all wrapped in an intuitive and user-friendly interface.
                    </Card.Text>
                    <hr id={isDarkMode ? "dark-mode" : "light-mode"} />
                    <Card.Text className="card-techs">
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiHtml5 /> HTML
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiCss3 /> CSS
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiJavascript /> JavaScript
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiReact /> React
                      </Badge>
                      <Badge
                        className="badge"
                        bg="none"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <SiBootstrap /> Bootstrap
                      </Badge>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer className="card-footer">
                    <div className="div-btn">
                      <a
                        href="https://weathertwoday.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <TbWorld /> <span className="live">Live</span>
                        <span>Demo</span>
                      </a>
                      <a
                        href="https://github.com/houssame-dev/weather-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        id={isDarkMode ? "dark-mode" : "light-mode"}
                      >
                        <FaCode /> <span className="source">Source</span>
                        <span>Code</span>
                      </a>
                    </div>
                  </Card.Footer>
                </motion.div>
              </Col>
            </Row>
        </Container>
      </div>
    </div>
  );
}

export default Projects;
