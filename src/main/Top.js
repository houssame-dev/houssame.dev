import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaGithubSquare, FaLinkedin, FaFolderOpen } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { RiCloseCircleFill } from "react-icons/ri";
import { CgMenuRound } from "react-icons/cg";
import { PiCodeFill, PiPhoneCallFill } from "react-icons/pi";
import { ImUser } from "react-icons/im";
import h_logo from "./images/H.png";
import "./Top.css";
import { Outlet, Link } from "react-router-dom";

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
        id="navbar"
        sticky="top"
        expanded={expanded}
      >
        <Container>
          <Link to="/" onClick={handleNavItemClick}>
            <img src={h_logo} alt="h-logo" id="h-logo" />
          </Link>
          {expanded ? (
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              id="toggler"
              onClick={() => setExpanded(!expanded)}
            >
              <span>
                <RiCloseCircleFill />
              </span>
            </Navbar.Toggle>
          ) : (
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              id="toggler"
              onClick={() => setExpanded(!expanded)}
            >
              <span>
                <CgMenuRound />
              </span>
            </Navbar.Toggle>
          )}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto" id="nav-items">
              <Link to="/" className="link-item" onClick={handleNavItemClick}>
                <TiHome size={25} /> Home
              </Link>
              <Link
                to="/about"
                className="link-item"
                onClick={handleNavItemClick}
              >
                <ImUser size={25} /> About
              </Link>
              <Link
                to="/skills"
                className="link-item"
                onClick={handleNavItemClick}
              >
                <PiCodeFill size={25} /> Skills
              </Link>
              <Link
                to="/projects"
                className="link-item"
                onClick={handleNavItemClick}
              >
                <FaFolderOpen size={25} /> Projects
              </Link>
              <Link
                to="/contact"
                className="link-item"
                onClick={handleNavItemClick}
              >
                <PiPhoneCallFill size={25} /> Contact
              </Link>
            </Nav>
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
      <Outlet />
    </>
  );
}

export default Top;
