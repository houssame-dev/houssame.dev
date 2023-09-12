import React from "react";
import "./About.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import about1_img from "./images/about4.png";
import about2_img from "./images/about6.png";
import about3_img from "./images/about3.png";
import about4_img from "./images/about5.png";

function About() {
  return (
    <div id="about">
      <Container className="about-container">
        <Row>
          <Col md={6} className="mb-4 d-flex align-items-center">
            <Image src={about1_img} alt="Image 1" fluid rounded />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <span>
              <h2>About Me</h2>
              <p>
                👋 Hi there! I'm HOUSSAME, a passionate frontend developer with
                a strong focus on React and Next.js. I thrive on turning ideas
                into beautifully crafted, user-friendly web applications that
                not only look great but also provide an exceptional user
                experience.
              </p>
            </span>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6} className="order-md-2 mb-4 d-flex align-items-center">
            <Image src={about2_img} alt="Image 2" fluid rounded />
          </Col>
          <Col md={6} className="order-md-1 d-flex align-items-center">
            <span>
              <h2>My Journey</h2>
              <p>
                🚀 My journey in web development began several years ago, and
                I've been on a constant quest to learn and adapt ever since. I
                love staying up-to-date with the latest trends and technologies
                in the frontend world, and React has become my playground of
                choice for building interactive and dynamic web experiences.
              </p>
            </span>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6} className="mb-4 d-flex align-items-center">
            <Image src={about3_img} alt="Image 3" fluid rounded />
          </Col>
          <Col md={6} className="d-flex align-items-center">
            <span>
              <h2>What Sets Me Apart ?</h2>
              <p>
                💡 What sets me apart is my attention to detail and commitment
                to writing clean, maintainable code. I believe that a
                well-structured codebase is essential for scalability and
                long-term success. Whether it's designing responsive UIs,
                optimizing performance, or solving complex challenges, I'm
                always up for the task.
              </p>
            </span>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md={6} className="order-md-2 mb-4 d-flex align-items-center">
            <Image src={about4_img} alt="Image 4" fluid rounded />
          </Col>
          <Col md={6} className="order-md-1 d-flex align-items-center">
            <span>
              <h2>Collaboration and Learning</h2>
              <p>
                🌟 Collaboration is at the heart of my development philosophy. I
                enjoy working closely with designers, backend developers, and
                stakeholders to bring ideas to life. Communication and teamwork
                are key to delivering outstanding results.
                <br />
                <br />
                💼 When I'm not coding, you can often find me exploring the
                latest tech blogs, contributing to open-source projects, or
                experimenting with new coding techniques. I'm also a firm
                believer in the power of continuous learning, and I'm constantly
                expanding my skill set.
                <br />
                <br />
                🌎 Let's connect and create something amazing together! Whether
                you have a project in mind or just want to chat about the latest
                in React, I'm always excited to meet fellow developers and
                potential collaborators. Feel free to reach out through the
                contact form or connect with me on social media.
              </p>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
