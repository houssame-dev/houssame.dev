import React from "react";
import "./Home.css";
import { Card, Row, Col } from "react-bootstrap";
import {
  FaXTwitter,
  FaGithub,
  FaCircle,
  FaLinkedinIn,
  FaCodepen,
} from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import { HiLink } from "react-icons/hi";
import { IoMdHand } from "react-icons/io";
import { useTheme } from "./ThemeContext";
import InfiniteLooper from "./InfiniteLooper";
import { motion } from "framer-motion";

function Home() {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();
  const today = new Date();
  const month = today.toLocaleString("default", { month: "long" });
  const authorName = "Houssame";
  return (
    <>
      <div id="home">
        <Card
          className="home-card"
          id={isDarkMode ? "dark-mode" : "light-mode"}
        >
          <Row className="top-row">
            <Col className="top">
              <Col className="top-left">
                <motion.div
                  className="hi"
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
                  Hi, I'm Houssame <IoMdHand />
                </motion.div>
                <motion.div
                  className="portfolio"
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
                  and This is My Portfolio <HiLink />
                </motion.div>
              </Col>
              <Col className="top-right">
                <motion.div
                  className="available"
                  initial={{
                    opacity: 0,
                    x: 200,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 1, delay: 0 }}
                  viewport={{ once: true }}
                >
                  <FaCircle color="#6ab258" size={10} /> Available for Work
                </motion.div>
                <motion.div
                  className="date"
                  initial={{
                    opacity: 0,
                    x: 200,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <MdDateRange /> {month} {currentYear}
                </motion.div>
              </Col>
            </Col>
          </Row>
          <Row className="mid-row">
            <Col className="mid">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 200,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{ duration: 1, delay: 0 }}
                viewport={{ once: true }}
              >
                <InfiniteLooper speed="25" direction="left">
                  <div className="contentBlock contentBlock--one">
                    * FRONT-END DEVELOPER *
                  </div>
                  <div className="contentBlock contentBlock--one">
                    * FRONT-END DEVELOPER *
                  </div>
                </InfiniteLooper>
              </motion.div>
              <motion.div
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
                <InfiniteLooper speed="25" direction="right">
                  <div className="contentBlock contentBlock--one">
                    * UI/UX DESIGNER *
                  </div>
                  <div className="contentBlock contentBlock--one">
                    * UI/UX DESIGNER *
                  </div>
                </InfiniteLooper>
              </motion.div>
            </Col>
          </Row>
          <Row className="bot-row">
            <Col className="bot">
              <Col className="bot-left">
                <motion.div
                  className="social-media"
                  initial={{
                    opacity: 0,
                    x: -150,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 1, delay: 0 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="https://codepen.io/Houssame-Errjem"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={isDarkMode ? "dark-mode" : "light-mode"}
                  >
                    <FaCodepen size={15} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/houssame-errjem-93099a295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={isDarkMode ? "dark-mode" : "light-mode"}
                  >
                    <FaLinkedinIn size={15} />
                  </a>
                  <a
                    href="https://github.com/houssame-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={isDarkMode ? "dark-mode" : "light-mode"}
                  >
                    <FaGithub size={15} />
                  </a>
                  <a
                    href="https://twitter.com/houssamedev"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={isDarkMode ? "dark-mode" : "light-mode"}
                  >
                    <FaXTwitter size={15} />
                  </a>
                </motion.div>
              </Col>
              <Col className="bot-right">
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 200,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 1, delay: 0 }}
                  viewport={{ once: true }}
                >
                  &copy; {currentYear} {authorName}
                </motion.div>
              </Col>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Home;
