import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import h_logo from "./images/H.png";
import "./Top.css";

function Top() {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="navbar"
        fixed="top"
        expanded={expanded}
      >
        <Container>
          <Nav.Link href="/" onClick={handleNavItemClick}>
            <img src={h_logo} alt="h-logo" id="h-logo" />
          </Nav.Link>
          {expanded ? (
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              id="toggler"
              onClick={() => setExpanded(!expanded)}
            >
              <span>
                <GrClose />
              </span>
            </Navbar.Toggle>
          ) : (
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              id="toggler"
              onClick={() => setExpanded(!expanded)}
            >
              <span>
                <GiHamburgerMenu />
              </span>
            </Navbar.Toggle>
          )}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto" id="nav-items">
              <Nav.Link
                href="#home"
                className="link-item"
                onClick={handleNavItemClick}
              >
                Home
              </Nav.Link>
              <hr />
              <Nav.Link
                href="#about"
                className="link-item"
                onClick={handleNavItemClick}
              >
                About
              </Nav.Link>
              <hr />
              <Nav.Link
                href="skills"
                className="link-item"
                onClick={handleNavItemClick}
              >
                Skills
              </Nav.Link>
              <hr />
              <Nav.Link
                href="projects"
                className="link-item"
                onClick={handleNavItemClick}
              >
                Projects
              </Nav.Link>
              <hr />
              <Nav.Link
                href="contact"
                className="link-item"
                onClick={handleNavItemClick}
              >
                Contact
              </Nav.Link>
            </Nav>
            <hr />
            <div className="social-icons">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavItemClick}
              >
                <FaSquareXTwitter size={30} className="social-icon" />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavItemClick}
              >
                <FaLinkedin size={30} className="social-icon" />
              </a>
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavItemClick}
              >
                <FaGithubSquare size={30} className="social-icon" />
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Top;