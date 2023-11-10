import React from "react";
import "./Services.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import {
  MdOutlineWeb,
  MdSecurity,
  MdOutlineScreenSearchDesktop,
  MdLocalGroceryStore,
} from "react-icons/md";
import { FaMobileScreenButton, FaWrench } from "react-icons/fa6";
import { IoShareSocialSharp, IoSpeedometer } from "react-icons/io5";
import { GrMail } from "react-icons/gr";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

function Services() {
  const { isDarkMode } = useTheme();
  return (
    <div id="services">
      <div className="services" id={isDarkMode ? "dark-mode" : "light-mode"}>
        <Container fluid>
          <Row>
            <Col lg={12} className="title-col">
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
                A List Of The Comprehensive Services I Bring To The Table
              </motion.h1>
            </Col>
            <Col lg={4} md={6} className="service-col">
              <motion.div
                className="card"
                id={isDarkMode ? "dark-mode" : "light-mode"}
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
                <Card.Body>
                  <Card.Title>
                    <MdOutlineWeb size={30} /> <br />
                    Custom Web Design
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    Every website i create is a unique masterpiece, tailored to
                    your brand and business needs. I blend creativity,
                    functionality, and user-friendliness to provide a delightful
                    user experience.
                  </Card.Text>
                </Card.Body>
              </motion.div>
            </Col>
            <Col lg={4} md={6} className="service-col">
              <motion.div
                className="card"
                id={isDarkMode ? "dark-mode" : "light-mode"}
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
                <Card.Body>
                  <Card.Title>
                    <FaMobileScreenButton size={30} /> <br />
                    Responsive Design
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    In a mobile-first world, your website will look and perform
                    flawlessly on all devices, ensuring you never miss out on
                    potential customers.
                  </Card.Text>
                </Card.Body>
              </motion.div>
            </Col>
            <Col lg={4} md={6} className="service-col">
              <motion.div
                className="card"
                id={isDarkMode ? "dark-mode" : "light-mode"}
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
                <Card.Body>
                  <Card.Title>
                    <IoSpeedometer size={30} /> <br />
                    Fast Loading Speed
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    My websites are optimized for speed, providing an instant
                    and smooth user experience. Faster websites also rank better
                    in search engines!
                  </Card.Text>
                </Card.Body>
              </motion.div>
            </Col>
            <Col lg={4} md={6} className="service-col">
              <motion.div
                className="card"
                id={isDarkMode ? "dark-mode" : "light-mode"}
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
                <Card.Body>
                  <Card.Title>
                    <MdSecurity size={30} /> <br />
                    Security
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    I prioritize the security of your website and its visitors.
                    Rest easy knowing your data is safe.
                  </Card.Text>
                </Card.Body>
              </motion.div>
            </Col>
            <Col lg={4} md={6} className="service-col">
              <motion.div
                className="card"
                id={isDarkMode ? "dark-mode" : "light-mode"}
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
                <Card.Body>
                  <Card.Title>
                    <MdOutlineScreenSearchDesktop size={30} /> <br />
                    SEO-Friendly
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    I build websites with SEO best practices in mind, giving
                    your online presence the best chance to rise in search
                    engine rankings.
                  </Card.Text>
                </Card.Body>
              </motion.div>
            </Col>
            <Col lg={4} md={6} className="service-col">
              <motion.div
                className="card"
                id={isDarkMode ? "dark-mode" : "light-mode"}
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
                <Card.Body>
                  <Card.Title>
                    <MdLocalGroceryStore size={30} /> <br />
                    E-commerce Ready
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    If you're looking to sell products or services online, i can
                    integrate an easy-to-use e-commerce system to boost your
                    business.
                  </Card.Text>
                </Card.Body>
              </motion.div>
            </Col>
            <Col lg={4} md={6} className="service-col">
              <motion.div
                className="card"
                id={isDarkMode ? "dark-mode" : "light-mode"}
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
                <Card.Body>
                  <Card.Title>
                    <GrMail size={30} /> <br />
                    Contact Forms
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    Connect with your customers effortlessly through contact
                    forms, making it simple for them to reach out to you.
                  </Card.Text>
                </Card.Body>
              </motion.div>
            </Col>
            <Col lg={4} md={6} className="service-col">
              <motion.div
                className="card"
                id={isDarkMode ? "dark-mode" : "light-mode"}
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
                <Card.Body>
                  <Card.Title>
                    <IoShareSocialSharp size={30} /> <br />
                    Social Media Integration
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    Seamlessly link your social media profiles to your website,
                    expanding your online reach.
                  </Card.Text>
                </Card.Body>
              </motion.div>
            </Col>
            <Col lg={4} md={6} className="service-col">
              <motion.div
                className="card"
                id={isDarkMode ? "dark-mode" : "light-mode"}
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
                <Card.Body>
                  <Card.Title>
                    <FaWrench size={30} /> <br />
                    Maintenance & Support
                  </Card.Title>
                  <hr />
                  <Card.Text>
                    Our relationship doesn't end after the site is live. I offer
                    maintenance and support packages to keep your website
                    running smoothly.
                  </Card.Text>
                </Card.Body>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Services;
