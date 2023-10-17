import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import my_logo from "./images/my-logo-black.png";
import "./Top.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function Top() {
  const [expanded, setExpanded] = useState(false);

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="navbar "
      fixed="top"
      expanded={expanded}
    >
      <Nav.Link href="#home" onClick={handleNavItemClick}>
        <img src={my_logo} alt="logo" className="logo-mobile" />
      </Nav.Link>
      {expanded ? (
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggler"
          onClick={() => setExpanded(!expanded)}
        >
          <span>
            <GrClose />
          </span>
        </Navbar.Toggle>
      ) : (
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="toggler"
          onClick={() => setExpanded(!expanded)}
        >
          <span>
            <GiHamburgerMenu />
          </span>
        </Navbar.Toggle>
      )}
      <Navbar.Collapse id="responsive-navbar-nav">
        <Container fluid>
          <Row>
            <Col lg={4} className="link-col">
              <hr />
              <Nav.Link
                href="#about"
                className="link"
                onClick={handleNavItemClick}
              >
                ABOUT
              </Nav.Link>
              <hr />
              <Nav.Link
                href="#work"
                className="link"
                onClick={handleNavItemClick}
              >
                WORK
              </Nav.Link>
              <hr />
            </Col>
            <Col lg={4} className="logo-col">
              <Nav.Link href="#home" onClick={handleNavItemClick}>
                <img src={my_logo} alt="logo" className="logo-desktop" />
              </Nav.Link>
            </Col>
            <Col lg={4} className="btn-col">
              <Button
                className="btn"
                href="#contact"
                onClick={handleNavItemClick}
              >
                Hit me up
              </Button>
            </Col>
          </Row>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Top;
