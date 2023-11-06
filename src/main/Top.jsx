import React, { useState } from "react";
import "./Top.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { VscChromeClose } from "react-icons/vsc";
import { TfiMenu } from "react-icons/tfi";
import { ImFolderOpen } from "react-icons/im";
import { FaPhoneVolume, FaUserTie } from "react-icons/fa6";
import {
  MdLightMode,
  MdDarkMode,
  MdOutlineMiscellaneousServices,
} from "react-icons/md";
import { useTheme } from "./ThemeContext";

function Top() {
  const { toggleDarkMode } = useTheme();
  const { isDarkMode } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const handleNavItemClick = () => {
    setExpanded(false);
  };
  const handleNavbarBrandClick = () => {
    handleNavItemClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Conditionally set the logo based on the dark or light mode
  const logo = isDarkMode
    ? require("./images/my-logo-white.png")
    : require("./images/my-logo-black.png");
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="navbar"
      expanded={expanded}
      sticky="top"
      id={isDarkMode ? "dark-mode" : "light-mode"}
    >
      <Container fluid>
        <Navbar.Brand>
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={handleNavbarBrandClick}
          />
        </Navbar.Brand>
        <div className="switch-mode-mobile">
          <label className="switch">
            <input type="checkbox" className="cb" onChange={toggleDarkMode} />
            <span className="toggle">
              <span className="left">
                <MdLightMode size={20} />
              </span>
              <span className="right">
                <MdDarkMode size={20} />
              </span>
            </span>
          </label>
        </div>
        {expanded ? (
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggler"
            onClick={() => setExpanded(!expanded)}
            id={isDarkMode ? "dark-mode" : "light-mode"}
          >
            <VscChromeClose />
          </Navbar.Toggle>
        ) : (
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="toggler"
            onClick={() => setExpanded(!expanded)}
            id={isDarkMode ? "dark-mode" : "light-mode"}
          >
            <TfiMenu />
          </Navbar.Toggle>
        )}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <a
              href="#about"
              onClick={handleNavItemClick}
              id={isDarkMode ? "dark-mode" : "light-mode"}
            >
              <FaUserTie /> About
            </a>
            <a
              href="#projects"
              onClick={handleNavItemClick}
              id={isDarkMode ? "dark-mode" : "light-mode"}
            >
              <ImFolderOpen /> Projects
            </a>
            <a
              href="#services"
              onClick={handleNavItemClick}
              id={isDarkMode ? "dark-mode" : "light-mode"}
            >
              <MdOutlineMiscellaneousServices /> Services
            </a>
            <a
              href="#contact"
              onClick={handleNavItemClick}
              id={isDarkMode ? "dark-mode" : "light-mode"}
            >
              <FaPhoneVolume /> Contact
            </a>
          </Nav>
          <div className="switch-mode-desktop">
            <label className="switch">
              <input type="checkbox" className="cb" onChange={toggleDarkMode} />
              <span className="toggle">
                <span className="left">
                  <MdLightMode size={20} />
                </span>
                <span className="right">
                  <MdDarkMode size={20} />
                </span>
              </span>
            </label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Top;
