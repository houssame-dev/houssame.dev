import React from "react";
import "./Home.css";
import { Card, Row, Col } from "react-bootstrap";
import { FaXTwitter, FaGithub, FaCircle, FaLinkedinIn } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { HiLink } from "react-icons/hi";
import { IoIosColorPalette, IoMdHand } from "react-icons/io";
import { useTheme } from "./ThemeContext";
import InfiniteLooper from "./InfiniteLooper";

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
                <div className="hi">
                  Hi, I'm Houssame <IoMdHand />
                </div>
                <div className="portfolio">
                  and This is My Portfolio <HiLink />
                </div>
              </Col>
              <Col className="top-right">
                <div className="available">
                  <FaCircle color="#ffcc80" size={10} /> Available for Work
                </div>
                <div className="date">
                  <MdDateRange /> {month} {currentYear}
                </div>
              </Col>
            </Col>
          </Row>
          <Row className="mid-row">
            <Col className="mid">
              <InfiniteLooper speed="25" direction="left">
                <div className="contentBlock contentBlock--one">
                 * FRONT-END DEVELOPER
                </div>
                <div className="contentBlock contentBlock--one">
                 * FRONT-END DEVELOPER
                </div>
              </InfiniteLooper>
              <InfiniteLooper speed="25" direction="right">
                <div className="contentBlock contentBlock--one">
                 * UI/UX DESIGNER
                </div>
                <div className="contentBlock contentBlock--one">
                 * UI/UX DESIGNER
                </div>
              </InfiniteLooper>
            </Col>
          </Row>
          <Row className="bot-row">
            <Col className="bot">
              <Col className="bot-left">
                <div className="designed">
                  <IoIosColorPalette /> Designed by:{" "}
                  <a
                    href="http://yahyavision.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    id={isDarkMode ? "dark-mode" : "light-mode"}
                  >
                    Yahyavision
                  </a>
                </div>
                <div className="developed">
                  <FaCode /> Developed by:{" "}
                  <span>
                    Houssame
                  </span>
                </div>
              </Col>
              <Col className="bot-mid">
                <div className="social-media">
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
                </div>
              </Col>
              <Col className="bot-right">
                &copy; {currentYear} {authorName}
              </Col>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
}

export default Home;
